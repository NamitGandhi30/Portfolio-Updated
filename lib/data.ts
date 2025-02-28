import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import SAAS from "@/public/SAAS.png";
import Khanakart from "@/public/KhanaKart.png";
import ShoppingWebsite from "@/public/ShoppingWebsite.png";
import Lms from "@/public/Lms.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Timeline",
    hash: "#Timeline",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Pursuing Computer Engineering",
    location: "Thadomal Shahani Engineering College, Mumbai, India",
    description:
      "Started my journey in Computer Engineering, where I was introduced to programming and quickly developed a passion for web development.",
    icon: React.createElement(LuGraduationCap),
    date: "Present",
  },
  {
    title: "Exploring Web Development",
    location: "Mumbai, India",
    description:
      "Began exploring web development alongside my studies, learning HTML, CSS, and JavaScript. Completed various projects and gained hands-on experience with front-end development.",
    icon: React.createElement(LuGraduationCap),
    date: " present",
  },
  {
    title: "Coding Competitions & Hackathons",
    location: "Various Locations",
    description:
      "Participated in numerous coding competitions and hackathons, gaining valuable experience in collaborative problem solving and innovative project development.Competing in College and national-level hackathons.",
    icon: React.createElement(LuGraduationCap),
    date: "Present",
  },
] as const;


export const projectsData = [
  {
    title: "Learning Management System",
    description:
      "An AI-powered online learning platform with live streaming, progress tracking, assignments, and interactive chatbot support.",
    tags: ["Next.js", "Tailwind", "MongoDB", "prisma", "llama", "socket.io"],
    imageUrl: Lms,  
  },
  {
    title: "Ecommerce Website",
    description:
      "Developed an eCommerce site with responsive design, product management, and user authentication.",
    tags: ["HTML", "CSS", "JavaScript", "EJS", "MongoDB"],
    imageUrl: ShoppingWebsite,  
  },
  {
    title: "Food Delivery Website",
    description:
      "Created a food delivery platform with state management, backend integration, and user authentication.",
    tags: ["React.js", "TypeScript", "MongoDB", "Tailwind", "Node.js"],
    imageUrl: Khanakart,  
  },
  {
    title: "AI-Powered Sales Assistant Platform",
    description:
      "AI platform for booking, payments, and customer chat with Stripe integration.",
      tags: ["Next.js", "React", "Stripe Integration", "Clerk","BUN"],
      imageUrl: SAAS,  
  },
] as const;



export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "bootstrap",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "JAVA",
  "GSAP",
  "Framer Motion",
] as const;
