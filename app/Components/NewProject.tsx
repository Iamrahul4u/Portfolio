import { cn } from "../utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "../AcertinityComponents/bento-grid";

import ProjectCard from "./ProjectCard";
import ThreeDCardDemo from "./FloatingCard";

export default function ProjectBentoGrid() {
  return (
    <BentoGrid className="mx-auto ">
      {projects.map((item, i) => (
        <BentoGridItem
          key={item.id}
          title={item.title}
          description={item.description}
          header={<ProjectCard project={item} key={i} />}
          icons={item.icons}
          linkedIn={item.linkedIn}
          github={item.github}
          liveLink={item.liveLink}
        />
      ))}
    </BentoGrid>
  );
}

export const images = {
  react: {
    id: 1,
    name: "React",
    image: "/projectsTags/react-svgrepo-com.svg",
  },

  clerkImg: {
    id: 2,
    name: "Clerk Authentication",
    image: "/projectsTags/images.png",
  },

  shadcnImg: {
    id: 3,
    name: "ShadCn UI",
    image: "/projectsTags/139895814.png",
  },
  radixUiImg: {
    id: 4,
    name: "Radix UI",
    image: "/projectsTags/75042455.png",
  },
  leafletImg: {
    id: 5,
    name: "Leaflet ",
    image: "/projectsTags/leaflet-svgrepo-com.svg",
  },
  prismaImg: {
    id: 6,
    name: "Prisma",
    image: "/projectsTags/light-prisma-svgrepo-com.svg",
  },
  MongodbImg: {
    id: 7,
    name: "Mongodb",
    image: "/projectsTags/mongodb-svgrepo-com.svg",
  },
  nextjsImg: {
    id: 8,
    name: "NextJs",
    image: "/projectsTags/nextjs-fill-svgrepo-com.svg",
  },
  reactrouterImg: {
    id: 9,
    name: "React-Router",
    image: "/projectsTags/react-router-svgrepo-com.svg",
  },
  tailwindImg: {
    id: 10,
    name: "Tailwind",
    image: "/projectsTags/tailwind-svgrepo-com.svg",
  },
  reduxtoolkitImg: {
    id: 11,
    name: "Redux Toolkit",
    image: "/projectsTags/redux-svgrepo-com.svg",
  },
};

const projects = [
  {
    id: 7,
    title: "Issue Tracker",
    imgurl: "/Issue-tracker.png",
    tags: ["React", "Next JS", "Tailwind", "Prisma", "Mongodb", "Radix UI"],
    github: "https://github.com/Iamrahul4u/issue-tracker",
    videoLink:
      "https://res.cloudinary.com/duavblp7s/video/upload/v1700546730/Issue_Tracker_-_Brave_2023-10-21_01-59-38_2_qjmsa7.mp4",
    linkedIn:
      "https://www.linkedin.com/feed/update/urn:li:activity:7121342586966949888/",
    liveLink: "https://issue-tracker-iamrahul4u.vercel.app/",
    icons: [
      images.react,
      images.nextjsImg,
      images.tailwindImg,
      images.prismaImg,
      images.MongodbImg,
      images.radixUiImg,
    ],

    description:
      "A comprehensive issue tracking application built with the MERN stack, enabling efficient management and resolution of project tasks.",
  },
  {
    id: 8,
    title: "DevFlow",
    imgurl: "/devflow.png",
    tags: ["React", "Next JS", "Tailwind", "Mongodb", "ShadCn", "Clerk"],
    github: "https://github.com/Iamrahul4u/NextJs-Jsm",
    videoLink:
      "https://res.cloudinary.com/duavblp7s/video/upload/v1700546770/DevFlow_-_Brave_2023-11-21_09-47-57_2_2_tdlmyi.mp4",
    linkedIn:
      "https://www.linkedin.com/feed/update/urn:li:activity:7132593754460307456/",
    liveLink: "https://next-js-jsm-iamrahul4u.vercel.app/",
    icons: [
      images.react,
      images.nextjsImg,
      images.tailwindImg,
      images.MongodbImg,
      images.shadcnImg,
      images.clerkImg,
    ],

    description:
      "DevFlow is a developer-centric platform for managing workflows and collaboration, leveraging modern web technologies and authentication.",
  },
  {
    id: 1,
    title: "Fast React Pizza",
    imgurl: "/web1.png",
    tags: ["React", "Redux Toolkit", "React Router", "Tailwind", "Api"],
    github: "https://github.com/Iamrahul4u/fastfood-redux-react-app",
    videoLink:
      "https://res.cloudinary.com/duavblp7s/video/upload/v1696369986/PizzaOrder_wtasxl.mp4",
    linkedIn:
      "https://www.linkedin.com/feed/update/urn:li:activity:7105065605614977024/",
    icons: [
      images.react,
      images.reactrouterImg,
      images.tailwindImg,
      images.reduxtoolkitImg,
    ],
    liveLink: "https://food-react-app-project.netlify.app/",
    description:
      "A fast and responsive pizza ordering application built with React and Redux, featuring seamless navigation and dynamic data handling.",
  },
  {
    id: 6,
    title: "Portfolio",
    imgurl: "/web6.png",
    tags: ["React", "Next JS", "Tailwind"],
    github: "https://github.com/Iamrahul4u/Portfolio",
    videoLink:
      "https://res.cloudinary.com/duavblp7s/video/upload/v1700546799/Portfolio_-_Brave_2023-10-06_01-38-33_wy8yjz.mp4",
    linkedIn:
      "https://www.linkedin.com/feed/update/urn:li:activity:7115196017913819136/",
    icons: [images.react, images.nextjsImg, images.tailwindImg],
    liveLink: "https://iamrahul4u.vercel.app/",

    description:
      "My personal portfolio website showcasing various projects and skills, built with Next.js and styled using Tailwind CSS.",
  },
  {
    id: 2,
    title: "WorldWise",
    imgurl: "/web5.png",
    tags: ["React", "React Router", "Context Api", "Leaflet"],
    github: "https://github.com/Iamrahul4u/worldwise-react-project",
    videoLink:
      "https://res.cloudinary.com/duavblp7s/video/upload/v1696369987/WorldWise_cahpt8.mp4",
    linkedIn:
      "https://www.linkedin.com/feed/update/urn:li:activity:7103430677244604416/",
    icons: [
      images.react,
      images.reactrouterImg,
      images.tailwindImg,
      images.leafletImg,
    ],

    description:
      "WorldWise is an interactive world map application that uses Leaflet for map rendering and React for a smooth user experience.",
  },
  {
    id: 3,
    title: "React Quiz",
    imgurl: "/web4.png",
    tags: ["React", "JSON-Server", "Context Api"],
    github: "https://github.com/Iamrahul4u/Quiz-app",
    videoLink:
      "https://res.cloudinary.com/duavblp7s/video/upload/v1696369984/ReactQuiz_aurumy.mp4",
    linkedIn:
      "https://www.linkedin.com/feed/update/urn:li:activity:7100092430221291520/",
    icons: [images.react, images.tailwindImg],

    description:
      "An engaging quiz application developed with React, utilizing Context API for state management and JSON-Server for mock backend.",
  },
  {
    id: 4,
    title: "usePopCorm",
    imgurl: "/web3.png",
    tags: ["React", "Tailwind", "Omdb Api", "Context Api"],
    github: "https://github.com/Iamrahul4u/usePopCorm",
    videoLink:
      "https://res.cloudinary.com/duavblp7s/video/upload/v1696369986/UsePopcorm_lbj0c0.mp4",
    linkedIn:
      "https://www.linkedin.com/feed/update/urn:li:activity:7099129333805383680/",
    icons: [images.react, images.tailwindImg],

    description:
      "usePopCorm is a movie search app built with React, integrating the OMDB API for fetching movie data.",
  },
  {
    id: 5,
    title: "Trip Planner",
    imgurl: "/web2.png",
    tags: ["React", "Tailwind"],
    github: "https://github.com/Iamrahul4u/far-away",
    videoLink:
      "https://res.cloudinary.com/duavblp7s/video/upload/v1696369988/FarAway_ubbg6v.mp4",
    linkedIn: "https://www.linkedin.com/in/iamrahul4u/",
    icons: [images.react, images.tailwindImg],

    description:
      "A simple yet effective trip planning application designed to help users organize their travel plans, built with React and Tailwind CSS.",
  },
];
