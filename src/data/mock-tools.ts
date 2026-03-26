import { Tool } from "./tools";

export const MOCK_TOOLS: Record<string, Tool[]> = {
  "Frontend Frameworks": [
    {
      id: "react",
      name: "React",
      tagline: "The library for web UIs.",
      description: "A JavaScript library for building user interfaces with a component-based architecture.",
      category: "Frontend",
      icon: "⚛️",
      rating: 4.8,
      pricing: "Open Source",
      features: ["Component-based", "Virtual DOM", "Declarative UI"],
      pros: ["Huge ecosystem", "Excellent documentation", "Reusable components"],
      cons: ["Steep learning curve", "Requires boilerplate", "Frequent updates"],
      performance: 9.2,
      popularity: 9.8,
      usability: 8.5,
      bestFor: "Complex web applications",
      officialUrl: "https://react.dev"
    },
    {
      id: "vue",
      name: "Vue.js",
      tagline: "The Progressive Framework.",
      description: "An approachable, performant and versatile framework for building web user interfaces.",
      category: "Frontend",
      icon: "💚",
      rating: 4.7,
      pricing: "Open Source",
      features: ["Templates", "Reactivity", "Lightweight"],
      pros: ["Easy to learn", "Fast performance", "Excellent CLI"],
      cons: ["Smaller ecosystem", "Market share lower than React", "Fragmentation"],
      performance: 9.4,
      popularity: 8.2,
      usability: 9.5,
      bestFor: "Fast-to-market SPAs",
      officialUrl: "https://vuejs.org"
    },
    {
      id: "nextjs",
      name: "Next.js",
      tagline: "The React Framework for the Web.",
      description: "Enables server-side rendering and static site generation for React applications.",
      category: "Frontend",
      icon: "▲",
      rating: 4.9,
      pricing: "Open Source",
      features: ["SSR", "ISR", "Edge Runtime"],
      pros: ["Great for SEO", "Fast page loads", "Zero configuration"],
      cons: ["Heavyweight", "Vercel-centric", "Complex routing"],
      performance: 9.7,
      popularity: 9.5,
      usability: 8.8,
      bestFor: "SEO-focused applications",
      officialUrl: "https://nextjs.org"
    }
  ],
  "Backend Tools": [
    {
      id: "nodejs",
      name: "Node.js",
      tagline: "JavaScript on the Server.",
      description: "A cross-platform, open-source JavaScript runtime environment.",
      category: "Backend",
      icon: "🟢",
      rating: 4.8,
      pricing: "Open Source",
      features: ["Non-blocking I/O", "V8 Engine", "NPM"],
      pros: ["High performance", "Single language (JS)", "Vast package ecosystem"],
      cons: ["Single-threaded", "Not ideal for CPU-heavy tasks", "Callback hell possibility"],
      performance: 9.1,
      popularity: 9.7,
      usability: 8.2,
      bestFor: "Real-time applications",
      officialUrl: "https://nodejs.org"
    },
    {
      id: "go",
      name: "Go (Golang)",
      tagline: "Build simple, secure, scalable systems.",
      description: "An open-source programming language supported by Google.",
      category: "Backend",
      icon: "🔵",
      rating: 4.9,
      pricing: "Open Source",
      features: ["Concurrency (Goroutines)", "Static typing", "Compiled"],
      pros: ["Extremely fast", "Great concurrency", "Strong standard library"],
      cons: ["Lacks generics (pre-v1.18)", "Verbose error handling", "Strict syntax"],
      performance: 9.8,
      popularity: 8.5,
      usability: 7.8,
      bestFor: "Microservices and cloud computing",
      officialUrl: "https://go.dev"
    }
  ],
  "Database": [
    {
      id: "postgresql",
      name: "PostgreSQL",
      tagline: "The world's most advanced DB.",
      description: "The world's most advanced open source relational database.",
      category: "Database",
      icon: "🐘",
      rating: 4.9,
      pricing: "Open Source",
      features: ["ACID compliant", "JSONB support", "Extensions"],
      pros: ["Rock-solid stability", "Extensible", "Great community"],
      cons: ["Complex configuration", "Memory intensive", "Legacy features"],
      performance: 9.3,
      popularity: 9.2,
      usability: 7.5,
      bestFor: "Enterprise-grade applications",
      officialUrl: "https://www.postgresql.org"
    },
    {
      id: "mongodb",
      name: "MongoDB",
      tagline: "The modern data platform.",
      description: "A source-available cross-platform document-oriented database program.",
      category: "Database",
      icon: "🍃",
      rating: 4.6,
      pricing: "Freemium",
      features: ["Document model", "Sharding", "No Schema"],
      pros: ["Flexible schema", "Easy scaling", "Rich query language"],
      cons: ["Data redundancy", "Complex transactions", "Storage usage"],
      performance: 8.8,
      popularity: 9.4,
      usability: 8.9,
      bestFor: "Unstructured data and rapid iteration",
      officialUrl: "https://www.mongodb.com"
    }
  ],
  "Hosting": [
    {
      id: "vercel",
      name: "Vercel",
      tagline: "Deploy your framework in seconds.",
      description: "Platform for frontend developers to deploy, scale, and monitor web apps.",
      category: "Hosting",
      icon: "📐",
      rating: 4.9,
      pricing: "Freemium",
      features: ["Edge Network", "Serverless", "Analytics"],
      pros: ["Best DX", "Instant deployments", "Automatic CDN"],
      cons: ["Expensive at scale", "Vendor lock-in", "Bandwidth costs"],
      performance: 9.9,
      popularity: 9.3,
      usability: 9.8,
      bestFor: "Frontend and Next.js projects",
      officialUrl: "https://vercel.com"
    },
    {
      id: "aws",
      name: "AWS",
      tagline: "The Cloud Infrastructure Giant.",
      description: "Wide-ranging cloud computing platform from Amazon.",
      category: "Hosting",
      icon: "☁️",
      rating: 4.7,
      pricing: "Paid",
      features: ["EC2", "S3", "Lambda"],
      pros: ["Infinite scale", "Every feature imaginable", "Global reach"],
      cons: ["Steep learning curve", "Complex billing", "UI can be overwhelming"],
      performance: 9.6,
      popularity: 9.9,
      usability: 6.2,
      bestFor: "Global enterprises",
      officialUrl: "https://aws.amazon.com"
    }
  ],
  "DevOps": [
    {
      id: "docker",
      name: "Docker",
      tagline: "Containerization simplified.",
      description: "Platform for developers to build, share, and run applications in containers.",
      category: "DevOps",
      icon: "🐳",
      rating: 4.9,
      pricing: "Freemium",
      features: ["Containers", "Images", "Docker Compose"],
      pros: ["Consistent environments", "Isolation", "Fast startup"],
      cons: ["Overhead", "Storage bloat", "Networking complexity"],
      performance: 9.2,
      popularity: 9.8,
      usability: 8.1,
      bestFor: "Local development and CI/CD",
      officialUrl: "https://www.docker.com"
    },
    {
      id: "kubernetes",
      name: "Kubernetes",
      tagline: "Orchestration at scale.",
      description: "Open-source system for automating deployment and scaling of containerized apps.",
      category: "DevOps",
      icon: "☸️",
      rating: 4.8,
      pricing: "Open Source",
      features: ["Self-healing", "Bin packing", "Auto-scaling"],
      pros: ["Industry standard", "High availability", "Cloud agnostic"],
      cons: ["Massive complexity", "Expensive management", "Initial setup cost"],
      performance: 9.5,
      popularity: 9.4,
      usability: 5.5,
      bestFor: "Complex container orchestrations",
      officialUrl: "https://kubernetes.io"
    }
  ]
};

export const MOCK_STACK = {
  frontend: MOCK_TOOLS["Frontend Frameworks"][2], // Next.js
  backend: MOCK_TOOLS["Backend Tools"][1], // Go
  database: MOCK_TOOLS["Database"][0], // PostgreSQL
  hosting: MOCK_TOOLS["Hosting"][0], // Vercel
};
