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
    "I build production-grade AI products and full-stack apps — fast, secure, and ready to scale. 🚀 Full-Stack Engineer with 3+ years shipping TypeScript products end-to-end: Next.js frontends, NestJS backends, React Native apps, and AI features powered by RAG, voice, and LLM pipelines. Based in Lahore — open to remote and relocation."
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
        "Built Aliant+'s admin backbone (17+ modules) and real-time chat for a global legal/accounting alliance across 17+ countries.",
        "Shipped a Jobber \u2192 PostgreSQL ETL that reconciles ~$3.5M to the cent and caught a $292K reporting understatement.",
        "Led PersonAI end to end \u2014 live on iOS & Android, 2,500+ users at a 98% crash-free session rate."
      ]
    },
    {
      role: "MERN Stack Developer",
      company: "Olumi Tech",
      companylogo: require("./assets/images/olumitech.jpeg"),
      date: "Jan 2024 – Feb 2025",
      desc: "Full-stack web development on the MERN stack \u2014 React frontends on Node/Express APIs.",
      descBullets: [
        "Integrated React frontends with Node/Express REST APIs and cut initial load time ~20% with code splitting and lazy loading.",
        "Designed REST APIs with robust error handling and input validation.",
        "Built responsive, reusable UI components used across the product."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // GitHub-fetch contact off (uses normal contact); see #2 fix
  display: false // GitHub pinned-repos "Open Source" section off (manual bigProjects covers projects)
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "PRODUCTION SYSTEMS I'VE BUILT END-TO-END",
  projects: [
    {
      image: require("./assets/images/lalalaugh.png"),
      projectName: "La La Laugh",
      projectDesc:
        "Backend and admin for a short-form video platform, built solo. Weighted feed-ranking + Redis cache-aside, an event-driven AWS pipeline (S3\u2192Lambda\u2192MediaConvert\u2192CloudFront), 5 BullMQ queues, and Stripe billing.",
      metric: "~1000ms \u2192 ~50ms feed",
      tags: ["NestJS", "PostgreSQL", "Redis", "AWS", "BullMQ"],
      footerLink: [{name: "Visit Website", url: "https://www.lalalaugh.com/"}]
    },
    {
      image: require("./assets/images/Personai.png"),
      projectName: "PersonAI \u2014 iOS & Android",
      projectDesc:
        "Built and shipped solo: a live AI productivity app on the App Store and Google Play. A multi-agent engine turns a messy brain-dump into a planned day.",
      metric: "2,500+ users \u00b7 98% crash-free",
      tags: ["React Native", "Expo", "NestJS", "Prisma", "RevenueCat"],
      footerLink: [
        {name: "App Store", url: "https://apps.apple.com/us/app/personai-to-do-list-planner/id6759544344"},
        {name: "Google Play", url: "https://play.google.com/store/apps/details?id=com.app.personai&hl=en"}
      ]
    },
    {
      coverIcon: "$",
      projectName: "Jobber \u2192 PostgreSQL ETL Pipeline",
      projectDesc:
        "Replaced a fragile manual spreadsheet with an automated revenue engine that reconciles ~$3.5M to the cent, and surfaced a $292K reporting understatement the old process had hidden. Idempotent bulk upserts, OAuth 2.0 token rotation, 5 Metabase dashboards.",
      metric: "$3.5M reconciled",
      tags: ["Node.js", "TypeScript", "Prisma", "PostgreSQL", "Metabase"],
      footerLink: []
    },
    {
      image: require("./assets/images/image.png"),
      projectName: "Lightwork \u2014 AI RAG Platform",
      projectDesc:
        "AI platform with a RAG pipeline, streaming chat, and a voice agent. Fine-tuned GPT models with semantic search across a knowledge base.",
      tags: ["React", "NestJS", "OpenAI", "LangChain", "Pinecone", "VAPI"],
      footerLink: [{name: "Visit Website", url: "https://lightworkhq.ai/"}]
    },
    {
      coverIcon: "A+",
      projectName: "Aliant+ Admin Platform",
      projectDesc:
        "Owned the admin backbone and real-time chat for a global alliance of legal and accounting firms across 17+ countries. NestJS APIs behind a 42-rule OWASP gate on every deploy, Socket.IO messaging, and BullMQ/Redis workers.",
      metric: "17+ modules",
      tags: ["React", "TypeScript", "NestJS", "Socket.IO", "PostgreSQL"],
      footerLink: []
    },
    {
      coverIcon: "SN",
      projectName: "SN Solar \u2014 Bilingual Next.js Site",
      projectDesc:
        "Bilingual (English / Urdu RTL) marketing site built and launched solo. Sanity CMS, Server Actions, next-intl, a 50-URL sitemap, and JSON-LD structured data.",
      metric: "Lighthouse 75 \u2192 92",
      tags: ["Next.js 16", "Sanity", "next-intl", "SEO"],
      footerLink: [{name: "Visit Website", url: "https://www.snsolarpk.com/"}]
    },
    {
      image: require("./assets/images/qadam.png"),
      projectName: "Qadam Store",
      projectDesc:
        "Full-stack multivendor shoe marketplace: seller storefronts, JWT auth, JazzCash & COD payments, real-time Socket.IO buyer\u2013seller chat, and a complete cart-to-checkout flow.",
      tags: ["React", "Redux Toolkit", "Node", "Express", "MongoDB"],
      footerLink: [{name: "Visit Website", url: "https://qadam-shoe-store-fe.vercel.app/"}]
    },
    {
      image: require("./assets/images/leventCusine.png"),
      projectName: "Levante Cuisine",
      projectDesc:
        "Multi-restaurant ordering platform with real-time menus, secure payments, and optimized API response times.",
      tags: ["React", "Node.js", "MongoDB"],
      footerLink: [{name: "Visit Website", url: "https://levantecuisine.co.uk/"}]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Certifications and recognition from my work.",

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
      imageAlt: "Top Honors research award certificate",
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
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I write about things I've actually built — internals, patterns, and lessons from shipping real products.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@hamzaaliics/understanding-react-from-scratch-build-a-tiny-renderer-in-plain-javascript-574e6d26b3c5",
      title:
        "Understanding React from Scratch: Build a Tiny Renderer in Plain JavaScript",
      description:
        "Many developers use React every day without understanding why it exists or how it works under the hood. In this post I build a tiny renderer from scratch to show exactly what React is doing."
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
    "Open to full-stack and AI engineering roles — remote or UAE. Also available for selective freelance projects. Drop me a line.",
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
