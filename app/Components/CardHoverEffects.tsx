import { HoverEffect } from "./card-hover-effect";
import { images } from "./NewProject";
import { slugs } from "./TechStack";
export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "React",
    description: "A JavaScript library for building user interfaces.",
    link: "https://reactjs.org",
    imgurl: images.react.image, // Updated Path to the image for React
  },
  {
    title: "Next JS",
    description:
      "A React framework for production, which provides the best developer experience with all the features you need for production.",
    link: "https://nextjs.org",
    imgurl: images.nextjsImg.image, // Updated Path to the image for Next JS
  },
  {
    title: "Redux Toolkit",
    description:
      "The official, opinionated, batteries-included toolset for efficient Redux development.",
    link: "https://redux-toolkit.js.org",
    imgurl: images.reduxtoolkitImg.image, // Updated Path to the image for Redux Toolkit
  },
  {
    title: "React Router",
    description:
      "A collection of navigational components that compose declaratively with your application.",
    link: "https://reactrouter.com",
    imgurl: images.reactrouterImg.image, // Updated Path to the image for React Router
  },
  {
    title: "Tailwind",
    description:
      "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
    link: "https://tailwindcss.com",
    imgurl: images.tailwindImg.image, // Updated Path to the image for Tailwind
  },

  {
    title: "Mongodb",
    description:
      "A source-available cross-platform document-oriented database program.",
    link: "https://www.mongodb.com",
    imgurl: images.MongodbImg.image, // Updated Path to the image for Mongodb
  },
  {
    title: "Prisma",
    description: "Next-generation ORM for Node.js and TypeScript.",
    link: "https://www.prisma.io",
    imgurl: images.prismaImg.image, // Updated Path to the image for Prisma
  },
  {
    title: "Clerk",
    description:
      "A complete user management and authentication solution for React.",
    link: "https://clerk.dev",
    imgurl: images.clerkImg.image, // Updated Path to the image for Clerk
  },
];
