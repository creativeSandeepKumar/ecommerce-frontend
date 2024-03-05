import React from 'react';
import Lottie from 'lottie-react';
import NotFoundImg from "../../assets/not_found.json";

const EmptyData = ({ userMessage }) => {

  return (
    <div className='p-4'>
        <h4 className='font-semibold text-center md:text-xl xl:text-xl'>{userMessage}</h4>
        <div className=''>
        <Lottie animationData={NotFoundImg} loop={false} width="100%" className='h-60 m-auto md:h-80 xl:h-96' />
        </div>
    </div>
  )
}

export default EmptyData;