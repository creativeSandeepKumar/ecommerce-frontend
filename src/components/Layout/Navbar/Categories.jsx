import { ExpandMoreContent, SidebarContent } from "@/constants";
import { CircleDownArrow, MinusIcon, PlusIcon } from "@/utils/reactIcons";
import React, { useEffect, useState } from "react";

const Categories = () => {
  const [SidebarData, setSidebarData] = useState(SidebarContent);
  const [expandMore, setExpandMore] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);

  const handleCategories = () => {
    setOpenCategory(!openCategory);
  };

  const handleExpandMore = () => {
    setExpandMore(!expandMore);
  };

  useEffect(() => {
    if (expandMore) {
      setSidebarData((prev) => [...prev, ...ExpandMoreContent]);
    } else {
      setSidebarData(SidebarContent);
    }
  }, [expandMore]);
  return (
    <div className="relative">
      <div className="w-full bg-white top-0 z-10">
        <aside className="relative">
          <section
            className="flex items-center justify-between text-base font-semibold py-3"
            onClick={handleCategories}
          >
            <div>Categories</div>
            <div>{openCategory ? <MinusIcon /> : <PlusIcon />}</div>
          </section>
          <aside
            className={`transition-all duration-1000 ${
              openCategory ? " top-14 h-[80vh]" : "h-0 -top-12"
            }`}
          >
            <div
              className={`bg-white transition-all duration-1000 overflow-y-auto ${
                openCategory ? "h-[100%]" : "h-0"
              }`}
              style={{ maxWidth: "19rem", scrollbarWidth: "none" }}
            >
              <ul className="flex flex-wrap gap-3">
                {SidebarData.map((items, index) => (
                  <li key={index} className="w-20">
                    <img
                      src={items.images}
                      alt={items.text}
                      width="100%"
                      className="w-16 mx-auto"
                    />
                    <p className="text-center text-xs w-10 mx-auto">
                      {items.text}
                    </p>
                  </li>
                ))}
              </ul>
              <section>
                <div className="flex items-center justify-center text-blue-900 gap-3">
                  <p
                    className="text-base font-bold text-center py-2 "
                    onClick={handleExpandMore}
                  >
                    {expandMore ? "Expand Less" : "Expand More"}{" "}
                  </p>
                  <CircleDownArrow className="text-xl" />
                </div>
              </section>
            </div>
          </aside>
        </aside>
      </div>
    </div>
  );
};

export default Categories;
