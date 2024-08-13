import React from "react";
import { useId } from "react";

export default function ExpertiseCards() {
  return (
    <div>
        <h1 className="p-10 text-center text-2xl">Expertise</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-2 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
          >
            <Grid size={20} />
            <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20">
              {feature.title}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "HTML",
    description:
      "My expertise in HTML enables me to build responsive and high-performance websites, ensuring that content is presented clearly across a range of devices and screen sizes.",
  },
  {
    title: "CSS",
    description:
      "My focus on clean, efficient CSS code ensures that websites are not only aesthetically pleasing but also perform seamlessly, providing a polished and cohesive look and feel.",
  },
  {
    title: "JavaScript",
    description:
      " My proficiency in JavaScript enables me to develop sophisticated client-side features, leveraging modern frameworks and libraries like React and Next.js to build efficient, scalable solutions.",
  },
  {
    title: "TypeScript",
    description:
      "My ability to utilize TypeScript's interfaces, generics, and advanced type inference enables me to build complex applications with confidence and clarity.",
  },
  {
    title: "React.Js",
    description:
      "My expertise with React.js allows me to create reusable components and manage state effectively, ensuring smooth and efficient user interactions.",
  },
  {
    title: "Next.Js",
    description:
      "By using Next.js, I ensure that applications are not only robust but also provide an outstanding user experience across all devices.",
  },
  {
    title: "Tailwind CSS",
    description:
      "Tailwind's utility-first approach allows me to rapidly build responsive, consistent layouts while maintaining a clean and organized codebase.",
  },
  {
    title: "UI",
    description:
      "My expertise in UI design ensures that each interface I create is not only aesthetically pleasing but also highly functional and accessible.",
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
