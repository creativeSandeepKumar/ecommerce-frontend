import React, { useCallback, useEffect, useRef, useState } from 'react'

const useSlideControllers = (slides, automaticslide = true) => {

    const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // go to next slide
  const nextSlide = () => {
    
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // go to previous slides
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
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
    if(automaticslide) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, []);

  // jump to specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return {
    currentIndex, nextSlide, prevSlide, handleTouchStart, handleTouchMove, handleTouchEnd, handleKeyDown, goToSlide
  }
}

export default useSlideControllers