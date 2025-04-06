"use client";
import React, { useContext, useState } from "react";
import CategoryPills from "./components/CategoryPills";
import { categories, videos } from "@/public/data/home";
import VideoGridItem from "./components/VideoGridItem";
import { Context } from "./components/Context";

const Page = () => {
  const [selectedCategory, setselectedCategory] = useState(categories[0]);
  const context = useContext(Context);

  if (!context) {
    throw new Error(
      "Context not found, make sure your component is wrapped with a provider."
    );
  }

  const { searchFilter } = context;

  const filteredVideos = videos.filter((x) =>
    x.title.toLocaleLowerCase().includes(searchFilter.toLocaleLowerCase())
  );

  return (
    <div className="overflow-x-hidden px-8 pb-4">
      <div className="sticky top-0 bg-white z-10 pb-4 scroll-m-0">
        <CategoryPills
          categories={categories}
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
        />
      </div>
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mt-4">
        {filteredVideos.map((x) => (
          <VideoGridItem key={x.id} {...x} />
        ))}
      </div>
    </div>
  );
};

export default Page;
