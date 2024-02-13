import useSlideControllers from "@/hooks/useSlideControllers";
import { Slidebuttons, Slidegoto, Slideimagegoto, Slides, Slidescontainer } from "@/utils";
import React from "react";

const Detailsimg = ({ productimages }) => {
  const {
    currentIndex,
    goToSlide,
    handleKeyDown,
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
    nextSlide,
    prevSlide,
  } = useSlideControllers(productimages, false);

  return (
    <Slidescontainer className={"pb-20 md:pb-0 md:min-h-[440px]"}
      handleKeyDown={handleKeyDown}
      handleTouchStart={handleTouchStart}
      handleTouchEnd={handleTouchEnd}
      handleTouchMove={handleTouchMove}
    >
      <Slides productimages={productimages} currentIndex={currentIndex} className={"bg-slate-200 rounded-md"} />
     <Slideimagegoto currentIndex={currentIndex} goToSlide={goToSlide} productimage={productimages} />
    </Slidescontainer>
  );
};

export default Detailsimg;
