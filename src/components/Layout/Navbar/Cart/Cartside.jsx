"use client";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CircleDownArrow, CrossIcon } from "@/utils/reactIcons";
import { Checkbox } from "@/components/ui/checkbox";

import Cartsignup from "./Cartsignup";
import Cartproduct from "./Cartproduct";
import Couponcode from "./Couponcode";
import Checkoutstep1 from "@/components/checkout/Checkoutstep1";
import Checkout from "@/components/checkout/Checkout";
import { useEffect, useState } from "react";
import useApiRequest from "@/hooks/useApiRequest";
import { RequestTypeEnum } from "@/constants";
import { useDispatch, useSelector } from "react-redux";
import Emptycard from "./Emptycard";

const upiImages = [
  "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/paytm_icon_fa75a315-11a2-4c8e-a241-18af809eb683.svg?v=1682575951",
  "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/gpay_icon_503ebbda-a3e1-4659-af32-0686aecec227.svg?v=1682575951",
  "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/phone_pe_icon_f9872d32-f8cf-43ca-8fa2-78db125fcdad.svg?v=1682575951",
];

const Cartside = ({ openSideNav, handleCloseSideNav }) => {
  const dispatch = useDispatch();
  const [quantityRequest, setQuantityRequest] = useState({
    url: "/cart",
    type: RequestTypeEnum.GET,
    data: "",
});
const {updatetotal} = useSelector((state) => state.others)

const { apiData, handlSubmitRequest, apiResponse, loading } = useApiRequest(quantityRequest.url, quantityRequest.type, {quantity: quantityRequest.data});

const handleIncreaseQuantity = (quantity, ids) => {
  setQuantityRequest({
      url: `/cart/item/${ids}`,
      type: RequestTypeEnum.POST,
      data: quantity + 1
  });
};

const handleDecreaseQuantity = (quantity, ids) => {
  setQuantityRequest({
      url: `/cart/item/${ids}`,
      type: RequestTypeEnum.POST,
      data: quantity - 1
  });
}


const handleRemoveProductfromcart = (quantity, ids) => {
  setQuantityRequest({
      url: `/cart/item/${ids}`,
      type: RequestTypeEnum.DELETE,
      data: quantity
  });
}

useEffect(() => {
  if(openSideNav) {
      handlSubmitRequest();
  }

  if(updatetotal) {
    dispatch({
      type: "otherreducers/UPDATECART",
      payload: false,
    })
  }

}, [openSideNav, updatetotal]);

useEffect(() => {
  if(quantityRequest.data) {
      handlSubmitRequest();
  }
}, [quantityRequest.data]);

useEffect(() => {
  if(apiResponse && quantityRequest.data) {
      setQuantityRequest({
          url: `/cart`,
          type: RequestTypeEnum.GET,
          data: ""
      });
  }

}, [apiResponse]);

  return (
    <div
    className="bg-gray-700 w-full min-h-[100vh] font-[Poppins] bg-opacity-50"
    onClick={handleCloseSideNav}
  >
    <aside
      className={`bg-white px-4 h-[100vh] ml-auto overflow-y-auto ${
        openSideNav
          ? "w-[90%] transition-all duration-500"
          : "w-0 transition-all duration-500"
      } max-w-xs md:max-w-md min-h-full border-t-2 border-gray-400 z-20 pt-5 pb-10 relative`}
      style={{ scrollbarWidth: "thin" }}
      onClick={(e) => e.stopPropagation()}
    >
      {apiData && apiData?.items.length ? (
      <div>
        <span onClick={handleCloseSideNav} className="absolute right-5 top-5 text-red-600" >{<CrossIcon/>}</span>
        <h2 className="text-xl font-semibold ">Your Cart</h2>
     <Cartsignup/>
     <Cartproduct apiData={apiData} handleDecreaseQuantity={handleDecreaseQuantity} handleIncreaseQuantity={handleIncreaseQuantity} loading={loading} handleRemoveProduct={handleRemoveProductfromcart} />
     <Couponcode updateresponse={apiResponse?.success} updateloader={loading} coupondata={apiData?.coupon} />
     {/* gst invoice */}
     <section className="flex items-center gap-3">
     <Checkbox />
     <p className="text-sm font-light">get <span className="font-semibold">GST</span> invoice</p>
     </section>
     {/* upi section */}
     <section className="flex my-4 bg-rose-100 p-3 justify-between rounded-md px-5">
        <p className="text-sm">₹15 off on All UPI Payments</p>
        <div className="flex gap-3">
          {upiImages.map((items, index) =>(
            <img key={index} src={items} alt="upi imamges" />
          ))}
        </div>
     </section>
     {/* confirm order */}
     <section className="flex gap-2 justify-between items-center bg-gray-200 rounded-md p-4">
      <aside className="flex items-center">
        <div>
          {apiData?.coupon && (
          <p className="text-xs line-through">₹ {apiData?.cartTotal}</p>
          )}
        <p className=" text-lg font-semibold">₹ {apiData?.discountedTotal}</p>
        <p className="text-xs font-light">Inclusive all taxes</p>
        </div>
        <CircleDownArrow className="text-3xl" />
      </aside>
      <aside>
      <Dialog>
    <DialogTrigger asChild>
      <Button>Confirm Order</Button>
    </DialogTrigger>
            <Checkout/>
  </Dialog>
      </aside>
     </section>
     </div>
     ) : (
      <Emptycard/>
     ) }
    </aside>
  </div>
  )
}

export default Cartside