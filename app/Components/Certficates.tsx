"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import "../Certification.css";

function Certificates(props) {
  const { CertificateData } = props;
  useEffect(() => {
    const links = document.querySelectorAll(".link");
    const linkHoverReveal = document.querySelectorAll(".hover-reveal");
    const linkImages = document.querySelectorAll(".hidden-img");

    const handleMouseMove = (index, e) => {
      linkHoverReveal[index].style.opacity = 1;
      linkHoverReveal[
        index
      ].style.transform = `translate(-20%, -60%) rotate(-5deg)`;
      linkImages[index].style.transform = "scale(1, 1)";
      linkHoverReveal[index].style.left = e.clientX + "px";
    };

    const handleMouseLeave = (index) => {
      linkHoverReveal[index].style.opacity = 0;
      linkHoverReveal[
        index
      ].style.transform = `translate(-20%, -20%) rotate(5deg)`;
      linkImages[index].style.transform = "scale(1)";
    };

    links.forEach((link, index) => {
      link.addEventListener("mousemove", (e) => handleMouseMove(index, e));
      link.addEventListener("mouseleave", () => handleMouseLeave(index));
    });

    return () => {
      links.forEach((link, index) => {
        link.removeEventListener("mousemove", (e) => handleMouseMove(index, e));
        link.removeEventListener("mouseleave", () => handleMouseLeave(index));
      });
    };
  }, []);

  return (
    <div>
      <nav className="navi ">
        <ul>
          {CertificateData.map((Certificate) => {
            return (
              <li key={Certificate.id}>
                <div className="link -mb-6 -mt-6 flex-col md:flex md:flex-row">
                  <div>
                    <span className="-ml-1 mb-4 text-3xl md:text-[4rem]">
                      {Certificate.title}
                    </span>
                    <p className="font-mono text-gray-600">
                      By {Certificate.by}
                    </p>
                    <p className="text-sm text-gray-600 mb-1 ">
                      Issued {Certificate.date}
                    </p>
                    <p className="max-w-lg">
                      <b>Skills</b>-{Certificate.tags}
                    </p>
                  </div>

                  <a
                    className=" 
            inline-flex justify-center my-auto mt-5 px-4 py-2 rounded-md gap-2 button-placement-wrap hover:bg-black hover:text-white
            
            "
                    target="_blank"
                    href="https://studies.cs.helsinki.fi/stats/api/certificate/fs-graphql/en/5b20e93981c25a3ce34a8965dd6561f6"
                  >
                    <p cn="text-sm ">Show credential</p>
                    <div cn="pvs-navigation__icon">
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
                          className="mercado-match "
                          width="16"
                          height="16"
                          focusable="false"
                        >
                          <path d="M15 1v6h-2V4.41L7.41 10 6 8.59 11.59 3H9V1zm-4 10a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h2V3H5a3 3 0 00-3 3v5a3 3 0 003 3h5a3 3 0 003-3V9h-2z"></path>
                        </svg>
                      </li-icon>
                    </div>
                  </a>

                  <div className="hover-reveal hidden md:block image01 overflow-hidden">
                    <Image
                      src={Certificate.imgurl}
                      className="hidden-img z-50"
                      height={500}
                      width={800}
                      alt={Certificate.imgurl}
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
