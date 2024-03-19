import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Adi Amar",
  initials: "AA",
  location: "Israel",
  locationLink: "https://www.google.com/maps/place/Israel",
  about: "Full-stack web developer",
  summary:
    "I am a recent high school graduate at the age of 18. Over the past six years, I've been dedicated to self-learning in the field of programming - mainly focused on full-stack web development. I am now actively seeking employment opportunities that will allow me to conduct research and development while effectively applying my current expertise, furthering my knowledge, acquiring new skills, and finding fulfillment in the process.",
  avatarUrl: "https://avatars.githubusercontent.com/u/54850873?v=4",
  personalWebsiteUrl: "https://adiamar.dev",
  contact: {
    email: "dev@adiamar.dev",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Skarf4U",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/adiamar/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/Skarf4U",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Workin Institution",
      degree: "Web development certification",
      start: "Jun 2019",
      end: "Aug 2019",
    },
    {
      school: "'Make' Cyber Academy",
      degree: "Cyber Instructor (volunteer)",
      start: "Nov 2022",
      end: "Jul 2023",
    },
  ],

  skills: [
    "React/Next.js",
    "Node.js",
    "Django/Flask",
    "SwiftUI",
    "Python",
    "TS/JS",
    "Java/C#",
    "Postman",
    "AWS",
    "Linux",
  ],
  projects: [
    {
      title: "Invan",
      techStack: [
        "Private Project",
        "TypeScript",
        "Next.js",
        "Prisma",
        "NextAuth",
      ],
      description: "A private SaaS I can't tell much about",
    },
    {
      title: "MBGD LLC",
      techStack: ["Static Website", "Wordpress"],
      description: "A static website for a business based in the U.S.",
      link: {
        label: "mbgaragedoorsllc.com",
        href: "https://mbgaragedoorsllc.com/",
      },
    },
    {
      title: "adiamar.dev",
      techStack: ["Portfolio", "Next.js", "TailwindCSS"],
      description: "My personal website. Built with Next.js.",
      link: {
        label: "adiamar.dev",
        href: "https://adiamar.dev/",
      },
    },
    {
      title: "MindFlow",
      techStack: ["Side Project", "Next.js", "TailwindCSS"],
      description:
        "A unique platform to clear your mind through raw, unfiltered writing",
      link: {
        label: "mindflower.vercel.app",
        href: "https://mindflower.vercel.app/",
      },
    },
    {
      title: "QuizWiz",
      techStack: ["Side Project", "Next.js", "TypeScript", "OpenAI API"],
      description: "An AI quizzer web-app",
      link: {
        label: "quizwizai.vercel.app",
        href: "https://quizwizai.vercel.app/",
      },
    },
    {
      title: "Amarr+",
      techStack: ["Node.js", "Express", "API"],
      description:
        "Movies & TV Shows streaming website - all data is being fetched from an API",
    },
  ],
} as const;
