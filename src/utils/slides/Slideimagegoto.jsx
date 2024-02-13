import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Slideimagegoto = ({productimage, goToSlide, currentIndex, isleftsidebar="false"}) => {
  return (
    <div className={`absolute bottom-2 left-0 right-0 md:right-auto md:top-0 flex justify-center items-center max-w-lg mx-auto  py-1 rounded-md`}>
    <Carousel
        className="w-full">
      <CarouselContent className="w-full md:flex md:flex-wrap md:max-w-24 items-center justify-center h-full gap-2 ">
        {productimage.map((item, index) => (
          <CarouselItem key={index} className="max-w-20 mx-auto">
            <div className="">
              <Card className="">
                <CardContent className="aspect-square items-center justify-center">
                <img onClick={() => goToSlide(index)} src={item} alt={""} className={`rounded-sm ${
                    index === currentIndex ? " border-2 border-gray-500 rounded-sm" : ""}`} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
    </div>
  )
}

export default Slideimagegoto