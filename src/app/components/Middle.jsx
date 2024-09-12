"use client";
import React from "react";
import { FaPen, FaPaperPlane } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { MdFitScreen, MdMenu } from "react-icons/md";

const Middle = () => {
  const dataMid = [
    {
      icon: <FaPen></FaPen>,
      header: "CLEAN THEME",
      content:
        "Ut nec lorem id orci convallis porta. Donec pharetra neque eu velit dictum molestie. Duis porta gravida augue sed viverra. Quisque at nulla leo, non aliquet mi.",
    },
    {
      icon: <MdFitScreen></MdFitScreen>,
      header: "RESPONSIVE DESIGN",
      content:
        "Ut nec lorem id orci convallis porta. Donec pharetra neque eu velit dictum molestie. Duis porta gravida augue sed viverra. Quisque at nulla leo, non aliquet mi.",
    },
    {
      icon: <MdMenu></MdMenu>,
      header: "FULLY LAYERED PSD",
      content:
        "Ut nec lorem id orci convallis porta. Donec pharetra neque eu velit dictum molestie. Duis porta gravida augue sed viverra. Quisque at nulla leo, non aliquet mi.",
    },
    {
      icon: <FaPaperPlane />,
      header: "READY FOR CODING",
      content:
        "Ut nec lorem id orci convallis porta. Donec pharetra neque eu velit dictum molestie. Duis porta gravida augue sed viverra. Quisque at nulla leo, non aliquet mi.",
    },
  ];
  return (
    <div className="w-full bg-c-header">
      <div className="mx-auto grid grid-cols-1 gap-10 px-2 py-10 md:grid-cols-2 lg:w-screen lg:grid-cols-4 lg:px-0">
        {dataMid.map((mid, index) => (
          <div className="flex-colo col-span-1 gap-4" key={index}>
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-c-blue p-3">{mid.icon}</div>
              <h1 className="text-sm font-bold">{mid.header}</h1>
            </div>
            <p className="text-sm">{mid.content}</p>
            <div className="flex items-center gap-2 text-sm">
              <IoMdArrowDropright />
              <span className="text-sm text-c-blue-2">Read more</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Middle;
