"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function Slider() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know your developer.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Hi, My name is Umair Bin Nasir and I am a Next.JS frontend
                developer.
              </span>{" "}
              As a skilled frontend developer specializing in Next.js, I bring a
              strong command of modern web technologies to create dynamic and
              engaging user experiences. My expertise lies in building
              responsive and performant web applications using Next.js, React,
              and TypeScript.
            </p>
            <Image
              src="/myImages/8.jpg"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Bachelor of Science Honours in Mathematics.",
    title: "From University of Punjab",
    src: "/myImages/2.jpg",
    content: <DummyContent />,
  },
  {
    category: "Intermediate (ICS)",
    title: "Govt. MAO College Lahore",
    src: "/myImages/3.jpg",
    content: <DummyContent />,
  },
  {
    category: "Matriculation",
    title: "Govt. High School Shakargark",
    src: "/myImages/4.jpg",
    content: <DummyContent />,
  },

  {
    category: "Web Developement",
    title: "Arfa Tower Lahore.",
    src: "/myImages/5.jpg",
    content: <DummyContent />,
  },
  {
    category: "Cloud Applied Generative AI Engineer (Continue)",
    title: "University of Management and Technology",
    src: "/myImages/6.jpg",
    content: <DummyContent />,
  },
  {
    category: "Graphic Designing",
    title: "Digi Skills",
    src: "/myImages/7.jpg",
    content: <DummyContent />,
  },
];
