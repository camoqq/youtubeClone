import { Airplay, CircleUserRound, Home, SquarePlay } from "lucide-react";
import React, { useState } from "react";

const icons = [
  { id: 1, component: <Home size={30} strokeWidth={1} />, title: "Home" },
  {
    id: 2,
    component: <SquarePlay size={30} strokeWidth={1} />,
    title: "Shorts",
  },
  { id: 3, component: <Airplay size={30} strokeWidth={1} />, title: "Subs" },
  {
    id: 4,
    component: <CircleUserRound size={30} strokeWidth={1} />,
    title: "You",
  },
  //   { id: 3, component: <ListVideo size={30} />, title: "Playlists" },
  //   { id: 5, component: <Clock4 size={30} />, title: "Watched later" },
];

const Sidebar = () => {
  const [selectedIcon, setselectedIcon] = useState(icons[0]);

  return (
    <div className="flex flex-col pl-5">
      {icons.map((x) => (
        <button
          key={x.id}
          className={`hover:bg-gray-100 m-2 px-3 pt-4 rounded cursor-pointer flex
          flex-col text-center  items-center text-xs  ${
            selectedIcon == x ? "font-semibold" : " bg-white"
          }`}
          onClick={() => setselectedIcon(x)}
          style={{ width: "80px", height: "80px" }} // Set fixed width and height to avoid font size errors when clicked
        >
          {/* {x.component} */}
          {/* Dynamically change the strokeWidth on click */}
          {React.cloneElement(x.component, {
            strokeWidth: selectedIcon.id === x.id ? 2.5 : 1, // Change strokeWidth on selection
          })}
          {x.title}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
