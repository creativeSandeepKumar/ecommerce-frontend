import React from "react";

const offerItems = [
  {
    image: [
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt_Rewards_logo.png?v=1694079279",
    ],
    description: "Earn upto 114 boAt reward points on this product",
  },
  {
    image: [
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/paytm_icon_fa75a315-11a2-4c8e-a241-18af809eb683.svg?v=1682575951",
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/gpay_icon_503ebbda-a3e1-4659-af32-0686aecec227.svg?v=1682575951",
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/phone_pe_icon_f9872d32-f8cf-43ca-8fa2-78db125fcdad.svg?v=1682575951",
    ],
    description: "₹15 off on All UPI Payments",
  },
  {
    image: [
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/mobikwik_08db2909-7f20-403a-a417-fd4ea2cdecaf.png?v=1689752783",
    ],
    description: "Flat 5% cashback upto ₹75 on orders above ₹1499",
  },
];

const Rewardspayments = () => {
  return (
    <div>
      <h2 className="font-semibold text-xl py-2">Rewards and Payments Offer</h2>
      <div className='py-1 md:max-w-sm bg-orange-100 rounded-md px-3'>
        {offerItems.map((item, index) => (
          <section key={index} className="flex items-center my-3 gap-4 text-sm font-semibold">
            <aside className="flex w-full max-w-32 justify-center flex-wrap bg-rose-100  py-2 gap-3 rounded-md">
                {item.image.map((image) => (
                    <img key={image} className="max-w-16" style={{maxWidth: index === offerItems.length-1 && "100px"}} src={image} alt={item.description} />
                ) )}
            </aside>
            <aside className="">
                {item.description}
            </aside>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Rewardspayments;
