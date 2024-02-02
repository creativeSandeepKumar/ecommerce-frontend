import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import VideoWithDynamicPoster from "./Videowithposter";
import Heading from "../Heading";
import Container from "@/components/Container";

const BestSellerItems = [
  {
    videos:
      "https://www.boat-lifestyle.com/cdn/shop/files/quinn_RUxbhR7CvjkNtlFUDxgw9.mp4",
    text: "Smartwatches",
  },
  {
    videos:
      "https://www.boat-lifestyle.com/cdn/shop/files/quinn_Bejc8URjU1NSXdhabLCmD.mp4",
    text: "Wireless Earbuds",
  },
  {
    videos:
      "https://www.boat-lifestyle.com/cdn/shop/files/quinn_OyJHanx4QSdUN3OVGTO7C.mp4",
    text: "Neckbands",
  },
  {
    videos:
      "https://www.boat-lifestyle.com/cdn/shop/files/quinn_CpsRIdJWtpXyFN3enwbXd.mp4",
    text: "Headphones",
  },
  {
    videos:
      "https://www.boat-lifestyle.com/cdn/shop/files/quinn_j1TwOEeceKYOJc7d7mAim.mp4",
    text: "Wireless Speakers",
  },
];

const Bestseller = () => {
  return (
    <Container>
        <Heading item1={"Explore"} item2={"Bestsellers"} />
    <Carousel className="w-full">
      <CarouselContent className="w-full">
        {BestSellerItems.map((item, index) => (
          <CarouselItem key={index} className="max-w-xs mx-auto">
            <div className="p-1 pl-4">
              <Card className="">
                <CardContent className="aspect-square items-center justify-center">
                 <VideoWithDynamicPoster videoSource={item.videos} frameIndex={2} />
                <p className="p-3 text-center font-semibold">{item.text}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
    </Container>
  );
};

export default Bestseller;
