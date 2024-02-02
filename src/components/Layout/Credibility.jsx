import React from 'react'

const CredibilityItems = [
    {
        image: "https://www.boat-lifestyle.com/cdn/shop/files/Group_334305_small.svg?v=1682336123",
        firstname: "1 year",
        lastname: "Warranty",
    },
    {
        image: "https://www.boat-lifestyle.com/cdn/shop/files/Group_334304_small.svg?v=1682336123",
        firstname: "7-day",
        lastname: "Replacement",
    },
    {
        image: "https://www.boat-lifestyle.com/cdn/shop/files/Group_334303_small.svg?v=1682336123",
        firstname: "Free",
        lastname: "Shipping",
    },
    {
        image: "https://www.boat-lifestyle.com/cdn/shop/files/Group_334302_small.svg?v=1682336123",
        firstname: "GST",
        lastname: "Billing",
    },
]

const Credibility = () => {
  return (
    <div className='flex items-center justify-center max-w-xl lg:max-w-3xl mx-auto'>
        {
            CredibilityItems.map((items) => (
                <aside key={items.image} className='w-full flex flex-wrap items-center justify-center gap-2' >
                    <img src={items.image} alt={items.firstname + items.lastname} className='w-14 mx-auto md:w-20' />
                    <p className='flex flex-wrap items-center justify-center text-xs md:text-base w-full  text-center' ><span className='font-semibold w-full'>{items.firstname}</span><span className='w-full'>{items.lastname}</span> </p>
                </aside>
            ))
        }
    </div>
  )
}

export default Credibility