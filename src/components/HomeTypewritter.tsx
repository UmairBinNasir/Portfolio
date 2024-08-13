"use client";
import Link from "next/link";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import Tooltip from "./Tooltip";
export default function TypewriterEffect() {
  const words = [
    {
        text: "REACT",
      },
    {
      text: "NEXT.JS",
    },
    {
      text: "FRONTEND",
    },
    {
      text: "DEVELOPER.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Hi, I am Umair Bin Nasir
      </p>
      <TypewriterEffectSmooth words={words} />
      <Tooltip />
      {/* <Link href="/projects">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Projects
        </button>
      </Link> */}
    </div>
  );
}
