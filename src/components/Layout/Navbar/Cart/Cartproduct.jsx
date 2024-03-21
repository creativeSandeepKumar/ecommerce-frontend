import { DeleteIcon } from "@/utils/reactIcons";


const Cartproduct = ({apiData, handleDecreaseQuantity, handleIncreaseQuantity, loading, handleRemoveProduct}) => {

    return (
        <div className="relative ">
            {loading && (
                <div className='absolute bg-black bg-opacity-40 w-full h-full'>
                    <div className='grid justify-center items-center py-10'>
                <span className="loader"></span>
                    </div>
                </div>
            ) }
            <div className='my-3 bg-gray-200 p-4 flex gap-5 flex-wrap rounded-md space-y-1 md:space-y-0 max-h-[30vh] overflow-scroll'>
            {apiData?.items && apiData?.items.map((items, index) => (
                <section key={index} className='flex gap-2 w-full'>
                    <aside className=''>
                        <img src={items?.product.mainImage?.url} alt={items.product.name} className='w-20 bg-gray-200 rounded-md' />
                    </aside>
                    <aside className='space-y-2 w-full '>
                        <h4 className='font-semibold text-sm'>{items.product.name}</h4>
                        <p className='font-semibold text-lg'>₹{items.product.sellPrice}</p>
                        <div className='flex gap-3 justify-between '>
                            <div className='flex gap-3 items-center'>
                            <p className='text-xs bg-gray-300 w-fit p-2 px-3 rounded-sm'>{items.product.color[0].name}</p>
                            <span onClick={() => handleRemoveProduct(items?.quantity, items.product._id)} className="text-xl cursor-pointer hover:text-red-500">
                                <DeleteIcon/>
                            </span>
                            </div>
                            <div className='flex items-center'>
                                <button onClick={() => handleDecreaseQuantity(items?.quantity, items.product._id)} className="border-[1px] border-gray-400 text-xl px-3 rounded-md">-</button>
                                <p className='px-2'>{items?.quantity}</p>
                                <button onClick={() => handleIncreaseQuantity(items?.quantity, items.product._id)} className="border-[1px] border-gray-400 text-xl px-3 rounded-md">+</button>
                            </div>
                        </div>
                    </aside>
                </section>
            ))}
            </div>
           
        </div>
    )
}

export default Cartproduct;
