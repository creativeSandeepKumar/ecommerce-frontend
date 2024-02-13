import React, { useEffect, useState } from "react";
import { CheckIconPatch, PencilIcon, RupeeIocn, StarIcon } from "./reactIcons";
import { useRouter } from "next/navigation";


const Productcard = ({ productdetails }) => {
  const router = useRouter();

  const handleRouter = () => {
    router.push("/products/56565")
  }

  return (
    <div className="font-[Roboto]">
      <section className="relative">
        <img
          src={productdetails.image}
          alt={productdetails.name}
          onClick={handleRouter}
          className="rounded-t-xl max-h-[300px] w-full bg-slate-200"
        />
        <div className="absolute top-4 w-full">
          <p className="bg-gray-950 w-fit flex items-center gap-2 px-3 text-white shadow  text-center py-1 rounded-r-md text-xs">
            <PencilIcon className="text-orange-500" />
            {productdetails.toptext}
          </p>
        </div>
        <div className="absolute -bottom-3 w-full">
          <p className="bg-yellow-500 border-[1.5px] shadow w-fit px-6 mx-auto text-center py-1 rounded-md text-sm font-semibold">
            {productdetails.feature}
          </p>
        </div>
      </section>
      <div className="px-1 py-3 space-y-1">
        <section className="flex justify-between">
          <aside>
            <h4 className="text-base font-bold">{productdetails.name}</h4>
          </aside>
          <aside className="pr-5">
            <div className="h-5 w-5 rounded-full bg-gray-600 relative">
              <div
                className={`absolute h-5 w-5 ${productdetails.colors[1]} rounded-full -right-4`}
              ></div>
            </div>
          </aside>
        </section>
        <section className="flex items-center justify-between">
          <aside>
            <div className="flex gap-1 items-center">
              <span className="flex items-center text-base font-extrabold">
                <RupeeIocn />
                {productdetails.offerPrice}
              </span>
              <span className="flex items-center text-sm font-semibold line-through text-gray-500">
                <RupeeIocn />
                {productdetails.originalPrice}
              </span>
              <span className="text-xs font-semibold text-cyan-500">
                {productdetails.offPercentage}% off
              </span>
            </div>
            {productdetails.rating ? (
              <div className="flex gap-2">
                <span className="flex items-center text-sm gap-1 font-medium">
                  <StarIcon className="text-orange-500" />
                  {productdetails.rating}
                </span>
                <span className="flex items-center text-sm gap-1 font-medium">
                  |{productdetails.totalRating}
                  <CheckIconPatch className="text-sky-700" />
                </span>
              </div>
            ) : (
              <span className="flex items-center text-sm gap-1 font-medium">
                <StarIcon className="text-orange-500" />
                Be first to Review
              </span>
            )}
          </aside>
          <aside>
            <button className="bg-gray-900 text-sm hover:bg-gray-700 text-white px-4 py-2 rounded-xl">
              Add To Cart
            </button>
          </aside>
        </section>
      </div>
    </div>
  );
};

export default Productcard;
