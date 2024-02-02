import React from 'react'

const Heading = ({item1, item2}) => {
  return (
    <div className='py-2'>
    <h2 className='text-[22px] font-medium'>{item1} <span className='font-bold relative'>{item2}
    <span className='absolute h-[2px] w-[50%] bg-red-500 bottom-0 -z-10 left-[50%]  '></span>
    </span>
    </h2>
  </div>
  
  )
}

export default Heading