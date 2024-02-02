import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Heading from "../Heading";
import Container from "@/components/Container";
import Productcard from "@/utils/Productcard";
import { BestSellerItems, HomeSoundbars, TopAccessories, TopEarBuds, TopWatches } from "./bestofboatitems";
import BestofboatNavigation from "./Bestofboatnavigation";
import "./bestboat.css";

const Bestofboat = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [showProductData, setShowProductData] = useState(BestSellerItems);
  const [fadeAnimation, setFadeAnimation] = useState(false);

  const handleActiveItem = (index) => {
    setActiveItem(index);
  };

  useEffect(() => {
    const productItems = [BestSellerItems, HomeSoundbars, TopEarBuds, TopWatches, TopAccessories];
    setFadeAnimation(true);
    setTimeout(() => {
      setShowProductData(productItems[activeItem]);
      setFadeAnimation(false);
    }, 500);
  }, [activeItem]);

  return (
    <Container>
      <Heading item1={"Best Of"} item2={"boAt"} />
      <BestofboatNavigation
        activeItem={activeItem}
        handleActiveItem={handleActiveItem}
      />
      <Carousel className="w-full">
        <CarouselContent className={`w-full ${fadeAnimation ? "fade" : ""}`}>
          {showProductData.map((item, index) => (
            <CarouselItem
              key={index}
              className="max-w-[290px] md:max-w-[300px] mx-auto"
            >
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

export default Bestofboat;
