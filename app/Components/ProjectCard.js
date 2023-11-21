"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { Toaster, toast } from "sonner";
function ProjectCard({ project }) {
  const [isVideo, setVideo] = useState(false);
  const videoRef = useRef(null);
  const handleHover = () => {
    const video = videoRef.current;
    video.play();
  };

  return (
    <div className="basis-1/4 flex-1 border-2 rounded-md  justify-center  border-black shadow-md hover:shadow-slate-500  overflow-hidden">
      <div className="h-60">
        {!isVideo && (
          <Image
            alt={"img"}
            src={project.imgurl}
            width={800}
            height={800}
            className={`rounded-t-md overflow-hidden object-contain flex-1 `}
            onMouseEnter={() => setVideo(true)}
          />
        )}
        {isVideo && (
          <>
            <video
              width="600"
              ref={videoRef}
              onMouseEnter={handleHover}
              onMouseLeave={() => {
                videoRef.current.pause();
                setVideo(false);
              }}
              autoPlay
              height="600"
            >
              <source src={project.videoLink} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </>
        )}
      </div>
      <div className="w-full p-4 text-black justify-between ">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-mono font-semibold ">
          {project.title}
        </h3>
        <p class="flex flex-row flex-wrap gap-2 mb-5 items-center  justify-start text-xs md:text-sm ">
          {project.tags.map((tag) => (
            <span
              key={tag}
              class="inline-block px-2 py-1 font-semibold border-2 cursor-pointer hover:bg-black hover:text-white  border-stone-900  rounded-md"
            >
              {tag}
            </span>
          ))}
        </p>
        <p className="flex flex-wrap gap-2 flex-row items-center  justify-start text-xs md:text-sm ">
          <a
            target="_blank"
            href={project.github}
            className="relative inline-block text-lg group"
          >
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Github</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a>
          <a
            target="_blank"
            href={project.linkedIn}
            className="relative inline-block text-lg group"
            onMouseEnter={() =>
              toast.info("Go to LinkedIn for more Details and Live Site")
            }
          >
            <Toaster duration={2000} />
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">LinkedIn</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a>
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
