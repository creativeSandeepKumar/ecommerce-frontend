import { Button } from '@/components/ui/button'
import React from 'react'

const COD = () => {
  return (
    <div className='text-gray-900 grid justify-center items-center text-center gap-2'>
        <h4 className='text-xl font-semibold'>Confirm your Order</h4>
        <p>Your COD will be placed, are you sure?</p>
        <Button >Confirm</Button>
        <Button variant="outline" className="border-[1px] border-gray-500">Save ₹64 with UPI</Button>
    </div>
  )
}

export default COD