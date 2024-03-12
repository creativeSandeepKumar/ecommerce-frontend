import React from 'react'

const ProductspecificationItems = [
    {
        name: "Brand",
        text: "boAt"
    },
    {
        name: "Category/ Generic name of commodity",
        text: "Wireless Bluetooth Earbuds"
    },
    {
        name: "Product Description/ Name",
        text: "Nirvana Ion"
    },
    {
        name: "IPX Rating",
        text: "IPX4"
    },
    {
        name: "Maximum Retail",
        text: "Price ₹ 7,990"
    },
    {
        name: "Warranty",
        text: "1 Year from the date of Purchase"
    },
    {
        name: "Net Content",
        text: "Nirvana Ion, 1 Unit Type-C, 1 Unit User Manual, 1 Unit Warranty Card"
    },
    {
        name: "Working Time",
        text: "Up to 120 Hours"
    },
    {
        name: "Driver Size",
        text: "10mm"
    },
    {
        name: "Beast Mode",
        text: "Yes"
    },
    {
        name: "Bluetooth version",
        text: "5.2"
    },
    {
        name: "Net Quantity",
        text: "1 Unit"
    },
    {
        name: "Country Of Origin",
        text: "China"
    },
    {
        name: "Marketed By",
        text: "Imagine Marketing Limited"
    },
    {
        name: "Address",
        text: "Unit No. 204&205, D-wing & E-wing, Corporate Avenue, Andheri Ghatkopar Link Road, Andheri East, Mumbai-400093"
    },
    {
        name: "For Consumer Complaints",
        text: "022-6918-1920 info@imaginemarketingindia.com Imagine Marketing Limited Address: Unit No. 204&205, D-wing & E-wing, Corporate Avenue, Andheri Ghatkopar Link Road, Andheri East, Mumbai-400093"
    },
    
]

const Productspecification = ({specifications}) => {


  return (
    <div className='py-4 max-w-5xl'>
        <h2 className='text-2xl py-2 md:text-4xl'>Product <span className='font-bold'>Specification</span></h2>
        <section className='flex flex-wrap justify-between gap-3 md:gap-0'>
            {
               specifications && Array.isArray(specifications) && specifications.map((item, index) => (
                    <div key={index} className='max-w-md  w-full md:w-1/2 p-2' >
                        <h5 className='text-sm md:text-lg font-[Raleway]'>{item.heading}</h5>
                        {item.specificationitems?.map((descriptions) => (
                        <p key={descriptions?.description} className='font-semibold md:text-base'>{descriptions?.description} </p>
                        ))}
                    </div>
                ))
            }
        </section>
    </div>
  )
}

export default Productspecification