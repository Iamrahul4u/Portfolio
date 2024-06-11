"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { AiOutlineReload } from "react-icons/ai";

function ProjectCard({ project }) {
  const [isVideo, setVideo] = useState(false);
  const [loading, setLoading] = useState(false);
  const videoRef = useRef(null);

  const handleHover = () => {
    const video = videoRef.current;
    video.play();
  };

  return (
    <div className="flex rounded-md justify-center overflow-hidden">
      <div className="relative w-full h-[10rem] md:h-[15rem]">
        {/* Set fixed height for the container */}
        {!isVideo && (
          <Image
            alt="img"
            src={project.imgurl}
            width={400} // Set fixed width
            height={800} // Set fixed height
            quality={80}
            className="rounded-md w-full h-full object-contain" // Ensure image covers the container
            onMouseEnter={() => setVideo(true)}
          />
        )}
        {isVideo && (
          <>
            {loading && (
              <div className="w-full h-full flex items-center justify-center">
                Loading
                <AiOutlineReload className="animate-spin" />
              </div>
            )}
            <video
              ref={videoRef}
              onMouseEnter={handleHover}
              onMouseLeave={() => {
                videoRef.current.pause();
                setVideo(false);
              }}
              autoPlay
              loop // Ensure video loops if needed
              className="absolute inset-0 w-full h-full" // Ensure video covers the container
              onLoadStart={() => setLoading(true)}
              onLoadedData={() => setLoading(false)}
            >
              <source src={project.videoLink} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
