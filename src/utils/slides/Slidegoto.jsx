import React from 'react'

const Slidegoto = ({productimages, currentIndex, goToSlide}) => {
    
  return (
    <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2 bg-gray-200 opacity-60 max-w-32 mx-auto py-1 rounded-md">
            {productimages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 w-2 rounded-full bg-gray-400 hover:bg-gray-600 focus:bg-gray-600 ${
                  index === currentIndex ? "bg-gray-600" : ""
                }`}
              ></button>
            ))}
          </div>
  )
}

export default Slidegoto