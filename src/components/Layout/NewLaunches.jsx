import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Container from "@/components/Container";
import Productcard from "@/utils/Productcard";
import Heading from "./Heading";


const NewLaunchesItems = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_91.jpg?v=1706776330",
    toptext: "New Launch",
    name: "Airdopes 91",
    originalPrice: "3,999",
    offerPrice: "999",
    offPercentage: "75",
    colors: ["bg-gray-700", "bg-blue-600", "green", "orange"],
    feature: "45 Hours Playback"
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/IM_201.jpg?v=1704780871",
    toptext: "New Launch",
    name: "Immortal 201",
    originalPrice: "3,499",
    offerPrice: "1,299",
    offPercentage: "62",
    colors: ["bg-gray-700", "bg-blue-600", "green", "orange"],
    feature: "Gaming Earbuds"
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/IM_111.jpg?v=1706776330",
    toptext: "New Launch",
    name: "Immortal 201",
    originalPrice: "3,499",
    offerPrice: "1,499",
    offPercentage: "57",
    colors: ["bg-gray-700", "bg-blue-600", "green", "orange"],
    feature: "Gaming Earbuds"
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/ION_ANC__1.jpg?v=1703228258",
    toptext: "New Launch",
    name: "Nirvana Ion ANC",
    originalPrice: "9,990",
    offerPrice: "2,799",
    offPercentage: "72",
    colors: ["bg-gray-700", "bg-blue-600", "green", "orange"],
    feature: "Noise Cancellation"
  },
];

const NewLaunches = () => {
  return (
    <Container>
        <Heading item1={"New"} item2={"Launches"} />
    <Carousel className="w-full">
      <CarouselContent className="w-full">
        {NewLaunchesItems.map((item, index) => (
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
    </Container>
  );
};

export default NewLaunches;
