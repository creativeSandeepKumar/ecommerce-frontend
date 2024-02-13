import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Container from "@/components/Container";
import Lifestylecard from "./Lifestylecard";
import Heading from "../Layout/Heading";

const ShopByLifestyleItems = [
  {
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/RS_for_shop_by_lifestyle_section_1.png?v=1706763090",
    text: "For Entertainment",
    url: "#"
  },
  {
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/shreyas-chronos-new.png?v=1696843687",
      text: "For Fitness",
      url: "#"
  },
  {
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/Party_Animal_4.png?v=1685942349",
      text: "For Parties",
      url: "#"
  },
  {
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/Workaholic_2.png?v=1685083745",
      text: "For Work",
      url: "#"
  },
  {
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/Audiophile_5.png?v=1696328658",
      text: "For Audiofiles",
      url: "#"
  },
];

const ShopByLifestyle = () => {
  return (
    <div>
        <Heading item1={"Shop By"} item2={"Lifestyle"} />
    <Carousel className="w-full">
      <CarouselContent className="w-full">
        {ShopByLifestyleItems.map((item, index) => (
          <CarouselItem key={index} className="max-w-[250px] md:max-w-[250px]">
            <div className="">
              <Card className="border-none">
                <CardContent className="aspect-square items-center justify-center">
                <Lifestylecard items={item} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
    </div>
  );
};

export default ShopByLifestyle;
