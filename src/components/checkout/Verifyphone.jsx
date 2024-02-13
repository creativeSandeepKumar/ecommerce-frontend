import { EditIcon } from "@/utils/reactIcons";
import React, { useRef, useState, useCallback } from "react";
import { Button } from "../ui/button";

const OTPInput = ({ gotonextstep }) => {
  const [otp, setOTP] = useState(["", "", "", ""]);
  const refs = [useRef(), useRef(), useRef(), useRef()];

  const handleChange = useCallback(
    (index, value) => {
      if (!isNaN(value)) {
        const newOTP = [...otp];
        newOTP[index] = value;
        setOTP(newOTP);

        if (value !== "") {
          if (index < 3) {
            refs[index + 1].current.focus();
          } else {
            refs[index].current.blur(); // Blur to allow re-entering
          }
        } else {
          if (index > 0) {
            refs[index - 1].current.focus();
          }
        }
      }
    },
    [otp, refs]
  );

  const handleKeyDown = useCallback(
    (index, e) => {
      if (e.key === "Backspace" && index > 0 && otp[index] === "") {
        refs[index - 1].current.focus();
      }
    },
    [otp, refs]
  );

  return (
    <div className="font-[Raleway] space-y-2 max-w-xs mx-auto ">
      <h2 className="text-xl text-center font-semibold">
        Verify Mobile Number
      </h2>
      <p className="text-sm text-center font-medium">
        To Use Your Saved Address, Enter the OTP Sent to
      </p>
      <div className="flex justify-center gap-2 items-center py-1">
        <p className="font-medium text-sm">+91-7739784209</p>
        <EditIcon className="text-green-600" />
      </div>
      <div className="flex gap-3 justify-center">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={refs[index]}
            type="text"
            name=""
            value={digit}
            maxLength={1}
            className="border-[1px] border-gray-400 w-12 text-3xl py-4 px-2 focus:outline-[1px] outline-gray-300 rounded-sm text-center"
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <span className="text-center border-b-2 border-gray-800 text-gray-900 font-medium">
          Resend OTP
        </span>
      </div>
      <Button
        onClick={() => gotonextstep("step2")}
        type="submit"
        size="lg"
        disabled={!otp.every((digit) => digit !== "")} // Check if any element is empty
        className="w-full text-lg py-4"
      >
        Continue
      </Button>
    </div>
  );
};

export default OTPInput;
