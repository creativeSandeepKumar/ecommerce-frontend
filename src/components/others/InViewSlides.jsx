"use client"

import React, { useEffect, useRef } from 'react';
import "./Inviewslide.css";

const InViewSlides = ({ children }) => {
    const sectionRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  sectionRef.current.classList.add('showitem');
                } else {
                    sectionRef.current.classList.remove('showitem');
            }
          });
        });
    
        observer.observe(sectionRef.current);
    
        return () => observer.disconnect(); // Cleanup on unmount
      }, []);
    

      return (
        <section ref={sectionRef} className="hiddenitem inviewsection bg-blue-500 p-0 m-0">
          {children}
        </section>
      );
    };
export default InViewSlides


  
  