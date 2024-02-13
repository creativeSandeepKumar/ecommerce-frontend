import React from 'react'

const Slidescontainer = ({handleKeyDown, handleTouchStart, handleTouchMove, handleTouchEnd, className, children}) => {
  return (
    <div
    className={`relative md:flex items-center`}
    onKeyDownCapture={handleKeyDown}
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}
    onTouchEnd={handleTouchEnd}
    tabIndex={0}
  >
      <div className={`relative overflow-hidden ${className} `}>
 {children}
 </div>
  </div>
  )
}

export default Slidescontainer