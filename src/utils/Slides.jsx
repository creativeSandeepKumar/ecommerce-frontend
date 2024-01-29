"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { PhoneSlides, DesktopSlides } from "@/constants";
import { FcNext, FcPrevious } from "react-icons/fc";

const Slides = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // go to next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === PhoneSlides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // go to previous slides
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? PhoneSlides.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe left, go to next slide
      nextSlide();
    } else if (touchStartX.current - touchEndX.current < -50) {
      // Swipe right, go to previous slide
      prevSlide();
    }
    // Reset touch coordinates
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleKeyDown = useCallback(
    (event) => {
      console.log("check event key", event.key);
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        prevSlide();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        nextSlide();
      }
    },
    [nextSlide, prevSlide]
  );

  // automatic sliding every 2 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // jump to specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="space-y-3 relative md:flex items-center"
      onKeyDownCapture={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
    >
      <aside className="slide-items w-full">
        <div className="relative">
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
        </div>
      </aside>
    </div>
  );
};

export default Slides;
