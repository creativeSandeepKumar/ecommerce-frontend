"use client";
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { CheckIconPatch, ForwardArrow } from '@/utils/reactIcons';
import Allcoupon from './Allcoupon';
import { RequestTypeEnum } from '@/constants';
import useApiRequest from '@/hooks/useApiRequest';
import { useDispatch, useSelector } from 'react-redux';

const Couponcode = ({updateloader, updateresponse, coupondata}) => {
    const [viewcouponcode, setViewcouponcode] = useState(false);
    const [apiRequest, setApiRequest] = useState({
      url: "/coupon/customer/available",
      type: RequestTypeEnum.GET,
      data: ""
    });
    const dispatch = useDispatch();
    const {updatetotal} = useSelector((state) => state.others)
    const { apiData, handlSubmitRequest, loading, apiResponse } = useApiRequest(apiRequest.url, apiRequest.type, {couponCode: apiRequest.data});

    const handleViewCouponcode = () => {
        setViewcouponcode(!viewcouponcode);
    }

    const handleApplyCoupon = (couponcode) => {
      setApiRequest({
        url: "/coupon/c/apply",
        type: RequestTypeEnum.POST,
        data: couponcode
      });
    }

    const handleRemoveCoupon = (couponcode) => {
      setApiRequest({
        url: "coupon/c/remove",
        type: RequestTypeEnum.POST,
        data: couponcode
      });
    }

    
    useEffect(() => {
      if(!updateloader && !apiRequest.data && updateresponse) {
        handlSubmitRequest();
      }
    }, [updateloader]);

    useEffect(() => {
      if(apiRequest.data) {
        handlSubmitRequest();
      }
    }, [apiRequest.data]);

    useEffect(() => {
      if(apiResponse?.success) {
        if(!updatetotal && apiRequest.data) {
          dispatch({
            type: "otherreducers/UPDATECART",
            payload: true,
          })
        }
       
        setApiRequest({
          url: "/coupon/customer/available",
          type: RequestTypeEnum.GET,
          data: ""
        });
      }
     
    }, [apiResponse])
    


    
    
  return (
    <div>
    <div className='my-3 relative bg-gray-200 rounded-md p-4 space-y-2 '>
    {loading && (
                <div className='absolute bg-black bg-opacity-40 w-full h-full'>
                    <div className='grid justify-center items-center py-10'>
                <span className="loader"></span>
                    </div>
                </div>
            ) }
      
    {coupondata &&  (
    <section className="md:flex gap-3 space-y-1 md:space-y-0">
        <div className='flex items-center gap-2'>
    <CheckIconPatch/>
    <div>
    <p className="text-xs w-full">Unlock {coupondata?.discountValue} OFF on selected products</p>
 <p className='text-xs text-emerald-700'>{coupondata?.name}</p>
 </div>
        </div>
    <Button onClick={() => handleRemoveCoupon(coupondata?.couponCode)} className="px-6 w-full md:w-auto my-1">Remove</Button>
 </section>
  )}
      {!coupondata && apiData?.coupons && apiData?.coupons.map((coupons) => (
    <section key={coupons?.name} className="md:flex gap-3 space-y-1 md:space-y-0">
        <div className='flex items-center gap-2'>
    <CheckIconPatch/>
    <div>
    <p className="text-xs w-full">Unlock {coupons?.discountValue} OFF on selected products</p>
 <p className='text-xs text-emerald-700'>{coupons?.name}</p>
 </div>
        </div>
    <Button onClick={() => handleApplyCoupon(coupons?.couponCode)} className="px-6 w-full md:w-auto my-1">Apply</Button>
 </section>
  ))}
 <div className='border-[0.1px] border-gray-400'></div>
 <p onClick={handleViewCouponcode} className='text-center text-sm font-semibold flex justify-center items-center'> View All Coupons<ForwardArrow/></p>
 </div>
 {viewcouponcode && (
    <Allcoupon closecouponmodel={handleViewCouponcode} />
 ) }
 </div>
  )
}

export default Couponcode