import { CircleRightArrow } from '@/utils/reactIcons'
import React from 'react'

const Lifestylecard = ({items}) => {
  return (
    <div className=''>
        <img src={items.image} alt={`baot ${items.text}`} />
        <aside className=' w-full text-center py-5 bg-slate-100 rounded-b-md'>
            <h4 className='text-2xl font-bold'>{items.text}</h4>
            <p className='flex justify-center items-center text-sm font-bold text-blue-600 gap-2'>View All <CircleRightArrow className='text-xl'/> </p>
        </aside>
    </div>
  )
}

export default Lifestylecard