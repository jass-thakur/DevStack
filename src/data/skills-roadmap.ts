export interface StepFlowTool {
  name: string;
  color: string;
  url?: string;
  note?: string;
}

export interface StepFlowOption {
  label: string;
  recommendation: string;
  color: string;
}

export interface StepFlow {
  step: number;
  icon: string;
  title: string;
  tag: string;
  tagColor: string;
  why: string;
  whatYouNeed: string[];
  options?: StepFlowOption[];
  tools: StepFlowTool[];
  timeNeeded: string;
  tip: string;
}

export interface SkillsDomain {
  id: string;
  domain: string;
  icon: string;
  description: string;
  totalTools: number;
  totalSkills: number;
  estimatedTime: string;
  accentColor: string;
  difficultyBadge: string;
  steps: StepFlow[];
}

export const skillsRoadmapsData: Record<string, SkillsDomain> = {
  "app-development": {
    id: "app-development",
    domain: "App Development",
    icon: "📱",
    description: "Everything you need to know — from basics to production",
    totalTools: 35,
    totalSkills: 28,
    estimatedTime: "6-8 months",
    accentColor: "#3B82F6",
    difficultyBadge: "Beginner to Advanced",
    steps: [
      {
        step: 1,
        icon: "🧠",
        title: "Programming Logic & OOP Concepts",
        tag: "Foundation",
        tagColor: "#06B6D4",
        why: "Every single feature in an app — buttons, lists, timers, login — is built using these fundamental concepts. Without this, nothing else will make sense.",
        whatYouNeed: [
          "Variables & Data Types (numbers, text, true/false)",
          "Conditions — if this then that (if/else)",
          "Loops — repeat actions (for, while)",
          "Functions — reusable blocks of code",
          "Object Oriented Programming — Classes & Objects",
          "Basic problem solving & logical thinking"
        ],
        tools: [
          { name: "Dart", color: "#0175C2", url: "https://dart.dev", note: "Best for Flutter apps" },
          { name: "JavaScript", color: "#F7DF1E", url: "https://javascript.info", note: "Best for React Native" },
          { name: "Kotlin", color: "#7F52FF", url: "https://kotlinlang.org", note: "Native Android" },
          { name: "Swift", color: "#FA7343", url: "https://swift.org", note: "Native iOS" }
        ],
        timeNeeded: "2-3 weeks",
        tip: "💡 You don't need to master all of this before moving on. Learn enough to understand the basics, then keep improving as you build."
      },
      {
        step: 2,
        icon: "📱",
        title: "Platform Selection",
        tag: "Decision",
        tagColor: "#8B5CF6",
        why: "You need to decide WHAT you are building for before you pick your tools. iOS only? Android only? Both? This decision changes everything — your language, framework, and tools.",
        whatYouNeed: [
          "Understand the difference between iOS and Android",
          "Know what Cross-Platform means (one code, two platforms)",
          "Understand Native vs Cross-Platform trade-offs",
          "Decide your target audience (iPhone users or Android users or both?)",
          "Know your budget (Mac required for iOS development)"
        ],
        options: [
          { label: "Both iOS & Android", recommendation: "Flutter or React Native", color: "#10B981" },
          { label: "Android Only", recommendation: "Kotlin (Native) or Flutter", color: "#3DDC84" },
          { label: "iOS Only", recommendation: "Swift (Native) or Flutter", color: "#1575F9" }
        ],
        tools: [
          { name: "Flutter", color: "#54C5F8", url: "https://flutter.dev", note: "Best cross-platform choice" },
          { name: "React Native", color: "#61DAFB", url: "https://reactnative.dev", note: "JS-based cross-platform" },
          { name: "Swift", color: "#FA7343", url: "https://swift.org", note: "Native iOS" },
          { name: "Kotlin", color: "#7F52FF", url: "https://kotlinlang.org", note: "Native Android" }
        ],
        timeNeeded: "2-3 days (research & decide)",
        tip: "💡 For beginners building their first app, Flutter is the most recommended — one codebase, works on both platforms, and has great learning resources."
      },
      {
        step: 3,
        icon: "⚙️",
        title: "Development Environment Setup",
        tag: "Setup",
        tagColor: "#F59E0B",
        why: "Before writing a single line of app code, you need to set up your computer with the right tools. Think of this as setting up your workshop before building furniture.",
        whatYouNeed: [
          "A code editor to write your code",
          "The framework SDK installed on your computer",
          "An emulator or simulator to test your app without a real phone",
          "Git for saving and tracking your code",
          "A GitHub account for storing your code online"
        ],
        tools: [
          { name: "VS Code", color: "#007ACC", url: "https://code.visualstudio.com", note: "Code editor" },
          { name: "Android Studio", color: "#3DDC84", url: "https://developer.android.com/studio", note: "Android emulator + IDE" },
          { name: "Xcode", color: "#1575F9", url: "https://developer.apple.com/xcode", note: "iOS simulator (Mac only)" },
          { name: "Flutter SDK", color: "#54C5F8", url: "https://flutter.dev/docs/get-started/install", note: "Framework installation" },
          { name: "Git", color: "#F05032", url: "https://git-scm.com", note: "Version control" },
          { name: "GitHub", color: "#ffffff", url: "https://github.com", note: "Code storage" }
        ],
        timeNeeded: "1-2 days",
        tip: "💡 Setup is often the most frustrating part for beginners. Take your time and follow the official installation guide step by step."
      },
      {
        step: 4,
        icon: "🎨",
        title: "UI Design & Screen Building",
        tag: "Building",
        tagColor: "#EC4899",
        why: "Now you start building what users actually see. Every screen — home page, login page, profile page — is built here using layout components.",
        whatYouNeed: [
          "Understanding of layouts (rows, columns, stacks)",
          "How to add text, images, buttons, and icons",
          "Navigation — moving between screens",
          "Handling user input (typing, tapping, swiping)",
          "Making the app look good on different screen sizes",
          "Basic design principles (spacing, color, typography)"
        ],
        tools: [
          { name: "Flutter Widgets", color: "#54C5F8", url: "https://flutter.dev/docs/development/ui/widgets", note: "UI building blocks" },
          { name: "Figma", color: "#F24E1E", url: "https://figma.com", note: "Design your screens first" },
          { name: "Google Fonts", color: "#4285F4", url: "https://fonts.google.com", note: "Beautiful typography" },
          { name: "Lucide Icons", color: "#F97316", url: "https://lucide.dev", note: "Clean icon library" },
          { name: "FlutterFlow", color: "#6C47FF", note: "Visual app builder (no-code)" }
        ],
        timeNeeded: "3-4 weeks",
        tip: "💡 Before coding any screen, sketch it on paper or design it in Figma first. It saves a lot of time and rework."
      },
      {
        step: 5,
        icon: "⚡",
        title: "State Management",
        tag: "Logic",
        tagColor: "#6366F1",
        why: "When a user taps a button, something changes — a counter goes up, a page switches, a form submits. 'State' is the current condition of your app, and you need a system to manage it cleanly.",
        whatYouNeed: [
          "What is 'state' in an app",
          "Local state (only one screen needs to know)",
          "Global state (multiple screens share the same data)",
          "How to update UI when data changes",
          "Async state — loading, success, error"
        ],
        tools: [
          { name: "Riverpod", color: "#00BCD4", url: "https://riverpod.dev", note: "Recommended for Flutter" },
          { name: "Provider", color: "#8B5CF6", url: "https://pub.dev/packages/provider", note: "Simple Flutter state" },
          { name: "Bloc", color: "#0175C2", url: "https://bloclibrary.dev", note: "Advanced Flutter state" },
          { name: "Redux", color: "#764ABC", url: "https://redux.js.org", note: "For React Native" },
          { name: "Zustand", color: "#F97316", url: "https://zustand-demo.pmnd.rs", note: "Simple React Native state" }
        ],
        timeNeeded: "2-3 weeks",
        tip: "💡 Start with the simplest state management (setState in Flutter or useState in React Native). Only move to advanced solutions when you actually need them."
      },
      {
        step: 6,
        icon: "🌐",
        title: "Connecting to the Internet (APIs)",
        tag: "Data",
        tagColor: "#10B981",
        why: "Almost every real app needs data from the internet — showing news, user profiles, product lists, weather. APIs are how your app talks to the internet.",
        whatYouNeed: [
          "What is an API and how it works",
          "HTTP methods — GET (fetch data), POST (send data)",
          "JSON format — how data is structured",
          "Making network requests from your app",
          "Showing loading spinners while data loads",
          "Handling errors when internet fails"
        ],
        tools: [
          { name: "Dio", color: "#0175C2", url: "https://pub.dev/packages/dio", note: "HTTP client for Flutter" },
          { name: "http package", color: "#54C5F8", url: "https://pub.dev/packages/http", note: "Simple Flutter HTTP" },
          { name: "Axios", color: "#5A29E4", url: "https://axios-http.com", note: "HTTP for React Native" },
          { name: "Postman", color: "#FF6C37", url: "https://postman.com", note: "Test APIs before coding" },
          { name: "JSONPlaceholder", color: "#10B981", url: "https://jsonplaceholder.typicode.com", note: "Free practice API" }
        ],
        timeNeeded: "2-3 weeks",
        tip: "💡 Use Postman to test any API before writing code. See exactly what data comes back so you know how to display it."
      },
      {
        step: 7,
        icon: "🔐",
        title: "User Authentication",
        tag: "Users",
        tagColor: "#F97316",
        why: "If your app has user accounts — login, signup, profiles — you need authentication. This is how your app knows WHO is using it.",
        whatYouNeed: [
          "Email & password login system",
          "Social login (Google, Apple, Facebook)",
          "Storing login session securely",
          "Protecting screens that require login",
          "Password reset flow",
          "User profile management"
        ],
        tools: [
          { name: "Firebase Auth", color: "#FFCA28", url: "https://firebase.google.com/products/auth", note: "Easiest auth solution" },
          { name: "Supabase Auth", color: "#3ECF8E", url: "https://supabase.com/auth", note: "Open source alternative" },
          { name: "Google Sign-In", color: "#4285F4", url: "https://pub.dev/packages/google_sign_in", note: "Social login" }
        ],
        timeNeeded: "1-2 weeks",
        tip: "💡 Always use an established auth provider like Firebase. Never try to build your own authentication system from scratch — it is a security risk."
      },
      {
        step: 8,
        icon: "🗄️",
        title: "Database & Data Storage",
        tag: "Data",
        tagColor: "#14B8A6",
        why: "Your app needs to remember things — user data, messages, settings, orders. Databases store this information permanently so it's still there when the user closes and reopens the app.",
        whatYouNeed: [
          "Difference between local storage and cloud database",
          "When to store data on device vs in the cloud",
          "Reading and writing data from your app",
          "Real-time updates (data changes instantly for all users)",
          "Data security rules (who can see what data)"
        ],
        tools: [
          { name: "Firebase Firestore", color: "#FFCA28", url: "https://firebase.google.com/products/firestore", note: "Real-time cloud database" },
          { name: "Supabase", color: "#3ECF8E", url: "https://supabase.com", note: "PostgreSQL cloud database" },
          { name: "SQLite", color: "#003B57", url: "https://sqlite.org", note: "Local on-device database" }
        ],
        timeNeeded: "2-3 weeks",
        tip: "💡 For your first app, use Firebase Firestore. It handles everything for you."
      },
      {
        step: 9,
        icon: "🚀",
        title: "Publishing to App Stores",
        tag: "Launch",
        tagColor: "#F97316",
        why: "This is the final step — getting your app in the hands of real users by publishing it to the Google Play Store and Apple App Store.",
        whatYouNeed: [
          "App icons and splash screen",
          "App name, description and screenshots",
          "Google Play Developer account ($25 one-time)",
          "Apple Developer account ($99/year)",
          "App signing certificates",
          "Understanding app review process (Apple takes 1-3 days)"
        ],
        tools: [
          { name: "Google Play Console", color: "#3DDC84", url: "https://play.google.com/console", note: "Publish Android app" },
          { name: "App Store Connect", color: "#1575F9", url: "https://appstoreconnect.apple.com", note: "Publish iOS app" }
        ],
        timeNeeded: "1 week",
        tip: "💡 Publish to Google Play first — the review process is faster (a few hours vs Apple's 1-3 days)."
      }
    ]
  },
  "web-frontend": {
    id: "web-frontend",
    domain: "Frontend Web Development",
    icon: "🌐",
    description: "Build beautiful layouts and dynamic web experiences",
    totalTools: 34,
    totalSkills: 52,
    estimatedTime: "5-7 months",
    accentColor: "#F59E0B",
    difficultyBadge: "Beginner Friendly",
    steps: [
      {
        step: 1,
        icon: "🧠",
        title: "Programming Logic & Web Basics",
        tag: "Foundation",
        tagColor: "#06B6D4",
        why: "The web is built on three core technologies. Before any framework or tool, you must understand how browsers work and how websites are structured.",
        whatYouNeed: [
          "How the internet works (HTTP, browsers, servers)",
          "What HTML, CSS and JavaScript do",
          "Variables, conditions, loops, functions",
          "How a webpage is loaded and rendered",
          "Basic problem solving & logical thinking"
        ],
        tools: [
          { name: "VS Code", color: "#007ACC", url: "https://code.visualstudio.com", note: "Code editor" },
          { name: "Chrome DevTools", color: "#4285F4", url: "https://developer.chrome.com/docs/devtools", note: "Browser inspector" },
          { name: "Git", color: "#F05032", url: "https://git-scm.com", note: "Version control" },
          { name: "GitHub", color: "#ffffff", url: "https://github.com", note: "Code storage" }
        ],
        timeNeeded: "2-3 weeks",
        tip: "💡 Open Chrome DevTools on any website and inspect the HTML. This is how you learn fastest."
      },
      {
        step: 2,
        icon: "🏗️",
        title: "HTML — Structure of Web Pages",
        tag: "Foundation",
        tagColor: "#E34F26",
        why: "HTML is the skeleton of every webpage. Every button, heading, image, and form starts as HTML.",
        whatYouNeed: [
          "HTML tags (headings, paragraphs, links, images)",
          "Forms and input elements",
          "Semantic HTML (header, nav, main, footer)",
          "HTML attributes and IDs",
          "Accessibility basics (alt text, labels)"
        ],
        tools: [
          { name: "HTML5", color: "#E34F26", url: "https://developer.mozilla.org/en-US/docs/Web/HTML", note: "Core language" },
          { name: "MDN Web Docs", color: "#000000", url: "https://developer.mozilla.org", note: "Best reference" },
          { name: "CodePen", color: "#000000", url: "https://codepen.io", note: "Practice in browser" }
        ],
        timeNeeded: "1-2 weeks",
        tip: "💡 Build a personal profile page in HTML only. No styling yet — just structure."
      },
      {
        step: 3,
        icon: "🎨",
        title: "CSS — Styling & Layouts",
        tag: "Foundation",
        tagColor: "#1572B6",
        why: "CSS makes your HTML look good. Colors, fonts, spacing, layouts — all controlled by CSS.",
        whatYouNeed: [
          "Selectors, properties and values",
          "Box model (margin, padding, border)",
          "Flexbox layout system",
          "CSS Grid layout system",
          "Responsive design & media queries",
          "CSS variables and custom properties",
          "Animations and transitions"
        ],
        tools: [
          { name: "CSS3", color: "#1572B6", url: "https://developer.mozilla.org/en-US/docs/Web/CSS", note: "Core language" },
          { name: "Flexbox Froggy", color: "#10B981", url: "https://flexboxfroggy.com", note: "Learn Flexbox by game" },
          { name: "CSS Grid Garden", color: "#F59E0B", url: "https://cssgridgarden.com", note: "Learn Grid by game" },
          { name: "CodePen", color: "#000000", url: "https://codepen.io", note: "Practice styling" }
        ],
        timeNeeded: "2-3 weeks",
        tip: "💡 Master Flexbox before anything else. 80% of layouts use Flexbox."
      },
      {
        step: 4,
        icon: "⚡",
        title: "JavaScript — Making Pages Interactive",
        tag: "Core Skill",
        tagColor: "#F7DF1E",
        why: "JavaScript brings your pages to life. Clicking buttons, showing/hiding content, form validation, animations — all JavaScript.",
        whatYouNeed: [
          "DOM manipulation (selecting and changing HTML)",
          "Events (click, submit, keypress)",
          "Arrays and Objects",
          "Async JavaScript (fetch, promises, async/await)",
          "ES6+ modern syntax (arrow functions, destructuring)",
          "Local storage",
          "Error handling"
        ],
        tools: [
          { name: "JavaScript", color: "#F7DF1E", url: "https://javascript.info", note: "Best JS learning resource" },
          { name: "Chrome DevTools", color: "#4285F4", url: "https://developer.chrome.com/docs/devtools", note: "Debug JS" },
          { name: "JSONPlaceholder", color: "#10B981", url: "https://jsonplaceholder.typicode.com", note: "Free practice API" }
        ],
        timeNeeded: "4-6 weeks",
        tip: "💡 JavaScript is the hardest part of this roadmap. Spend extra time here — everything after depends on it."
      },
      {
        step: 5,
        icon: "⚛️",
        title: "Frontend Framework",
        tag: "Framework",
        tagColor: "#61DAFB",
        why: "Modern websites use frameworks to build complex UIs faster with reusable components. React is the most in-demand skill in the job market.",
        whatYouNeed: [
          "What is a component and why it matters",
          "Props — passing data between components",
          "State — data that changes over time",
          "useEffect — running code at the right time",
          "Conditional rendering",
          "Lists and keys",
          "React Router for multiple pages"
        ],
        tools: [
          { name: "React", color: "#61DAFB", url: "https://react.dev", note: "Most popular framework" },
          { name: "Vue.js", color: "#42B883", url: "https://vuejs.org", note: "Easier alternative" },
          { name: "Svelte", color: "#FF3E00", url: "https://svelte.dev", note: "Fastest performance" },
          { name: "Vite", color: "#646CFF", url: "https://vitejs.dev", note: "Fast dev server" }
        ],
        timeNeeded: "4-5 weeks",
        tip: "💡 Pick ONE framework and stick with it. React has the most jobs. Vue is easier to learn."
      },
      {
        step: 6,
        icon: "💅",
        title: "Styling Framework",
        tag: "Styling",
        tagColor: "#06B6D4",
        why: "Writing raw CSS for every project is slow. Styling frameworks give you pre-built classes and components that make UIs look professional fast.",
        whatYouNeed: [
          "Utility-first CSS concepts",
          "Responsive design with utility classes",
          "Dark mode implementation",
          "Component libraries and when to use them",
          "Design tokens and theme systems"
        ],
        tools: [
          { name: "Tailwind CSS", color: "#06B6D4", url: "https://tailwindcss.com", note: "Most popular utility CSS" },
          { name: "shadcn/ui", color: "#000000", url: "https://ui.shadcn.com", note: "Best component library" },
          { name: "Framer Motion", color: "#FF0055", url: "https://framer.com/motion", note: "Animations" },
          { name: "MUI", color: "#007FFF", url: "https://mui.com", note: "Material Design components" }
        ],
        timeNeeded: "1-2 weeks",
        tip: "💡 Learn Tailwind CSS. It is the fastest way to build good-looking UIs once you know it."
      },
      {
        step: 7,
        icon: "🌐",
        title: "Fetching Data & APIs",
        tag: "Data",
        tagColor: "#10B981",
        why: "Real websites show real data — weather, products, user profiles. This data comes from APIs on the internet.",
        whatYouNeed: [
          "What is a REST API",
          "Fetch API and Axios",
          "Displaying API data in your UI",
          "Loading and error states",
          "React Query for data management",
          "Environment variables for API keys"
        ],
        tools: [
          { name: "Axios", color: "#5A29E4", url: "https://axios-http.com", note: "HTTP requests" },
          { name: "React Query", color: "#FF4154", url: "https://tanstack.com/query", note: "Server state management" },
          { name: "Postman", color: "#FF6C37", url: "https://postman.com", note: "Test APIs" },
          { name: "SWR", color: "#000000", url: "https://swr.vercel.app", note: "Data fetching hooks" }
        ],
        timeNeeded: "2 weeks",
        tip: "💡 Build a weather app or movie search app using a free API. Best way to practice this skill."
      },
      {
        step: 8,
        icon: "⚡",
        title: "Performance & SEO",
        tag: "Optimization",
        tagColor: "#F59E0B",
        why: "A beautiful website that loads slowly will lose users. Performance and SEO determine how fast your site loads and whether Google can find it.",
        whatYouNeed: [
          "Lighthouse performance scoring",
          "Image optimization techniques",
          "Code splitting and lazy loading",
          "Core Web Vitals (LCP, FID, CLS)",
          "Meta tags and Open Graph",
          "Server Side Rendering vs Static Generation"
        ],
        tools: [
          { name: "Next.js", color: "#000000", url: "https://nextjs.org", note: "SSR & SSG framework" },
          { name: "Lighthouse", color: "#4285F4", url: "https://developer.chrome.com/docs/lighthouse", note: "Performance audit" },
          { name: "Vercel", color: "#000000", url: "https://vercel.com", note: "Optimized hosting" },
          { name: "Cloudinary", color: "#3448C5", url: "https://cloudinary.com", note: "Image optimization" }
        ],
        timeNeeded: "2 weeks",
        tip: "💡 Run Lighthouse on any website you build. Aim for 90+ score on all metrics."
      },
      {
        step: 9,
        icon: "🧪",
        title: "Testing",
        tag: "Quality",
        tagColor: "#A78BFA",
        why: "Before deploying to real users, automated tests catch bugs that manual testing misses — especially when you update code later.",
        whatYouNeed: [
          "Unit testing — testing individual functions",
          "Component testing — testing UI components",
          "End-to-end testing — testing full user flows",
          "Testing best practices",
          "Test coverage"
        ],
        tools: [
          { name: "Vitest", color: "#646CFF", url: "https://vitest.dev", note: "Fast unit testing" },
          { name: "React Testing Library", color: "#E33332", url: "https://testing-library.com", note: "Component testing" },
          { name: "Playwright", color: "#2EAD33", url: "https://playwright.dev", note: "End-to-end testing" },
          { name: "Cypress", color: "#04C38E", url: "https://cypress.io", note: "E2E testing alternative" }
        ],
        timeNeeded: "1-2 weeks",
        tip: "💡 Start with just unit tests for your utility functions. Don't try to test everything at once."
      },
      {
        step: 10,
        icon: "🚀",
        title: "Deployment",
        tag: "Launch",
        tagColor: "#F97316",
        why: "Your website needs to be on the internet for people to see it. Deployment puts your code on a server accessible worldwide.",
        whatYouNeed: [
          "What happens when you deploy",
          "Domain names and DNS",
          "CI/CD — automatic deployment on code push",
          "Environment variables in production",
          "HTTPS and SSL certificates",
          "Monitoring and error tracking"
        ],
        tools: [
          { name: "Vercel", color: "#000000", url: "https://vercel.com", note: "Best for React/Next.js" },
          { name: "Netlify", color: "#00C7B7", url: "https://netlify.com", note: "Great for static sites" },
          { name: "GitHub Actions", color: "#2088FF", url: "https://github.com/features/actions", note: "CI/CD pipeline" },
          { name: "Sentry", color: "#362D59", url: "https://sentry.io", note: "Error monitoring" }
        ],
        timeNeeded: "3-5 days",
        tip: "💡 Vercel is completely free for personal projects and deploys in 30 seconds. Start there."
      }
    ]
  },
  "backend-development": {
    id: "backend-development",
    domain: "Backend Development",
    icon: "⚙️",
    description: "Master servers, APIs, databases and microservices",
    totalTools: 44,
    totalSkills: 65,
    estimatedTime: "6-8 months",
    accentColor: "#10B981",
    difficultyBadge: "Intermediate",
    steps: [
      {
        step: 1,
        icon: "🧠",
        title: "Programming & OOP Fundamentals",
        tag: "Foundation",
        tagColor: "#06B6D4",
        why: "Backend is pure logic — no visual output. Strong programming fundamentals are even more critical here than in frontend.",
        whatYouNeed: [
          "Variables, data types, conditions, loops",
          "Functions and scope",
          "Object Oriented Programming (classes, inheritance, interfaces)",
          "Error handling and exceptions",
          "Data structures (arrays, objects, maps)",
          "Algorithms and time complexity basics"
        ],
        tools: [
          { name: "Node.js", color: "#68A063", url: "https://nodejs.org", note: "JavaScript backend" },
          { name: "Python", color: "#3776AB", url: "https://python.org", note: "Easiest to learn" },
          { name: "Go", color: "#00ADD8", url: "https://go.dev", note: "High performance" },
          { name: "VS Code", color: "#007ACC", url: "https://code.visualstudio.com", note: "Code editor" }
        ],
        timeNeeded: "3-4 weeks",
        tip: "💡 Python is the easiest language to learn backend with. Node.js is best if you already know JavaScript."
      },
      {
        step: 2,
        icon: "🌐",
        title: "How the Internet Works",
        tag: "Foundation",
        tagColor: "#8B5CF6",
        why: "Backend developers build the engine of the internet. You must deeply understand how data travels between browsers and servers.",
        whatYouNeed: [
          "HTTP and HTTPS protocols",
          "Request and Response cycle",
          "HTTP methods (GET, POST, PUT, DELETE)",
          "Status codes (200, 404, 500)",
          "Headers, cookies, and sessions",
          "REST API concepts",
          "JSON data format"
        ],
        tools: [
          { name: "Postman", color: "#FF6C37", url: "https://postman.com", note: "Test HTTP requests" },
          { name: "Insomnia", color: "#4000BF", url: "https://insomnia.rest", note: "API testing alternative" },
          { name: "curl", color: "#073551", url: "https://curl.se", note: "Command line HTTP" }
        ],
        timeNeeded: "1-2 weeks",
        tip: "💡 Use Postman to send requests to any public API. Watch exactly what data comes back and how."
      },
      {
        step: 3,
        icon: "🛠️",
        title: "Backend Framework",
        tag: "Framework",
        tagColor: "#10B981",
        why: "A framework gives you the structure to build APIs and web servers without reinventing the wheel every time.",
        whatYouNeed: [
          "Setting up a web server",
          "Routing — handling different URL paths",
          "Middleware — processing requests",
          "Request validation",
          "Response formatting",
          "Error handling middleware"
        ],
        tools: [
          { name: "Express.js", color: "#000000", url: "https://expressjs.com", note: "Most popular Node.js framework" },
          { name: "FastAPI", color: "#009688", url: "https://fastapi.tiangolo.com", note: "Best Python framework" },
          { name: "Django", color: "#092E20", url: "https://djangoproject.com", note: "Batteries-included Python" },
          { name: "NestJS", color: "#E0234E", url: "https://nestjs.com", note: "Enterprise Node.js" },
          { name: "Hono", color: "#E36002", url: "https://hono.dev", note: "Ultrafast modern framework" }
        ],
        timeNeeded: "3-4 weeks",
        tip: "💡 Start with Express.js (Node) or FastAPI (Python). Both are simple enough for beginners but powerful enough for production."
      },
      {
        step: 4,
        icon: "🗄️",
        title: "Databases",
        tag: "Data",
        tagColor: "#F59E0B",
        why: "Every backend needs to store data. Users, orders, messages — all stored in databases. You need to know how to read and write data efficiently.",
        whatYouNeed: [
          "Relational vs Non-relational databases",
          "SQL basics (SELECT, INSERT, UPDATE, DELETE)",
          "Database design and relationships",
          "Indexes and query optimization",
          "Connecting a database to your backend",
          "ORM — Object Relational Mapper"
        ],
        tools: [
          { name: "PostgreSQL", color: "#336791", url: "https://postgresql.org", note: "Best relational database" },
          { name: "MongoDB", color: "#47A248", url: "https://mongodb.com", note: "Most popular NoSQL" },
          { name: "MySQL", color: "#4479A1", url: "https://mysql.com", note: "Classic relational DB" },
          { name: "Prisma", color: "#2D3748", url: "https://prisma.io", note: "Best Node.js ORM" },
          { name: "SQLAlchemy", color: "#D71F00", url: "https://sqlalchemy.org", note: "Python ORM" },
          { name: "TablePlus", color: "#F6A623", url: "https://tableplus.com", note: "Database GUI" }
        ],
        timeNeeded: "3-4 weeks",
        tip: "💡 Learn PostgreSQL and SQL first. This knowledge transfers to every database forever."
      },
      {
        step: 5,
        icon: "🔐",
        title: "Authentication & Security",
        tag: "Security",
        tagColor: "#EC4899",
        why: "Backend security protects your users' data. A single security mistake can expose millions of passwords or allow hackers to destroy your database.",
        whatYouNeed: [
          "Password hashing (never store plain passwords)",
          "JWT — JSON Web Tokens",
          "Session-based authentication",
          "OAuth 2.0 and social login",
          "CORS — Cross Origin Resource Sharing",
          "Rate limiting (prevent abuse)",
          "Input validation and sanitization",
          "SQL injection prevention",
          "HTTPS enforcement"
        ],
        tools: [
          { name: "bcrypt", color: "#003B57", url: "https://npmjs.com/package/bcrypt", note: "Password hashing" },
          { name: "JWT", color: "#D63AFF", url: "https://jwt.io", note: "Token authentication" },
          { name: "Passport.js", color: "#34E27A", url: "https://passportjs.org", note: "Node.js auth middleware" },
          { name: "Helmet.js", color: "#000000", url: "https://helmetjs.github.io", note: "Security headers" },
          { name: "express-rate-limit", color: "#68A063", url: "https://npmjs.com/package/express-rate-limit", note: "Rate limiting" }
        ],
        timeNeeded: "2-3 weeks",
        tip: "💡 Never store plain text passwords. Always hash with bcrypt. This is the #1 rule of backend security."
      },
      {
        step: 6,
        icon: "📦",
        title: "API Design",
        tag: "Architecture",
        tagColor: "#6366F1",
        why: "Building an API that is easy to use and understand is a skill. Good API design makes frontend developers love working with your backend.",
        whatYouNeed: [
          "REST API design principles",
          "Resource naming conventions",
          "API versioning",
          "Request/response schemas",
          "API documentation",
          "GraphQL basics",
          "Pagination and filtering"
        ],
        tools: [
          { name: "Swagger / OpenAPI", color: "#85EA2D", url: "https://swagger.io", note: "API documentation" },
          { name: "GraphQL", color: "#E10098", url: "https://graphql.org", note: "Alternative to REST" },
          { name: "tRPC", color: "#2596BE", url: "https://trpc.io", note: "Type-safe APIs" },
          { name: "Zod", color: "#3E67B1", url: "https://zod.dev", note: "Schema validation" }
        ],
        timeNeeded: "2 weeks",
        tip: "💡 Document your API as you build it using Swagger. It becomes your best debugging tool."
      },
      {
        step: 7,
        icon: "⚡",
        title: "Caching & Performance",
        tag: "Optimization",
        tagColor: "#F97316",
        why: "Slow APIs frustrate users and cost money. Caching stores frequently requested data in memory so your database isn't hammered by repeated queries.",
        whatYouNeed: [
          "What is caching and why it matters",
          "Redis for in-memory caching",
          "Cache invalidation strategies",
          "Database query optimization",
          "Connection pooling",
          "Load balancing basics"
        ],
        tools: [
          { name: "Redis", color: "#DC382D", url: "https://redis.io", note: "In-memory cache" },
          { name: "Upstash", color: "#00E9A3", url: "https://upstash.com", note: "Serverless Redis" },
          { name: "Bull", color: "#F57F17", url: "https://npmjs.com/package/bull", note: "Job queues" }
        ],
        timeNeeded: "2 weeks",
        tip: "💡 Add Redis caching to your most frequently called API endpoints first. It can make them 100x faster."
      },
      {
        step: 8,
        icon: "📨",
        title: "Background Jobs & Queues",
        tag: "Advanced",
        tagColor: "#14B8A6",
        why: "Some tasks take too long to do during a web request — sending emails, processing images, generating reports. Background jobs handle these asynchronously.",
        whatYouNeed: [
          "What is a message queue",
          "Job scheduling and cron jobs",
          "Email sending systems",
          "File processing (image resize, PDF generation)",
          "Webhook handling"
        ],
        tools: [
          { name: "BullMQ", color: "#F57F17", url: "https://bullmq.io", note: "Node.js job queues" },
          { name: "Celery", color: "#37814A", url: "https://celeryproject.org", note: "Python task queue" },
          { name: "Resend", color: "#000000", url: "https://resend.com", note: "Email API" },
          { name: "Inngest", color: "#6C47FF", url: "https://inngest.com", note: "Background jobs" }
        ],
        timeNeeded: "1-2 weeks",
        tip: "💡 Start with Resend for sending emails. It is the simplest and most reliable email API available."
      },
      {
        step: 9,
        icon: "🧪",
        title: "Testing",
        tag: "Quality",
        tagColor: "#A78BFA",
        why: "Backend bugs cause data loss and security breaches. Automated tests catch these before they reach production.",
        whatYouNeed: [
          "Unit testing for business logic",
          "Integration testing for API endpoints",
          "Database testing with test databases",
          "Mocking external services",
          "Load testing for performance"
        ],
        tools: [
          { name: "Jest", color: "#C21325", url: "https://jestjs.io", note: "Node.js testing" },
          { name: "Pytest", color: "#3776AB", url: "https://pytest.org", note: "Python testing" },
          { name: "Supertest", color: "#68A063", url: "https://npmjs.com/package/supertest", note: "API endpoint testing" },
          { name: "k6", color: "#7D64FF", url: "https://k6.io", note: "Load testing" }
        ],
        timeNeeded: "2 weeks",
        tip: "💡 Write tests for your authentication and payment logic first — these are the most critical paths."
      },
      {
        step: 10,
        icon: "🚀",
        title: "Deployment & DevOps Basics",
        tag: "Launch",
        tagColor: "#F97316",
        why: "Your backend needs to run on a server 24/7 so users can access it anytime from anywhere.",
        whatYouNeed: [
          "Linux command line basics",
          "Docker containerization",
          "Environment variables management",
          "Process management (PM2)",
          "Reverse proxy (Nginx)",
          "CI/CD pipelines",
          "Monitoring and logging",
          "Database backups"
        ],
        tools: [
          { name: "Docker", color: "#2496ED", url: "https://docker.com", note: "Containerization" },
          { name: "Railway", color: "#B333FF", url: "https://railway.app", note: "Easiest deployment" },
          { name: "Render", color: "#46E3B7", url: "https://render.com", note: "Simple backend hosting" },
          { name: "PM2", color: "#2B037A", url: "https://pm2.keymetrics.io", note: "Process manager" },
          { name: "GitHub Actions", color: "#2088FF", url: "https://github.com/features/actions", note: "CI/CD" },
          { name: "Sentry", color: "#362D59", url: "https://sentry.io", note: "Error monitoring" }
        ],
        timeNeeded: "2-3 weeks",
        tip: "💡 Use Railway for your first deployment. It handles everything automatically and is free to start."
      }
    ]
  },
  "database-engineering": {
    id: "database-engineering",
    domain: "Database Engineering",
    icon: "🗄️",
    description: "Schema design, writing complex queries, and scaling",
    totalTools: 43,
    totalSkills: 77,
    estimatedTime: "5-7 months",
    accentColor: "#EAB308",
    difficultyBadge: "Intermediate",
    steps: [
      {
        step: 1,
        icon: "🧠",
        title: "SQL Fundamentals",
        tag: "Foundation",
        tagColor: "#06B6D4",
        why: "SQL is the universal language of databases. Every database engineer, data analyst, and backend developer uses SQL daily. It is the single most important skill in this entire roadmap.",
        whatYouNeed: ["What is a database and why we need one", "SELECT — fetching data from tables", "WHERE — filtering data with conditions", "INSERT, UPDATE, DELETE — modifying data", "ORDER BY and LIMIT", "Aggregate functions (COUNT, SUM, AVG, MAX, MIN)", "GROUP BY and HAVING", "Joins — combining data from multiple tables (INNER, LEFT, RIGHT, FULL)"],
        tools: [{ name: "PostgreSQL", color: "#336791", url: "https://postgresql.org", note: "Best database to learn on" }, { name: "MySQL", color: "#4479A1", url: "https://mysql.com", note: "Most widely deployed" }, { name: "DBeaver", color: "#372923", url: "https://dbeaver.io", note: "Free database GUI" }, { name: "SQLiteOnline", color: "#003B57", url: "https://sqliteonline.com", note: "Practice SQL in browser" }],
        timeNeeded: "3-4 weeks",
        tip: "💡 Practice SQL every day on real datasets from Kaggle. Theory without practice means nothing in SQL."
      },
      {
        step: 2,
        icon: "🏗️",
        title: "Relational Database Design",
        tag: "Foundation",
        tagColor: "#8B5CF6",
        why: "A poorly designed database causes pain forever — slow queries, duplicate data, impossible updates. Good design prevents these problems before they start.",
        whatYouNeed: ["Tables, rows and columns", "Primary keys and foreign keys", "Relationships: one-to-one, one-to-many, many-to-many", "Normalization — 1NF, 2NF, 3NF", "Entity Relationship Diagrams (ERD)", "Junction/bridge tables for many-to-many", "Constraints (NOT NULL, UNIQUE, CHECK, DEFAULT)"],
        tools: [{ name: "dbdiagram.io", color: "#6C47FF", url: "https://dbdiagram.io", note: "Design ERDs visually" }, { name: "Lucidchart", color: "#F9B233", url: "https://lucidchart.com", note: "ER diagram tool" }, { name: "DrawSQL", color: "#4F46E5", url: "https://drawsql.app", note: "Visual schema builder" }],
        timeNeeded: "2-3 weeks",
        tip: "💡 Design the database schema on paper BEFORE writing any SQL. Changes later are painful."
      },
      {
        step: 3,
        icon: "🐘",
        title: "PostgreSQL Deep Dive",
        tag: "Core Skill",
        tagColor: "#336791",
        why: "PostgreSQL is the world's most advanced open source database. Mastering it gives you skills that transfer to every other relational database.",
        whatYouNeed: ["Advanced data types (JSON, JSONB, Arrays, UUID)", "Window functions (ROW_NUMBER, RANK, LAG, LEAD)", "Common Table Expressions (CTEs) and WITH clauses", "Subqueries and correlated subqueries", "Stored procedures and functions (PL/pgSQL)", "Triggers", "Views and materialized views", "Full-text search", "Transactions and ACID properties"],
        tools: [{ name: "PostgreSQL", color: "#336791", url: "https://postgresql.org", note: "Core database" }, { name: "pgAdmin", color: "#336791", url: "https://pgadmin.org", note: "PostgreSQL GUI" }, { name: "TablePlus", color: "#F6A623", url: "https://tableplus.com", note: "Premium DB GUI" }, { name: "EXPLAIN ANALYZE", color: "#336791", url: "https://explain.dalibo.com", note: "Query plan visualizer" }],
        timeNeeded: "4-5 weeks",
        tip: "💡 Learn window functions — they solve complex reporting queries that would otherwise require multiple joins."
      },
      {
        step: 4,
        icon: "📦",
        title: "NoSQL Databases",
        tag: "Core Skill",
        tagColor: "#47A248",
        why: "Not all data fits neatly into tables. NoSQL databases handle flexible schemas, massive scale, and specialized use cases that relational databases struggle with.",
        whatYouNeed: ["Types of NoSQL: Document, Key-Value, Column, Graph", "When to use NoSQL vs SQL", "MongoDB — document database", "Redis — key-value and caching", "Cassandra — wide column for time series", "Neo4j — graph database", "Data modeling for NoSQL (no joins, embed vs reference)"],
        tools: [{ name: "MongoDB", color: "#47A248", url: "https://mongodb.com", note: "Most popular document DB" }, { name: "Redis", color: "#DC382D", url: "https://redis.io", note: "In-memory key-value" }, { name: "MongoDB Compass", color: "#47A248", url: "https://mongodb.com/compass", note: "MongoDB GUI" }, { name: "RedisInsight", color: "#DC382D", url: "https://redis.com/redis-enterprise/redis-insight", note: "Redis GUI" }, { name: "Neo4j", color: "#008CC1", url: "https://neo4j.com", note: "Graph database" }],
        timeNeeded: "3-4 weeks",
        tip: "💡 Redis is used in almost every production app for caching. Learn it regardless of your specialization."
      },
      {
        step: 5,
        icon: "⚡",
        title: "Indexing & Query Optimization",
        tag: "Performance",
        tagColor: "#F59E0B",
        why: "A query that takes 30 seconds can often be made to run in 30 milliseconds with the right index. Query optimization is the highest-impact skill a database engineer has.",
        whatYouNeed: ["What is an index and how B-tree indexes work", "Types of indexes (B-tree, Hash, GIN, GiST, BRIN)", "Composite indexes and index column order", "Reading and understanding EXPLAIN ANALYZE output", "N+1 query problem and how to fix it", "Query planning and cost estimation", "Partial indexes and filtered indexes", "Index bloat and maintenance"],
        tools: [{ name: "EXPLAIN ANALYZE", color: "#336791", url: "https://explain.dalibo.com", note: "Visualize query plans" }, { name: "pg_stat_statements", color: "#336791", url: "https://postgresql.org", note: "Track slow queries" }, { name: "pgBadger", color: "#336791", url: "https://pgbadger.darold.net", note: "PostgreSQL log analyzer" }, { name: "Datadog", color: "#632CA6", url: "https://datadoghq.com", note: "Query performance monitoring" }],
        timeNeeded: "3-4 weeks",
        tip: "💡 Run EXPLAIN ANALYZE on every slow query. The output tells you exactly which part is slow and why."
      },
      {
        step: 6,
        icon: "🔐",
        title: "Database Security",
        tag: "Security",
        tagColor: "#EC4899",
        why: "Databases hold the most sensitive data in any organization. A single security mistake can expose millions of users' personal data.",
        whatYouNeed: ["User roles and privileges (GRANT, REVOKE)", "Row Level Security (RLS)", "Column-level encryption", "SSL/TLS connections to databases", "SQL injection prevention", "Database auditing and access logs", "Principle of least privilege", "Data masking for non-production environments"],
        tools: [{ name: "pgAudit", color: "#336791", url: "https://pgaudit.org", note: "PostgreSQL audit logging" }, { name: "pgcrypto", color: "#336791", url: "https://postgresql.org/docs/current/pgcrypto.html", note: "Encryption extension" }, { name: "Vault", color: "#FFEC6E", url: "https://vaultproject.io", note: "Secrets management" }, { name: "AWS RDS IAM", color: "#FF9900", url: "https://aws.amazon.com/rds", note: "Cloud DB auth" }],
        timeNeeded: "2-3 weeks",
        tip: "💡 Enable Row Level Security on every table that has user-specific data. It prevents accidental data leaks."
      },
      {
        step: 7,
        icon: "📈",
        title: "Replication & High Availability",
        tag: "Scaling",
        tagColor: "#14B8A6",
        why: "Production databases must never go down. Replication ensures your data is always available even when a server fails.",
        whatYouNeed: ["Primary-replica replication", "Synchronous vs asynchronous replication", "Read replicas for scaling reads", "Failover and automatic promotion", "Connection pooling (PgBouncer)", "Database clustering", "Backup strategies (full, incremental, WAL archiving)", "Point-in-time recovery (PITR)"],
        tools: [{ name: "PgBouncer", color: "#336791", url: "https://pgbouncer.org", note: "Connection pooling" }, { name: "Patroni", color: "#336791", url: "https://patroni.readthedocs.io", note: "HA PostgreSQL" }, { name: "pgBackRest", color: "#336791", url: "https://pgbackrest.org", note: "Backup & restore" }, { name: "AWS RDS", color: "#FF9900", url: "https://aws.amazon.com/rds", note: "Managed replication" }],
        timeNeeded: "3-4 weeks",
        tip: "💡 Test your backup restore process regularly. A backup you have never restored is a backup you cannot trust."
      },
      {
        step: 8,
        icon: "🏢",
        title: "Data Warehousing & Analytics",
        tag: "Advanced",
        tagColor: "#6366F1",
        why: "Operational databases are optimized for reads and writes. Data warehouses are optimized for analytical queries across billions of rows.",
        whatYouNeed: ["OLTP vs OLAP — the fundamental difference", "Star schema and snowflake schema", "Fact tables and dimension tables", "ETL vs ELT pipelines", "Columnar storage and why it is faster for analytics", "Data partitioning strategies", "Materialized views for pre-computed results"],
        tools: [{ name: "Snowflake", color: "#29B5E8", url: "https://snowflake.com", note: "Cloud data warehouse" }, { name: "BigQuery", color: "#4285F4", url: "https://cloud.google.com/bigquery", note: "Google analytics DB" }, { name: "dbt", color: "#FF694B", url: "https://getdbt.com", note: "Data transformation" }, { name: "Apache Spark", color: "#E25A1C", url: "https://spark.apache.org", note: "Big data processing" }, { name: "Redshift", color: "#FF9900", url: "https://aws.amazon.com/redshift", note: "AWS data warehouse" }],
        timeNeeded: "3-4 weeks",
        tip: "💡 Learn dbt — it has become the standard tool for data transformation in modern data stacks."
      },
      {
        step: 9,
        icon: "🛠️",
        title: "Database Administration",
        tag: "Operations",
        tagColor: "#F97316",
        why: "Someone has to keep the database healthy, fast and running 24/7. DBA skills are highly paid and always in demand.",
        whatYouNeed: ["Database installation and configuration", "PostgreSQL configuration tuning (postgresql.conf)", "Vacuum and autovacuum maintenance", "Table bloat monitoring and cleanup", "Capacity planning", "Monitoring key metrics (connections, cache hit ratio, lock waits)", "Scheduled maintenance windows", "Database migrations in production (zero downtime)"],
        tools: [{ name: "pgAdmin", color: "#336791", url: "https://pgadmin.org", note: "Administration GUI" }, { name: "pg_activity", color: "#336791", url: "https://github.com/dalibo/pg_activity", note: "Real-time monitoring" }, { name: "Prometheus + Grafana", color: "#E6522C", url: "https://prometheus.io", note: "Metrics dashboard" }, { name: "Flyway", color: "#CC0200", url: "https://flywaydb.org", note: "Database migrations" }, { name: "Liquibase", color: "#2962FF", url: "https://liquibase.org", note: "Schema version control" }],
        timeNeeded: "3-4 weeks",
        tip: "💡 Set up automated monitoring alerts for connection count, disk usage, and long-running queries before anything breaks."
      },
      {
        step: 10,
        icon: "☁️",
        title: "Cloud Databases & Deployment",
        tag: "Launch",
        tagColor: "#F97316",
        why: "Modern databases run in the cloud. Managed cloud database services handle the infrastructure so you focus on the data.",
        whatYouNeed: ["Managed vs self-hosted databases", "AWS RDS and Aurora", "Supabase — managed PostgreSQL with extras", "PlanetScale — managed MySQL with branching", "Database connection from applications", "Cost optimization for cloud databases", "Multi-region database setups"],
        tools: [{ name: "Supabase", color: "#3ECF8E", url: "https://supabase.com", note: "Best managed PostgreSQL" }, { name: "AWS RDS", color: "#FF9900", url: "https://aws.amazon.com/rds", note: "Enterprise managed DB" }, { name: "PlanetScale", color: "#000000", url: "https://planetscale.com", note: "Managed MySQL" }, { name: "Neon", color: "#00E699", url: "https://neon.tech", note: "Serverless PostgreSQL" }, { name: "Railway", color: "#B333FF", url: "https://railway.app", note: "Quick DB deployment" }],
        timeNeeded: "2 weeks",
        tip: "💡 Use Supabase for any new project. It gives you PostgreSQL, auth, storage and APIs out of the box for free."
      }
    ]
  },
  "cybersecurity": {
    id: "cybersecurity",
    domain: "Cybersecurity",
    icon: "🔐",
    description: "Network defense, ethical hacking and penetration testing",
    totalTools: 41,
    totalSkills: 77,
    estimatedTime: "7-10 months",
    accentColor: "#EF4444",
    difficultyBadge: "Advanced",
    steps: [
      {
        step: 1,
        icon: "🌐",
        title: "Networking Fundamentals",
        tag: "Foundation",
        tagColor: "#06B6D4",
        why: "You cannot hack or defend what you do not understand. All cyberattacks happen over networks. Networking is the foundation of everything in cybersecurity.",
        whatYouNeed: ["OSI model — 7 layers and what each does", "TCP/IP protocol suite", "IP addresses, subnets and CIDR notation", "DNS — how domain names resolve", "HTTP/HTTPS protocols", "Common ports and protocols (22 SSH, 80 HTTP, 443 HTTPS, 3306 MySQL)", "Firewalls, routers and switches", "Packet analysis basics"],
        tools: [{ name: "Wireshark", color: "#1679A7", url: "https://wireshark.org", note: "Packet capture & analysis" }, { name: "nmap", color: "#000000", url: "https://nmap.org", note: "Network scanner" }, { name: "Cisco Packet Tracer", color: "#1BA0D7", url: "https://netacad.com", note: "Network simulation" }, { name: "GNS3", color: "#FF6F00", url: "https://gns3.com", note: "Advanced network lab" }],
        timeNeeded: "4-5 weeks",
        tip: "💡 Install Wireshark and capture your own network traffic. Seeing real packets makes networking concepts click instantly."
      },
      {
        step: 2,
        icon: "🐧",
        title: "Linux & Command Line Mastery",
        tag: "Foundation",
        tagColor: "#E95420",
        why: "Most servers run Linux. Most hacking tools run on Linux. Most security tools are built for Linux. Linux fluency is non-negotiable in cybersecurity.",
        whatYouNeed: ["File system navigation and permissions", "User and group management", "Process management and monitoring", "Bash scripting for automation", "Network commands (netstat, ss, ping, traceroute, curl)", "Log file analysis", "Cron jobs and scheduling", "Package management"],
        tools: [{ name: "Kali Linux", color: "#557C94", url: "https://kali.org", note: "Security-focused Linux distro" }, { name: "Parrot OS", color: "#43A047", url: "https://parrotsec.org", note: "Lightweight security distro" }, { name: "Ubuntu", color: "#E95420", url: "https://ubuntu.com", note: "General purpose Linux" }, { name: "tmux", color: "#1BB91F", url: "https://github.com/tmux/tmux", note: "Terminal multiplexer" }],
        timeNeeded: "3-4 weeks",
        tip: "💡 Install Kali Linux in a virtual machine. It comes pre-loaded with hundreds of security tools."
      },
      {
        step: 3,
        icon: "🔒",
        title: "Cryptography Basics",
        tag: "Foundation",
        tagColor: "#8B5CF6",
        why: "Encryption protects data in transit and at rest. Understanding cryptography lets you know when encryption is implemented correctly or dangerously wrong.",
        whatYouNeed: ["Symmetric vs asymmetric encryption", "AES, RSA and ECC algorithms", "Hashing (MD5, SHA-1, SHA-256) and why MD5 is broken", "Digital signatures and certificates", "SSL/TLS — how HTTPS works", "PKI — Public Key Infrastructure", "Password hashing (bcrypt, Argon2)", "Common cryptographic attacks"],
        tools: [{ name: "OpenSSL", color: "#721817", url: "https://openssl.org", note: "Cryptography toolkit" }, { name: "GPG", color: "#0093DD", url: "https://gnupg.org", note: "Encryption & signing" }, { name: "CyberChef", color: "#003087", url: "https://gchq.github.io/CyberChef", note: "Crypto operations in browser" }, { name: "HashCat", color: "#000000", url: "https://hashcat.net", note: "Password hash cracking" }],
        timeNeeded: "2-3 weeks",
        tip: "💡 Use CyberChef to experiment with encoding, encryption and hashing. It makes abstract concepts tangible."
      },
      {
        step: 4,
        icon: "🌐",
        title: "Web Application Security",
        tag: "Core Skill",
        tagColor: "#EC4899",
        why: "Web applications are the most attacked surface in the world. Understanding OWASP Top 10 vulnerabilities is required knowledge for every security professional.",
        whatYouNeed: ["OWASP Top 10 vulnerabilities", "SQL Injection — how it works and prevention", "Cross-Site Scripting (XSS)", "Cross-Site Request Forgery (CSRF)", "Broken Authentication and session management", "Insecure Direct Object References (IDOR)", "Security misconfiguration", "Burp Suite for web app testing"],
        tools: [{ name: "Burp Suite", color: "#FF6633", url: "https://portswigger.net/burp", note: "Web security testing platform" }, { name: "OWASP ZAP", color: "#00549E", url: "https://zaproxy.org", note: "Free web scanner" }, { name: "HackTheBox", color: "#9FEF00", url: "https://hackthebox.com", note: "Practice web hacking" }, { name: "DVWA", color: "#CC0000", url: "https://dvwa.co.uk", note: "Deliberately vulnerable web app" }],
        timeNeeded: "4-5 weeks",
        tip: "💡 Practice on DVWA and HackTheBox legally. Never test on real websites without written permission."
      },
      {
        step: 5,
        icon: "🔍",
        title: "Ethical Hacking & Penetration Testing",
        tag: "Core Skill",
        tagColor: "#F59E0B",
        why: "Ethical hackers find security weaknesses before malicious hackers do. Penetration testing is one of the highest-paid skills in cybersecurity.",
        whatYouNeed: ["Penetration testing methodology (Reconnaissance, Scanning, Exploitation, Post-exploitation)", "Passive and active reconnaissance", "Vulnerability scanning", "Exploitation frameworks", "Privilege escalation techniques", "Maintaining access and covering tracks (for learning)", "Writing penetration test reports"],
        tools: [{ name: "Metasploit", color: "#E33444", url: "https://metasploit.com", note: "Exploitation framework" }, { name: "nmap", color: "#000000", url: "https://nmap.org", note: "Port & service scanning" }, { name: "Nikto", color: "#000000", url: "https://cirt.net/Nikto2", note: "Web server scanner" }, { name: "SQLmap", color: "#CC0000", url: "https://sqlmap.org", note: "SQL injection automation" }, { name: "TryHackMe", color: "#212C42", url: "https://tryhackme.com", note: "Guided hacking labs" }],
        timeNeeded: "5-6 weeks",
        tip: "💡 Complete TryHackMe's beginner path before HackTheBox. TryHackMe guides you, HackTheBox throws you in the deep end."
      },
      {
        step: 6,
        icon: "🛡️",
        title: "Network Security & Defense",
        tag: "Defense",
        tagColor: "#10B981",
        why: "Attacking is only half the job. Blue team defenders protect organizations from attacks in real time. Both skills make you a complete security engineer.",
        whatYouNeed: ["Firewall configuration and rules", "IDS/IPS systems (Intrusion Detection/Prevention)", "VPN implementation", "Network segmentation and DMZ", "Zero Trust Network Architecture", "DDoS protection strategies", "Network traffic analysis for threats", "SIEM — Security Information and Event Management"],
        tools: [{ name: "Snort", color: "#CC0000", url: "https://snort.org", note: "Open source IDS/IPS" }, { name: "pfSense", color: "#212121", url: "https://pfsense.org", note: "Open source firewall" }, { name: "Splunk", color: "#000000", url: "https://splunk.com", note: "SIEM platform" }, { name: "Suricata", color: "#EF7B00", url: "https://suricata.io", note: "Network threat detection" }],
        timeNeeded: "3-4 weeks",
        tip: "💡 Set up pfSense in a virtual environment to understand real firewall rule management."
      },
      {
        step: 7,
        icon: "🔎",
        title: "Digital Forensics & Incident Response",
        tag: "Advanced",
        tagColor: "#6366F1",
        why: "When a breach happens, forensics investigators determine what happened, how, and what data was stolen. This skill is critical for both compliance and legal proceedings.",
        whatYouNeed: ["Incident response lifecycle", "Disk imaging and evidence preservation", "Memory forensics", "Log analysis and timeline reconstruction", "Malware analysis basics", "Chain of custody for digital evidence", "Threat hunting techniques"],
        tools: [{ name: "Autopsy", color: "#1F3A93", url: "https://sleuthkit.org/autopsy", note: "Digital forensics platform" }, { name: "Volatility", color: "#000000", url: "https://volatilityfoundation.org", note: "Memory forensics" }, { name: "FTK Imager", color: "#CC0000", url: "https://exterro.com/ftk-imager", note: "Disk imaging" }, { name: "OSSEC", color: "#333333", url: "https://ossec.github.io", note: "HIDS & log analysis" }],
        timeNeeded: "3-4 weeks",
        tip: "💡 Practice memory forensics with Volatility on memory dumps from challenge sites like MemLabs."
      },
      {
        step: 8,
        icon: "☁️",
        title: "Cloud Security",
        tag: "Advanced",
        tagColor: "#F97316",
        why: "Most organizations have moved to the cloud. Cloud misconfigurations are now the leading cause of data breaches. Cloud security is the fastest-growing area of cybersecurity.",
        whatYouNeed: ["Cloud shared responsibility model", "AWS/Azure/GCP IAM best practices", "S3 bucket misconfiguration (the most common breach)", "Cloud security posture management", "Container and Kubernetes security", "Serverless security", "Cloud penetration testing", "CSPM tools"],
        tools: [{ name: "AWS Security Hub", color: "#FF9900", url: "https://aws.amazon.com/security-hub", note: "Cloud security posture" }, { name: "ScoutSuite", color: "#000000", url: "https://github.com/nccgroup/ScoutSuite", note: "Cloud security auditing" }, { name: "Prowler", color: "#333333", url: "https://prowler.com", note: "AWS security tool" }, { name: "Trivy", color: "#1904DA", url: "https://trivy.dev", note: "Container security scanner" }],
        timeNeeded: "3-4 weeks",
        tip: "💡 Create an AWS free tier account and deliberately misconfigure an S3 bucket — then find and fix it using ScoutSuite."
      },
      {
        step: 9,
        icon: "📋",
        title: "Compliance & Governance",
        tag: "Professional",
        tagColor: "#14B8A6",
        why: "Organizations must comply with legal and industry security standards. Security engineers who understand compliance frameworks are extremely valuable.",
        whatYouNeed: ["GDPR — data protection and privacy", "ISO 27001 — information security management", "SOC 2 — service organization controls", "PCI DSS — payment card security", "HIPAA — healthcare data security", "Risk assessment frameworks", "Security policy writing", "Audit preparation"],
        tools: [{ name: "Vanta", color: "#6C47FF", url: "https://vanta.com", note: "Compliance automation" }, { name: "Drata", color: "#4F46E5", url: "https://drata.com", note: "SOC 2 automation" }, { name: "OneTrust", color: "#00A99D", url: "https://onetrust.com", note: "Privacy compliance" }],
        timeNeeded: "2-3 weeks",
        tip: "💡 Study the SOC 2 framework first — it is the most requested compliance standard for tech companies."
      },
      {
        step: 10,
        icon: "🏆",
        title: "Certifications & Career Path",
        tag: "Career",
        tagColor: "#F97316",
        why: "Cybersecurity certifications validate your skills to employers and clients. They are more important in security than in almost any other tech field.",
        whatYouNeed: ["CompTIA Security+ — entry level foundation cert", "CEH — Certified Ethical Hacker", "OSCP — Offensive Security Certified Professional (most respected pen test cert)", "CISSP — for senior security professionals", "Building a home lab for practice", "CTF competitions for skill building", "Bug bounty programs for real-world practice"],
        tools: [{ name: "HackTheBox", color: "#9FEF00", url: "https://hackthebox.com", note: "Practice for OSCP" }, { name: "TryHackMe", color: "#212C42", url: "https://tryhackme.com", note: "Guided learning" }, { name: "CTFtime", color: "#336791", url: "https://ctftime.org", note: "CTF competitions" }, { name: "HackerOne", color: "#494649", url: "https://hackerone.com", note: "Bug bounty programs" }, { name: "Bugcrowd", color: "#F26822", url: "https://bugcrowd.com", note: "Bug bounty platform" }],
        timeNeeded: "Ongoing",
        tip: "💡 Start with CompTIA Security+ then aim for OSCP. OSCP is the gold standard for penetration testers and commands the highest salaries."
      }
    ]
  },
  "devops-cloud": { id: "devops-cloud", domain: "DevOps & Cloud", icon: "☁️", description: "Infrastructure as code, CI/CD, and scaling clouds", totalTools: 15, totalSkills: 10, estimatedTime: "8-10 months", accentColor: "#0EA5E9", difficultyBadge: "Intermediate", steps: [] },
  "data-science": {
    id: "data-science",
    domain: "Data Science",
    icon: "📊",
    description: "Python, pipelines, data wrangling, and predictive analysis",
    totalTools: 38,
    totalSkills: 67,
    estimatedTime: "7-9 months",
    accentColor: "#14B8A6",
    difficultyBadge: "Intermediate",
    steps: [
      { step: 1, icon: "🧠", title: "Python & Math Foundations", tag: "Foundation", tagColor: "#06B6D4", why: "Data science is applied mathematics plus programming. Without both, you can copy code but never truly understand what it does or fix it when it breaks.", whatYouNeed: ["Python fundamentals (variables, loops, functions, OOP)", "NumPy for numerical computing", "Linear algebra (vectors, matrices, dot products)", "Calculus (derivatives for understanding gradient descent)", "Probability theory basics", "Statistics fundamentals (distributions, central limit theorem)"], tools: [{ name: "Python", color: "#3776AB", url: "https://python.org", note: "Primary language" }, { name: "Jupyter Notebook", color: "#F37626", url: "https://jupyter.org", note: "Interactive computing" }, { name: "NumPy", color: "#013243", url: "https://numpy.org", note: "Numerical computing" }, { name: "Google Colab", color: "#F9AB00", url: "https://colab.research.google.com", note: "Free cloud notebooks" }], timeNeeded: "4-5 weeks", tip: "💡 Khan Academy covers all the math you need for data science completely free." },
      { step: 2, icon: "📦", title: "Data Collection & Sources", tag: "Data", tagColor: "#10B981", why: "You cannot analyze data you do not have. Data scientists must know how to collect data from APIs, databases, websites and files.", whatYouNeed: ["Reading CSV, Excel, JSON files", "Connecting to SQL databases", "REST API data collection", "Web scraping basics", "Public datasets and data portals", "Data privacy and ethical collection"], tools: [{ name: "Pandas", color: "#150458", url: "https://pandas.pydata.org", note: "Data manipulation" }, { name: "Requests", color: "#3776AB", url: "https://requests.readthedocs.io", note: "HTTP for Python" }, { name: "BeautifulSoup", color: "#3776AB", url: "https://beautiful-soup-4.readthedocs.io", note: "Web scraping" }, { name: "Kaggle Datasets", color: "#20BEFF", url: "https://kaggle.com/datasets", note: "Free public datasets" }, { name: "SQLAlchemy", color: "#D71F00", url: "https://sqlalchemy.org", note: "Database connector" }], timeNeeded: "2-3 weeks", tip: "💡 Start every project with Kaggle datasets. They are clean and well-documented — perfect for learning." },
      { step: 3, icon: "🧹", title: "Data Cleaning & Wrangling", tag: "Data", tagColor: "#F59E0B", why: "Real-world data is messy — missing values, duplicates, wrong formats, outliers. Data scientists spend 80% of their time cleaning data.", whatYouNeed: ["Handling missing values (drop, fill, interpolate)", "Removing duplicates", "Data type conversion", "Outlier detection and handling", "String cleaning and normalization", "Date and time manipulation", "Merging and reshaping datasets"], tools: [{ name: "Pandas", color: "#150458", url: "https://pandas.pydata.org", note: "Primary cleaning tool" }, { name: "OpenRefine", color: "#3C78D8", url: "https://openrefine.org", note: "Visual data cleaning" }, { name: "Great Expectations", color: "#FF6310", url: "https://greatexpectations.io", note: "Data quality validation" }], timeNeeded: "3-4 weeks", tip: "💡 Never modify raw data directly. Always keep the original and create cleaned versions. You will thank yourself later." },
      { step: 4, icon: "🔭", title: "Exploratory Data Analysis (EDA)", tag: "Analysis", tagColor: "#8B5CF6", why: "Before building any model, you must understand your data deeply. EDA reveals patterns, relationships and anomalies that guide every decision after.", whatYouNeed: ["Descriptive statistics (mean, median, std, percentiles)", "Distribution analysis and histograms", "Correlation analysis", "Groupby and aggregation analysis", "Identifying data patterns and seasonality", "Hypothesis generation from data", "Asking the right questions of your data"], tools: [{ name: "Pandas", color: "#150458", url: "https://pandas.pydata.org", note: "Data analysis" }, { name: "Matplotlib", color: "#11557C", url: "https://matplotlib.org", note: "Basic plots" }, { name: "Seaborn", color: "#4C72B0", url: "https://seaborn.pydata.org", note: "Statistical visualization" }, { name: "Plotly", color: "#3F4F75", url: "https://plotly.com", note: "Interactive charts" }], timeNeeded: "3-4 weeks", tip: "💡 Start every dataset with df.info(), df.describe() and df.isnull().sum(). These three lines tell you 80% of what you need to know." },
      { step: 5, icon: "📈", title: "Data Visualization & Storytelling", tag: "Communication", tagColor: "#EC4899", why: "Insights hidden in data only have value when communicated clearly to decision makers. Data visualization turns numbers into stories.", whatYouNeed: ["Chart selection (when to use each chart type)", "Design principles for data viz", "Interactive dashboards", "Business storytelling with data", "Presentation of findings to non-technical audiences", "Color theory for data visualization"], tools: [{ name: "Matplotlib", color: "#11557C", url: "https://matplotlib.org", note: "Publication charts" }, { name: "Seaborn", color: "#4C72B0", url: "https://seaborn.pydata.org", note: "Statistical charts" }, { name: "Plotly", color: "#3F4F75", url: "https://plotly.com", note: "Interactive viz" }, { name: "Tableau", color: "#E97627", url: "https://tableau.com", note: "Business BI tool" }, { name: "Power BI", color: "#F2C811", url: "https://powerbi.microsoft.com", note: "Microsoft BI platform" }], timeNeeded: "2-3 weeks", tip: "💡 Learn to tell a story with one chart better than telling nothing with twenty charts." },
      { step: 6, icon: "🤖", title: "Machine Learning Fundamentals", tag: "ML", tagColor: "#14B8A6", why: "Machine learning lets computers find patterns in data and make predictions. This is the core skill that makes data science powerful.", whatYouNeed: ["Supervised vs unsupervised learning", "Train/validation/test splits", "Cross-validation", "Linear regression", "Logistic regression", "Decision trees and random forests", "Model evaluation metrics (accuracy, F1, ROC-AUC)", "Overfitting and underfitting"], tools: [{ name: "Scikit-learn", color: "#F89939", url: "https://scikit-learn.org", note: "ML library" }, { name: "XGBoost", color: "#189BCD", url: "https://xgboost.readthedocs.io", note: "Gradient boosting" }, { name: "LightGBM", color: "#00B300", url: "https://lightgbm.readthedocs.io", note: "Fast gradient boosting" }], timeNeeded: "5-6 weeks", tip: "💡 XGBoost and LightGBM win most Kaggle competitions on tabular data. Master these before neural networks." },
      { step: 7, icon: "🔧", title: "Feature Engineering", tag: "Advanced", tagColor: "#6366F1", why: "Feature engineering — transforming raw data into better inputs for models — often matters more than which model you choose.", whatYouNeed: ["Feature creation from existing columns", "Encoding categorical variables", "Handling datetime features", "Feature scaling and normalization", "Feature selection methods", "Dimensionality reduction (PCA)", "Target encoding"], tools: [{ name: "Scikit-learn", color: "#F89939", url: "https://scikit-learn.org", note: "Preprocessing tools" }, { name: "Feature-engine", color: "#3776AB", url: "https://feature-engine.readthedocs.io", note: "Feature engineering library" }, { name: "Featuretools", color: "#FF6B6B", url: "https://featuretools.alteryx.com", note: "Automated feature engineering" }], timeNeeded: "3-4 weeks", tip: "💡 Good features beat complex models every time. A simple model with great features outperforms a complex model with bad ones." },
      { step: 8, icon: "📊", title: "Statistical Analysis & A/B Testing", tag: "Analytics", tagColor: "#F97316", why: "Data scientists must design and analyze experiments. A/B testing is how every major tech company (Google, Netflix, Amazon) makes product decisions.", whatYouNeed: ["Hypothesis testing (null vs alternative hypothesis)", "p-values and statistical significance", "t-tests, chi-square tests, ANOVA", "Confidence intervals", "A/B test design and sample size calculation", "Multiple testing problems", "Bayesian vs frequentist approaches"], tools: [{ name: "SciPy", color: "#0C55A5", url: "https://scipy.org", note: "Statistical functions" }, { name: "statsmodels", color: "#3776AB", url: "https://statsmodels.org", note: "Statistical modeling" }, { name: "Optimizely", color: "#0037FF", url: "https://optimizely.com", note: "A/B testing platform" }], timeNeeded: "3-4 weeks", tip: "💡 Understand p-values deeply. Misinterpreting them is the most common mistake in data science." },
      { step: 9, icon: "🏗️", title: "Data Pipelines & Engineering", tag: "Engineering", tagColor: "#A78BFA", why: "Getting data from raw source to clean analysis-ready format reliably and automatically is data engineering — and every data scientist needs to know the basics.", whatYouNeed: ["ETL pipeline concepts", "Data pipeline orchestration", "SQL for data transformation", "dbt for analytics engineering", "Data warehouse concepts", "Scheduled data jobs", "Data quality monitoring"], tools: [{ name: "dbt", color: "#FF694B", url: "https://getdbt.com", note: "Data transformation" }, { name: "Apache Airflow", color: "#017CEE", url: "https://airflow.apache.org", note: "Pipeline orchestration" }, { name: "Prefect", color: "#024DFD", url: "https://prefect.io", note: "Modern pipeline tool" }, { name: "BigQuery", color: "#4285F4", url: "https://cloud.google.com/bigquery", note: "Cloud data warehouse" }], timeNeeded: "3-4 weeks", tip: "💡 Learn dbt — it has become the standard tool for analytics engineering and is highly valued by employers." },
      { step: 10, icon: "🚀", title: "Deploying Data Products", tag: "Launch", tagColor: "#F97316", why: "A model sitting in a Jupyter notebook has zero business value. Deploying data products makes your work impact real users and real decisions.", whatYouNeed: ["Saving and loading ML models", "Building APIs around models (FastAPI)", "Interactive dashboards for stakeholders", "Model monitoring in production", "Retraining pipelines", "A/B testing deployed models"], tools: [{ name: "Streamlit", color: "#FF4B4B", url: "https://streamlit.io", note: "Build data apps fast" }, { name: "FastAPI", color: "#009688", url: "https://fastapi.tiangolo.com", note: "Serve models as APIs" }, { name: "MLflow", color: "#0194E2", url: "https://mlflow.org", note: "Model lifecycle management" }, { name: "Hugging Face Spaces", color: "#FFD21E", url: "https://huggingface.co/spaces", note: "Free model hosting" }], timeNeeded: "3-4 weeks", tip: "💡 Use Streamlit to build a dashboard for every project. Being able to demo your work interactively is a superpower." }
    ]
  },
  "qa-testing": {
    id: "qa-testing",
    domain: "QA & Testing",
    icon: "🧪",
    description: "Test automation, coverage strategies and end-to-end tooling",
    totalTools: 36,
    totalSkills: 70,
    estimatedTime: "4-6 months",
    accentColor: "#8B5CF6",
    difficultyBadge: "Beginner Friendly",
    steps: [
      { step: 1, icon: "🧠", title: "Software Testing Fundamentals", tag: "Foundation", tagColor: "#06B6D4", why: "Understanding what testing IS and WHY it exists gives you the mental model to approach any testing challenge. Most QA engineers skip this and struggle forever.", whatYouNeed: ["What is software testing and why it matters", "Verification vs validation", "Testing principles (early testing, defect clustering)", "Testing pyramid (unit, integration, E2E)", "Static vs dynamic testing", "Black box vs white box vs grey box testing", "Error, defect and failure — the differences"], tools: [{ name: "ISTQB Syllabus", color: "#333333", url: "https://istqb.org", note: "Industry standard foundation" }, { name: "TestRail", color: "#65C179", url: "https://testrail.com", note: "Test management" }, { name: "Zephyr", color: "#0052CC", url: "https://smartbear.com/test-management/zephyr", note: "Jira test management" }], timeNeeded: "2-3 weeks", tip: "💡 Study the ISTQB Foundation Level syllabus even if you do not take the exam. It is the clearest overview of testing fundamentals available." },
      { step: 2, icon: "🖱️", title: "Manual Testing", tag: "Foundation", tagColor: "#10B981", why: "Before automating tests you must be able to do manual testing expertly. Automation can only test what humans understand first.", whatYouNeed: ["Test planning and strategy", "Writing test cases and test suites", "Exploratory testing techniques", "Bug lifecycle (new, assigned, fixed, closed)", "Writing effective bug reports", "Regression testing", "Smoke and sanity testing", "User acceptance testing (UAT)"], tools: [{ name: "Jira", color: "#0052CC", url: "https://atlassian.com/software/jira", note: "Bug tracking" }, { name: "TestRail", color: "#65C179", url: "https://testrail.com", note: "Test case management" }, { name: "Confluence", color: "#0052CC", url: "https://atlassian.com/software/confluence", note: "Test documentation" }, { name: "Trello", color: "#0052CC", url: "https://trello.com", note: "Simple bug tracking" }], timeNeeded: "3-4 weeks", tip: "💡 A great bug report includes: steps to reproduce, expected result, actual result, and a screenshot. Never submit a bug without these." },
      { step: 3, icon: "📋", title: "Test Case Design Techniques", tag: "Core Skill", tagColor: "#8B5CF6", why: "Good test design finds bugs with fewer tests. Poor design wastes time testing things that do not matter while missing real issues.", whatYouNeed: ["Equivalence partitioning", "Boundary value analysis", "Decision table testing", "State transition testing", "Use case testing", "Pairwise/combinatorial testing", "Risk-based testing"], tools: [{ name: "Xmind", color: "#ED1C24", url: "https://xmind.net", note: "Mind mapping for test design" }, { name: "TestRail", color: "#65C179", url: "https://testrail.com", note: "Organize test cases" }], timeNeeded: "2-3 weeks", tip: "💡 Always test boundary values — bugs love to hide at the edges (0, -1, max+1, empty string)." },
      { step: 4, icon: "🌐", title: "API Testing", tag: "Core Skill", tagColor: "#F59E0B", why: "Modern apps are built on APIs. API testing catches bugs that UI testing misses and runs much faster than browser-based tests.", whatYouNeed: ["REST API concepts (GET, POST, PUT, DELETE)", "HTTP status codes and what they mean", "Request headers and authentication", "JSON response validation", "API test case design", "Contract testing basics", "GraphQL testing basics"], tools: [{ name: "Postman", color: "#FF6C37", url: "https://postman.com", note: "Most popular API testing" }, { name: "Insomnia", color: "#4000BF", url: "https://insomnia.rest", note: "API client alternative" }, { name: "REST Assured", color: "#43A047", url: "https://rest-assured.io", note: "Java API test library" }, { name: "Newman", color: "#FF6C37", url: "https://npmjs.com/package/newman", note: "Postman CLI runner" }], timeNeeded: "2-3 weeks", tip: "💡 Create Postman collections for every API endpoint and run them as part of your CI/CD pipeline." },
      { step: 5, icon: "🤖", title: "Test Automation Fundamentals", tag: "Automation", tagColor: "#EC4899", why: "Manual testing every build is slow and error-prone. Automation runs thousands of tests in minutes and catches regressions automatically.", whatYouNeed: ["When to automate and when not to", "Test automation frameworks and patterns", "Page Object Model (POM) design pattern", "Writing maintainable test code", "Assertions and test validation", "Test data management", "Handling flaky tests"], tools: [{ name: "Selenium", color: "#43B02A", url: "https://selenium.dev", note: "Browser automation standard" }, { name: "Playwright", color: "#2EAD33", url: "https://playwright.dev", note: "Modern browser automation" }, { name: "Cypress", color: "#04C38E", url: "https://cypress.io", note: "Developer-friendly E2E" }, { name: "WebDriverIO", color: "#EA5906", url: "https://webdriver.io", note: "Node.js automation" }], timeNeeded: "4-5 weeks", tip: "💡 Learn Playwright over Selenium for new projects. It is faster, more reliable and has better debugging." },
      { step: 6, icon: "📱", title: "Mobile Testing", tag: "Specialization", tagColor: "#14B8A6", why: "Mobile apps have unique testing challenges — different screen sizes, OS versions, gestures, network conditions and battery constraints.", whatYouNeed: ["iOS vs Android testing differences", "Real device vs emulator/simulator testing", "Mobile test automation", "Gesture testing (swipe, pinch, long press)", "Network condition simulation", "Interrupt testing (calls, notifications)", "Device compatibility testing"], tools: [{ name: "Appium", color: "#662D91", url: "https://appium.io", note: "Mobile automation framework" }, { name: "XCTest", color: "#1575F9", url: "https://developer.apple.com/documentation/xctest", note: "iOS native testing" }, { name: "Espresso", color: "#3DDC84", url: "https://developer.android.com/training/testing/espresso", note: "Android native testing" }, { name: "BrowserStack", color: "#FF6C37", url: "https://browserstack.com", note: "Real device cloud" }, { name: "Firebase Test Lab", color: "#FFCA28", url: "https://firebase.google.com/products/test-lab", note: "Google device testing" }], timeNeeded: "3-4 weeks", tip: "💡 Always test on real devices for final testing. Emulators miss real-world issues like performance and sensor behavior." },
      { step: 7, icon: "⚡", title: "Performance Testing", tag: "Advanced", tagColor: "#6366F1", why: "An application that crashes under load fails at the worst possible moment — when it has the most users. Performance testing prevents this.", whatYouNeed: ["Load testing vs stress testing vs soak testing", "Response time and throughput metrics", "Identifying performance bottlenecks", "Concurrent user simulation", "Performance test reporting", "Database performance testing"], tools: [{ name: "k6", color: "#7D64FF", url: "https://k6.io", note: "Modern load testing" }, { name: "Apache JMeter", color: "#D22128", url: "https://jmeter.apache.org", note: "Classic load testing" }, { name: "Gatling", color: "#FF9E00", url: "https://gatling.io", note: "Scala-based load testing" }, { name: "Locust", color: "#3CB371", url: "https://locust.io", note: "Python load testing" }], timeNeeded: "2-3 weeks", tip: "💡 k6 is the best modern load testing tool. Its JavaScript syntax makes it accessible to anyone who knows JS." },
      { step: 8, icon: "🔐", title: "Security Testing Basics", tag: "Advanced", tagColor: "#F97316", why: "QA engineers are on the front line of finding security vulnerabilities. Basic security testing knowledge makes you significantly more valuable.", whatYouNeed: ["OWASP Top 10 from a testing perspective", "SQL injection testing", "XSS testing", "Authentication and authorization testing", "Sensitive data exposure testing", "Security scanning tools", "Penetration testing basics for testers"], tools: [{ name: "OWASP ZAP", color: "#00549E", url: "https://zaproxy.org", note: "Free security scanner" }, { name: "Burp Suite", color: "#FF6633", url: "https://portswigger.net/burp", note: "Security testing platform" }, { name: "Snyk", color: "#4C4A73", url: "https://snyk.io", note: "Dependency vulnerability scan" }], timeNeeded: "2-3 weeks", tip: "💡 Run OWASP ZAP against every web app you test. It finds obvious security issues in minutes." },
      { step: 9, icon: "🔄", title: "CI/CD Integration", tag: "DevOps", tagColor: "#A78BFA", why: "Tests only provide value if they run automatically on every code change. Integrating tests into CI/CD pipelines makes quality continuous.", whatYouNeed: ["CI/CD pipeline concepts", "Running automated tests in pipelines", "Test reporting in CI/CD", "Parallel test execution", "Test environment management", "Quality gates — blocking deploys on test failure", "Shift-left testing practices"], tools: [{ name: "GitHub Actions", color: "#2088FF", url: "https://github.com/features/actions", note: "CI/CD pipelines" }, { name: "Jenkins", color: "#D33833", url: "https://jenkins.io", note: "Self-hosted CI" }, { name: "Allure", color: "#EF4B4B", url: "https://docs.qameta.io/allure", note: "Test reporting" }, { name: "SonarQube", color: "#4E9BCD", url: "https://sonarqube.org", note: "Code quality gates" }], timeNeeded: "2-3 weeks", tip: "💡 Set up a GitHub Actions workflow that runs your Playwright tests on every pull request. Broken code never reaches main." },
      { step: 10, icon: "👑", title: "QA Leadership & Strategy", tag: "Career", tagColor: "#F97316", why: "Senior QA engineers define quality strategy, mentor teams and build testing cultures. These skills unlock leadership and higher compensation.", whatYouNeed: ["QA strategy and test planning at scale", "Risk-based testing approach", "Metrics — what to measure and how", "Building and leading QA teams", "Test environment strategy", "Quality advocacy across the organization", "ISTQB Advanced certification path"], tools: [{ name: "TestRail", color: "#65C179", url: "https://testrail.com", note: "Enterprise test management" }, { name: "Xray", color: "#0052CC", url: "https://xpand-it.com/xray", note: "Jira test management" }, { name: "ISTQB", color: "#333333", url: "https://istqb.org", note: "Certification body" }], timeNeeded: "Ongoing", tip: "💡 The ISTQB Advanced Technical Test Analyst certification is the most respected QA certification for senior engineers." }
    ]
  },
  "game-development": {
    id: "game-development",
    domain: "Game Development",
    icon: "🎮",
    description: "Create immersive 2D and 3D worlds and physics",
    totalTools: 37,
    totalSkills: 66,
    estimatedTime: "8-12 months",
    accentColor: "#EC4899",
    difficultyBadge: "Advanced",
    steps: [
      { step: 1, icon: "🧠", title: "Programming & OOP Fundamentals", tag: "Foundation", tagColor: "#06B6D4", why: "Game development is one of the most programming-intensive fields. Every game mechanic, character behavior and system is pure code.", whatYouNeed: ["Variables, conditions, loops, functions", "Object Oriented Programming (classes, objects, inheritance)", "Data structures (arrays, lists, dictionaries)", "Recursion and algorithms basics", "Event-driven programming concepts", "Basic math for games (vectors, coordinates)"], tools: [{ name: "C#", color: "#239120", url: "https://learn.microsoft.com/en-us/dotnet/csharp", note: "Unity's primary language" }, { name: "C++", color: "#00599C", url: "https://cplusplus.com", note: "Unreal Engine language" }, { name: "GDScript", color: "#478CBF", url: "https://gdscript.com", note: "Godot's built-in language" }, { name: "VS Code", color: "#007ACC", url: "https://code.visualstudio.com", note: "Code editor" }], timeNeeded: "4-6 weeks", tip: "💡 Learn C# if you want Unity. Learn GDScript if you want Godot (easiest). Learn C++ only if you want Unreal Engine." },
      { step: 2, icon: "🛠️", title: "Game Engine Selection & Setup", tag: "Setup", tagColor: "#8B5CF6", why: "A game engine handles the hard parts — rendering, physics, audio, input. Choosing the right engine determines your tools, language and career path.", whatYouNeed: ["Understanding what a game engine provides", "Unity vs Unreal vs Godot comparison", "Engine installation and project setup", "Scene system and hierarchy", "Game objects and components", "The game loop (Update, FixedUpdate, LateUpdate)"], tools: [{ name: "Unity", color: "#000000", url: "https://unity.com", note: "Most popular for indie/mobile" }, { name: "Unreal Engine", color: "#313131", url: "https://unrealengine.com", note: "Best graphics for AAA games" }, { name: "Godot", color: "#478CBF", url: "https://godotengine.org", note: "Free open source, easiest" }, { name: "GameMaker", color: "#71B417", url: "https://gamemaker.io", note: "Best for 2D beginners" }], timeNeeded: "1-2 weeks", tip: "💡 Start with Godot if you are a complete beginner. It is free, lightweight and has the gentlest learning curve." },
      { step: 3, icon: "🎨", title: "2D Game Development", tag: "Core Skill", tagColor: "#EC4899", why: "2D games are simpler to build than 3D and teach all the fundamental concepts. Every great 3D game developer started with 2D.", whatYouNeed: ["Sprites and sprite sheets", "Tilemaps for level design", "2D physics (rigidbodies, colliders)", "2D character movement and controls", "Cameras and viewport", "Parallax backgrounds", "2D animations with state machines"], tools: [{ name: "Godot 2D", color: "#478CBF", url: "https://docs.godotengine.org/en/stable/tutorials/2d", note: "Best 2D engine" }, { name: "Unity 2D", color: "#000000", url: "https://unity.com/solutions/2d", note: "Popular 2D platform" }, { name: "Aseprite", color: "#7D929E", url: "https://aseprite.org", note: "Pixel art tool" }, { name: "Tiled", color: "#4A90D9", url: "https://mapeditor.org", note: "Tilemap editor" }], timeNeeded: "4-6 weeks", tip: "💡 Build a complete Pong clone, then a Flappy Bird clone. These teach 90% of 2D game fundamentals." },
      { step: 4, icon: "⚡", title: "Physics & Collision Systems", tag: "Core Skill", tagColor: "#F59E0B", why: "Physics makes games feel real. Understanding how collisions, gravity and forces work lets you build everything from platformers to racing games.", whatYouNeed: ["Rigidbodies and forces", "Colliders and collision detection", "Raycasting", "Triggers vs colliders", "Physics layers and masks", "Joints and constraints", "Basic game math (vectors, dot product, cross product)"], tools: [{ name: "Unity Physics", color: "#000000", url: "https://docs.unity3d.com/Manual/PhysicsSection.html", note: "Built-in physics" }, { name: "Box2D", color: "#336791", url: "https://box2d.org", note: "2D physics engine" }, { name: "Godot Physics", color: "#478CBF", url: "https://docs.godotengine.org/en/stable/tutorials/physics", note: "Integrated physics" }], timeNeeded: "2-3 weeks", tip: "💡 Build a simple pinball game to deeply understand physics interactions." },
      { step: 5, icon: "🎭", title: "Game UI & Menus", tag: "UI", tagColor: "#10B981", why: "Every game needs menus, HUDs, health bars, inventory screens and score displays. Game UI is completely different from web UI.", whatYouNeed: ["Canvas and UI systems", "Health bars and progress bars", "Main menu and pause menu", "HUD elements (score, lives, ammo)", "Inventory systems", "Dialogue systems", "UI animations and transitions"], tools: [{ name: "Unity UI Toolkit", color: "#000000", url: "https://docs.unity3d.com/Manual/UIElements.html", note: "Modern Unity UI" }, { name: "Godot Control Nodes", color: "#478CBF", url: "https://docs.godotengine.org/en/stable/tutorials/ui", note: "Godot UI system" }, { name: "TextMeshPro", color: "#000000", url: "https://docs.unity3d.com/Manual/com.unity.textmeshpro.html", note: "Advanced text rendering" }], timeNeeded: "2-3 weeks", tip: "💡 Study UI from games you love. Screenshot their menus and try to recreate them." },
      { step: 6, icon: "🔊", title: "Audio & Sound Design", tag: "Polish", tagColor: "#6366F1", why: "Sound is 50% of the game experience. Good audio makes a mediocre game feel great. Bad audio makes a great game feel cheap.", whatYouNeed: ["Background music implementation", "Sound effects triggering", "Audio mixing and volume control", "3D positional audio", "Audio state machines (ambient, combat, quiet)", "Dynamic music systems"], tools: [{ name: "FMOD", color: "#000000", url: "https://fmod.com", note: "Professional audio middleware" }, { name: "Wwise", color: "#00B3E3", url: "https://audiokinetic.com/wwise", note: "AAA audio tool" }, { name: "Audacity", color: "#0000CC", url: "https://audacityteam.org", note: "Free audio editing" }, { name: "freesound.org", color: "#FF6600", url: "https://freesound.org", note: "Free sound effects" }], timeNeeded: "1-2 weeks", tip: "💡 Add sound effects to your existing projects immediately. The transformation is shocking — it feels like a different game." },
      { step: 7, icon: "🌍", title: "3D Game Development", tag: "Advanced", tagColor: "#14B8A6", why: "3D games open up an entirely new dimension of game design possibilities — open worlds, first-person shooters, racing games and more.", whatYouNeed: ["3D coordinate system and transforms", "3D models, meshes and materials", "Lighting (directional, point, spotlights)", "Cameras (first person, third person, orbit)", "3D character movement and animation", "Level design in 3D", "Shaders and visual effects basics"], tools: [{ name: "Blender", color: "#F5792A", url: "https://blender.org", note: "Free 3D modeling" }, { name: "Unity 3D", color: "#000000", url: "https://unity.com", note: "3D game development" }, { name: "Unreal Engine", color: "#313131", url: "https://unrealengine.com", note: "Best 3D visuals" }, { name: "Mixamo", color: "#FF0000", url: "https://mixamo.com", note: "Free 3D character animations" }], timeNeeded: "6-8 weeks", tip: "💡 Use Mixamo for free character animations. Creating animations from scratch is extremely time-consuming." },
      { step: 8, icon: "🌐", title: "Multiplayer & Networking", tag: "Advanced", tagColor: "#F97316", why: "Multiplayer games are the most engaging and profitable. Understanding networking lets you build games that millions of players enjoy together.", whatYouNeed: ["Client-server vs peer-to-peer architecture", "Network synchronization (position, state)", "Lag compensation and prediction", "Lobby and matchmaking systems", "Authoritative server design", "Cheat prevention basics"], tools: [{ name: "Photon", color: "#007EE5", url: "https://photonengine.com", note: "Multiplayer SDK for Unity" }, { name: "Mirror", color: "#000000", url: "https://mirror-networking.com", note: "Free Unity networking" }, { name: "Nakama", color: "#32A1E5", url: "https://heroiclabs.com/nakama", note: "Open source game server" }, { name: "PlayFab", color: "#0078D4", url: "https://playfab.com", note: "Microsoft game backend" }], timeNeeded: "4-6 weeks", tip: "💡 Start with Photon for multiplayer. It handles the hard networking code so you focus on gameplay." },
      { step: 9, icon: "⚡", title: "Performance Optimization", tag: "Polish", tagColor: "#A78BFA", why: "A game that runs at 15fps is unplayable. Optimization ensures your game runs smoothly on the target hardware, especially mobile devices.", whatYouNeed: ["Profiling tools and reading performance data", "Draw call batching and atlasing", "Level of Detail (LOD) systems", "Object pooling (reuse objects instead of destroying)", "Occlusion culling", "Memory management and garbage collection", "Mobile optimization specifics"], tools: [{ name: "Unity Profiler", color: "#000000", url: "https://docs.unity3d.com/Manual/Profiler.html", note: "Built-in performance tool" }, { name: "GPU Instancing", color: "#000000", url: "https://docs.unity3d.com/Manual/GPUInstancing.html", note: "Batch rendering" }, { name: "Godot Debugger", color: "#478CBF", url: "https://docs.godotengine.org/en/stable/tutorials/debug", note: "Built-in profiler" }], timeNeeded: "2-3 weeks", tip: "💡 Profile BEFORE optimizing. Never guess where the performance bottleneck is — measure it." },
      { step: 10, icon: "🚀", title: "Publishing & Distribution", tag: "Launch", tagColor: "#F97316", why: "A game no one can play is a hobby. Publishing puts your game in players hands and can generate revenue.", whatYouNeed: ["Platform requirements (PC, mobile, console)", "Game store submission process", "App store optimization (ASO)", "Monetization strategies (paid, free-to-play, ads, IAP)", "Patch and update management", "Community management basics", "Press kit and marketing materials"], tools: [{ name: "Steam", color: "#1B2838", url: "https://store.steampowered.com", note: "PC game distribution" }, { name: "Google Play Console", color: "#3DDC84", url: "https://play.google.com/console", note: "Android distribution" }, { name: "App Store Connect", color: "#1575F9", url: "https://appstoreconnect.apple.com", note: "iOS distribution" }, { name: "itch.io", color: "#FA5C5C", url: "https://itch.io", note: "Indie game platform" }], timeNeeded: "2-3 weeks", tip: "💡 Release on itch.io first. It is instant, free and the indie community there is incredibly supportive." }
    ]
  },
  "ai-ml": {
    id: "ai-ml",
    domain: "AI / ML Engineering",
    icon: "🤖",
    description: "Deep learning, neural networks, and model training",
    totalTools: 36,
    totalSkills: 55,
    estimatedTime: "8-12 months",
    accentColor: "#8B5CF6",
    difficultyBadge: "Advanced",
    steps: [
      {
        step: 1,
        icon: "🧠",
        title: "Mathematics & Statistics Foundations",
        tag: "Foundation",
        tagColor: "#06B6D4",
        why: "AI and ML are built on math. Without understanding the underlying mathematics, you will only be able to copy code — not understand or improve it.",
        whatYouNeed: ["Linear algebra (vectors, matrices)", "Calculus (derivatives, gradients)", "Probability and statistics", "Descriptive statistics (mean, median, std deviation)", "Hypothesis testing"],
        tools: [{ name: "Python", color: "#3776AB", url: "https://python.org", note: "Primary AI language" }, { name: "NumPy", color: "#013243", url: "https://numpy.org", note: "Math operations" }, { name: "Khan Academy", color: "#14BF96", url: "https://khanacademy.org", note: "Free math courses" }],
        timeNeeded: "4-6 weeks",
        tip: "💡 You don't need to be a math genius. Focus on intuition over proofs."
      },
      {
        step: 2,
        icon: "🐍",
        title: "Python for Data Science",
        tag: "Foundation",
        tagColor: "#3776AB",
        why: "Python is the language of AI. Every major AI framework, library, and tool is built in Python.",
        whatYouNeed: ["Python fundamentals", "NumPy for numerical computing", "Pandas for data manipulation", "Matplotlib & Seaborn for visualization", "Jupyter Notebooks"],
        tools: [{ name: "Python", color: "#3776AB", url: "https://python.org", note: "Core language" }, { name: "Jupyter", color: "#F37626", url: "https://jupyter.org", note: "Interactive notebooks" }, { name: "Pandas", color: "#150458", url: "https://pandas.pydata.org", note: "Data manipulation" }, { name: "NumPy", color: "#013243", url: "https://numpy.org", note: "Numerical computing" }],
        timeNeeded: "3-4 weeks",
        tip: "💡 Kaggle has free Python and Pandas courses with practice datasets. Start there."
      },
      {
        step: 3,
        icon: "📊",
        title: "Data Collection & Processing",
        tag: "Data",
        tagColor: "#10B981",
        why: "AI models are only as good as the data they are trained on. Learning to collect, clean and prepare data is the most important practical skill in ML.",
        whatYouNeed: ["Data cleaning and handling missing values", "Feature engineering", "Data normalization and scaling", "Train/test/validation splits", "Handling imbalanced datasets", "Web scraping basics"],
        tools: [{ name: "Pandas", color: "#150458", url: "https://pandas.pydata.org", note: "Data cleaning" }, { name: "Scikit-learn", color: "#F89939", url: "https://scikit-learn.org", note: "Preprocessing tools" }, { name: "BeautifulSoup", color: "#3776AB", url: "https://beautiful-soup-4.readthedocs.io", note: "Web scraping" }, { name: "Kaggle Datasets", color: "#20BEFF", url: "https://kaggle.com/datasets", note: "Free datasets" }],
        timeNeeded: "2-3 weeks",
        tip: "💡 Data scientists spend 80% of their time on data cleaning. Get comfortable with messy data."
      },
      {
        step: 4,
        icon: "🤖",
        title: "Classical Machine Learning",
        tag: "Core ML",
        tagColor: "#F59E0B",
        why: "Before deep learning, master the classical algorithms. These are faster, more interpretable, and often better for structured/tabular data.",
        whatYouNeed: ["Linear and logistic regression", "Decision trees and random forests", "Support Vector Machines", "K-Nearest Neighbors", "Clustering (K-Means)", "Model evaluation metrics (accuracy, precision, recall)", "Cross-validation"],
        tools: [{ name: "Scikit-learn", color: "#F89939", url: "https://scikit-learn.org", note: "Classical ML library" }, { name: "XGBoost", color: "#189BCD", url: "https://xgboost.readthedocs.io", note: "Best for tabular data" }, { name: "Matplotlib", color: "#11557C", url: "https://matplotlib.org", note: "Visualize results" }],
        timeNeeded: "4-5 weeks",
        tip: "💡 XGBoost wins most Kaggle competitions on tabular data. Learn it well."
      },
      {
        step: 5,
        icon: "🧬",
        title: "Deep Learning & Neural Networks",
        tag: "Deep Learning",
        tagColor: "#EC4899",
        why: "Neural networks power image recognition, language models, and speech systems. This is the core of modern AI.",
        whatYouNeed: ["What is a neural network", "Layers, weights and activations", "Backpropagation and gradient descent", "Convolutional Neural Networks (CNN) for images", "Recurrent Neural Networks (RNN) for sequences", "Overfitting and regularization techniques"],
        tools: [{ name: "TensorFlow", color: "#FF6F00", url: "https://tensorflow.org", note: "Google's ML framework" }, { name: "PyTorch", color: "#EE4C2C", url: "https://pytorch.org", note: "Best for research" }, { name: "Keras", color: "#D00000", url: "https://keras.io", note: "High-level deep learning" }],
        timeNeeded: "6-8 weeks",
        tip: "💡 Use PyTorch — it is easier to debug and is the standard in research and industry."
      },
      {
        step: 6,
        icon: "💬",
        title: "Natural Language Processing (NLP)",
        tag: "Specialization",
        tagColor: "#8B5CF6",
        why: "NLP powers chatbots, translation, sentiment analysis, and all large language models. It is the fastest-growing area of AI.",
        whatYouNeed: ["Text preprocessing (tokenization, stemming)", "Word embeddings (Word2Vec, GloVe)", "Transformers architecture", "BERT and GPT model families", "Fine-tuning pre-trained models", "Prompt engineering"],
        tools: [{ name: "Hugging Face", color: "#FFD21E", url: "https://huggingface.co", note: "Pre-trained models hub" }, { name: "spaCy", color: "#09A3D5", url: "https://spacy.io", note: "NLP library" }, { name: "LangChain", color: "#1C3C3C", url: "https://langchain.com", note: "LLM application framework" }, { name: "OpenAI API", color: "#000000", url: "https://platform.openai.com", note: "GPT-4 API" }],
        timeNeeded: "4-6 weeks",
        tip: "💡 Start with the Hugging Face transformers library. It gives you access to thousands of pre-trained models instantly."
      },
      {
        step: 7,
        icon: "👁️",
        title: "Computer Vision",
        tag: "Specialization",
        tagColor: "#14B8A6",
        why: "Computer vision allows AI to understand images and video — powering face recognition, medical imaging, autonomous vehicles and more.",
        whatYouNeed: ["Image preprocessing", "CNN architectures (ResNet, VGG, EfficientNet)", "Object detection (YOLO, Faster R-CNN)", "Image segmentation", "Transfer learning for vision"],
        tools: [{ name: "OpenCV", color: "#5C3EE8", url: "https://opencv.org", note: "Computer vision library" }, { name: "YOLO", color: "#00FFFF", url: "https://ultralytics.com", note: "Real-time object detection" }, { name: "Roboflow", color: "#6706CE", url: "https://roboflow.com", note: "Vision dataset tools" }],
        timeNeeded: "4-5 weeks",
        tip: "💡 Use transfer learning instead of training from scratch. Fine-tune ResNet on your dataset."
      },
      {
        step: 8,
        icon: "🏗️",
        title: "MLOps — Building ML Pipelines",
        tag: "Production",
        tagColor: "#F97316",
        why: "Getting a model to 90% accuracy in a notebook is easy. Getting it to run reliably in production serving real users is hard. MLOps bridges this gap.",
        whatYouNeed: ["Model versioning and experiment tracking", "Feature stores", "Model serving and inference APIs", "Monitoring model performance in production", "Data pipeline automation", "A/B testing models"],
        tools: [{ name: "MLflow", color: "#0194E2", url: "https://mlflow.org", note: "Experiment tracking" }, { name: "Weights & Biases", color: "#FFBE00", url: "https://wandb.ai", note: "ML experiment tracking" }, { name: "FastAPI", color: "#009688", url: "https://fastapi.tiangolo.com", note: "Serve ML models as API" }, { name: "Docker", color: "#2496ED", url: "https://docker.com", note: "Containerize models" }],
        timeNeeded: "3-4 weeks",
        tip: "💡 Use FastAPI to wrap your trained model as an API. This is how ML models get used in real products."
      },
      {
        step: 9,
        icon: "☁️",
        title: "Cloud AI Services",
        tag: "Cloud",
        tagColor: "#6366F1",
        why: "Cloud providers offer powerful pre-built AI services — image recognition, speech-to-text, translation — that save months of training time.",
        whatYouNeed: ["Cloud ML platforms overview", "Using pre-trained cloud AI APIs", "Training models on cloud GPUs", "Cost optimization for ML workloads"],
        tools: [{ name: "Google Colab", color: "#F9AB00", url: "https://colab.research.google.com", note: "Free GPU notebooks" }, { name: "AWS SageMaker", color: "#FF9900", url: "https://aws.amazon.com/sagemaker", note: "ML platform" }, { name: "Vertex AI", color: "#4285F4", url: "https://cloud.google.com/vertex-ai", note: "Google ML platform" }, { name: "Replicate", color: "#000000", url: "https://replicate.com", note: "Run models via API" }],
        timeNeeded: "2 weeks",
        tip: "💡 Google Colab gives you free GPU access. Use it for training before paying for cloud compute."
      },
      {
        step: 10,
        icon: "🚀",
        title: "Deploy & Ship AI Products",
        tag: "Launch",
        tagColor: "#F97316",
        why: "An AI model sitting in a Jupyter notebook helps no one. Deploying it makes it accessible to real users.",
        whatYouNeed: ["Model optimization (quantization, pruning)", "Inference speed optimization", "Building APIs around models", "Frontend integration", "Monitoring and retraining strategy"],
        tools: [{ name: "Hugging Face Spaces", color: "#FFD21E", url: "https://huggingface.co/spaces", note: "Free model hosting" }, { name: "Streamlit", color: "#FF4B4B", url: "https://streamlit.io", note: "Build ML apps fast" }, { name: "Gradio", color: "#F97316", url: "https://gradio.app", note: "Quick ML demos" }, { name: "Vercel AI SDK", color: "#000000", url: "https://sdk.vercel.ai", note: "AI in web apps" }],
        timeNeeded: "2-3 weeks",
        tip: "💡 Use Streamlit or Gradio to build a quick demo of your model. Showing a working demo is worth 100 slides."
      }
    ]
  },
  "full-stack": {
    id: "full-stack",
    domain: "Full Stack Development",
    icon: "💼",
    description: "Mastering frontend, backend, databases, and deployment",
    totalTools: 41,
    totalSkills: 68,
    estimatedTime: "8-12 months",
    accentColor: "#8B5CF6",
    difficultyBadge: "Advanced",
    steps: [
      { step: 1, icon: "🏗️", title: "HTML, CSS & JavaScript Basics", tag: "Foundation", tagColor: "#E34F26", why: "Full stack starts with the web fundamentals. Every framework is built on top of these three. Without a solid foundation, everything else is shaky.", whatYouNeed: ["HTML5 semantic structure", "CSS3 layouts (Flexbox, Grid)", "Responsive design", "JavaScript fundamentals (ES6+)", "DOM manipulation", "Async JavaScript (fetch, promises, async/await)", "Version control with Git and GitHub"], tools: [{ name: "HTML5", color: "#E34F26", url: "https://developer.mozilla.org/en-US/docs/Web/HTML", note: "Structure" }, { name: "CSS3", color: "#1572B6", url: "https://developer.mozilla.org/en-US/docs/Web/CSS", note: "Styling" }, { name: "JavaScript", color: "#F7DF1E", url: "https://javascript.info", note: "Interactivity" }, { name: "VS Code", color: "#007ACC", url: "https://code.visualstudio.com", note: "Code editor" }, { name: "Git", color: "#F05032", url: "https://git-scm.com", note: "Version control" }], timeNeeded: "6-8 weeks", tip: "💡 Build 5 static HTML/CSS projects before moving to JavaScript. The fundamentals are worth the time." },
      { step: 2, icon: "⚛️", title: "Frontend Framework — React", tag: "Frontend", tagColor: "#61DAFB", why: "React is the most in-demand frontend skill. It powers Facebook, Instagram, Airbnb and thousands of other products.", whatYouNeed: ["Components and JSX", "Props and state", "React hooks (useState, useEffect, useContext, useRef)", "React Router for navigation", "Component lifecycle", "Forms and controlled inputs", "Error boundaries"], tools: [{ name: "React", color: "#61DAFB", url: "https://react.dev", note: "Frontend framework" }, { name: "Vite", color: "#646CFF", url: "https://vitejs.dev", note: "Build tool" }, { name: "React Router", color: "#CA4245", url: "https://reactrouter.com", note: "Client routing" }, { name: "React DevTools", color: "#61DAFB", url: "https://react.dev/learn/react-developer-tools", note: "Debugging" }], timeNeeded: "5-6 weeks", tip: "💡 Build a todo app, then a weather app, then a movie search app. Each teaches different React concepts." },
      { step: 3, icon: "💅", title: "Styling & UI Libraries", tag: "Frontend", tagColor: "#06B6D4", why: "Professional UIs require more than raw CSS. Modern styling tools make building beautiful, responsive interfaces dramatically faster.", whatYouNeed: ["Tailwind CSS utility classes", "Component libraries", "Theming and dark mode", "CSS variables and design tokens", "Responsive design patterns", "Animation libraries"], tools: [{ name: "Tailwind CSS", color: "#06B6D4", url: "https://tailwindcss.com", note: "Utility CSS framework" }, { name: "shadcn/ui", color: "#000000", url: "https://ui.shadcn.com", note: "Component library" }, { name: "Framer Motion", color: "#FF0055", url: "https://framer.com/motion", note: "Animations" }], timeNeeded: "2-3 weeks", tip: "💡 Learn Tailwind CSS — it is the fastest way to build professional UI once you know it." },
      { step: 4, icon: "⚙️", title: "Backend Framework — Node.js", tag: "Backend", tagColor: "#68A063", why: "Node.js lets you use JavaScript on the server — the same language as your frontend. This makes full stack JavaScript development possible.", whatYouNeed: ["Node.js runtime fundamentals", "NPM and package management", "Express.js for API routing", "Middleware concept and usage", "Environment variables", "Error handling patterns", "File system operations", "Building and documenting REST APIs"], tools: [{ name: "Node.js", color: "#68A063", url: "https://nodejs.org", note: "JavaScript runtime" }, { name: "Express.js", color: "#000000", url: "https://expressjs.com", note: "Web framework" }, { name: "Nodemon", color: "#76D04B", url: "https://nodemon.io", note: "Auto-reload dev server" }, { name: "Postman", color: "#FF6C37", url: "https://postman.com", note: "API testing" }], timeNeeded: "4-5 weeks", tip: "💡 Build a complete REST API for a blog — create, read, update, delete posts. This covers all core Express concepts." },
      { step: 5, icon: "🗄️", title: "Databases — SQL & NoSQL", tag: "Backend", tagColor: "#336791", why: "Every application needs to store data. Full stack developers must know both relational and document databases to choose the right tool for each project.", whatYouNeed: ["SQL fundamentals (SELECT, INSERT, UPDATE, DELETE, JOINs)", "PostgreSQL and relational design", "MongoDB and document data modeling", "ORMs — Prisma for Node.js", "Database relationships and foreign keys", "CRUD operations from Node.js", "Connection pooling and environment config"], tools: [{ name: "PostgreSQL", color: "#336791", url: "https://postgresql.org", note: "Relational database" }, { name: "MongoDB", color: "#47A248", url: "https://mongodb.com", note: "Document database" }, { name: "Prisma", color: "#2D3748", url: "https://prisma.io", note: "Node.js ORM" }, { name: "Mongoose", color: "#880000", url: "https://mongoosejs.com", note: "MongoDB ODM" }, { name: "TablePlus", color: "#F6A623", url: "https://tableplus.com", note: "DB GUI" }], timeNeeded: "4-5 weeks", tip: "💡 Learn PostgreSQL + Prisma. This combination is the most productive and type-safe stack for Node.js backends." },
      { step: 6, icon: "🔐", title: "Authentication & Authorization", tag: "Security", tagColor: "#EC4899", why: "User accounts and protected routes are in almost every application. Getting authentication wrong is a critical security risk.", whatYouNeed: ["Password hashing with bcrypt", "JWT token authentication", "HTTP-only cookies for session management", "Role-based access control (RBAC)", "OAuth and social login", "Protected API routes and middleware", "Refresh token patterns"], tools: [{ name: "bcrypt", color: "#003B57", url: "https://npmjs.com/package/bcrypt", note: "Password hashing" }, { name: "JSON Web Tokens", color: "#D63AFF", url: "https://jwt.io", note: "Token auth" }, { name: "Clerk", color: "#6C47FF", url: "https://clerk.com", note: "Auth as a service" }, { name: "NextAuth.js", color: "#CC3534", url: "https://authjs.dev", note: "Next.js auth" }], timeNeeded: "3-4 weeks", tip: "💡 Use Clerk for your first few projects to understand what production auth looks like. Then build it yourself to understand how it works." },
      { step: 7, icon: "⚡", title: "State Management & Data Fetching", tag: "Advanced Frontend", tagColor: "#FF4154", why: "Complex applications need to manage and synchronize data between the server and UI efficiently. Poor state management causes subtle bugs that are very hard to debug.", whatYouNeed: ["Server state vs client state distinction", "React Query for server state", "Zustand for global client state", "Optimistic updates", "Caching and stale data strategies", "Real-time data with WebSockets"], tools: [{ name: "TanStack Query", color: "#FF4154", url: "https://tanstack.com/query", note: "Server state management" }, { name: "Zustand", color: "#F97316", url: "https://zustand-demo.pmnd.rs", note: "Client state" }, { name: "Socket.io", color: "#010101", url: "https://socket.io", note: "Real-time communication" }, { name: "SWR", color: "#000000", url: "https://swr.vercel.app", note: "Data fetching hooks" }], timeNeeded: "2-3 weeks", tip: "💡 React Query solves 90% of state management problems in full stack apps. Learn it before Zustand." },
      { step: 8, icon: "🚀", title: "Next.js — Full Stack Framework", tag: "Full Stack", tagColor: "#000000", why: "Next.js combines frontend and backend in one framework. It handles routing, SSR, API routes and deployment in a single cohesive package.", whatYouNeed: ["App Router and file-based routing", "Server Components vs Client Components", "Server Actions for form handling", "API routes and middleware", "Static and dynamic rendering", "Image optimization", "Metadata and SEO"], tools: [{ name: "Next.js", color: "#000000", url: "https://nextjs.org", note: "Full stack React framework" }, { name: "Vercel", color: "#000000", url: "https://vercel.com", note: "Best Next.js hosting" }, { name: "TypeScript", color: "#3178C6", url: "https://typescriptlang.org", note: "Type safety" }], timeNeeded: "4-5 weeks", tip: "💡 Next.js with TypeScript and Prisma is the most productive full stack setup available today." },
      { step: 9, icon: "🧪", title: "Testing — Frontend & Backend", tag: "Quality", tagColor: "#A78BFA", why: "Untested code breaks in production. Full stack developers must test both their UI components and API endpoints.", whatYouNeed: ["Unit testing with Vitest or Jest", "React component testing with Testing Library", "API endpoint testing with Supertest", "End-to-end testing with Playwright", "Mocking external dependencies", "Test coverage targets"], tools: [{ name: "Vitest", color: "#646CFF", url: "https://vitest.dev", note: "Unit testing" }, { name: "Testing Library", color: "#E33332", url: "https://testing-library.com", note: "Component testing" }, { name: "Playwright", color: "#2EAD33", url: "https://playwright.dev", note: "E2E testing" }, { name: "Supertest", color: "#68A063", url: "https://npmjs.com/package/supertest", note: "API testing" }], timeNeeded: "2-3 weeks", tip: "💡 Write tests for your authentication flow and critical user journeys first — these break most often." },
      { step: 10, icon: "🌍", title: "Deployment, DevOps & Monitoring", tag: "Launch", tagColor: "#F97316", why: "Your application needs to be available 24/7 worldwide. Deployment and monitoring ensure users always have a fast, reliable experience.", whatYouNeed: ["Environment management (dev, staging, production)", "Docker for consistent deployments", "CI/CD with GitHub Actions", "Environment variables and secrets management", "Database migrations in production", "Error monitoring and alerting", "Analytics and performance monitoring"], tools: [{ name: "Vercel", color: "#000000", url: "https://vercel.com", note: "Frontend deployment" }, { name: "Railway", color: "#B333FF", url: "https://railway.app", note: "Backend deployment" }, { name: "Docker", color: "#2496ED", url: "https://docker.com", note: "Containerization" }, { name: "GitHub Actions", color: "#2088FF", url: "https://github.com/features/actions", note: "CI/CD" }, { name: "Sentry", color: "#362D59", url: "https://sentry.io", note: "Error monitoring" }], timeNeeded: "2-3 weeks", tip: "💡 Deploy every project you build, no matter how small. The deployment process teaches you things no tutorial covers." }
    ]
  },
  "ui-ux-design": {
    id: "ui-ux-design",
    domain: "UI/UX Design",
    icon: "🎨",
    description: "Wireframes, prototypes, user psychology and visual design",
    totalTools: 38,
    totalSkills: 71,
    estimatedTime: "5-7 months",
    accentColor: "#EC4899",
    difficultyBadge: "Beginner Friendly",
    steps: [
      { step: 1, icon: "🎨", title: "Design Fundamentals", tag: "Foundation", tagColor: "#06B6D4", why: "Design principles are the grammar of visual communication. Without them, every design decision is a guess. With them, you can justify every choice and consistently create better work.", whatYouNeed: ["Elements of design (line, shape, form, space, texture)", "Principles of design (balance, contrast, alignment, repetition, proximity)", "Gestalt principles — how humans perceive visual groups", "Visual hierarchy — guiding the eye", "Grid systems", "White space and breathing room"], tools: [{ name: "Figma", color: "#F24E1E", url: "https://figma.com", note: "Industry standard design tool" }, { name: "Canva", color: "#00C4CC", url: "https://canva.com", note: "Quick design exploration" }, { name: "Dribbble", color: "#EA4C89", url: "https://dribbble.com", note: "Design inspiration" }], timeNeeded: "2-3 weeks", tip: "💡 Study Refactoring UI by Adam Wathan and Steve Schoger. It is the best practical design guide for people who want to make better interfaces." },
      { step: 2, icon: "🎨", title: "Typography & Color Theory", tag: "Foundation", tagColor: "#EC4899", why: "Typography and color are the two most powerful tools in a designer's arsenal. They communicate emotion, hierarchy and brand identity before users read a single word.", whatYouNeed: ["Type anatomy and terminology", "Font pairing principles", "Font weight and hierarchy", "Line height, letter spacing and readability", "Color models (RGB, HSL, hex)", "Color psychology and meaning", "Creating accessible color palettes (WCAG contrast ratios)", "Dark mode color systems"], tools: [{ name: "Google Fonts", color: "#4285F4", url: "https://fonts.google.com", note: "Free font library" }, { name: "Coolors", color: "#7C3AED", url: "https://coolors.co", note: "Color palette generator" }, { name: "Colour Contrast Checker", color: "#333333", url: "https://colourcontrast.cc", note: "Accessibility checker" }, { name: "Fontpair", color: "#000000", url: "https://fontpair.co", note: "Font pairing inspiration" }], timeNeeded: "2-3 weeks", tip: "💡 Never use more than 2 font families in a design. One for headings, one for body text — that is all you need." },
      { step: 3, icon: "✏️", title: "Wireframing", tag: "Core Skill", tagColor: "#8B5CF6", why: "Wireframes let you solve layout and navigation problems before investing time in visual design. Changing a wireframe takes minutes — changing a finished design takes hours.", whatYouNeed: ["Low fidelity vs mid vs high fidelity wireframes", "Information architecture — organizing content", "User flow diagramming", "Navigation patterns (tabs, sidebar, bottom nav)", "Content priority and layout decisions", "Sketching wireframes on paper first"], tools: [{ name: "Figma", color: "#F24E1E", url: "https://figma.com", note: "Digital wireframing" }, { name: "Whimsical", color: "#A855F7", url: "https://whimsical.com", note: "Quick wireframes" }, { name: "Balsamiq", color: "#CC0000", url: "https://balsamiq.com", note: "Low-fi wireframes" }, { name: "Miro", color: "#FFD02F", url: "https://miro.com", note: "Collaborative whiteboarding" }], timeNeeded: "2-3 weeks", tip: "💡 Start every design project with paper sketches. The lack of detail forces you to focus on layout and flow, not colors." },
      { step: 4, icon: "🖼️", title: "Figma Mastery", tag: "Core Skill", tagColor: "#F24E1E", why: "Figma is the industry standard design tool used by virtually every design team in the world. Deep Figma skills make you dramatically faster and more collaborative.", whatYouNeed: ["Frames, groups and layers", "Auto Layout for responsive designs", "Components and variants", "Styles (color, text, effect styles)", "Prototyping and interactions", "Dev mode for developer handoff", "Figma plugins ecosystem", "Collaborative design and comments"], tools: [{ name: "Figma", color: "#F24E1E", url: "https://figma.com", note: "Core design tool" }, { name: "FigJam", color: "#F24E1E", url: "https://figma.com/figjam", note: "Whiteboarding in Figma" }, { name: "Figma Community", color: "#F24E1E", url: "https://figma.com/community", note: "Free templates & plugins" }], timeNeeded: "4-5 weeks", tip: "💡 Master Auto Layout before anything else in Figma. It is the most powerful feature and makes responsive design effortless." },
      { step: 5, icon: "🔬", title: "User Research", tag: "UX", tagColor: "#10B981", why: "Design without research is guessing. User research replaces assumptions with evidence, leading to products people actually want to use.", whatYouNeed: ["Research methods (interviews, surveys, observation)", "Writing discussion guides for interviews", "Affinity mapping and synthesizing insights", "Personas and user archetypes", "Jobs To Be Done framework", "Competitive analysis", "Analytics as research data"], tools: [{ name: "Maze", color: "#FF6154", url: "https://maze.co", note: "Usability testing platform" }, { name: "UserTesting", color: "#FF6C2F", url: "https://usertesting.com", note: "Remote user testing" }, { name: "Hotjar", color: "#FF3C00", url: "https://hotjar.com", note: "Heatmaps & recordings" }, { name: "Typeform", color: "#262627", url: "https://typeform.com", note: "User surveys" }], timeNeeded: "2-3 weeks", tip: "💡 Talk to 5 users. Just 5 conversations will reveal more actionable insights than weeks of assumptions." },
      { step: 6, icon: "🎬", title: "Prototyping & Micro-interactions", tag: "Core Skill", tagColor: "#F59E0B", why: "Static designs do not communicate the full experience. Prototypes let you test and communicate interactions before writing a single line of code.", whatYouNeed: ["Figma prototyping basics (links, overlays, transitions)", "Micro-interaction design principles", "Animation timing and easing curves", "Loading states and skeleton screens", "Empty states and error states", "Mobile gesture design (swipe, pinch, tap hold)"], tools: [{ name: "Figma Prototyping", color: "#F24E1E", url: "https://figma.com", note: "Interactive prototypes" }, { name: "Principle", color: "#6C47FF", url: "https://principleformac.com", note: "Advanced animations (Mac)" }, { name: "ProtoPie", color: "#FF5D5D", url: "https://protopie.io", note: "Complex interactions" }, { name: "LottieFiles", color: "#00DDB3", url: "https://lottiefiles.com", note: "Animation library" }], timeNeeded: "2-3 weeks", tip: "💡 Always design empty states and error states. They are often forgotten but are the most important moments in user experience." },
      { step: 7, icon: "🧱", title: "Design Systems", tag: "Advanced", tagColor: "#6366F1", why: "Design systems make teams faster and products more consistent. They are the difference between a startup portfolio and enterprise-grade design work.", whatYouNeed: ["Component library architecture", "Spacing and sizing scales (4px, 8px grid)", "Color token systems", "Typography scales", "Component states (default, hover, active, disabled, error)", "Icon systems", "Documentation for developers", "Design system governance"], tools: [{ name: "Figma", color: "#F24E1E", url: "https://figma.com", note: "Design system creation" }, { name: "Storybook", color: "#FF4785", url: "https://storybook.js.org", note: "Component documentation" }, { name: "Zeroheight", color: "#5469D4", url: "https://zeroheight.com", note: "Design system docs" }, { name: "Tokens Studio", color: "#F24E1E", url: "https://tokens.studio", note: "Design tokens in Figma" }], timeNeeded: "3-4 weeks", tip: "💡 Study the design systems of Atlassian (Atlaskit), IBM (Carbon) and Shopify (Polaris). They are publicly documented and incredibly instructive." },
      { step: 8, icon: "🧪", title: "Usability Testing", tag: "UX", tagColor: "#14B8A6", why: "You cannot see your own design's problems clearly because you built it. Usability testing shows you exactly where real users get confused.", whatYouNeed: ["Planning a usability test", "Writing task scenarios for users", "Moderated vs unmoderated testing", "Think-aloud protocol", "Analyzing test recordings", "Heatmaps and click tracking", "Identifying usability issues and severity rating"], tools: [{ name: "Maze", color: "#FF6154", url: "https://maze.co", note: "Unmoderated testing" }, { name: "Lookback", color: "#6C47FF", url: "https://lookback.com", note: "Moderated sessions" }, { name: "Hotjar", color: "#FF3C00", url: "https://hotjar.com", note: "Heatmaps & session recording" }, { name: "Microsoft Clarity", color: "#0078D4", url: "https://clarity.microsoft.com", note: "Free heatmaps & recordings" }], timeNeeded: "2 weeks", tip: "💡 Microsoft Clarity is completely free and gives you heatmaps and session recordings for any website. Use it on everything you build." },
      { step: 9, icon: "🤝", title: "Developer Handoff", tag: "Collaboration", tagColor: "#F97316", why: "The best design in the world means nothing if developers cannot implement it accurately. Developer handoff is where design becomes product.", whatYouNeed: ["Figma Dev Mode for specifications", "Annotation and redlining", "Asset export (SVG, PNG, icons)", "Writing design specifications", "Communicating spacing and layout to developers", "CSS property awareness", "Responsive design documentation", "Working in sprints with development teams"], tools: [{ name: "Figma Dev Mode", color: "#F24E1E", url: "https://figma.com/developers", note: "Design specs for devs" }, { name: "Zeplin", color: "#FDBD39", url: "https://zeplin.io", note: "Design handoff platform" }, { name: "Avocode", color: "#6C2BD9", url: "https://avocode.com", note: "Design inspection" }], timeNeeded: "1-2 weeks", tip: "💡 Learn basic CSS — you do not need to code, but knowing what is easy vs hard to implement makes you a 10x better designer." },
      { step: 10, icon: "💼", title: "Portfolio & Career", tag: "Career", tagColor: "#F97316", why: "In design, your portfolio IS your resume. No portfolio means no job — regardless of your skills. A great portfolio opens doors that credentials cannot.", whatYouNeed: ["Selecting your best 3-5 case studies", "Writing the design process narrative (problem, research, solution, outcome)", "Portfolio website design and development", "Presenting design decisions confidently", "Design interview preparation", "Finding first clients or junior roles", "Building a design community presence"], tools: [{ name: "Framer", color: "#0055FF", url: "https://framer.com", note: "Best portfolio builder for designers" }, { name: "Webflow", color: "#146EF5", url: "https://webflow.com", note: "No-code portfolio site" }, { name: "Notion", color: "#000000", url: "https://notion.so", note: "Simple portfolio alternative" }, { name: "Behance", color: "#1769FF", url: "https://behance.net", note: "Design portfolio network" }, { name: "Dribbble", color: "#EA4C89", url: "https://dribbble.com", note: "Design community" }], timeNeeded: "3-4 weeks", tip: "💡 Quality over quantity. Three excellent case studies that show your thinking beat ten screenshots with no context every single time." }
    ]
  },
  "web3-blockchain": {
    id: "web3-blockchain",
    domain: "Web3 & Blockchain",
    icon: "⛓️",
    description: "Smart contracts, dApps, and decentralized protocols",
    totalTools: 12,
    totalSkills: 15,
    estimatedTime: "6-8 months",
    accentColor: "#3B82F6",
    difficultyBadge: "Advanced",
    steps: [
      { step: 1, icon: "🧠", title: "Blockchain Fundamentals", tag: "Foundation", tagColor: "#06B6D4", why: "Understanding consensus and cryptography is essential before writing smart contracts.", whatYouNeed: ["Cryptography basics", "Consensus mechanisms (PoW, PoS)", "Wallets and key management"], tools: [{ name: "Ethereum Org", color: "#3C3C3D", url: "#", note: "Core concepts" }], timeNeeded: "2-3 weeks", tip: "💡 Get comfortable with how transactions work under the hood." }
    ]
  },
  "cms-ecommerce": {
    id: "cms-ecommerce",
    domain: "CMS & E-commerce",
    icon: "🛍️",
    description: "Building scalable content and storefronts",
    totalTools: 10,
    totalSkills: 12,
    estimatedTime: "3-5 months",
    accentColor: "#EC4899",
    difficultyBadge: "Beginner Friendly",
    steps: [
      { step: 1, icon: "🛒", title: "Headless Commerce Basics", tag: "Foundation", tagColor: "#06B6D4", why: "Modern e-commerce separates the frontend from the backend inventory.", whatYouNeed: ["Product catalogs", "Cart state management", "Checkout flows"], tools: [{ name: "Shopify API", color: "#95BF47", url: "#", note: "E-commerce platform" }], timeNeeded: "2-3 weeks", tip: "💡 Learn to build a cart before building checkout." }
    ]
  },
  "no-code-low-code": {
    id: "no-code-low-code",
    domain: "No-Code / Low-Code",
    icon: "⚡",
    description: "Rapid application development without writing code",
    totalTools: 15,
    totalSkills: 10,
    estimatedTime: "2-4 months",
    accentColor: "#EAB308",
    difficultyBadge: "Beginner Friendly",
    steps: [
      { step: 1, icon: "🧩", title: "Visual Logic & Database Setup", tag: "Foundation", tagColor: "#06B6D4", why: "No-code apps still require strong database relation knowledge.", whatYouNeed: ["Data modeling", "Workflow automation", "API integrations"], tools: [{ name: "Bubble", color: "#1D233C", url: "#", note: "Full app builder" }], timeNeeded: "3-4 weeks", tip: "💡 Plan your database schema out on paper first." }
    ]
  },
  "hosting-deployment": {
    id: "hosting-deployment",
    domain: "Hosting & Deployment",
    icon: "🚀",
    description: "Launch apps to the world and manage servers",
    totalTools: 14,
    totalSkills: 18,
    estimatedTime: "2-3 months",
    accentColor: "#06B6D4",
    difficultyBadge: "Intermediate",
    steps: []
  },
  "dev-tools": {
    id: "dev-tools",
    domain: "Dev Tools",
    icon: "🛠️",
    description: "Power up your productivity with code editors and CLIs",
    totalTools: 22,
    totalSkills: 15,
    estimatedTime: "1-2 months",
    accentColor: "#EC4899",
    difficultyBadge: "Beginner Friendly",
    steps: []
  },
  "authentication": {
    id: "authentication",
    domain: "Authentication",
    icon: "🔐",
    description: "Secure your apps, manage users and permissions",
    totalTools: 11,
    totalSkills: 14,
    estimatedTime: "1-2 months",
    accentColor: "#FBBF24",
    difficultyBadge: "Intermediate",
    steps: []
  },
  "css-styling": {
    id: "css-styling",
    domain: "CSS & Styling",
    icon: "🎨",
    description: "Master modern layouts, animations and design systems",
    totalTools: 18,
    totalSkills: 20,
    estimatedTime: "2-3 months",
    accentColor: "#F43F5E",
    difficultyBadge: "Beginner Friendly",
    steps: []
  },
  "analytics-dashboards": {
    id: "analytics-dashboards",
    domain: "Analytics & Dashboards",
    icon: "📊",
    description: "Track events, visualize data and build admin panels",
    totalTools: 16,
    totalSkills: 12,
    estimatedTime: "1-2 months",
    accentColor: "#2DD4BF",
    difficultyBadge: "Beginner Friendly",
    steps: []
  },
  "payment-tools": {
    id: "payment-tools",
    domain: "Payment Tools",
    icon: "💳",
    description: "Process transactions, subscriptions and invoices",
    totalTools: 8,
    totalSkills: 10,
    estimatedTime: "1-2 months",
    accentColor: "#4ADE80",
    difficultyBadge: "Intermediate",
    steps: []
  }
};
