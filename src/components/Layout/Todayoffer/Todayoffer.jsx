import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Heading from "../Heading";
import Container from "@/components/Container";
import Productcard from "@/utils/Productcard";

const TodaysofferItems = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Nirvana_Ion.jpg?v=1697621745",
    toptext: "Engraving Available",
    name: "Nirvana Ion",
    originalPrice: "7,790",
    offerPrice: "2,299",
    offPercentage: "71",
    rating: "5.0",
    totalRating: "55",
    colors: ["bg-gray-700", "bg-blue-600", "green", "orange"],
    feature: "120 Hours Playback"
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_f04f74fd-45d4-4614-85cf-6ccf69c4cf90.jpg?v=1691395049",
    toptext: "Engraving Available",
    name: "Airdopes 131",
    originalPrice: "2,990",
    offerPrice: "899",
    offPercentage: "70",
    rating: "4.8",
    totalRating: "1135",
    colors: ["bg-gray-700", "bg-blue-600", "green", "orange"],
    feature: "60 Hours Playback"
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_161.jpg?v=1686297917",
    toptext: "Engraving Available",
    name: "Airdopes 161",
    originalPrice: "2,499",
    offerPrice: "699",
    offPercentage: "71",
    rating: "4.9",
    totalRating: "149",
    colors: ["bg-gray-700", "bg-blue-600", "green", "orange"],
    feature: "40 Hours Playback"
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Nirvana_Ion.jpg?v=1697621745",
    toptext: "Engraving Available",
    name: "Rockerz 235 V2",
    originalPrice: "2,990",
    offerPrice: "999",
    offPercentage: "67",
    rating: "4.8",
    totalRating: "1024",
    colors: ["bg-gray-700", "bg-blue-600", "green", "orange"],
    feature: "8 Hours Playback"
  },
];

const Todayoffer = () => {
  return (
    <div>
        <Heading item1={"Today's"} item2={"Offer"} />
    <Carousel className="w-full">
      <CarouselContent className="w-full">
        {TodaysofferItems.map((item, index) => (
          <CarouselItem key={index} className="max-w-[290px] md:max-w-[300px] mx-auto">
            <div className="">
              <Card className="">
                <CardContent className="aspect-square items-center justify-center">
                <Productcard productdetails={item} />
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

export default Todayoffer;
