import React, { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";

const cartProducts = [
    {
        name: "Rockerz 255+ Pro",
        price: "1,299",
        color: "black",
        image: "https://www.boat-lifestyle.com/cdn/shop/products/93b827fc-0108-4e8b-9ea9-e66fb1e7a362_160x.png?v=1625157890",
        quantity: 1,
    },
    {
        name: "Rockerz 256+ Pro",
        price: "1,259",
        color: "black",
        image: "https://www.boat-lifestyle.com/cdn/shop/products/93b827fc-0108-4e8b-9ea9-e66fb1e7a362_160x.png?v=1625157890",
        quantity: 4,
    },
];

const Cartproduct = () => {
    const [productQuantities, setProductQuantities] = useState(cartProducts.map(product => product.quantity));

    const handleIncreaseQuantity = (index) => {
        const newQuantities = [...productQuantities];
        newQuantities[index] += 1;
        setProductQuantities(newQuantities);
    };

    const handleDecreaseQuantity = (index) => {
        if (productQuantities[index] > 1) {
            const newQuantities = [...productQuantities];
            newQuantities[index] -= 1;
            setProductQuantities(newQuantities);
        }
    }

    return (
        <div className="my-3 bg-gray-200 p-4 flex gap-5 flex-wrap rounded-md space-y-1 md:space-y-0 max-h-[30vh] overflow-scroll">
            {cartProducts.map((items, index) => (
                <section key={index} className='flex gap-2 w-full'>
                    <aside className=''>
                        <img src={items.image} alt={items.name} className='w-20 bg-gray-200 rounded-md' />
                    </aside>
                    <aside className='space-y-2 w-full '>
                        <h4 className='font-semibold text-sm'>{items.name}</h4>
                        <p className='font-semibold text-lg'>{items.price}</p>
                        <div className='flex gap-3 justify-between '>
                            <p className='text-xs bg-gray-300 w-fit pt-2 px-3 rounded-sm'>{items.color}</p>
                            <div className='flex items-center'>
                                <button onClick={() => handleDecreaseQuantity(index)} className="border-[1px] border-gray-400 text-xl px-3 rounded-md">-</button>
                                <p className='px-2'>{productQuantities[index]}</p>
                                <button onClick={() => handleIncreaseQuantity(index)} className="border-[1px] border-gray-400 text-xl px-3 rounded-md">+</button>
                            </div>
                        </div>
                    </aside>
                </section>
            ))}
        </div>
    )
}

export default Cartproduct;
