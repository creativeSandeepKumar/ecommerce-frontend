"use client";
import React, { useState } from "react";
import axios from "axios";
import { Container } from "@/components";
import Input from "@/components/Elements/Input";
import Createproductspecification from "@/components/dashboard/Createproductspecification";
import Productsubimages from "@/components/dashboard/Productsubimages";
import Category from "@/components/category/Category";
import Activeoffers from "@/components/activeoffers/Activeoffers";
import Bestfor from "@/components/Features/Bestfor/Bestfor";
import Dialshape from "@/components/Features/Dialshape/Dialshape";
import Feature from "@/components/Features/Feature/Feature";
import Playback from "@/components/Features/Playback/Playback";
import Colors from "@/components/Features/Colors/Colors";
import Noicecancellation from "@/components/Features/Noicecancellation/Noicecancellation";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL
const Page = () => {
  const [responseData, setResponseData] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "", // Assuming you have a default category
    maxPrice: "",
    sellPrice: "",
    discountPercentage: "",
    stock: "",
    specifications: [],
    mainImage: null,
    subImages: [],
    activeOffers: "",
    subImageVariants: [],
    subvariants: [],
    bestfor: "",
    noicecancellation: "",
    display: "",
    playback: "",
    features: [],
  });

  const [mainImagePreview, setMainImagePreview] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if(type === "checkbox") {
      
      setFormData((prevData) => {
        const targetArr = prevData[name];
          if(checked) {
            return {
              ...prevData,
              [name]: [...targetArr, value],
            }
          } else {
            return {
              ...prevData,
              [name]: targetArr.filter((item) => item !== value),
            }
          }
      });
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
   
  };

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setMainImagePreview(reader.result);
    };
    setFormData((prevData) => ({
      ...prevData,
      mainImage: e.target.files[0],
    }));
    reader.readAsDataURL(file);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const mainImageData = new FormData();
    mainImageData.append("mainImage", formData.mainImage);

    // Upload main image
    const mainImageResponse = await axios.post(
      "http://localhost:8080/api/v1/products/main-image",
      mainImageData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );

    // Collect main image URL
    const mainImageUrl = mainImageResponse.data?.data;

    // Prepare data for creating product
    const productData = {
      ...formData,
      mainImage: mainImageUrl,
    };

  // Upload sub-images individually for each subvariant
  const subImagePromises = formData.subvariants.map(async (subvariant) => {
    const subvariantData = {
      color: subvariant.color,
      images: [], // Array to store image URLs
    };

    const imagePromises = subvariant.images.map(async (subImage) => {
      // Create a separate FormData for each sub-image
      const subImageData = new FormData();
      subImageData.append("subImages", subImage);

      const subImageResponse = await axios.post(
        "http://localhost:8080/api/v1/products/sub-images",
        subImageData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      return subImageResponse.data?.data; // Assuming response contains image URL
    });

    const imageUrls = await Promise.all(imagePromises);
    subvariantData.images = imageUrls;
    return subvariantData;
  });

    const subvariantData = await Promise.all(subImagePromises);
  productData.subvariants = subvariantData;

    // Create product
    const productResponse = await axios.post(
      "http://localhost:8080/api/v1/products",
      productData,
      {
        withCredentials: true,
      }
    );

    setResponseData(productResponse.data);
  };


  const formItems = [
    {
      label: "Product Name",
      value: formData.name,
      name: "name",
    },
    {
      label: "Product description",
      value: formData.description,
      name: "description",
    },
    {
      label: "Max price",
      value: formData.maxPrice,
      name: "maxPrice",
    },
    {
      label: "Sell price",
      value: formData.sellPrice,
      name: "sellPrice",
    },
    {
      label: "Discount Percentage",
      value: formData.discountPercentage,
      name: "discountPercentage",
    },
    {
      label: "Stock",
      value: formData.stock,
      name: "stock",
    },
  ];
  console.log(formData);
  return (
    <Container>
      <div className="">
        <h2 className="text-2xl font-bold">Enter Product details</h2>
        <form
          onSubmit={handleSubmitForm}
          className="flex-wrap md:flex-nowrap flex justify-center gap-3 relative"
        >
          <section className="order-2 w-full border-[1px] border-gray-500 p-2 rounded-md">
            {formItems.map((items) => (
              <aside key={items.label} className="w-full py-1">
                <Input
                  label={items.label}
                  placeholder={items.label}
                  name={items.name}
                  value={items.value}
                  handleChange={handleChange}
                  className="w-full px-2"
                />
              </aside>
            ))}
           {[Category, Bestfor, Activeoffers, Dialshape, Feature, Playback, Noicecancellation].map((Features, index) => (
            <aside key={index} className="w-full py-1">
            <Features formData={formData} handleChange={handleChange} />
            </aside>
           ))}
            <Createproductspecification formData={formData} setFormData={setFormData} />
            <button className="px-4 py-1 w-full bg-blue-800 hover:bg-blue-900 text-white rounded-md mt-3">
              Create Product
            </button>
          </section>
          <section className="w-full border-[1px] border-gray-500 p-2 rounded-md grid justify-center">
            <aside className="border-[1px] rounded-md p-2">
              <img
                src={
                  !formData.mainImage
                    ? "https://via.placeholder.com/200x200.png"
                    : mainImagePreview
                }
                alt="main image preview"
                className="h-32 w-32  btn-color rounded-md object-fill mx-auto"
              />
              <div className="flex justify-center py-1">
                <Input
                  label={"Select Main Image"}
                  type="file"
                  handleChange={handleMainImageChange}
                  name={"mainImage"}
                  className="border-none px-0 pt-1"
                />
              </div>
            <aside className="py-2">
             <Productsubimages formData={formData} setFormData={setFormData}  />
            </aside>
            </aside>
          </section>
        </form>
      </div>
    </Container>
  );
};

export default Page;
