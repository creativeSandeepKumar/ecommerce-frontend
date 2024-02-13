import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useId } from 'react'

const UPIIcons = [
    {
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phonepe-logo-icon.png",
        name: "Phone Pay"
    },
    {
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-pay-icon.png",
        name: "Google Pay"
    },
    {
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/paytm-icon.png",
        name: "Paytm"
    },
    {
        icon: "https://img.icons8.com/?size=96&id=5RcHTSNy4fbL&format=png",
        name: "BHIM"
    },

]

const QRCODE = "https://cdn-icons-png.flaticon.com/128/1341/1341632.png";


const Payviaupi = () => {
    const id = useId();
  return (
    <div className='text-gray-950 max-w-xl mx-auto'>
        <p className='font-semibold py-2'>Open UPI App & scan to QR Code to pay</p>
        <section className='flex justify-between py-3'>
            <aside className='flex justify-center flex-wrap gap-4  w-full'>
                {UPIIcons.map((items) => (
                    <div key={id} className='w-4/12'>
                        <img src={items.icon} alt="upi images" className='max-w-10 mx-auto' />
                        <p className='text-center'>{items.name}</p>
                    </div>
                ))}
            </aside>
            <aside className='justify-end'>
                <img src={QRCODE} alt="qr code" />
            </aside>
        </section>
        <div className='flex items-center gap-4'>
            <aside className='w-full bg-gray-600 h-[1px]'></aside>
            <aside>OR</aside>
            <aside className='w-full bg-gray-600 h-[1px]'></aside>
        </div>
        <p className='font-semibold'>Pay Via UPI Id</p>
        <div className='flex gap-2 pt-2'>
        <Input placeholder="Enter UPI Id" />
        <Button className="px-10 bg-blue-600">Pay</Button>
        </div>
        <p className='text-xs py-1'>You'll receive a payment request on your UPI App</p>
        <div className='flex items-center gap-4'>
            <aside className='w-full bg-gray-600 h-[1px]'></aside>
            <aside>OR</aside>
            <aside className='w-full bg-gray-600 h-[1px]'></aside>
        </div>
        <p className='text-xs py-1'>You'll receive a payment link on</p>
        <div className='flex gap-2 pt-2'>
        <p className='text-blue-600 w-full border-b-[1px] border-blue-600'>+91-9663474605</p>
        <Button variant="secondary" className="px-10 border-[1px] border-gray-600">Pay</Button>
        </div>
    </div>
  )
}

export default Payviaupi