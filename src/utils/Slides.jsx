"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { PhoneSlides, DesktopSlides } from "@/constants";
import { FcNext, FcPrevious } from "react-icons/fc";
import useSlideControllers from "@/hooks/useSlideControllers";
import Slidescontainer from "./slides/Slidescontainer";

const Slides = () => {
  const {currentIndex, goToSlide, handleKeyDown, handleTouchEnd, handleTouchMove, handleTouchStart, nextSlide, prevSlide} = useSlideControllers(PhoneSlides);

  return (
    <Slidescontainer handleKeyDown={handleKeyDown} handleTouchStart={handleTouchStart} handleTouchMove={handleTouchMove} handleTouchEnd={handleTouchEnd} >
          <div className="overflow-hidden">
            <div
              className="hidden md:flex transition-transform duration-500 transform"
              style={{
                width: `${PhoneSlides.length * 100}%`,
                transform: `translateX(-${
                  currentIndex * (100 / PhoneSlides.length)
                }%)`,
              }}
            >
              {DesktopSlides.map((image, index) => (
                <div
                  key={index}
                  className="w-1/3 flex-shrink-0"
                  style={{ width: `${100 / PhoneSlides.length}%` }}
                >
                  <img
                    src={image.images}
                    alt={`Slide ${index + 1}`}
                    width="100%"
                    height="100%"
                    className="hidden md:block max-h-[28rem]"
                  />
                </div>
              ))}
            </div>
            <div
              className="flex md:hidden transition-transform duration-500 transform"
              style={{
                width: `${PhoneSlides.length * 100}%`,
                transform: `translateX(-${
                  currentIndex * (100 / PhoneSlides.length)
                }%)`,
              }}
            >
              {PhoneSlides.map((image, index) => (
                <div
                  key={index}
                  className="w-1/3 flex-shrink-0"
                  style={{ width: `${100 / PhoneSlides.length}%` }}
                >
                  <img
                    src={image.images}
                    alt={`Slide ${index + 1}`}
                    width="100%"
                    height="100%"
                    className="md:hidden max-h-[28rem]"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-50 hover:opacity-100"
            >
              <FcPrevious />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-50 hover:opacity-100"
            >
              <FcNext />
            </button>
          </div>
          <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2 bg-gray-200 opacity-60 max-w-32 mx-auto py-1 rounded-md">
            {PhoneSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 w-2 rounded-full bg-gray-400 hover:bg-gray-600 focus:bg-gray-600 ${
                  index === currentIndex ? "bg-gray-600" : ""
                }`}
              ></button>
            ))}
          </div>
    </Slidescontainer>
  );
};

export default Slides;
