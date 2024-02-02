"use client"
import Bestofboat from "@/components/Layout/Bestofboat/Bestofboat";
import Bestseller from "@/components/Layout/Bestsellers/Bestseller";
import Categories from "@/components/Layout/Categories/Categories";
import Credibility from "@/components/Layout/Credibility";
import NewLaunches from "@/components/Layout/NewLaunches";
import Todayoffer from "@/components/Layout/Todayoffer/Todayoffer";
import ShopByLifestyle from "@/components/Shoplifestyle/Shoplifestyle";
import Slides from "@/utils/Slides";

export default function Home() {
  
  return (
    <main className="relative">
      <div className="space-y-3">
      <Slides/>
     <Bestseller/>
     <Todayoffer/>
     <Categories/>
     <NewLaunches/>
     <Credibility/>
     <ShopByLifestyle/>
     <Bestofboat/>
      </div>
    </main>
  );
}
