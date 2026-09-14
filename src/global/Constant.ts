import { CardData } from "../component/card/Card";
import { ExperienceCardModel } from "../component/card/ExperienceCard";
import { InTimeTecIcon, MriIcon } from "./SvgIcons";

export const PORTFOLIO = "Portfolio";
export const DEEPANSHU_JAIN = "Deepanshu Jain";
export const MY_DESCRIPTION = `Building innovative solutions, experienced in frontend & mobile development.`;
export const CONTACT_ME_DESCRIPTION = `Contact me at deepanshujain848@gmail.com.`;

// External links
export const GITHUB_LINK = 'https://github.com/deepanshux';
export const LINKEDIN_LINK = 'https://www.linkedin.com/in/deepanshujainn/';
export const MEDIUM_LINK = 'https://medium.com/@deepanshujain_33606';
export const BAR_CHART_MEDIUM_LINK = 'https://medium.com/@deepanshujain_33606/creating-bar-graph-in-react-native-using-react-native-svg-88af2ad45b9e';
export const SIMPLIFYING_API_MEDIUM_LINK = 'https://medium.com/@deepanshujain_33606/simplifying-api-calls-with-the-facade-pattern-0dcb7e0058f1';
export const IN_APP_REVIEW_MEDIUM_LINK = 'https://medium.com/@deepanshujain_33606/in-app-review-in-react-native-android-ios-18f06b95ae58';
export const REACT_WITH_REDUX_MEDIUM_LINK = 'https://medium.com/@deepanshujain_33606/redux-is-dead-in-my-project-heres-what-i-use-instead-0d6d0fdb2b47';
export const PMX_APP_LINK = 'https://apps.apple.com/us/app/pmx-on-the-go/id6458534226';
export const CHECKPOINT_APP_LINK = 'https://apps.apple.com/in/app/checkpointid-from-mri-software/id1070015297';
export const KOUNT_SDK_LINK = 'https://github.com/Kount/kount-ios-sdk';

// Images
export const SIMPLIFYING_API_IMAGE = require('../assets/SimplifiedAPI.png');
export const IN_APP_REVIEW_IMAGE = require('../assets/InAppReview.png');
export const BAR_CHART_IMAGE = require('../assets/BarChart.png'); 
export const REACT_WITH_REDUX_IMAGE = require('../assets/ReactWithRedux.png'); 
export const KOUNT_SDK_IMAGE = require('../assets/KountSDK.png');
export const PMX_IMAGE = require('../assets/PMX.png');
export const CHECKPOINT_ID_IMAGE = require('../assets/CheckpointID.png');
export const MY_PROFILE_IMAGE = require('../assets/ProfilePic.jpeg');
export const JS_IMAGE = require('../assets/js.png');
export const HTML_IMAGE = require('../assets/html.png');
export const CSS_IMAGE = require('../assets/css.png');
export const REACT_IMAGE = require('../assets/atom.png');
export const SWIFT_IMAGE = require('../assets/swift.png');
export const TYPESCRIPT_IMAGE = require('../assets/typescript.png');
export const GITHUB_IMAGE = require('../assets/github.png');
export const GITHUB_DARK_IMAGE = require('../assets/github_dark.png');
export const FIREBASE_IMAGE = require('../assets/firebase.png');
export const POSTMAN_IMAGE = require('../assets/postman.png');
export const AZURE_DEVOPS_IMAGE = require('../assets/AzureDevops.png');
export const REACT_NATIVE_IMAGE = require('../assets/react_native.png');
export const LETS_CONNECT_IMAGE = require('../assets/LetsConnect.png');
export const EXPO_DARK_IMAGE = require('../assets/Expo_black.png');
export const EXPO_WHITE_IMAGE = require('../assets/Expo_white.png');
export const CONTACT_BACKGROUND_IMAGE = require('../assets/contact.png');

// Blogs constant
export const BLOG_LIST: CardData[] = [
    {
        title: 'Simplifying API Calls with the Facade Pattern',
        description: `In modern mobile apps, we often deal with authentication, session tokens, refresh tokens, and error handling — especially when working with secure APIs. While it's tempting to scatter token checks and refresh logic across every screen, doing so leads to messy, error-prone code
        \n Instead, let's simplify all of that using the Facade Design Pattern.`,
        imageUrl: SIMPLIFYING_API_IMAGE,
        link: SIMPLIFYING_API_MEDIUM_LINK
    },
    {
        title: 'Redux Is Dead in My Project — Here’s What I Use Instead',
        description: `When I first started this React project, Redux felt like the obvious choice for managing global state. It promised predictability, scalability, and a clear architecture for complex applications.`,
        imageUrl: REACT_WITH_REDUX_IMAGE,
        link: REACT_WITH_REDUX_MEDIUM_LINK
    },
    {
        title: 'In-App Review in React Native/Android/iOS',
        description: 'In-App Review is a feature that allows users to submit ratings and reviews for our mobile application. Users can share their feedback without being redirected to external app stores.',
        imageUrl: IN_APP_REVIEW_IMAGE,
        link: IN_APP_REVIEW_MEDIUM_LINK
    }
];

// Project constant
export const PROJECT_LIST: CardData[] = [
    {
        title: 'PMX OTG: MRI Property Management',
        description: `A real estate and financial software suite to manage properties by accessing critical resident, vendor and lease information.`,
        imageUrl: PMX_IMAGE,
        link: PMX_APP_LINK
    },
    {
        title: 'Engage Protect-ID Verification',
        description: 'Engage Protect ID focuses on real-time ID verification by integrating the Dive SDK to scan 2D/MRZ codes on government-issued IDs that makes identifying fraudulent applications so much easier, supporting both mobile and tablet platforms. ',
        imageUrl: CHECKPOINT_ID_IMAGE,
        link: CHECKPOINT_APP_LINK
    },
    {
        title: 'Kount iOS SDK',
        description: `Kount's SDK for iOS helps integrate Kount's fraud fighting solution into your iOS app. Enabled integration flexibility with 100% coverage using Static Library, XCFramework, SPM and CocoaPods`,
        imageUrl: KOUNT_SDK_IMAGE,
        link: KOUNT_SDK_LINK
    }
];

// Experience constant
export const EXPERIENCE_LIST: ExperienceCardModel[] = [
    {
        title: 'Software Engineer II',
        company: 'MRI Software',
        duration: 'Sep 2023 - Present',
        description: [
            `Led the development of an AI-powered conversational platform, from architecture and frontend implementation,
enabling unified search delivering a single point of access to information and insights across 300+ enterprise products.`,
            `Architected an offline-first data layer that enabled 100% of user workflows to continue during network outages through
local persistence and automatic synchronization, ensuring uninterrupted field operations.`,
            `Engineered server sent events (SSE) based AI response streaming rendering output in 300ms chunks, eliminating UI
blocking and delivering a smooth real-time chat experience within an enterprise product.`,
            `Implemented JWT-based authentication and role-based access control (RBAC) combined with OKTA-based OAuth
across 15+ configurable environments, securing user access across multiple roles and 3 global regions.`
        ],
        icon: MriIcon()
    },
    {
        title: 'Software Engineer',
        company: 'In Time Tec',
        duration: 'Feb 2022 - Sep 2023',
        description: [
            'Migrated from REST to GraphQL using Apollo Client, eliminating over-fetching and reducing payload size by 60%.',
            'Configured user authentication and push notification workflows using Firebase and OneSignal.',
            'Build and maintained reusable component libraries, accelerating feature development and ensuring consistency.'
        ],
        icon: InTimeTecIcon()
    },
]

// SKills constant
export const SKILL_LIST: CardData[] = [
    {
        title: 'React',
        imageUrl: REACT_IMAGE,
    },
    {
        title: 'React Native',
        imageUrl: REACT_NATIVE_IMAGE,
    },
    {
        title: 'JavaScript',
        imageUrl: JS_IMAGE,
    },
    {
        title: 'TypeScript',
        imageUrl: TYPESCRIPT_IMAGE,
    },
    {
        title: 'Firebase',
        imageUrl: FIREBASE_IMAGE,
    },
    {
        title: 'Postman',
        imageUrl: POSTMAN_IMAGE,
    },
    {
        title: 'Azure DevOps',
        imageUrl: AZURE_DEVOPS_IMAGE,
    },
];

// EmailJS constants
export const EMAIL_JS_PUBLIC_KEY = 'Y5HI3K3jMzycEW9y4';
export const EMAIL_JS_SERVICE_ID = 'service_8dplcu9';
export const EMAIL_JS_TEMPLATE_ID = 'template_vzdh6oi';
