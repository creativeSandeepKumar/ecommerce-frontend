

import { Button } from '@/components/ui/button';
import React from 'react'

const bagimg = "https://img.freepik.com/premium-vector/vector-simple-black-outline-craft-bag-with-handle-white-background_921039-2758.jpg?w=740";

const Emptycard = () => {
  return (
    <div className='font-[Poppins]'>
        <h3 className='font-semibold text-xl'>
        Your Cart
        </h3>
        <section>
            <div className='grid justify-center items-center'>
                <img src={bagimg} className='max-h-52' />
                <h5 className='font-bold text-base text-center pb-5'>
        Your Cart is feeling lonely
        </h5>
        <Button className="font-light ">Start Shopping</Button>
            </div>
        </section>
    </div>
  )
}

export default Emptycard