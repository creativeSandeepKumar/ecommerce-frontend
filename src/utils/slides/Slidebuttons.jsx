import React from 'react';
import { FcNext, FcPrevious } from "react-icons/fc";

const Slidebuttons = ({prevSlide, nextSlide}) => {
  return (
    <div className="inset-0 flex items-center justify-center">
    <button
      onClick={prevSlide}
      className="absolute z-10 left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-50 hover:opacity-100"
    >
      <FcPrevious />
    </button>
    <button
      onClick={nextSlide}
      className="absolute z-10 right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-50 hover:opacity-100"
    >
      <FcNext />
    </button>
  </div>
  )
}

export default Slidebuttons