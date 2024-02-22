"use client"
import React, { useState } from 'react';
import axios from 'axios';

const Page = () => {
  const [responseData, setResponseData] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '657be09fada690d387d51f7d', // Assuming you have a default category
    maxPrice: '',
    sellPrice: '',
    discountPercentage: '',
    stock: '',
    specifications: [
      {
        name: 'dsdasd',
        description: 'dsadsadsa',
      },
    ],
    mainImage: null,
    subImages: [],
    activeOffers: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleMainImageChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      mainImage: e.target.files[0],
    }));
  };

  const handleSubImagesChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      subImages: [...prevData.subImages, ...e.target.files],
    }));
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const mainImageData = new FormData();
    mainImageData.append('mainImage', formData.mainImage);

    // Upload main image
    const mainImageResponse = await axios.post('http://localhost:8080/api/v1/products/main-image', mainImageData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });

    // Collect main image URL
    const mainImageUrl = mainImageResponse.data?.data;
    console.log("check mainImageResponse", mainImageResponse.data?.data)

    // Prepare data for creating product
    const productData = {
      ...formData,
      mainImage: mainImageUrl,
    };

    // Upload sub images
    const subImagePromises = formData.subImages.map(async (subImage) => {
      const subImageData = new FormData();
      subImageData.append('subImages', subImage);
      const subImageResponse = await axios.post('http://localhost:8080/api/v1/products/sub-images', subImageData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      });
      return subImageResponse.data?.data;
    });

    // Collect sub image URLs
    const subImageUrls = await Promise.all(subImagePromises);
    productData.subImages = subImageUrls;

    console.log("Here check final productData", productData)
    // Create product
    const productResponse = await axios.post('http://localhost:8080/api/v1/products', productData, {
      withCredentials: true,
    });

    setResponseData(productResponse.data);
  };

  const formItems = [
    {
      label: 'Product Name',
      value: formData.name,
      name: 'name',
    },
    {
      label: 'Product description',
      value: formData.description,
      name: 'description',
    },
    {
      label: 'Max price',
      value: formData.maxPrice,
      name: 'maxPrice',
    },
    {
      label: 'Sell price',
      value: formData.sellPrice,
      name: 'sellPrice',
    },
    {
      label: 'Discount Percentage',
      value: formData.discountPercentage,
      name: 'discountPercentage',
    },
    {
      label: 'Stock',
      value: formData.stock,
      name: 'stock',
    },
  ];


  return (
    <div className='py-14'>
      <form onSubmit={handleSubmitForm} className='space-y-2'>
        {formItems.map((items) => (
          <aside key={items.label} className='flex gap-2'>
            <label htmlFor={items.name}>{items.label}</label>
            <input className='border-[1px] border-gray-400' type='text' name={items.name} value={items.value} onChange={handleChange} />
          </aside>
        ))}
        <aside>
          <label htmlFor='mainImage'>Main Image</label>
          <input type='file' name='mainImage' onChange={handleMainImageChange} />
        </aside>
        <aside>
          <label htmlFor='subImages'>Sub Images</label>
          <input type='file' name='subImages' onChange={handleSubImagesChange} multiple />
        </aside>
        <button>Submit Form</button>
      </form>
    </div>
  );
};

export default Page;
