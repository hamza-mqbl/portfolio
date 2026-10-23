/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hamza Maqbool",
  title: "Hi, I'm Hamza",
  subTitle: emoji(
    "I build production-grade AI products and full-stack apps — fast, secure, and ready to scale. 🚀 Full-Stack Engineer with 2.5+ years shipping TypeScript products end-to-end: Next.js frontends, NestJS backends, React Native apps, and AI features powered by RAG, voice, and LLM pipelines. Based in Lahore — open to remote and relocation."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1oPskVGwtqjdLJZzV6aGAdNojwoRexXJW/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/hamza-mqbl",
  linkedin: "https://www.linkedin.com/in/hamza-maqbool/",
  gmail: "hamzaaliics@gmail.com",
  gitlab: "https://gitlab.com/hamzaaliics",
  facebook: "https://www.facebook.com/profile.php?id=100071125152940",
  medium: "https://medium.com/@hamzaaliics",
  stackoverflow: "https://stackoverflow.com/users/22715274/mehru",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I build",
  subTitle:
    "FULL-STACK ENGINEER SPECIALISING IN TYPESCRIPT, AI PRODUCTS, AND REACT NATIVE",
  skills: [
    emoji(
      "⚡ Full-Stack Web Apps — From admin platforms to SaaS products. React, Next.js, NestJS, PostgreSQL. Clean architecture, role-based access, real-time features, CI/CD from day one."
    ),
    emoji(
      "⚡ AI-Powered Products — RAG pipelines, voice agents, streaming chat, LLM integrations. Production AI features using OpenAI, LangChain, Pinecone, and VAPI — not just wrappers, but real products people use."
    ),
    emoji(
      "⚡ React Native Mobile Apps — Cross-platform iOS and Android with Expo. Payments via RevenueCat, push notifications, 98% crash-free in production. From MVP to App Store."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React / Next.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "NestJS",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Redis",
      fontAwesomeClassname: "fas fa-memory"
    },
    {
      skillName: "OpenAI / LangChain",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "GitHub Actions",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Stripe / RevenueCat",
      fontAwesomeClassname: "fab fa-stripe"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Education",
      logo: require("./assets/images/UOE.png"),
      subHeader: "Bachelor in Information Technology",
      duration: "September 2021 -  2025",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems"
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Punjab group of colleges",
      logo: require("./assets/images/pgc.png"),
      subHeader: "Intermediate in Computer Science",
      duration: "September 2019 - April 2021",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, c++, ..."
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend",
      progressPercentage: "85%"
    },
    {
      Stack: "Backend",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full-Stack Engineer",
      company: "Softaims",
      companylogo: require("./assets/images/softaims.jpeg"),
      date: "Mar 2025 – Present",
      desc: "Client and product work across web and mobile: enterprise admin platforms, data engineering, and AI-powered mobile apps.",
      descBullets: [
        "Aliant+ — delivered 17+ admin modules for a global law/accounting firm alliance (17+ countries). NestJS APIs secured with Clerk JWT, 42-rule OWASP gate, Socket.IO real-time chat, BullMQ/Redis workers. Stack: React, TypeScript, TanStack Query, NestJS, Prisma, PostgreSQL.",
        "Jobber ETL — hourly sync of ~10K records from Jobber's GraphQL API into PostgreSQL. Reconciled ~$3.5M of revenue to the cent. Idempotent bulk upserts, OAuth 2.0 rotating tokens, 5 Metabase dashboards. Stack: Node.js, TypeScript, Prisma, Railway.",
        "PersonAI — live AI productivity app on iOS & Android. 98% crash-free session rate via GitHub Actions + Expo EAS CI/CD. Stack: React Native, Expo, NestJS, Prisma, RevenueCat."
      ]
    },
    {
      role: "MERN Stack Developer",
      company: "Olumi Tech",
      companylogo: require("./assets/images/olumitech.jpeg"),
      date: "Jan 2024 – Feb 2025",
      desc: "Integrated React frontends with Node/Express REST APIs, reduced load time 20% with code splitting and lazy loading. Designed REST APIs with robust error handling and built responsive, reusable UI components."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "PRODUCTION SYSTEMS I'VE BUILT END-TO-END",
  projects: [
    {
      image: require("./assets/images/softaims.jpeg"),
      projectName: "Aliant+ Admin Platform",
      projectDesc:
        "17-module admin platform for a global professional network spanning 800+ law and accounting firms across 17+ countries. Built with React, TypeScript, TanStack Query, NestJS, Prisma, PostgreSQL, Clerk JWT, Socket.IO, BullMQ, and a 42-rule OWASP security gate on every deploy.",
      footerLink: []
    },
    {
      image: require("./assets/images/softaims.jpeg"),
      projectName: "Jobber → PostgreSQL ETL Pipeline",
      projectDesc:
        "Hourly ETL engine syncing ~10K records from Jobber's GraphQL API into PostgreSQL. Reconciled ~$3.5M of revenue to the cent. Idempotent bulk upserts, OAuth 2.0 rotating refresh tokens, rate-limit pacing, and 5 Metabase dashboards. Stack: Node.js, TypeScript, Express, Prisma, PostgreSQL, Railway.",
      footerLink: []
    },
    {
      image: require("./assets/images/Personai.png"),
      projectName: "PersonAI — iOS & Android",
      projectDesc:
        "Live AI productivity app on the App Store and Google Play. 98% crash-free session rate. Built with React Native, Expo, NativeWind, NestJS, Prisma, Clerk, RevenueCat subscriptions, and a full GitHub Actions + Expo EAS CI/CD pipeline.",
      footerLink: [
        {
          name: "App Store",
          url: "https://apps.apple.com/us/app/personai-to-do-list-planner/id6759544344"
        },
        {
          name: "Google Play",
          url: "https://play.google.com/store/apps/details?id=com.app.personai&hl=en"
        }
      ]
    },
    {
      image: require("./assets/images/image.png"),
      projectName: "Lightwork — AI RAG Platform",
      projectDesc:
        "AI-powered platform with a RAG pipeline, streaming chat, and voice agent built on LangChain, Pinecone, and VAPI. Fine-tuned GPT models with semantic search across a knowledge base. Stack: React, NestJS, OpenAI, LangChain, Pinecone.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://lightworkhq.ai/"
        }
      ]
    },
    {
      image: require("./assets/images/paradiseEstate.png"),
      projectName: "SN Solar — Bilingual Next.js Site",
      projectDesc:
        "Bilingual (English/Urdu RTL) Next.js 16 site. Lighthouse mobile performance: 75 → 92, 100/100 accessibility, best practices, and SEO. Sanity CMS, Server Actions, next-intl, 50-URL sitemap, JSON-LD structured data. Built and launched solo.",
      footerLink: []
    },
    {
      image: require("./assets/images/qadam.png"),
      projectName: "Qadam Store",
      projectDesc:
        "Full-stack multivendor shoe marketplace with seller storefronts, JWT auth, JazzCash & COD payments, real-time Socket.IO buyer–seller chat, and a complete cart-to-checkout flow. Stack: React, Redux Toolkit, Node/Express, MongoDB.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://qadam-shoe-store-fe.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/leventCusine.png"),
      projectName: "Levante Cuisine",
      projectDesc:
        "Multi-restaurant platform with real-time menus, secure payments, and optimized API response times.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://levantecuisine.co.uk/"
        }
      ]
    },
    {
      image: require("./assets/images/lalalaugh.png"),
      projectName: "La La Laugh",
      projectDesc:
        "Landing page for a social entertainment app. On-page SEO implementation that ranked on the first page of Google search results.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.lalalaugh.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Claude Code in Action",
      subtitle:
        "Completed Anthropic Education's course on building with Claude Code — agentic workflows, tooling, and real-world development with Claude.",
      image: require("./assets/images/claudeCodeInAction.png"),
      imageAlt: "Claude Code in Action Certificate",
      footerLink: [
        {
          name: "Verify Certificate",
          url: "https://verify.skilljar.com/c/eth25bsi8jed"
        }
      ]
    },
    {
      title: "Introduction to Agent Skills",
      subtitle:
        "Anthropic Education certification on Agent Skills — packaging reusable instructions and capabilities to extend Claude agents.",
      image: require("./assets/images/agentSkills.png"),
      imageAlt: "Introduction to Agent Skills Certificate",
      footerLink: [
        {
          name: "Verify Certificate",
          url: "https://verify.skilljar.com/c/guisbkgy5zxb"
        }
      ]
    },
    {
      title: "Introduction to Subagents",
      subtitle:
        "Anthropic Education certification on Subagents — orchestrating specialized agents for parallel, multi-step task execution.",
      image: require("./assets/images/subagents.png"),
      imageAlt: "Introduction to Subagents Certificate",
      footerLink: [
        {
          name: "Verify Certificate",
          url: "https://verify.skilljar.com/c/xrgutns74cew"
        }
      ]
    },
    {
      title: "Top Honors in Web Usability Research",
      subtitle:
        "Awarded top honors at an international conference for research on improving web application usability, advancing user experience and modern web design.",
      image: require("./assets/images/racsit.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Problem Solving",
      subtitle:
        "Solved 150+ problems in JavaScript and C++, demonstrating expertise in algorithms and iterative development.",
      image: require("./assets/images/leetcode1.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Leetcode Profile",
          url: "https://leetcode.com/u/hamzaali786/"
        }
      ]
    },

    {
      title: "React Developer",
      subtitle:
        "Completed a React course, built an AI-powered chatbot using OpenAI, and integrated it into a project, showcasing full-stack and AI development skills.",
      image: require("./assets/images/react.jpeg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-cc9933f9-52c2-4c65-bdc4-a1af2ec3f733/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Let's build something worth shipping. ☎️"),
  subtitle:
    "Open to full-stack and AI engineering roles — remote, UAE, or Germany. Also available for selective freelance projects. Drop me a line.",
  number: "",
  email_address: "hamzaaliics@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
