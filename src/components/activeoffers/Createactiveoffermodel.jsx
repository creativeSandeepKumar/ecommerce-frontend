import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Input from "../Elements/Input";
import { CategoryIcon } from "../../utils/reactIcons";
import { useDispatch } from "react-redux";
import useApiRequest from "@/hooks/useApiRequest";
import { RequestTypeEnum } from "@/constants";

const Createactiveoffermodel = ({ openupdatemodel, opendeletemodel, handleCreateActiveofferModel }) => {
  const dispatch = useDispatch();
 const [activeoffer, setActiveoffer] = useState({
        name: "",
    });

    const [validationErrors, setValidationErrors] = useState("");

    const { loading, handlSubmitRequest, apiResponse } = useApiRequest("/activeoffer", RequestTypeEnum.POST, activeoffer);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setActiveoffer({
                name: value,
            }
        ); // Update category directly with value
        setValidationErrors(false);
    }
    

  const handleCreateActiveOffer = () => {
        if(!activeoffer.name || activeoffer.name.length < 3) {
            setValidationErrors("Active offer name is must be minimum 3 characters");
        } else {
            handlSubmitRequest();
        }
  };


  useEffect(() => {
        if(apiResponse?.success) {
            dispatch({
                type: "productreducer/MESSAGE",
                payload: apiResponse?.message,
            })
            dispatch({
                type: "productreducer/IsActiveofferCreated",
                payload: true,
            })
            handleCreateActiveofferModel();
        }
    
  }, [apiResponse]);

  return (
    <div
      className='"w-full fixed z-50 pt-[10px] left-0 top-0 right-0 h-full overflow-auto bg-black bg-opacity-40'
      onClick={handleCreateActiveofferModel}
    >
      <div className="flex items-center justify-center h-full">
        <div
          className="bg-white w-[90vw] max-w-lg mx-auto my-5 p-2 md:p-5 border-1 border-gray-800 rounded-2xl relative"
          onClick={(e) => e.stopPropagation()}
        >
          <span
            className="absolute right-3 top-5 cursor-pointer"
            onClick={handleCreateActiveofferModel}
          >
            <AiOutlineClose className="text-2xl text-red-800" />
          </span>
          <section className="space-y-4">
            {/* <div><RiDeleteBin6Line className='mx-auto text-2xl font-bold'/></div> */}
            <p className="text-center text-xl font-semibold">Create New Active Offer</p>
            <div className="md:flex space-y-2 md:space-y-0 items-end justify-between gap-3">
              <div className="w-full">
            <Input
              label={"Enter Active Offer Name"}
              placeholder="Active Offer name"
              ReactIcon={CategoryIcon}
              handleChange={handleChange}
              name={"activeoffer"}
              value={activeoffer.name}
              validationErrorsName={validationErrors}
            />
              </div>
            <div className="flex justify-start gap-6 flex-wrap w-full">
              <button
                type="button"
                className="border-2 hidden border-none rounded-xl p-1 px-4 bg-gray-700 text-white text-sm font-semibold hover:bg-gray-500 cursor-pointe"
                onClick={handleCreateActiveofferModel}
              >
                {/* No, cancel */}
              </button>
              <button
                type="button"
                className="border-2 w-full border-none rounded-xl p-1 px-4 btn-color btnHover text-white font-semibold  cursor-pointer"
                onClick={handleCreateActiveOffer}
              >
                Create Active Offer
              </button>
            </div>
            </div>
            <h4 className="text-md font-semibold">Other Operations</h4>
            <div className="flex flex-wrap gap-3">
            <button
                type="button"
                className="border-2 border-none  rounded-xl p-1 px-4 btn-color btnHover text-white font-semibold  cursor-pointer"
                onClick={openupdatemodel}
              >
                Update Active Offer
              </button>
              <button
                type="button"
                className="border-2 border-none  rounded-xl p-1 px-4 bg-red-600 hover:bg-red-400 text-white font-semibold  cursor-pointer"
                onClick={opendeletemodel}
              >
                Delete Active Offer
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Createactiveoffermodel;
