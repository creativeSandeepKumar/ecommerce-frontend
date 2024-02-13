import React, { useCallback, useState } from "react";
import {
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";

import Checkoutstep1 from "./Checkoutstep1";
import Checkoutstep2 from "./Checkoutstep2";
import Checkoutstep3 from "./Checkoutstep3";
import Ordersummary from "./Ordersummary";

const Checkout = () => {
const logo = "https://cdn.gokwik.co/merchant/155/logo1632914610996.jpeg"
  const [checkoutsteps, setCheckoutsteps] = useState({
    step1: true,
    step2: false,
    step3: false,
  });
  const [verifyphone, setVerifyphone] = useState(false);
  const [verifyAdress, setVerifyAdress] = useState(false);
  const [topclicked, setTopclicked] = useState("top1");

  const handleVerifyPhone = useCallback(() => {
    setVerifyphone(!verifyphone);
}, [setVerifyphone]);

  const handleVerifyAdress = useCallback(() => {
    setVerifyAdress(!verifyAdress)
}, [setVerifyAdress]);

  const handleSteps = (step, topnumber) => {
    if(topnumber="top1") {
      if(verifyphone) {
        setVerifyphone(false)
      }
      setTopclicked("top1");
    }

    if(topnumber = "top2") {
      if(verifyAdress) {
        setVerifyAdress(false)
      }
      setTopclicked("top2");
    }

    if(topnumber = "top3") {
      if(verifyAdress) {
        setVerifyAdress(false)
      }
      setTopclicked("top3");
    }

   

    if(!checkoutsteps[step]) {
        setCheckoutsteps((prevState) => ({
          [step]: !prevState[step],
        }));
        setVerifyphone(false);
    }
  };

  return (
    <DialogContent className="sm:max-w-4xl">
          <section className="flex gap-2">
          <aside className="w-full">
  <DialogHeader>
    <div className="py-3">
        <img src={logo} alt="Logo of boat" className="max-w-16" />
    </div>
    <section className="flex justify-between">
      {["step1", "step2", "step3"].map((step, index) => (
        <aside
          key={index}
          onClick={() => handleSteps(step, "top1")}
          className={`flex gap-2 border-b-2 py-2 items-center cursor-pointer w-full ${checkoutsteps[step] ? 'border-gray' : ''}`}
          style={{ borderColor: checkoutsteps[step] && "gray" }}
        >
          <p className="border-2 border-gray-400 rounded-full px-2" style={{ borderColor: checkoutsteps[step] && "black" }}>{index + 1}</p>
          <p>Step {index + 1}</p>
        </aside>
      ))}
    </section>
  </DialogHeader>
  <div className="max-w-xl mx-auto py-7 ">
  {checkoutsteps.step1 && (
    <Checkoutstep1 gotonextstep={handleSteps} verifyphone={verifyphone} handleVerifyPhone={handleVerifyPhone}  />
  )}
  {checkoutsteps.step2 && (
    <Checkoutstep2 gotonextstep={handleSteps} verifyAddress={verifyAdress} handleVerifyAddress={handleVerifyAdress} />
  )}
  {checkoutsteps.step3 && (
    <Checkoutstep3 topnumber={topclicked} setTopnumber={setTopclicked} />
  )}
  </div>
   
    </aside>
    <aside className="w-6/12">
        <Ordersummary/>
    </aside>
  </section>
  

</DialogContent>

  );
};

export default Checkout;
