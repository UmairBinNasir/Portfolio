/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import Data from "@/Data/Projects.json";
import Link from "next/link";
import { Fanwood_Text } from "next/font/google";

interface Projects {
  id: number;
  title: string;
  link: string;
  description: string;
  isFeatured: boolean;
  image: string;
}

function ProjectsCards() {
  const featuredProjects = Data.data.filter(
    (projects: Projects) => projects.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            My Projects
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Projects that I have completed successfully.
          </p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredProjects.map((projects: Projects) => (
            <Link href={projects.link}>
              <div key={projects.id} className="flex justify-center">
                <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                  <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                    <img
                      className="w-80 h-52 rounded-lg"
                      src={projects.image}
                      alt=""
                    />
                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                      {projects.title}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                      {projects.description}
                    </p>
                  </div>
                </BackgroundGradient>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ProjectsCards;
