import { CrossIcon, FilterIcon } from "@/utils/reactIcons";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const filterItems = [
  {
    name: "Category",
    subitems: [
      {
        name: "Gaming Earbuds",
        quantity: "4",
      },
      {
        name: "Neckbands",
        quantity: "8",
      },
      {
        name: "Smart Watches",
        quantity: "77",
      },
      {
        name: "True Wireless Earbuds",
        quantity: "51",
      },
      {
        name: "Wireless Speakers",
        quantity: "2",
      },
    ],
  },
  {
    name: "Price",
  },
  {
    name: "Color",
    subitems: [
      {
        name: "Black",
        quantity: "52",
      },
      {
        name: "Blue",
        quantity: "41",
      },
      {
        name: "Brown",
        quantity: "2",
      },
      {
        name: "Green",
        quantity: "14",
      },
      {
        name: "Grey",
        quantity: "14",
      },
      {
        name: "Maroon",
        quantity: "12",
      },
      {
        name: "Olive",
        quantity: "1",
      },
      {
        name: "Pink",
        quantity: "13",
      },
      {
        name: "Purple",
        quantity: "4",
      },
      {
        name: "Red",
        quantity: "10",
      },
      {
        name: "White",
        quantity: "18",
      },
      {
        name: "Yellow",
        quantity: "2",
      },
    ],
  },
  {
    name: "Best For",
    subitems: [
      {
        name: "Gaming",
        quantity: "4",
      },
      {
        name: "Music Lovers",
        quantity: "8",
      },
      {
        name: "Party",
        quantity: "77",
      },
      {
        name: "Travel",
        quantity: "51",
      },
      {
        name: "Workout",
        quantity: "2",
      },
    ],
  },
  {
    name: "Noise Cancellation",
    subitems: [
      {
        name: "Active Noise Cancellation",
        quantity: "13",
      },
      {
        name: "Environmental Noise Cancellation",
        quantity: "46",
      },
    ],
  },
  {
    name: "Dial Shape",
    subitems: [
      {
        name: "Round",
        quantity: "2",
      },
      {
        name: "Square",
        quantity: "15",
      },
    ],
  },
  {
    name: "Display",
    subitems: [
      {
        name: "AMOLED Display",
        quantity: "2",
      },
      {
        name: "HD Display",
        quantity: "15",
      },
      {
        name: "LCD Display",
        quantity: "15",
      },
    ],
  },
  {
    name: "Playback",
    subitems: [
      {
        name: "50-75 Hrs",
        quantity: "2",
      },
      {
        name: "Less Than 10 Hours",
        quantity: "15",
      },
      {
        name: "More Than 10 Hours",
        quantity: "15",
      },
      {
        name: "Upto 10 Hours",
        quantity: "15",
      },
    ],
  },
];

const Filters = ({ isfilteropen, closefilter }) => {
  const [opensubitems, setOpensubitems] = useState("Category");

  const handleSubitems = (itemname) => {
    setOpensubitems(itemname);
  };


  return (
    <div
      onClick={closefilter}
      className={`left-0 transition-all fixed bottom-0 duration-500 bg-opacity-35 bg-gray-500 w-full overflow-hidden ${
        isfilteropen ? "h-[90vh] sm:h-full sm:w-full" : "h-0 sm:h-auto sm:w-0"
      }`}
    >
      <section
        onClick={(e) => e.stopPropagation()}
        className="absolute max-w-sm bottom-0 w-[100%] sm:w-[80%] py-6 bg-stone-100 rounded-tr-md h-[90%]"
      >
        <section className="flex justify-between">
        <div className="flex items-center px-4">
          <FilterIcon />
          <p className="text-xl">Filters</p>
        </div>
        <div className="pr-6 text-red-600">
            <CrossIcon onClick={closefilter} />
        </div>
        </section>
        <section className="flex flex-wrap py-2 max-w-xl">
            <aside className={`w-1/2 h-[60vh] overflow-y-auto card-shadow px-2`}>
          {filterItems.map((items) => (
            <div key={items.name} className={`py-2 cursor-pointer pr-2 ${opensubitems === items.name && "border-l-4 border-red-600 bg-stone-200"}`}>
              <aside
                onClick={() => handleSubitems(items.name)}
                className="w-full font-semibold"
              >
                {items.name}
              </aside>
            </div>
          ))}
          </aside>
          <aside className="w-1/2 card-shadow pl-2  h-[60vh] overflow-y-auto">
          {filterItems.find((item) => item.name === opensubitems)?.subitems &&
            filterItems
              .find((item) => item.name === opensubitems)
              ?.subitems.map((subitem) => (
                <aside
                  key={subitem.name}
                  className={`overflow-y-auto`}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6">
                    <Input type="checkbox" className="w-4" />
                    </div>
                    <div>
                      {subitem.name} ({subitem.quantity})
                    </div>
                  </div>
                </aside>
              ))}
              </aside>
        </section>
        <section className="flex gap-3 justify-center px-4">
            <Button variant="outline" className="px-4 w-full py-2 text-lg">Clear All</Button>
            <Button className="px-4 w-full text-lg" >Apply</Button>
        </section>
      </section>
    </div>
  );
};

export default Filters;
