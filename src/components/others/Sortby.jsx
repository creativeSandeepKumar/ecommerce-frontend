import { CrossIcon, SortIcon } from '@/utils/reactIcons'
import React, { useState } from 'react'

const sortbyitems = [
    "Featured", "Best Selling", "Alphabetically, A-Z", "Alphabetically, Z-A", "Price low to high", "Price high to low", "New Arrivals"
]

const Sortby = ({closesortby, issortbyopen}) => {

    const [isitemactive, setIsitemactive] = useState("");

    const handleActiveItems = (itemname) => {
        setIsitemactive(itemname);
    }

  return (
    <div
    onClick={closesortby}
    className={`left-0 transition-all fixed bottom-0 duration-500 bg-opacity-35 bg-gray-500 w-full overflow-hidden ${
      issortbyopen ? "h-[90vh] sm:h-full sm:w-full" : "h-0 sm:h-auto sm:w-0"
    }`}
  >
    <section
      onClick={(e) => e.stopPropagation()}
      className="absolute max-w-sm bottom-0 w-[100%] sm:w-[80%] bg-stone-100 rounded-tr-md h-[90%] py-6 overflow-y-auto"
    >
      <section className="flex justify-between">
      <div className="flex items-center px-4 gap-3">
        <SortIcon className='text-xl'/>
        <p className="text-xl font-semibold">SortBy</p>
      </div>
      <div className="pr-6 text-red-600">
          <CrossIcon onClick={closesortby} />
      </div>
      </section>
     <section className='p-3 font-[Poppins]'>
        {sortbyitems.map((items) => (
            <div onClick={() => handleActiveItems(items)} key={items} className={`py-2 px-3 rounded-md font-medium ${isitemactive === items ? "bg-emerald-50 border-[1px] border-emerald-600" : ""}`} >
                {items}
            </div>
        ))}
     </section>
    </section>
  </div>
  )
}

export default Sortby