"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import TabsDefault from "./Tabs";
const projects = [
  {
    id: 7,
    title: "Issue Tracker ",
    imgurl: "/Issue-tracker.png",
    tags: ["React", "Next JS", "Tailwind", "Prisma", "Mongodb", "Radix UI"],
    github: "https://github.com/Iamrahul4u/issue-tracker",
    videoLink:
      "https://res.cloudinary.com/duavblp7s/video/upload/v1700546730/Issue_Tracker_-_Brave_2023-10-21_01-59-38_2_qjmsa7.mp4",
    linkedIn:
      "https://www.linkedin.com/feed/update/urn:li:activity:7121342586966949888/",
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
  },
  {
    id: 6,
    title: "Portfolio ",
    imgurl: "/web6.png",
    tags: ["React", "Next JS", "Tailwind"],
    github: "https://github.com/Iamrahul4u/Portfolio",
    videoLink:
      "https://res.cloudinary.com/duavblp7s/video/upload/v1700546799/Portfolio_-_Brave_2023-10-06_01-38-33_wy8yjz.mp4",
    linkedIn:
      "https://www.linkedin.com/feed/update/urn:li:activity:7115196017913819136/",
  },
];
const filter = [
  "React",
  "Next JS",
  "Redux Toolkit",
  "React Router",
  "Tailwind",
  "Api",
  "Mongodb",
  "Prisma",
  "Clerk",
];

const ProjectsData = () => {
  const [active, setActive] = useState("React");
  function handleClick(item) {
    setActive(item);
  }
  const filteredData = projects.filter((project) => {
    return project.tags.includes(active);
  });
  return (
    <>
      <TabsDefault filters={filter} handleClick={handleClick} active={active} />
      <ul className="flex flex-col lg:grid lg:grid-cols-2  py-10 gap-10">
        {filteredData.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </ul>
    </>
  );
};

export default ProjectsData;
