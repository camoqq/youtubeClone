"use client";

import { categories, videos } from "@/public/data/home";
import CategoryPills from "./components/CategoryPills";
import PageHeader from "./components/PageHeader";
import { useState } from "react";
import VideoGridItem from "./components/VideoGridItem";
import Sidebar from "./components/Sidebar";

export default function Home() {
  const [selectedCategory, setselectedCategory] = useState(categories[0]);
  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto ">
        <Sidebar />
        <div className="overflow-x-hidden px-8 pb-4">
          <div className="sticky top-0 bg-white z-10 pb-4 scroll-m-0">
            <CategoryPills
              categories={categories}
              selectedCategory={selectedCategory}
              setselectedCategory={setselectedCategory}
            />
          </div>
          <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mt-4">
            {videos.map((x) => (
              <VideoGridItem key={x.id} {...x} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
