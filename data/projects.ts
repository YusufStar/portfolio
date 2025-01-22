import { Badge } from "@/components/ui/badge"

export type Project = {
  title: string;
  description: string;
  badge: string;
  tags: string[];
  githubUrl: string;
}

export const projects: Project[] = [
  {
    title: "PricePulse",
    description: "A web scraping application that tracks product prices from e-commerce platforms, featuring email notifications for price changes and a subscription system for price alerts.",
    badge: "Full Stack Project",
    tags: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Cheerio",
      "Nodemailer",
      "Tailwind CSS"
    ],
    githubUrl: "https://github.com/YusufStar/PricePulse"
  },
  {
    title: "Code Craft",
    description: "A sophisticated code editor platform with real-time collaboration features, AI integration, and Monaco editor implementation.",
    badge: "Full Stack Project",
    tags: [
      "Next.js 15",
      "TypeScript",
      "Monaco Editor",
      "OpenAI",
      "Socket.io",
      "Clerk Auth"
    ],
    githubUrl: "https://github.com/YusufStar/code-craft"
  },
  {
    title: "Love Boom",
    description: "A feature-rich mobile dating application built with React Native, featuring real-time messaging, notifications, and Google authentication.",
    badge: "Mobile Application",
    tags: [
      "React Native",
      "Firebase",
      "Expo",
      "Tamagui UI",
      "Google Auth"
    ],
    githubUrl: "https://github.com/YusufStar/love-boom"
  }
] 