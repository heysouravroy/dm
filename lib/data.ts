import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import demo from "@/public/demo.jpg";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Title",
    location: "Location",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus justo et lorem aliquet.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Title",
    location: "Location",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus justo et lorem aliquet.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Title",
    location: "Location",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus justo et lorem aliquet.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus justo et lorem aliquet.",
    tags: ["tag1", "tag2", "tag3", "tag4", "tag5"],
    imageUrl: demo,
  },
  {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus justo et lorem aliquet.",
    tags: ["tag1", "tag2", "tag3", "tag4", "tag5"],
    imageUrl: demo,
  },
  {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus justo et lorem aliquet.",
    tags: ["tag1", "tag2", "tag3", "tag4", "tag5"],
    imageUrl: demo,
  },
] as const;

export const skillsData = [
  "Communication",
  " Problem Solving",
  "Writing Proficiency",
  "Time Management",
  "Adaptability",
  "Presentation Skills",
  "Figma",
  "Data Entry",
  "Data Analysis",
  "MS Excel",
  "MS PowerPoint"
] as const;
