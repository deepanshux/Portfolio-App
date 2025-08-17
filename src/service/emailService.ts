import emailjs from '@emailjs/browser';
import { EMAIL_JS_PUBLIC_KEY, EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID } from '../global/Constant';
import { ContactFormData } from '../sections/contact/Contact';

// Rate limiting configuration
const RATE_LIMIT_CONFIG = {
  maxAttempts: 3,
  timeWindow: 5 * 60 * 1000, // 5 minutes
  cooldownPeriod: 15 * 60 * 1000 // 15 minutes
};

// EmailJS configuration with validation
const EMAILJS_CONFIG = {
  serviceId: EMAIL_JS_SERVICE_ID,
  templateId: EMAIL_JS_TEMPLATE_ID,
  publicKey: EMAIL_JS_PUBLIC_KEY
};

// Simple rate limiter for client-side
class RateLimiter {
  private attempts: { timestamp: number }[] = [];
  private lastAttempt: number = 0;

  canMakeRequest(): boolean {
    const now = Date.now();
    
    // Remove old attempts outside the time window
    this.attempts = this.attempts.filter(
      attempt => now - attempt.timestamp < RATE_LIMIT_CONFIG.timeWindow
    );
    
    // Check if in cooldown period
    if (now - this.lastAttempt < RATE_LIMIT_CONFIG.cooldownPeriod && 
        this.attempts.length >= RATE_LIMIT_CONFIG.maxAttempts) {
      return false;
    }
    
    // Check rate limit
    if (this.attempts.length >= RATE_LIMIT_CONFIG.maxAttempts) {
      return false;
    }
    
    return true;
  }
  
  recordAttempt(): void {
    const now = Date.now();
    this.attempts.push({ timestamp: now });
    this.lastAttempt = now;
  }
  
  getRemainingCooldown(): number {
    const now = Date.now();
    const cooldownEnd = this.lastAttempt + RATE_LIMIT_CONFIG.cooldownPeriod;
    return Math.max(0, cooldownEnd - now);
  }
}

class EmailService {
  private rateLimiter: RateLimiter;

  constructor() {
    this.rateLimiter = new RateLimiter();
    this.initialize();
  }

  private initialize(): void {
    try {
      emailjs.init(EMAILJS_CONFIG.publicKey);
    } catch (error) {
      console.error('Failed to initialize EmailJS:', error);
    }
  }

  private sanitizeInput(input: string): string {
    return input
      .trim()
      .replace(/[<>]/g, '') // Remove potential HTML tags
      .substring(0, 1000); // Limit length
  }

  // private validateEmail(email: string): boolean {
  //   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //   return emailRegex.test(email) && email.length <= 254;
  // }

  private validateDomain(): boolean {
    // In production, validate that requests come from your domain
    if (typeof window !== 'undefined') {
      const allowedDomains = [
        'localhost',
        'keshavkatad.com',
        'www.keshavkatad.com',
        process.env.NEXT_PUBLIC_SITE_URL?.replace(/https?:\/\//, '')
      ].filter(Boolean);
      
      return allowedDomains.some(domain => 
        window.location.hostname.includes(domain!)
      );
    }
    return true; // Allow during SSR
  }

  async sendContactEmail(formData: ContactFormData): Promise<boolean> {
    const templateParams = {
      // Clean sender information
      from_name: this.sanitizeInput(formData.name),
      from_email: this.sanitizeInput(formData.email).toLocaleLowerCase(),
      
      // Message content
      subject: this.sanitizeInput(formData.subject),
      message: this.sanitizeInput(formData.message),
      
      // Recipient information
      to_email: 'deepanshujain848@gmail.com',
      
      // Professional timestamp formatting
      sent_date: new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }) + ' at ' + new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
      }),
      
      // Additional metadata for sophisticated template
      timestamp: new Date().toISOString(),
      website_name: 'Deepanshu Jain Portfolio'
    };

    try {
      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams
      );
      if (response.status !== 200) {
        console.error(`EmailJS request failed with status ${response.status}: ${response.text}`);
        return false;
      }
      alert('✅ Email sent successfully!');
      console.log('Email sent successfully:', response);
      return true
    } catch (error: any) {
      console.error('❌ Failed to send email:', error.message || error);
      alert('❌ Failed to send email')
      return false
    }
  }
}

// Create singleton instance
const emailService = new EmailService();

// Utility functions
export const sendContactEmail = (formData: ContactFormData) => 
  emailService.sendContactEmail(formData);
