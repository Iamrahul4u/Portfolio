"use client";
import React from "react";
import Image from "next/image";
import "../Certification.css";

function Certificates(props) {
  const { CertificateData } = props;


  return (
    <div>
      <nav className="navi ">
        <ul>
          {CertificateData.map((Certificate) => {
            return (
              <li key={Certificate.id}>
                <div className="link -mb-6 -mt-6 flex-col md:flex md:flex-row">
                  <div>
                    <span className="-ml-1 mb-4 text-white text-3xl md:text-[4rem]">
                      {Certificate.title}
                    </span>
                    <p className="font-mono text-gray-200">
                      By {Certificate.by}
                    </p>
                    <p className="text-sm text-gray-200 mb-1 ">
                      Issued {Certificate.date}
                    </p>
                    <p className="max-w-lg text-white">
                      <b>Skills</b>-{Certificate.tags}
                    </p>
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
