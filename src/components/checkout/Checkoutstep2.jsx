"use client"
import React, { useCallback, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { PlusCircleIcon } from "@/utils/reactIcons";
import { checkValidation } from "@/utils/Validation";
import useApiRequest from "@/hooks/useApiRequest";
import { RequestTypeEnum } from "@/constants";

const Checkoutstep2 = ({
  gotonextstep,
  verifyAddress,
  handleVerifyAddress,
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [validationErrors, setValidationErrors] = useState("");
  const [userAddress, setUserAddress] = useState({
    pincode: "",
    city: "",
    state: "",
    fullName: "",
    email: "",
    fullAddress: "", 
    addressType: "",
    phoneNumber
  });

  const [apiRequests, setApiRequests] = useState({
    url: "",
    type: RequestTypeEnum.POST,
    data: "",
  })

  const { handlSubmitRequest, apiData, apiResponse } = useApiRequest(apiRequests.url, apiRequests.type, apiRequests.data);
  

  const handleChange = useCallback ((e) => {
    const { name, value } = e.target;

    setUserAddress((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, [setUserAddress]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { addressType, city, email, fullAddress, fullName, phoneNumber, pincode, state } = userAddress;

    let validateNotEmpty = [
      { name: city, order: 1 },
      { name: state, order: 2 },
      { name: fullAddress, order: 5 },
      { name: addressType, order: 6 },
    ];

    let validateName = [
      { name: fullName, order: 3 },
    ];

    let validateEmail = [{ name: email, order: 4 }];
    let validatePincode = [{ name: pincode, order: 0 }];
    // Here in check validation for five fields - name, email, phone, pincode, and for password. That's why and empty array instead of pincode
    const updateErrors = checkValidation(
      validateNotEmpty,
      validateName,
      validateEmail,
      [],
      validatePincode,
      [],
      userAddress
    );

    setValidationErrors(updateErrors);

    const hasErros = Object.values(updateErrors).some((item) => item !== "");

    if (!hasErros) {
      handleVerifyAddress()
    }
  };

  useEffect(() => {
    const storedItem = JSON.parse(localStorage.getItem("phoneNumber"));

    if (storedItem && storedItem.expiry > Date.now()) {
      const retrievedPhoneNumber = storedItem.data;
      setUserAddress((prevData) => ({
        ...prevData,
        phoneNumber: phoneNumber,
      }));
      setPhoneNumber(retrievedPhoneNumber)
    }

  }, [phoneNumber]);

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
                name="pincode"
                onChange={handleChange}
                placeholder="Pincode"
                value={userAddress.pincode}
                className="text-lg p-4 border-gray-700"
              />
        {validationErrors?.pincode && (
      <p className='text-red-800 text-xs'>{validationErrors?.pincode}</p>
    )}
            </div>
            <div className="flex gap-3 py-2">
              <aside>
                <Label className="text-gray-500 px-1">*City</Label>
                <Input
                  type="input"
                  placeholder="City"
                  name="city"
                  onChange={handleChange}
                  value={userAddress.city}
                  className="text-lg p-4 border-gray-700 "
                />
                {validationErrors?.city && (
      <p className='text-red-800 text-xs'>{validationErrors?.city}</p>
    )}
              </aside>
              <aside>
                <Label className="text-gray-500 px-1">*State</Label>
                <Input
                  type="input"
                  placeholder="State"
                  name="state"
                  onChange={handleChange}
                  value={userAddress.state}
                  className="text-lg p-4 border-gray-700 "
                />
                 {validationErrors?.state && (
      <p className='text-red-800 text-xs'>{validationErrors?.state}</p>
    )}
              </aside>
            </div>
            <div className="py-2">
              <Label className="text-gray-500 px-1">*Enter FullName</Label>
              <Input
                type="input"
                placeholder="Fullname"
                name="fullName"
                onChange={handleChange}
                value={userAddress.fullName}
                className="text-lg p-4 border-gray-700 "
              />
                {validationErrors?.fullName && (
      <p className='text-red-800 text-xs'>{validationErrors?.fullName}</p>
    )}
            </div>
            <div className="py-2">
              <Label className="text-gray-500 px-1">*Enter email</Label>
              <Input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={userAddress.email}
                className="text-lg p-4 border-gray-700 "
              />
               {validationErrors?.email && (
      <p className='text-red-800 text-xs'>{validationErrors?.email}</p>
    )}
            </div>
            <div className="py-2">
              <Label className="text-gray-500 px-1">*Full Address</Label>
              <Input
                type="text"
                placeholder="Full Address"
                name="fullAddress"
                onChange={handleChange}
                value={userAddress.fullAddress}
                className="text-lg p-4 border-gray-700 "
              />
                 {validationErrors?.fullAddress && (
      <p className='text-red-800 text-xs'>{validationErrors?.fullAddress}</p>
    )}
            </div>
            <div className="flex items-center gap-10 py-3">
              <p className="font-medium">Address Type</p>
              <aside>
                <aside className="flex gap-2">
                  <Label className="text-gray-500 px-1 flex items-center text-md gap-1">
                    <Input type="radio" name="addressType"
                onChange={handleChange}
                value={"Home"}
                checked={userAddress.addressType == "Home"}
                 />
                    Home
                  </Label>
                  <Label className="text-gray-500 px-1 flex items-center text-md gap-1">
                    <Input type="radio" name="addressType"
                onChange={handleChange}
                value={"Address"}
                checked={userAddress.addressType == "Address"}
                 />
                    Address
                  </Label>
                </aside>
                {validationErrors?.addressType && (
      <p className='text-red-800 text-xs'>{validationErrors?.addressType}</p>
    )}
              </aside>
            </div>
          </div>

          <Button
            // onClick={handleVerifyAddress}
            onClick={handleSubmit}
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
