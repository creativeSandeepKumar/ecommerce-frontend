import React from "react";
import { Button } from "@/components/ui/button";

const Deliverycheck = () => {
  return (
    <section className="space-y-4">
    <div className="bg-stone-100 rounded-md p-4 md:max-w-sm">
      <section className="flex items-center justify-between">
        <aside className="space-y-1">
          <p className="font-light">Delivering to:</p>
          <p className="font-semibold">800001</p>
        </aside>
        <aside>
          <Button variant="outline">Change</Button>
        </aside>
      </section>
      <section className="border-t-2 border-white py-2">
            <div className="flex gap-2 items-center">
                <p className="text-emerald-700 font-semibold">Free Delivery</p>
                <div className="h-4 w-[2px] bg-gray-700"></div>
                <p className="font-semibold">By Sunday, 11 feb</p>
            </div>
            <p className="font-light text-base">If ordered within <span className="text-red-600"> 18 hours</span></p>
      </section>
    </div>
    <div className="bg-stone-100 rounded-md p-4 md:max-w-sm space-y-1">
        <h3 className="font-semibold">Make your Airdropes personal</h3>
        <p className="text-xs text-sky-600 font-semibold">Get A Customized Engraving And Make It Unmistakably Yours.</p>
    </div>
    </section>
  );
};

export default Deliverycheck;
