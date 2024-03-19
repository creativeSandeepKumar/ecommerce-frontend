import React from 'react';
import { CheckIconPatch, PencilIcon, RupeeIocn, StarIcon } from "../../utils/reactIcons";
import { useRouter } from "next/navigation";

const Productscard = ({productdetails}) => {
    const router = useRouter();

    const handleGetColors = (subimages) => {
      let colors = subimages?.map((subimage) => subimage?.color);
      return colors;
    }

    // console.log(handleGetColors(productdetails?.subImageVariants));

    const handleRouter = (id) => {
      router.push(`/products/${id}`)
    }

  return (
    <div className="font-[Roboto] flex esm:gap-3 card-shadow rounded-md">
    <section className="w-full relative">
      <img
        src={productdetails.mainImage?.url}
        alt={productdetails.name}
        onClick={() => handleRouter(productdetails?._id)}
        className="rounded-t-xl h-full esm:max-h-64 md:min-h-60 w-full bg-slate-200"
      />
      <div className="absolute top-4 w-full">
        <p className="bg-gray-950 w-fit flex items-center gap-2 px-3 text-white shadow  text-center py-1 rounded-r-md text-[8px] esm:text-xs">
          <PencilIcon className="text-orange-500" />
          Engraving Available
        </p>
      </div>
      <div className="absolute -bottom-3 w-full">
        <p className="bg-yellow-500 border-[1.5px] shadow w-full px-6 mx-auto text-center py-1 rounded-md text-xs  esm:text-sm font-semibold">
          {productdetails?.playback || productdetails?.dialshape || productdetails?.noicecancellation
}
        </p>
      </div>
    </section>
    <div className="w-full px-1 py-3 esm:space-y-3">
    {productdetails.rating ? (
            <div className="flex gap-2 flex-wrap">
              <span className="flex items-center text-sm gap-1 font-medium">
                <StarIcon className="text-orange-500" />
                {productdetails.rating}
              </span>
              <span className="flex items-center text-sm gap-1 font-medium">
                |{productdetails.totalRating}
                <CheckIconPatch className="text-sky-700" />
              </span>
            </div>
          ) : (
            <span className="flex items-center text-sm gap-1 font-medium">
              <StarIcon className="text-orange-500" />
              Be first to Review
            </span>
          )}
      <section className="flex justify-between flex-wrap">
        <aside>
          <h4 className="text-base font-bold">{productdetails.name}</h4>
        </aside>
        <aside className="pr-5">
          <div className={`h-5 w-5 rounded-full relative`}>
            {productdetails?.color.map((colors, index) => (
             <div key={colors?.colorCode}
                className={`absolute h-5 w-5 rounded-full -right-4`}
                style={{background: colors?.colorCode, right: -index*7}}
              ></div>
            ))}
          
          </div>
        </aside>
      </section>
      <section className="space-y-3">
        <aside>
            
          <div className="flex gap-1 items-center flex-wrap">
            <span className="flex items-center text-base font-extrabold">
              <RupeeIocn />
              {productdetails.sellPrice}
            </span>
            <span className="flex items-center text-sm font-semibold line-through text-gray-500">
              <RupeeIocn />
              {productdetails.maxPrice}
            </span>
            <span className="text-xs font-semibold text-cyan-500">
              {productdetails.discountPercentage}% off
            </span>
          </div>
        
        </aside>
        <aside>
            <aside className='flex gap-2 pb-3 flex-wrap'>
                {productdetails.features?.map((quality, index) => (
                    <p key={index} className='px-4 py-1 bg-gray-200 font-[Raleway] text-xs rounded-md'>{quality}</p>
                ))}
            </aside>
          <button className="bg-gray-900 w-full text-sm hover:bg-gray-700 text-white px-4 py-2 rounded-xl">
            Add To Cart
          </button>
        </aside>
      </section>
    </div>
  </div>
  )
}

export default Productscard