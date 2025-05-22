import React from "react";
import { BentoGrid, BentoGridItem } from "../AcertinityComponents/bento-grid";
import ProjectCard from "./ProjectCard";
import projectData from "../data/projects.json"; // Import the JSON data

const { images, projects } = projectData; // Destructure images and projects

export default function ProjectBentoGrid() {
  return (
    <BentoGrid className="-mt-24 px-3 md:px-0">
      {projects.map((item, i) => {
        // Map icon strings to image objects
        const projectIcons = item.icons.map((iconKey) => images[iconKey as keyof typeof images]);
        return (
          <BentoGridItem
            key={item.id}
            title={item.title}
            description={item.description}
            header={<ProjectCard project={{ ...item, icons: projectIcons }} key={i} />} // Pass mapped icons
            icons={projectIcons} // Pass mapped icons
            linkedIn={item.linkedIn}
            github={item.github}
            liveLink={item.liveLink}
          />
        );
      })}
    </BentoGrid>
  );
}
