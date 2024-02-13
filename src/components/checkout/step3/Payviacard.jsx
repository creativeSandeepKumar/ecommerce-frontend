import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const Payviacard = () => {
  return (
    <div className='text-gray-950 space-y-1'>
        <div>
        <Label htmlFor="#" className=''>Fullname</Label>
        <Input placeholder="Fullname"/>
        </div>
        <div>
        <Label htmlFor="#" className=''>Card Number</Label>
        <Input placeholder="XXXX XXXX XXXX"/>
        </div>
        <section className='flex gap-4'>
        <div className='w-full'>
        <Label htmlFor="#" className=''>Expiry Date</Label>
        <Input placeholder="Expiry Date"/>
        </div>
        <div className='w-full'>
        <Label htmlFor="#" className=''>Enter CVV</Label>
        <Input placeholder="Enter CVV"/>
        </div>
        </section>
        <div className='flex justify-start items-center gap-3'>
        <Input type="checkbox" className="max-w-4" />
        <Label htmlFor="#" className=''>Save card details for future uses</Label>
        </div>

        <Button className="w-[15rem] mx-auto block">Continue</Button>
    </div>
  )
}

export default Payviacard