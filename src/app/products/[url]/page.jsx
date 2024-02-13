"use client";
import { Container, Detailsimg, Prodecudetailstext } from '@/components'
import Credibility from '@/components/Layout/Credibility';
import Productspecification from '@/components/productdetails/Productspecification';
import Reviews from '@/components/productdetails/Reviews';
import React from 'react';

const prodcutDetails = {
  images: [
    "https://www.boat-lifestyle.com/cdn/shop/products/main_black_fa1c6ec3-93b7-443e-ae82-d5eeb34258f8_600x.png?v=1641206192",
    "https://www.boat-lifestyle.com/cdn/shop/files/A161PP.386_600x.png?v=1698400100",
    "https://www.boat-lifestyle.com/cdn/shop/files/Black4_600x.jpg?v=1702007944",
    "https://www.boat-lifestyle.com/cdn/shop/files/Black2_600x.jpg?v=1702007944",
    "https://www.boat-lifestyle.com/cdn/shop/files/Black3_600x.jpg?v=1702007944",
    "https://www.boat-lifestyle.com/cdn/shop/files/Black1_600x.jpg?v=1702007944"
  ],
  name: "Airdopes 161",
  description: "Wireless Earbuds with Massive Playback of upto 40 Hours, IPX5 Water & Sweat Resistance, IWP Technology, Type C Interface",
  ratings: "4.9",
  reviews: "149",
  MRP: "2490",
  currentPrice: "999",
  offPercentage: "60",
  colors: ["Pepple black", "Thunder blue", "Pearl purple", "Olive green", "Cool orange" ],

}

const Page = ({params}) => {

  return (
    <Container>
      <div className='space-y-3'>
    <section className='font-[Roboto] space-y-2 md:grid grid-cols-4 grid-flow-row gap-3'>
      <div className='space-y-2 col-span-2 row-span-2 order-2 '>
        <h2 className='text-2xl font-bold'>{prodcutDetails.name}</h2>
        <p className='font-[Raleway] text-sm'>{prodcutDetails.description}</p>
      </div>
      <aside className='col-span-2 order-1 row-span-4'>
        <div className="sticky top-24">
          <Detailsimg productimages={prodcutDetails.images} />
        </div>
      </aside>
      <aside className='col-span-2 order-2'>
        <Prodecudetailstext productdetails={prodcutDetails} />
      </aside>
    </section>
    <Credibility/>
    <Productspecification/>
    <Reviews/>
    </div>
  </Container>
  
  )
}

export default Page