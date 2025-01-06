"use client";
import React, { useState } from "react";
import p1 from "../../public/images/yout.jpeg";
import Image from "next/image";
import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";

const PageHeader = () => {
  const [showFullMicWidth, setshowFullMicWidth] = useState(false);
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div
        className={` gap-4 items-center flex-shrink-0 ${
          showFullMicWidth ? "hidden" : "flex"
        }`}
      >
        <button className="bg-gray-100 p-1 rounded hover:bg-gray-200">
          <Menu />
        </button>
        <Image src={p1} alt="logo" width={100} height={20} />
      </div>
      {/* ------------------------------------- */}
      <div
        className={` md:flex  gap-4 flex-grow justify-center items-center ${
          showFullMicWidth ? "flex" : "hidden"
        }`}
      >
        <div
          onClick={() => setshowFullMicWidth(false)}
          className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full cursor-pointer md:hidden"
        >
          <ArrowLeft />
        </div>
        <div className=" flex flex-grow max-w-[600px]">
          <input
            type="text"
            placeholder="Search"
            className="border-2 rounded-l-full py-1 px-4 text-lg w-full focus:border-blue-400 outline-none"
          />
          <button className="bg-gray-100 hover:bg-gray-200 pl-2 pr-4 rounded-r-full ">
            <Search width={17} />
          </button>
        </div>
        <div className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full cursor-pointer">
          <Mic />
        </div>
      </div>
      {/* ----------------------------------- */}
      <div
        className={`flex-shrink-0 md:gap-3 gap-2  items-center ${
          showFullMicWidth ? "hidden" : "flex"
        }`}
      >
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setshowFullMicWidth(true)}
        >
          <Search width={17} />
        </div>
        <div className="md:hidden">
          <Mic />
        </div>
        <Upload />
        <Bell />
        <User />
      </div>
    </div>
  );
};

export default PageHeader;
