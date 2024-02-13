import { ArrowAup, ForwardArrow } from '@/utils/reactIcons';
import React, { useId } from 'react'

const walletOptions = [
    {
        name: "Free Charge",
        Icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/freecharge-logo-icon.png",
    },
    {
        name: "Amazon Pay",
        Icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/amazon-pay-icon.png",
    },
    {
        name: "Airtel Money",
        Icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/airtel-logo-icon.png",
    },
    {
        name: "Jio Money",
        Icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/jio-logo-icon.png",
    },
    {
        name: "Paytm",
        Icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/paytm-icon.png",
    },
    {
        name: "Mobikwik",
        Icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/mobikwik-logo-icon.png",
    },
    {
        name: "Paytm",
        Icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/paytm-icon.png",
    },
    {
        name: "Phonepay",
        Icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phonepe-logo-icon.png",
    },
]

const Payviawallet = () => {
    const Id = useId();

  return (
    <div className='text-gray-950'>
        <p className='text-sm font-semibold py-2'>Please select option to complete the order</p>
        <div className='border-[0.5px] border-gray-500 rounded-md'>
        {walletOptions.map((items) => (
            <div key={Id} className='flex justify-between gap-2 p-2 items-center border-b-[1px] border-gray-500'>
                <aside className='flex gap-3'>
                <img src={items.Icon} alt={items.name} className='max-w-8 max-h-5' />
                <p className='font-semibold text-sm'>{items.name}</p>
                </aside>
                <ForwardArrow/>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Payviawallet