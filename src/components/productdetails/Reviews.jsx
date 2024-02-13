import { CheckIconPatch, StarIcon } from "@/utils/reactIcons";
import React from "react";
import { Button } from "../ui/button";

const reviewsItems = [
  {
    ratings: 5,
    percentage: "98%",
    ratingcount: 57,
  },
  {
    ratings: 4,
    percentage: "2%",
    ratingcount: 1,
  },
  {
    ratings: 3,
    percentage: "0%",
    ratingcount: 0,
  },
  {
    ratings: 2,
    percentage: "0%",
    ratingcount: 0,
  },
  {
    ratings: 1,
    percentage: "0%",
    ratingcount: 0,
  },
];

const userreviews =  [
  {
    username: "Dharmesh Sonejee",
    ratings: 5,
    review: "Superb",
    description: "Good product..., Stylish design",
    date: "06/01/2024",
    isverified: true
  }
]

const Reviews = () => {

  const firstLettername = (name) => {
      let firstltter = name.substring(0, 1);
      return firstltter;
  }


  return (
    <div className="max-w-5xl mx-auto space-y-7 border-t-[1px] border-gray-400 py-3">
      <section className="space-y-2 md:space-y-0 md:flex gap-5 justify-between">
        <aside className="space-y-2 md:space-y-0 order-0 w-full">
          <h2 className="text-2xl font-bold">Verified Reviews</h2>
          <div className="flex gap-2">
            {Array.from({ length: 5 }).map((_,item) => (
              <aside key={item}>
                <StarIcon className="text-orange-500 text-xl" />
              </aside>
            ))}
          </div>
          <p>Based on 58 Reviews</p>
        </aside>
        <aside className="order-2 w-full">
          <Button variant="secondary" className="w-full">
            Write a Review
          </Button>
        </aside>
        <aside className="order-1 w-full">
          {reviewsItems.map((item, index) => (
            <div key={index} className="flex gap-2">
              <aside className="flex w-[100px]">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <div key={starIndex} className="w-full">
                    <StarIcon className="text-gray-300 text-xl"
                      style={{
                        color: starIndex < item.ratings ? "orange" : "",
                      }}
                    />
                  </div>
                ))}
              </aside>
              <aside className="w-[100px] my-1">
                <div className="w-full h-6 bg-gray-200 border-[1px] border-gray-500 ">
                      <div className="h-6 bg-gray-800" style={{width: item.percentage}}></div>
                </div>
              </aside>
              <aside className="">
                <p>{item.percentage}</p>
              </aside>
              <aside className="">
                ({item.ratingcount})
              </aside>
            </div>
          ))}
     
         
        </aside>
      </section>
      <section className="border-t-[1px] border-gray-400 py-3">
          {userreviews.map((reviews, index) => (
            <div key={index}>
              <section className="flex gap-3 items-center">
              <aside className="bg-gray-300 p-3 px-5 rounded-full relative">
                <p>{firstLettername(reviews.username)}</p>
                <span className="absolute right-1">
                  <CheckIconPatch/>
                </span>
              </aside>
              <aside className="space-y-2">
                <section className="flex gap-2">
                <div className="flex">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                  <div key={starIndex} className="w-full">
                    <StarIcon className="text-gray-300 text-xl"
                      style={{
                        color: starIndex < reviews.ratings ? "orange" : "",
                      }}
                    />
                  </div>
                ))}
                </div>
                <p className="text-sm">{reviews.date}</p>
                </section>
                <section className="flex gap-1">
                  {reviews.isverified && (
                    <p className="bg-gray-800 text-white px-3 pt-[2px] text-sm">Verified</p>
                  )}
                  <p className="font-semibold text-sm">{reviews.username}</p>
                </section>
              </aside>
              </section>
              <p className="font-semibold pt-2">{reviews.review}</p>
              <p className="text-sm">{reviews.description}</p>
            </div>
          ))}
      </section>
    </div>
  );
};

export default Reviews;
