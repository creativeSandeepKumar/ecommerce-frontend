import { useCallback, useState } from "react";
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Button } from "@/components/ui/button";
import { UncheckedIcon, CheckIcon } from "@/utils/reactIcons";
import Verifyphone from "./Verifyphone";
import PhoneVerification from "./Phoneverification";



const Checkoutstep1 = ({gotonextstep, verifyphone, handleVerifyPhone}) => {

  const [mobileNumber, setMobileNumber] = useState("");
  const [ischeck, setIscheck] = useState(true);

  return (
    <div className="mx-auto my-auto py-3">
      {!verifyphone && (
        <div className="space-y-3">
           <h3 className=" text-xl font-[Raleway]">Enter Your Mobile Number</h3>
            <div className="relative">
          {/* <Input onChange={(e) => setMobileNumber(e.target.value) } placeholder="Enter Mobile" className="pl-16 py-3 text-xl font-[Raleway] border-gray-700 font-light" /> */}
          {/* <p className="absolute top-1 pl-2 text-xl">+91 |</p> */}
            </div>
            <PhoneVerification/>
            <div className="flex items-center gap-3">
              <div onClick={() => setIscheck(!ischeck)} className="text-xl" >{!ischeck ? <UncheckedIcon/> : <CheckIcon/>}</div>
              <p className="text-xs">Notify me for order, updates and offers</p>
            </div>
            {/* <Button onClick={handleVerifyPhone} type="submit" size="lg"  disabled={!(mobileNumber.length === 10)} className="w-full text-lg py-4">Continue</Button> */}
           
            <p className="text-gray-500 text-xs text-center">By proceeding, I accept that I have read and understood the Gokwik's Privacy Policy and T&C</p>
        </div>
      )}
         
            {verifyphone && (
              <Verifyphone gotonextstep={gotonextstep}  />
            )}
    </div>
  )
}

export default Checkoutstep1