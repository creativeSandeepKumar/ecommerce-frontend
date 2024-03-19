import React from 'react';
import ThreeDot from "../../public/tail-spin.svg";
import Image from 'next/image';

const DotsLoader = () => {
  return (
    <div className='mt-40 text-center'>
        <h4 className='text-xl font-bold'>Loading...</h4>
        <Image src={ThreeDot} alt="Tutorbe loader" width="100%" height="100%" className='w-40 m-auto' />
        <h4 className='text-xl font-bold'>Please Wait</h4>
    </div>
  )
}

export default DotsLoader