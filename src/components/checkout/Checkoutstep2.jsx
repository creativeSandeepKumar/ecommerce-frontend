import React, { useCallback, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { PlusCircleIcon } from "@/utils/reactIcons";

const Checkoutstep2 = ({
  gotonextstep,
  verifyAddress,
  handleVerifyAddress,
}) => {
  const [userAddress, setUserAddress] = useState({
    pincode: "",
    city: "",
    state: "",
    fullName: "",
    email: "",
    fullAddress: "",
    addressType: "",
  });

  const handleChange = useCallback (() => {
    const { name, value } = e.target;
    setUserAddress((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, [setUserAddress]);

  return (
    <div className="mx-auto my-auto py-3 font-[Raleway]">
      {!verifyAddress && (
        <div className="space-y-3">
          <h3 className=" text-base font-medium font-[Raleway]">
            Enter Address
          </h3>
          <div className=" max-h-40 overflow-y-auto px-2">
            <div className="py-2">
              <Label className="text-gray-500 px-1">*Pincode</Label>
              <Input
                type="input"
                placeholder="Pincode"
                className="text-lg p-4 border-gray-700 "
              />
            </div>
            <div className="flex gap-3 py-2">
              <aside>
                <Label className="text-gray-500 px-1">*City</Label>
                <Input
                  type="input"
                  placeholder="City"
                  className="text-lg p-4 border-gray-700 "
                />
              </aside>
              <aside>
                <Label className="text-gray-500 px-1">*State</Label>
                <Input
                  type="input"
                  placeholder="State"
                  className="text-lg p-4 border-gray-700 "
                />
              </aside>
            </div>
            <div className="py-2">
              <Label className="text-gray-500 px-1">*Enter FullName</Label>
              <Input
                type="input"
                placeholder="Fullname"
                className="text-lg p-4 border-gray-700 "
              />
            </div>
            <div className="py-2">
              <Label className="text-gray-500 px-1">*Enter email</Label>
              <Input
                type="email"
                placeholder="Email"
                className="text-lg p-4 border-gray-700 "
              />
            </div>
            <div className="py-2">
              <Label className="text-gray-500 px-1">*Full Address</Label>
              <Input
                type="text"
                placeholder="Full Address"
                className="text-lg p-4 border-gray-700 "
              />
            </div>
            <div className="flex items-center gap-10 py-3">
              <p className="font-medium">Address Type</p>
              <aside>
                <aside className="flex gap-2">
                  <Label className="text-gray-500 px-1 flex items-center text-md gap-1">
                    <Input type="radio" name="radio" />
                    Home
                  </Label>
                  <Label className="text-gray-500 px-1 flex items-center text-md gap-1">
                    <Input type="radio" name="radio" />
                    Address
                  </Label>
                </aside>
              </aside>
            </div>
          </div>

          <Button
            onClick={handleVerifyAddress}
            type="submit"
            size="lg"
            className="w-full text-lg py-4"
          >
            Continue
          </Button>
        </div>
      )}

      {verifyAddress && (
        <div>
          <p className="text-xs">Hey welcome back Sandeep kumar</p>
          <h3 className=" text-lf font-medium font-[Raleway]">
            Shipping Address
          </h3>
          <div className="border-[1px] rounded-md border-gray-700 p-2 my-2">
            <h3 className=" text-lf font-medium font-[Raleway]">
              Sandeep Kumar
            </h3>
            <p className="text-sm">
              B.Hub, 2nd Floor, Icici Bank, Mazharul Haque Path, Frazor Road
              Patna, Patna, Bihar, 800001
            </p>
            <p className="text-xs pt-3">sdp4209@gmail.com</p>
          </div>
          <div>
            <div className="flex items-center gap-10 py-3">
              <p className="font-medium">Shipping method</p>
              <aside className="flex  gap-2 items-center">
                <Input type="radio" name="radio" className="h-4 w-4" />
                <Label className="text-gray-500 px-1  text-md ">
                  Free shipping @₹ 0
                </Label>
              </aside>
            </div>
          </div>
          <div className="flex items-center gap-2 pb-2">
            <PlusCircleIcon className="text-2xl" />
            <p className="font-medium">Add New Address</p>
          </div>
          <Button
            onClick={() => gotonextstep("step3")}
            type="submit"
            size="lg"
            className="w-full text-lg py-4"
          >
            Continue
          </Button>
        </div>
      )}
    </div>
  );
};

export default Checkoutstep2;
