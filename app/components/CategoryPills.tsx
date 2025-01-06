import React from "react";

type CategoriesProps = {
  categories: string[];
  selectedCategory: string;
  setselectedCategory: (category: string) => void;
};

const CategoryPills = ({
  categories,
  selectedCategory,
  setselectedCategory,
}: CategoriesProps) => {
  return (
    <div className="overflow-x-hidden relative">
      <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]">
        {/* <button className="px-2 py-1 rounded-lg bg-black text-white">
          All
        </button> */}
        {categories.map((x) => (
          <button
            key={x}
            className={`${
              selectedCategory === x ? "bg-gray-950 text-white" : "bg-gray-200"
            } px-2 py-1 rounded-lg bg-gray-200 `}
            onClick={() => setselectedCategory(x)}
          >
            {x}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryPills;
