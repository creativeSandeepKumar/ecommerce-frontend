import { MoreNavContent } from "@/constants";
import { MinusIcon, PlusIcon } from "@/utils/reactIcons";
import React, { useState } from "react";

const MoreNav = () => {
  const [openMore, setOpenMore] = useState(false);

  const handleCategories = () => {
    setOpenMore(!openMore);
  };

  return (
    <div className={`relative border-gray-600 rounded-md ${openMore ? "border-[1px] px-3 py-2" : ""}`}>
      <div className="w-full bg-white top-0 z-10">
        <aside className="relative">
          <section
            className="flex items-center justify-between text-base font-semibold py-3"
            onClick={handleCategories}
          >
            <div>More</div>
            <div>{openMore ? <MinusIcon /> : <PlusIcon />}</div>
          </section>
          <aside
            className={`transition-all duration-1000 ${
              openMore ? " top-14 h-[50vh]" : "h-0 -top-12"
            }`}
          >
            <div
              className={`bg-white transition-all duration-1000 overflow-y-auto ${
                openMore ? "h-[100%]" : "h-0"
              }`}
              style={{ maxWidth: "19rem", scrollbarWidth: "none" }}
            >
                {MoreNavContent.map((items, index) => (
                    <p key={index} className=" text-sm py-1 font-light">
                      {items.name}
                    </p>
                ))}
            </div>
          </aside>
        </aside>
      </div>
    </div>
  );
};

export default MoreNav;
