"use client";
import { Container } from "@/components";
import Bestofboat from "@/components/Layout/Bestofboat/Bestofboat";
import Bestseller from "@/components/Layout/Bestsellers/Bestseller";
import Categories from "@/components/Layout/Categories/Categories";
import Credibility from "@/components/Layout/Credibility";
import Jointribe from "@/components/Layout/Jointribe/Jointribe";
import NewLaunches from "@/components/Layout/NewLaunches";
import Todayoffer from "@/components/Layout/Todayoffer/Todayoffer";
import ShopByLifestyle from "@/components/Shoplifestyle/Shoplifestyle";
import Slides from "@/utils/Slides";
import "../components/others/InviewSlide.css";

export default function Home() {
  return (
    <main className="relative">
      <Slides />
      <Container>
        <div className="space-y-3">
          <Bestseller />
          <Todayoffer />
          <Categories />
          <NewLaunches />
          <Credibility />
          <ShopByLifestyle />
          <Bestofboat />
          <Jointribe />
        </div>
      </Container>
    </main>
  );
}
