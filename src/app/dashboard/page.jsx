"use client";
import React, { useState } from "react";
import axios from "axios";
import { Container } from "@/components";
import Input from "@/components/Elements/Input";
import Select from "@/components/Elements/Select";
import Createproductspecification from "@/components/dashboard/Createproductspecification";
import Productsubimages from "@/components/dashboard/Productsubimages";

const Page = () => {
  const [responseData, setResponseData] = useState(null);
  const [subvarinats, setSubvarinats] = useState({
    name: "Geen",
    colorCode: "#23dd443",
    images: [],
  });

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
  });

  const [mainImagePreview, setMainImagePreview] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
      name: subvariant.name,
      colorCode: subvariant.colorCode,
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
            <aside className="flex flex-wrap esm:flex-nowrap w-full py-1 items-end gap-2">
              <div className="w-full">
                <Select
                  label={"Select Cateory"}
                  defaultText="Select Category"
                  name="category"
                  value={formData.category}
                  handleChange={handleChange}
                  className="w-full px-2"
                  options={["Watches", "Woofer", "657be09fada690d387d51f7d"]}
                  multiple={false}
                />
              </div>
              <div className="w-full">
                <button
                  type="button"
                  className="px-4 w-full bg-blue-500 hover:bg-blue-900 text-white rounded-md h-8"
                >
                  Create Category
                </button>
              </div>
            </aside>
            <aside className="flex flex-wrap esm:flex-nowrap w-full py-1 items-end gap-2">
              <div className="w-full">
                <Select
                  label={"Select Active Offers(Optional)"}
                  defaultText="Select Active Offers"
                  name="activeOffers"
                  value={formData.activeOffers}
                  handleChange={handleChange}
                  className="w-full px-2"
                  options={["30% Off", "50% Off", "657be09fada690d387d51f7d"]}
                  multiple={false}
                />
              </div>
              <div className="w-full">
                <button
                  type="button"
                  className="px-4 w-full bg-blue-500 hover:bg-blue-900 text-white rounded-md h-8"
                >
                  Create Active Offers
                </button>
              </div>
            </aside>
            <Createproductspecification formData={formData} setFormData={setFormData} />
            <button className="px-4 py-1 w-full bg-blue-800 hover:bg-blue-900 text-white rounded-md mt-3">
              Create Product
            </button>
          </section>
          <section className="w-full md:h-[100vh] overflow-y-auto md:sticky md:top-20 border-[1px] border-gray-500 p-2 rounded-md grid justify-center items-center">
            <aside className="py-2">
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
            </aside>
            <aside className="py-2">
             <Productsubimages formData={formData} setFormData={setFormData}  />
            </aside>
          </section>
        </form>
      </div>
    </Container>
  );
};

export default Page;
