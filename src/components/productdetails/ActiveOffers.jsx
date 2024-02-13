import { RupeeIocn } from '@/utils/reactIcons'
import React from 'react'

const activeItems = [
    {
        para: "More than 2 Items",
        offpercentagetext: "Get 5% Off",
        price: "2,184",
        peritems: "/item",
        toptext: "Most popular"
    },
    {
        para: "More than 5 Items",
        offpercentagetext: "Get 7% Off",
        price: "2,138",
        peritems: "/item",
        toptext: "Best Value"
    },
    {
        para: "Corporate Deal",
        buttontext: "Click here to enquire",
        toptext: "Bulk Order"
    },
]

const ActiveOffers = () => {
  return (
    <div className=''>
        <h2 className='font-semibold text-xl py-2'>Active Offers</h2>
    <div className='py-3 space-y-7 lg:space-y-0 lg:max-w-md lg:flex gap-3'>
        {activeItems.map((item, index) =>(
             <section key={index} className='relative border-[1px] bg-emerald-50 border-emerald-700 p-4 px-6 lg:px-3 rounded-md lg:max-w-32'>
             <div className='flex lg:block lg:space-y-2 justify-between items-center'>
             <aside className='text-lg lg:text-sm lg:text-center'>{item.para}</aside>
             <div className='hidden lg:block h-[0.5px] bg-gray-400'></div>
                {item?.buttontext ? (
                    <aside className='space-y-1 lg:h-20 lg:flex lg:items-end'>
                    <p className='font-semibold lg:text-center text-sm text-sky-600'>{item.buttontext}</p>
               </aside>
                ) : (
              <aside className='space-y-1 lg:text-center lg:flex lg:justify-between flex-wrap items-center lg:h-20'>
              <p className='font-semibold text-emerald-700 lg:text-center lg:w-full lg:text-sm'>{item.offpercentagetext}</p>
              <div className='flex items-center lg:justify-center lg:w-full'>
                  <p className='flex items-center text-xl  font-extrabold lg:text-base'><RupeeIocn/> {item.price}</p>
                  <span className='font-semibold text-gray-600 lg:text-sm'>{item.peritems}</span>
              </div>
          </aside>

                )}
             </div>
             <p className='absolute -top-4 lg:-bottom-4 lg:left-0 lg:right-0 text-center lg:top-auto text-sm bg-emerald-700 text-white py-1 px-4 rounded-md' style={{backgroundColor: index !== 0 && "black"}} >{item.toptext}</p>
         </section>
        ))}
       
    </div>
    </div>
  )
}

export default ActiveOffers