import React from "react";
import { useState } from "react"; // Don't forget to import useState
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Container from "@/components/Container";

const boatNavigationItems = [
  "Best Seller",
  "Home theatre systems and Soundbars",
  "Top Earbuds",
  "Top Watches",
  "Top Accessories"
];

const BestofboatNavigation = ({ activeItem, handleActiveItem }) => {
  const secondItem = boatNavigationItems[1]; // Moved inside component

  return (
    <Container>
      <Carousel className="w-full">
        <CarouselContent className="w-full">
          {boatNavigationItems.map((item, index) => (
            <CarouselItem key={index} className="max-w-fit">
              <div>
                <Card className="h-8 my-auto w-full">
                  <CardContent className={`aspect-square text-xs w-full`}>
                    <div
                      onClick={() => handleActiveItem(index)} // Pass a callback function
                      className={`cursor-pointer hover:font-bold hover:bg-gray-300 hover:rounded-md ${
                        boatNavigationItems[index] === secondItem
                          ? "px-1"
                          : "px-3"
                      } py-2 ${
                        index === activeItem ? "font-bold bg-gray-300 rounded-md" : ""
                      }`}
                    >
                      {item}
                    </div>
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

export default BestofboatNavigation;
