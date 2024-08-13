"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Umair",
    designation: "Frontend Web Developer",
    image:
      "/myImages/1.jpg",
  },
  {
    id: 2,
    name: "Latest Frameworks",
    designation: "React.JS",
    image:
      "/myImages/2.jpg",
  },
  {
    id: 3,
    name: "Latest Frameworks",
    designation: "Next.JS",
    image:
      "/myImages/3.jpg",
  },
  {
    id: 4,
    name: "User Interfaces",
    designation: "Aceternity / Shadcn",
    image:
      "/myImages/4.jpg",
  },
  {
    id: 5,
    name: "For All Screens",
    designation: "Responsive Designs",
    image:
      "/myImages/5.jpg",
  },
  {
    id: 6,
    name: "Reusability",
    designation: "Clean and Reusable code",
    image:
      "/myImages/6.jpg",
  },
];

export default function Tooltip() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
