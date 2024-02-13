import React from 'react'

const summaryProductsItems = [
    {
        name: "Rockerz 255+ Pro",
        description: "Bluetooth Earphone with 10mm drivers, Up to 40 Hours Nonstop Playback, Type-C charging, ASAP™",
        price: "1,299",
        color: "black",
        image: "https://www.boat-lifestyle.com/cdn/shop/products/93b827fc-0108-4e8b-9ea9-e66fb1e7a362_160x.png?v=1625157890",
        quantity: 1,
    },
    {
        name: "Rockerz 256+ Pro",
        description: "Bluetooth Earphone with 10mm drivers, Up to 40 Hours Nonstop Playback, Type-C charging, ASAP™",
        price: "1,259",
        color: "black",
        image: "https://www.boat-lifestyle.com/cdn/shop/products/93b827fc-0108-4e8b-9ea9-e66fb1e7a362_160x.png?v=1625157890",
        quantity: 4,
    },
];


const Checkproductsummary = () => {
  return (
    <div>
        <section className='overflow-y-scroll max-h-[150px] space-y-2'>
           {summaryProductsItems.map((item, index) => (
            <div key={index} className='flex bg-stone-200 items-center py-2'>
                <img src={item.image} alt={item.name} className='w-16 h-20' />
                <aside className='text-xs space-y-1'>
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                    <p>price: {item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                </aside>
            </div>
           ))}
        </section>
        <section className='py-2 px-1 space-y-2'>
            <div className='flex justify-between text-sm'>
                <p>Subtotal</p>
                <p>1299.0</p>
            </div>
            <div className='flex justify-between text-sm'>
                <p>Shipping</p>
                <p>To be calculated</p>
            </div>
            <div className='flex justify-between font-semibold border-t-[1px] pt-1 border-gray-600'>
                <p>To Pay</p>
                <p>1299.0</p>
            </div>

        </section>
    </div>
  )
}

export default Checkproductsummary