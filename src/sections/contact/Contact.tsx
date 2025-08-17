import React, { useCallback, useEffect, useState } from "react";
import { PrimaryText } from "../../component/PrimaryText";
import { useTheme } from "../../context/ThemeContext";
import { FontSize, FontWeight, LightColors } from "../../global/GlobalStyle";
import "./Contact.css";
import { LETS_CONNECT_IMAGE } from "../../global/Constant";
import { sendContactEmail } from "../../service/emailService";

export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const INITIAL_FORM_DATA: ContactFormData = {
  email: "",
  subject: "",
  message: "",
  name: "",
};

type ContactProps = {
  ref: React.RefObject<HTMLDivElement | null>;
}

export const Contact = ({
  ref
}: ContactProps) => {
  
  const [formData, setFormData] =
    React.useState<ContactFormData>(INITIAL_FORM_DATA);
  const [loading, setLoading] = useState(false);
  const { themeColors } = useTheme();

  const clearFormData = () => {
    setFormData(INITIAL_FORM_DATA)
  }

  const handleSubmit = useCallback(async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    const result = await sendContactEmail(formData);
    if(result){
      clearFormData();
    }
    setLoading(false)
  },[formData])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="contact-container" ref={ref}>
      <PrimaryText
        text="Contact me"
        style={{ fontSize: FontSize.xxLarge, fontWeight: FontWeight.bold }}
      />
      <div className="contact-form-parent">
      <form onSubmit={handleSubmit} className="contact-form">
        <label className="contact-label">Name</label>
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="contact-email-input"
          style={{
            backgroundColor: LightColors.inputBackground,
            color: LightColors.secondaryText,
          }}
          value={formData.name}
          onChange={handleChange}
        />

        <label className="contact-label">Email</label>
        <input
          type="email"
          name="email"
          required
          placeholder="your.email@example.com"
          className="contact-email-input"
          style={{
            backgroundColor: LightColors.inputBackground,
            color: LightColors.secondaryText,
          }}
          value={formData.email}
          onChange={handleChange}
        />

        <label className="contact-label">Subject</label>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="contact-email-input"
          required
          style={{
            backgroundColor: LightColors.inputBackground,
            color: LightColors.secondaryText,
          }}
          value={formData.subject}
          onChange={handleChange}
        />

        <label className="contact-label">Message</label>
        <textarea
          value={formData.message}
          name="message"
          required
          rows={4}
          onChange={handleChange}
          className="contact-message-input"
          placeholder="Type your message here..."
          style={{
            backgroundColor: LightColors.inputBackground,
            color: LightColors.secondaryText,
          }}
        />

        <button type="submit" className="contact-submit-button" disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
      </div>
    </div>
  );
};
