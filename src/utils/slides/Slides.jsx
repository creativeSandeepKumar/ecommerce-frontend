import React from "react";

const Slides = ({productimages, currentIndex, className}) => {
  return (
    <div
    className={`flex justify-end transition-transform duration-500 transform`}
    style={{
      width: `${productimages.length * 100}%`,
      transform: `translateX(-${
        currentIndex * (100 / productimages.length)
      }%)`,
      
    }}
  >
    {productimages.map((image, index) => (
      <div
        key={index}
        className="w-1/3 flex-shrink-0"
        style={{ width: `${100 / productimages.length}%` }}
      >
        <img
          src={image}
          alt={`Slide ${index + 1}`}
          width="100%"
          height="100%"
          className={`max-h-[28rem] max-w-sm mx-auto md:max-w-[80%] lg:max-w-[85%] md:mx-0 md:ml-auto  ${className}`}
        />
      </div>
    ))}
  </div>
  );
};

export default Slides;
