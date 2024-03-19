"use client";

import { Container } from "@/components";
import Filters from "@/components/others/Filters";
import Sortby from "@/components/others/Sortby";
import Productscard from "@/components/products/Productscard";
import { productItems } from "@/components/products/productconstants";
import { RequestTypeEnum } from "@/constants";
import useApiRequest from "@/hooks/useApiRequest";
import { FilterIcon, SortIcon } from "@/utils/reactIcons";
import { useEffect, useState } from "react";

const Page = () => {
    const [isfilteropen, setIsfilteropen] = useState(false);
    const [issortbyopen, setIssortbyopen] = useState(false);
    const { apiData, apiResponse, handlSubmitRequest, loading } = useApiRequest(`/products`, RequestTypeEnum.GET);

    const handleFilterToggle = () => {
      if(issortbyopen) {
        setIssortbyopen(false)
      }
        setIsfilteropen(!isfilteropen);
    }

    const handleSortbyToggle = () => {
      if(isfilteropen) {
        setIsfilteropen(false);
      }
      setIssortbyopen(!issortbyopen);
    }

    useEffect(() => {
      handlSubmitRequest();
    }, []);
  
  return (
    <Container>
        <div className="">
        <h3 className="font-extrabold text-xl pb-3">Best Sellers</h3>
        <section className="flex z-10 gap-4 fixed md:static md:bottom-auto bottom-1 bg-slate-100 md:bg-white left-[50%] md:left-auto translate-x-[-50%] md:translate-x-0 w-[90%] md:w-full  justify-around md:justify-between px-2 esm:px-10 esm:w-[300px] py-2 rounded-md items-center">
        <aside onClick={handleFilterToggle} className="flex items-center cursor-pointer md:bg-slate-300 md:px-12 md:py-1 md:rounded-sm">
            <FilterIcon/>
            <p>Filters</p>
        </aside>
        <aside onClick={handleSortbyToggle} className="flex items-center cursor-pointer md:bg-slate-300 md:px-12 md:py-1 md:rounded-sm">
            <SortIcon/>
            <p>Sort by</p>
        </aside>
      </section>
      <div className="flex flex-wrap gap-10 md:gap-0">
        {apiData?.products && apiData?.products.map((items, index) => (
            <aside key={index} className="w-full md:w-1/2 md:p-4 xl:w-4/12" >
                <Productscard productdetails={items} />
            </aside>
        ))}
      </div>
   
      </div>
      <div className="">
        <Filters isfilteropen={isfilteropen} closefilter={handleFilterToggle} />
      </div>
      <div className="">
        <Sortby closesortby={handleSortbyToggle} issortbyopen={issortbyopen} />
      </div>
    </Container>
  );
};

export default Page;
