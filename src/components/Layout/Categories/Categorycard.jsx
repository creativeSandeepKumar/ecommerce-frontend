import React, { useState } from 'react'

const Categorycard = ({items}) => {
   
    
  return (
    <div className='max-w-20 md:max-w-40 min-h-32 space-y-2'>
            <img
            src={items.images}
            alt={items.text}
            width="100%"
            className="w-20 mx-auto"
          />
          <p className="text-center text-xs font-semibold mx-auto">
            {items.text}
          </p>
    </div>
  )
}

export default Categorycard