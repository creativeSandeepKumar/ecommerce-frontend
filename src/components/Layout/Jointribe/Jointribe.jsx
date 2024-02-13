import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Heading from "../Heading";
import Container from "@/components/Container";
import Jointribecard from "./Jointribecard";

const JointribeItems = [
    {
        video:
          "https://www.boat-lifestyle.com/cdn/shop/files/quinn_zntjxmugklrk3vhl1fjxqr5g.mp4",
        toptext: "Engraving Available",
        name: "Nirvana Ion ANC",
        originalPrice: "2,890",
        offerPrice: "9,999",
        offPercentage: "71",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/NION-ANC-FI_Black01_200x200.png?v=1702893834"
      },
    {
        video:
          "https://www.boat-lifestyle.com/cdn/shop/files/quinn_rc2jan2cq4z130ey73re7bau.mp4",
        name: "Airdopred 131",
        originalPrice: "2,990",
        offerPrice: "998",
        offPercentage: "67",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/viper-green_200x200.png?v=1642405569"
      },
    {
        video:
          "https://www.boat-lifestyle.com/cdn/shop/files/quinn_m5lov99epm2goemk4npgmi1q.mp4",
        name: "Party Pal 195",
        originalPrice: "7,490",
        offerPrice: "1,799",
        offPercentage: "58",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/PartyPal195_200x200.png?v=1698909092"
      },
    {
        video:
          "https://www.boat-lifestyle.com/cdn/shop/files/quinn_xfrqjnd2d7yhnsalb39os04u.mp4",
        name: "Wave Elevate Pro",
        originalPrice: "3,299",
        offerPrice: "1,199",
        offPercentage: "73",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/WaveElevatePro-FI_Orange01_200x200.png?v=1697013443"
      },
    {
        video:
          "https://www.boat-lifestyle.com/cdn/shop/files/quinn_ss8wlbkjs2uq890vnequcty6.mp4",
        name: "Nirvana Ion ANC",
        originalPrice: "2,890",
        offerPrice: "9,999",
        offPercentage: "71",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/NION-ANC-FI_Black01_200x200.png?v=1702893834"
      },
    {
        video:
          "https://www.boat-lifestyle.com/cdn/shop/files/quinn_n5xryzyf64ihcnk6kmoa9o1f.mp4",
        name: "Airdopes Atom 83",
        originalPrice: "3,490",
        offerPrice: "1,499",
        offPercentage: "57",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2_257ea3cf-47d8-47db-97dc-8878c43d0c25_200x200.png?v=1668424790"
      },
    {
        video:
          "https://www.boat-lifestyle.com/cdn/shop/files/quinn_n8398cnfdzlxagw1ywk4qsxr.mp4",
        name: "Airdopes 100",
        originalPrice: "3,490",
        offerPrice: "1,499",
        offPercentage: "57",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2_257ea3cf-47d8-47db-97dc-8878c43d0c25_200x200.png?v=1668424790"
      },
    {
        video:
          "https://www.boat-lifestyle.com/cdn/shop/files/quinn_j88xq8kqgwevksxkcw33z5ub.mp4",
        name: "Wave Sigma",
        originalPrice: "7,990",
        offerPrice: "1,599",
        offPercentage: "80",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/WaveSigma-FI_Biege01_200x200.png?v=1692856673"
      },
];

const Jointribe = () => {
  return (
    <div>
        <Heading item1={"Join"} item2={"Tribe"} />
    <Carousel className="w-full">
      <CarouselContent className="w-full">
        {JointribeItems.map((item, index) => (
          <CarouselItem key={index} className="max-w-[250px] mx-auto">
            <div className="">
              <Card className="">
                <CardContent className="">
                 <Jointribecard frameIndex={2} item={item} />
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

export default Jointribe;
