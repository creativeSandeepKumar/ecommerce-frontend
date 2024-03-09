import { BagIcon, RupeeIocn } from "@/utils/reactIcons";
import React, { useState } from "react";
import Deliverycheck from "./Deliverycheck";
import ActiveOffers from "./ActiveOffers";
import Rewardspayments from "./Rewardspayments";
import { Button } from "@/components/ui/button";

const Prodecudetailstext = ({ productdetail, productdetails }) => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  const colors = (color) => {
    let originalColor = color.split(" ");
    let getcolor = originalColor[originalColor.length - 1];
    return `${getcolor}`;
  };

  const handleColorChange = (index) => {
    setSelectedColorIndex(index);
  };

  let colornames = productdetail && productdetail?.subImageVariants.map((subvariants) => {
    return {
      name: subvariants.name,
      colorcode: subvariants.colorCode
    }
  });

  console.log(colornames);

  // console.log(productdetail?.subImageVariants.map((subvariants) => subvariants.name));

  return (
    <div className="space-y-2 relative">
      <div className="flex gap-2 items-center">
        <span className="flex items-center text-xl font-extrabold">
          <RupeeIocn />
          {productdetail?.sellPrice || productdetails.currentPrice}
        </span>
        <span className="flex items-center text-lg font-medium line-through text-gray-500">
          <RupeeIocn />
          {productdetail?.maxPrice || productdetails.MRP}
        </span>
        <span className="text-lg font-semibold text-cyan-500">
          {productdetail?.discountPercentage || productdetails.offPercentage}% off
        </span>
      </div>
      <section className="space-y-2">
        <div className="flex gap-2 py-1">
          <p className="text-base font-semibold">Choose your color:</p>
          <p>{colornames && colornames[selectedColorIndex].name || productdetails.colors[selectedColorIndex]}</p>
        </div>
        <div>
          <aside className="flex gap-3">
            {Array.isArray(colornames) &&
              colornames.map((item, index) => (
                <section key={index}>
                  <div
                    className="rounded-full border-2"
                    style={{
                      padding: "1px",
                      borderColor: index === selectedColorIndex ? "orange" : "",
                    }}
                  >
                    <div
                      onClick={() => handleColorChange(index)}
                      className="w-8 h-8 rounded-full"
                      style={{
                        margin: "2px",
                        padding: "2px",
                        borderRadius: "50%",
                        backgroundColor: item?.colorcode,
                      }}
                    >
                      {" "}
                    </div>
                  </div>
                  {index === selectedColorIndex && (
                    <div className="mx-auto w-8 h-[2px] my-1 bg-orange-400"></div>
                  )}
                </section>
              ))}
          </aside>
        </div>
      </section>
      <Deliverycheck/>
      <ActiveOffers/>
      <Rewardspayments/>
      {/* add to cart */}
      <div className="md:max-w-sm font-[Raleway] fixed md:relative left-0 right-0 bottom-1 w-full px-3 md:px-0 md:py-3">
          <Button className="w-full text-lg flex gap-4 md:p-1 ">
           <BagIcon className="text-2xl" />
           <span >
            Add to cart
           </span>
          </Button>
      </div>
    </div>
  );
};

export default Prodecudetailstext;
