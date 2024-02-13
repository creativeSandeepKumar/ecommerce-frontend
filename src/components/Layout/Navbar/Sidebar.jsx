"use client";

import Categories from "./Categories";
import { ForwardArrow } from "@/utils/reactIcons";
import MoreNav from "./More";
import { NavItems } from "@/constants";

const Sidebar = ({ openSideNav, handleCloseSideNav }) => {
  return (
    <div
      className="bg-black w-full min-h-[100vh] font-[Poppins]   bg-opacity-50"
      onClick={handleCloseSideNav}
    >
      <aside
        className={`bg-white px-4 h-[94vh] overflow-y-auto ${
          openSideNav
            ? "w-[80%] transition-all duration-500"
            : "w-0 transition-all duration-500"
        } max-w-xs min-h-full border-t-2 border-gray-400 z-20 pt-5 pb-10`}
        style={{ scrollbarWidth: "thin" }}
        onClick={(e) => e.stopPropagation()}
      >
        <Categories />
        <section>
          {NavItems.map((items) => (
            <ul
              key={items.name}
              className="flex items-center justify-between text-base font-semibold py-3"
            >
              <li>{items.name}</li>
              <li>
                <ForwardArrow />
              </li>
            </ul>
          ))}
        </section>
        <MoreNav />
      </aside>
    </div>
  );
};

export default Sidebar;
