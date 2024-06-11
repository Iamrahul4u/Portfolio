"use client";
import React from "react";
import { SparklesCore } from "../AcertinityComponents/sparkles";

export default function SparklesPreview({ children }) {
  return (
    <div className="h-[25rem] relative  w-full  bg-black flex flex-col items-center justify-start overflow-hidden  rounded-md">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-10">
        Rahul Gupta
      </h1>
      <div className="w-[50rem] h-40 relative">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
      </div>

      <div className="z-50 ">{children}</div>
    </div>
  );
}
