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
  title: "Hi all, I'm Hamza",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nextjs / Nodejs / React Native and some other cool libraries and frameworks."
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
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS ")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "next.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "material-ui",
      fontAwesomeClassname: "fas fa-palette"
    },
    {
      skillName: "shadcn-ui",
      fontAwesomeClassname: "fas fa-layer-group"
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
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
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
      role: "Associate Software Engineer",
      company: "Softaims",
      companylogo: require("./assets/images/softaims.jpeg"),
      date: "Mar 2025 – Present",
      desc: "At Softaims, I built an AI-driven Influencer App using LangChain, RAG, and fine-tuned GPT models. I implemented semantic search, integrated React with scalable APIs, and managed vector databases for seamless AI-user interaction."
    },

    {
      role: "Mern Stack Developer",
      company: "Olumni Tech",
      companylogo: require("./assets/images/olumitech.jpeg"),
      date: "Jan 2024 – Mar 2025",
      desc: "At Olumni Tech, I integrated React.js with Node.js APIs, optimized performance with code splitting, and reduced load times by 20%. I built scalable RESTful APIs and responsive UI components, ensuring seamless UX and cross-browser compatibility."
    },
    {
      role: "Front-End Developer",
      company: "Next-home",
      companylogo: require("./assets/images/nexthom.jpeg"),
      date: "April 2023 – jan 2024",
      desc: "Optimized performance (15% faster queries), built scalable React.js components with secure APIs, enhanced UI with Redux Toolkit, and streamlined deployment using Docker and Git."
    },
    {
      role: "React Internship",
      company: "Pixii Solutions",
      companylogo: require("./assets/images/pixi.jpeg"),
      date: "Jan 2023 – June 2023",
      desc: "During this time, i gain practical experience in developing web applications using React.js. I work on various tasks assigned to me. Such as building user interfaces and optimizing application performance."
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
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/leventCusine.png"),
      projectName: "Levante Cuisine",
      projectDesc:
        "Built a multi-restaurant platform with real-time menus, secure payments, and a 30% faster response time.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://levantecuisine.co.uk/"
        }
      ]
    },
    {
      image: require("./assets/images/image.png"),
      projectName: "Light Work",
      projectDesc:
        "Built an AI-powered Influencer App using LangChain and RAG. Integrated fine-tuned GPT models, semantic search, and a responsive React interface for intelligent user interactions.",

      footerLink: [
        {
          name: "Visit Website",
          url: "https://lightworkhq.ai/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/multivendor.png"),
      projectName: "VendorHub",
      projectDesc:
        "Built a multi-vendor e-commerce platform with secure payments, real-time messaging, and optimized performance with Redux Toolkit. ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://e-shop-multivendor.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/blogmern.png"),
      projectName: "StackGuide",
      projectDesc:
        "Built a MERN-based tech blog platform with integration guides and modern development insights. ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://mern-blog-3vqj.onrender.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/hobanke.png"),
      projectName: "HooBank",
      projectDesc:
        "An informative bank website for users who enjoy to use banking service through website.Built using HTML, CSS & JAVASCRIPT. ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://react-hoobank-app.netlify.app/"
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
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
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
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
