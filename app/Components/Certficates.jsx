"use client";
import React, { useState } from "react";
import Image from "next/image";
import "../Certification.css"; // Will keep this for specific styles like mix-blend-mode

function Certificates(props) {
  const { CertificateData } = props;
  const [hoveredCertificateId, setHoveredCertificateId] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (id) => {
    setHoveredCertificateId(id);
  };

  const handleMouseLeave = () => {
    setHoveredCertificateId(null);
  };

  const handleMouseMove = (e) => {
    // Get position relative to the viewport
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="min-h-screen grid place-items-center">
      <nav className="w-[93%] md:w-4/5">
        <ul>
          {CertificateData.map((Certificate) => {
            const isHovered = Certificate.id === hoveredCertificateId;
            return (
              <li key={Certificate.id} className="custom-list-item relative z-10">
                <div
                  className="link-item flex flex-col md:flex-row justify-between py-8 md:py-12 -mb-6 -mt-6" // Adjusted padding, kept -mb-6 -mt-6 as it was there
                  onMouseEnter={() => handleMouseEnter(Certificate.id)}
                  onMouseLeave={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                >
                  <div className="z-10"> {/* Ensure text content is above hover image if overlapping */}
                    <span className="certificate-title -ml-1 mb-4 text-white text-3xl md:text-[4rem] font-medium uppercase relative inline-block">
                      {Certificate.title}
                    </span>
                    <p className="font-mono text-gray-200">
                      By {Certificate.by}
                    </p>
                    <p className="text-sm text-gray-200 mb-1">
                      Issued {Certificate.date}
                    </p>
                    <p className="max-w-lg text-white">
                      <b>Skills</b>-{Certificate.tags}
                    </p>
                  </div>

                  <a
                    className="
                      inline-flex justify-center items-center my-auto mt-5 md:mt-0 px-4 py-2 rounded-md gap-2 button-placement-wrap hover:bg-black hover:text-white z-20 relative
                    " // Added items-center for better alignment, z-20 to be above hover image
                    target="_blank"
                    rel="noopener noreferrer" // Added rel for security
                    href={Certificate.credential}
                    onMouseEnter={(e) => { e.stopPropagation(); handleMouseEnter(Certificate.id);}} // Keep hover active on link
                    onMouseLeave={(e) => e.stopPropagation()} // Prevent link from immediately closing hover
                  >
                    <p className="text-sm text-white">Show credential</p>
                    <div className="pvs-navigation__icon h-[18px]"> {/* Tailwind for icon size */}
                      <li-icon
                        aria-hidden="true"
                        type="link-external"
                        size="small"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          data-supported-dps="16x16"
                          fill="currentColor"
                          className="mercado-match w-4 h-4" // Tailwind for SVG size
                          width="16"
                          height="16"
                          focusable="false"
                        >
                          <path d="M15 1v6h-2V4.41L7.41 10 6 8.59 11.59 3H9V1zm-4 10a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h2V3H5a3 3 0 00-3 3v5a3 3 0 003 3h5a3 3 0 003-3V9h-2z"></path>
                        </svg>
                      </li-icon>
                    </div>
                  </a>

                  <div
                    className="hover-reveal hidden md:block absolute overflow-hidden pointer-events-none
                               w-[220px] h-[300px] md:w-[600px] md:h-[400px]
                               transition-all duration-500 ease-out top-1/2" // Base styles with Tailwind
                    style={{
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered
                        ? `translate(-20%, -60%) rotate(-5deg) scale(1)` // Combined transform
                        : `translate(-20%, -20%) rotate(5deg) scale(0.8)`, // Combined transform
                      left: isHovered ? `${mousePosition.x}px` : '20%', // Fallback left if not hovered or for initial state
                      // transition properties are handled by Tailwind duration-500 and ease-out
                    }}
                  >
                    <Image
                      src={Certificate.imgurl}
                      className="w-full h-full object-cover relative transition-transform duration-400 ease-out z-50" // Tailwind for image, keep z-50
                      height={400} // Original height for aspect ratio guidance
                      width={600}  // Original width for aspect ratio guidance
                      alt={Certificate.title}
                      style={{
                        transform: isHovered ? "scale(1, 1)" : "scale(1)", // Original scale logic
                        // transition for transform is handled by Tailwind on parent, or could be added here if needed
                      }}
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Certificates;
