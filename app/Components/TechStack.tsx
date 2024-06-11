"use client";

import React from "react";
import IconCloud from "../Magicui/icon-cloud";

export const slugs = [
  "typescript",
  "javascript",
  //   "dart",
  //   "java",
  "react",
  //   "flutter",
  //   "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "cloudflareworkers",
  "wordpress",
  "axios",
  "amazonec2",
  "amazons3",
  "prisma",
  "amazonaws",
  "postgresql",
  //   "firebase",
  //   "nginx",
  "vercel",
  //   "testinglibrary",
  //   "jest",
  //   "cypress",
  "docker",
  "github",
  "visualstudiocode",
  "figma",
  "reactrouter",
];

import Particles from "../Magicui/particles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// const ParticlesDemo = () => {
//   const { theme } = useTheme();
//   const [color, setColor] = useState("#ffffff");

//   useEffect(() => {
//     setColor(theme === "dark" ? "#ffffff" : "#000000");
//   }, [theme]);

//   return (
//     <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-4 md:shadow-xl">
//       <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-black md:text-9xl">
//         Particles
//       </span>

//     </div>
//   );
// };

// export ParticlesDemo;

export function TechStack() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    // <div className=" h-full w-full justify-center bg-transparent overflow-hidden   px-20 pb-20 pt-8">
    <div className="relative flex  items-center justify-center ">
      <IconCloud iconSlugs={slugs} />
      {/* </div> */}
    </div>
  );
}

export default TechStack;
