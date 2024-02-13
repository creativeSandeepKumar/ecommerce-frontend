import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { CheckIconPatch, ForwardArrow } from '@/utils/reactIcons';
import Allcoupon from './Allcoupon';

const Couponcode = () => {
    const [viewcouponcode, setViewcouponcode] = useState(false);

    const handleViewCouponcode = () => {
        setViewcouponcode(!viewcouponcode);
    }

  return (
    <div>
    <div className='my-3 bg-gray-200 rounded-md p-4 space-y-2 '>
    <section className="md:flex gap-3 space-y-1 md:space-y-0">
        <div className='flex items-center gap-2'>
    <CheckIconPatch/>
    <div>
    <p className="text-xs w-full">Unlock ₹300 OFF on selected products</p>
 <p className='text-xs text-emerald-700'>Code:Take300</p>
 </div>
        </div>
    <Button className="px-6 w-full md:w-auto my-1">Apply</Button>
 </section>
 <div className='border-[0.1px] border-gray-400'></div>
 <p onClick={handleViewCouponcode} className='text-center text-sm font-semibold flex justify-center items-center'> View All Coupons<ForwardArrow/></p>
 </div>
 {viewcouponcode && (
    <Allcoupon closecouponmodel={handleViewCouponcode} />
 ) }
 </div>
  )
}

export default Couponcode