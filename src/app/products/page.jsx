"use client";

import { Container } from "@/components";
import Filters from "@/components/others/Filters";
import Productscard from "@/components/products/Productscard";
import { productItems } from "@/components/products/productconstants";
import { FilterIcon, SortIcon } from "@/utils/reactIcons";
import { useState } from "react";

const Page = () => {
    const [isfilteropen, setIsfilteropen] = useState(false);

    const handleFilterToggle = () => {
        setIsfilteropen(!isfilteropen);
    }

  return (
    <Container>
        <div className="">

        <h3 className="font-extrabold text-xl pb-3">Best Sellers</h3>
      <div className="flex flex-wrap gap-10 md:gap-0">
        {productItems.map((items, index) => (
            <aside key={index} className="w-full md:w-1/2 md:p-4 xl:w-4/12" >
                <Productscard productdetails={items} />
            </aside>
        ))}
      </div>
      <section className="flex gap-4 fixed bottom-1 bg-slate-100 left-[50%] translate-x-[-50%] w-[90%]  justify-around px-2 esm:px-10 esm:w-[300px] py-2 rounded-md items-center">
        <aside onClick={handleFilterToggle} className="flex items-center cursor-pointer">
            <FilterIcon/>
            <p>Filters</p>
        </aside>
        <aside className="flex items-center cursor-pointer">
            <SortIcon/>
            <p>Sort by</p>
        </aside>
      </section>
      </div>
      <div className="">
        <Filters isfilteropen={isfilteropen} closefilter={handleFilterToggle} />
      </div>
    </Container>
  );
};

export default Page;
