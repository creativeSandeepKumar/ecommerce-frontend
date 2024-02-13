import React from 'react';
import { Button } from "@/components/ui/button";

const Cartsignup = () => {
  return (
       <div className="my-3 bg-gray-200 p-4 md:flex gap-3 rounded-md space-y-1 md:space-y-0">
       <p className="text-xs w-full">Sign in to Redeem boAt reward points on this order</p>
       <Button className="w-full">Sign In</Button>
    </div>
  )
}

export default Cartsignup