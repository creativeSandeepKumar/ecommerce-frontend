import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckIconPatch, CrossIcon, ForwardArrow } from '@/utils/reactIcons';

const couponitems = [
    {
        name: "Take300",
        description: "Unlock ₹300 OFF on selected products",
        productcategory: "Watches",
    },
    {
        name: "Take300",
        description: "Unlock ₹300 OFF on selected products",
        productcategory: "Watches",
    },
    {
        name: "Take300",
        description: "Unlock ₹300 OFF on selected products",
    },
]

const Allcoupon = ({closecouponmodel}) => {
  return (
    <div className=' fixed w-full top-0 pt-10 bg-white h-[100vh] overflow-scroll'>
       <div className='space-y-3 max-w-[280px] md:max-w-[400px] mr-16 md:mr-0 py-4'>
            <p className='text-center font-semibold'>Offers for you </p>
            <div className='relative'>
            <input type="text" className='border-gray-400 border-[1px] rounded-md text-xs px-4 py-3 w-full' placeholder='type coupon code here' />
            <button className='text-xs bg-gray-200 px-3 py-1 rounded-md absolute right-1 top-2 hover:bg-gray-400'>Apply</button>
            </div>
        {couponitems.map((items, index) => (
            <div key={index} className='bg-gray-200 rounded-md p-4 space-y-2 ' >
             <section className="md:flex gap-3 space-y-1 md:space-y-0">
             <div className='flex items-center gap-2'>
         <CheckIconPatch/>
         <div className='space-y-2'>
         <p className="text-xs w-full">{items.description}</p>
         <section className='flex justify-between items-center'>
      <p className='text-xs border-[1px] border-gray-500 rounded-md px-2 py-1'>Code:{items.name}</p>
      <p className='text-xs text-sky-700'>View Products</p>
         </section>
      </div>
             </div>
      </section>
      <div className='border-[0.1px] border-gray-400'></div>
 <p className='text-center text-xs font-semibold'> Tap to Apply</p>
      </div>
        ))}

        <div onClick={closecouponmodel} className='absolute top-1 left-3'>
            <CrossIcon className='text-red-600'/>
        </div>
        </div>
 </div>
  )
}

export default Allcoupon