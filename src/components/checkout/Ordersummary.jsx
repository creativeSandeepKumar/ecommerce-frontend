import { ArrowAup, ArrowDown, CheckIconPatch, ShoppingCartIcon } from '@/utils/reactIcons'
import React, { useState } from 'react';
import { Input } from "../ui/input"
import Checkproductsummary from './Checkproductsummary';

const Ordersummary = () => {
    const [isOrderOpen, setIsOrderOpen] = useState(false);
    const [couponCode, setCouponCode] = useState("");

    const handleOrderOpen = () => {
        setIsOrderOpen(!isOrderOpen);
    }

  return (
    <div className='space-y-2'>
        <section className='bg-stone-100 p-3 rounded-md'>
        <div onClick={handleOrderOpen} className='flex gap-4 items-center'>
            <ShoppingCartIcon className='text-xl'/>
            <div className='flex gap-2 items-center'>
                <p>Order Summary</p>
                {isOrderOpen ? (
                    <ArrowAup/>
                ) : (
                    <ArrowDown/>
                )}
            </div>
        </div>
        {isOrderOpen && (
            <Checkproductsummary/>
        )}
        </section>
        <h3 className='font-semibold text-sm bg-stone-100 p-3 rounded-md'>LogIn to Redeem Loyalty Points</h3>
        <div className='bg-stone-100 p-3 rounded-md flex gap-2 items-center'>
            <CheckIconPatch className='text-xl' />
            <Input onChange={(e) => setCouponCode(e.target.value) } placeholder="Enter Coupon" className=" text-sm font-[Raleway] border-gray-700 border-dashed" />
        </div>
        <p className='text-right text-xs'>Have a gift Cart?</p>
    </div>
  )
}

export default Ordersummary