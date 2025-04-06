"use client";
import React, { useContext, useState } from "react";
import p1 from "../../public/images/yout.jpeg";
import Image from "next/image";
import { ArrowLeft, Mic, Search } from "lucide-react";
import Menuhere from "./Menuhere";
import { Context } from "./Context";

export type search = {
  searchFilter: string;
  setsearchFilter: (x: string) => void;
};

const PageHeader = () => {
  const [showFullMicWidth, setshowFullMicWidth] = useState(false);

  const context = useContext(Context);

  if (!context) {
    throw new Error("Context is undefined, make sure it's provided correctly.");
  }

  const { setsearchFilter } = context;

  const handleClick = () => {
    alert("talk when ready");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setsearchFilter(e.target.value);
    console.log("Input value changed:", e.target.value);
  };

  const options = [
    { label: "Home", href: "/" }, // Link to Home
    { label: "Shorts", href: "/shorts" }, // Link to About page
  ];

  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      {/*   menu and youtube icon  ---------------------------------------------------------------       */}
      <div
        className={` gap-4 items-center flex-shrink-0 ${
          showFullMicWidth ? "hidden" : "flex"
        }`}
      >
        <Menuhere options={options} />
        <Image src={p1} alt="logo" width={100} height={20} />
      </div>
      {/* search bar on large screens ---------------------------------------------- */}
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
            // value={searchFilter}
            placeholder="Search"
            className="border-2 rounded-l-full py-1 px-4 text-lg w-full focus:border-blue-400 outline-none"
            onChange={handleChange}
          />
          <button className="bg-gray-100 hover:bg-gray-200 pl-2 pr-4 rounded-r-full ">
            <Search width={17} />
          </button>
        </div>

        <button
          onClick={handleClick}
          className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full cursor-pointer"
        >
          <Mic />
        </button>
      </div>
      {/* search bar on small screens ------------------------------------------------------------------------------- */}
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
      </div>
    </div>
  );
};

export default PageHeader;
