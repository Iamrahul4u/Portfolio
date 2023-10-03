"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import TabsDefault from "./Tabs";
const projects = [
  {
    id: 1,
    title: "Fast React Pizza",
    imgurl: "/web1.png",
    tags: ["React", "Redux Toolkit", "React Router", "Tailwind", "Api"],
    github: "https://github.com/Iamrahul4u/fastfood-redux-react-app",
    linkedIn:
      "https://www.linkedin.com/feed/update/urn:li:activity:7105065605614977024/",
  },

  {
    id: 2,
    title: "WorldWise",
    imgurl: "/web5.png",
    tags: ["React", "React Router", "Context Api", "Leaflet"],
    github: "https://github.com/Iamrahul4u/worldwise-react-project",
    linkedIn:
      "https://www.linkedin.com/feed/update/urn:li:activity:7103430677244604416/",
  },
  {
    id: 3,
    title: "React Quiz",
    imgurl: "/web4.png",
    tags: ["React", "JSON-Server", "Context Api"],
    github: "https://github.com/Iamrahul4u/Quiz-app",
    linkedIn:
      "https://www.linkedin.com/feed/update/urn:li:activity:7100092430221291520/",
  },
  {
    id: 4,
    title: "usePopCorm",
    imgurl: "/web3.png",
    tags: ["React", "Tailwind", "Omdb Api", "Context Api"],
    github: "https://github.com/Iamrahul4u/usePopCorm",
    linkedIn:
      "https://www.linkedin.com/feed/update/urn:li:activity:7099129333805383680/",
  },
  {
    id: 5,
    title: "Trip Planner",
    imgurl: "/web2.png",
    tags: ["React", "Tailwind"],
    github: "https://github.com/Iamrahul4u/far-away",
    linkedIn: "https://www.linkedin.com/in/iamrahul4u/",
  },
  {
    id: 5,
    title: "Portfolio ",
    imgurl: "/web6.png",
    tags: ["React", "Next JS", "Tailwind"],
    github: "https://github.com/Iamrahul4u/Portfolio",
    linkedIn: "https://www.linkedin.com/in/iamrahul4u/",
  },
];
const filter = [
  "React",
  "Next JS",
  "Redux Toolkit",
  "React Router",
  "Tailwind",
  "Api",
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
      <ul className='flex flex-col lg:grid lg:grid-cols-3  py-10 gap-10'>
        {filteredData.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </ul>
    </>
  );
};

export default ProjectsData;
