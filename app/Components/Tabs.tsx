"use client";

import { Tabs } from "flowbite-react";
import { useState } from "react";

export default function TabsDefault({ filters, handleClick, active }) {
  return (
    <div>
      <ul className="flex flex-wrap text-base gap-2 font-medium font-mono text-center text-white ">
        {filters.map((item) => {
          return (
            <li className="mr-2" key={item}>
              <button
                onClick={() => handleClick(item)}
                className={`${
                  active === item
                    ? "  active border-2 bg-black text-white hover:bg-black hover:text-white border-black "
                    : "hover:bg-gray-100  hover:text-white "
                } inline-block border-2 md:px-5 px-2 border-stone-900   py-3  rounded-md  active`}
                aria-current="page"
              >
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
