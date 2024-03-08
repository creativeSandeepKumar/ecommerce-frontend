import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Input from "../Elements/Input";
import { CategoryIcon } from "../../utils/reactIcons";
import { RequestTypeEnum } from "../../constants";
import Select from "../Elements/Select";
import { useDispatch } from "react-redux";
import useApiRequest from "@/hooks/useApiRequest";

const Updateactiveoffermodel = ({closeActiveofferModel, opencreateactiveoffermodel, opendeleteactiveoffermodel}) => {
    const dispatch = useDispatch();
    const [requesttype, setRequesttype] = useState({
        url: "/activeoffer",
        type: RequestTypeEnum.GET
    })
    
    const [activeoffer, setActiveoffer] = useState({
        name: "",
        id: "",
    });
    const { apiResponse, handlSubmitRequest, apiData } = useApiRequest(requesttype.url, requesttype.type, activeoffer);

    const [validationErrors, setValidationErrors] = useState({
      name: "",
      id: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setActiveoffer((prevData) => ({
            ...prevData, [name]: value,
        })); // Update category directly with value
        setValidationErrors(false);
    }
    

  const handleUpdateCategory = () => {
        if(!activeoffer.name || activeoffer.name.length < 3) {
            setValidationErrors({
              name: "Category name is must be minimum 3 characters"
            });
        } else {
            setRequesttype({
                type: RequestTypeEnum.PATCH,
                url: `/activeoffer/${activeoffer.id}`
            });
        }
  };


  const handleDeleteCategory = () => {
       if(!activeoffer.id) {
        setValidationErrors({
          id: "Please select a category to delete"
        });
       } else {
        setRequesttype({
            type: RequestTypeEnum.DELETE,
            url: `/activeoffer/${activeoffer.id}`
        });
       }     
  };


  useEffect(() => {
   handlSubmitRequest();
  }, [requesttype, setRequesttype])
  

  useEffect(() => {
    if(requesttype.type !== RequestTypeEnum.GET)
        if(apiResponse?.success) {
            dispatch({
                type: "productreducer/MESSAGE",
                payload: apiResponse?.message,
            })
            dispatch({
                type: "productreducer/IsActiveofferCreated",
                payload: true,
            })
            closeActiveofferModel();
        }
    
  }, [apiResponse]);

  return (
    <div
    className='"w-full fixed z-50 pt-[10px] left-0 top-0 right-0 h-full overflow-auto bg-black bg-opacity-40'
    onClick={closeActiveofferModel}
  >
    <div className="flex items-center justify-center h-full">
      <div
        className="bg-white w-[90vw] max-w-xl mx-auto my-5 p-2 md:p-5 border-1 border-gray-800 rounded-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className="absolute right-3 top-5 cursor-pointer"
          onClick={closeActiveofferModel}
        >
          <AiOutlineClose className="text-2xl text-red-800" />
        </span>
        <section className="space-y-4">
          {/* <div><RiDeleteBin6Line className='mx-auto text-2xl font-bold'/></div> */}
          <p className="text-center text-xl font-semibold">Update Active Offers</p>
          <h4 className="text-md font-semibold">Select value to Update/Delete</h4>
          <div className="line-mb:flex space-y-2 line-mb:space-y-0 items-end justify-between gap-3">
            <div className="w-full space-y-2">
            <Select
           options={apiData?.activeoffers.map((activeoffer) => activeoffer.name)}
           idoptions={apiData?.activeoffers.map((activeoffer) => activeoffer._id)}
          label="Select Active Offer"
          className=""
          defaultText={"Select Active Offer"}
          name="id"
          value={activeoffer.id}
          handleChange={handleChange}
          ReactIcon={CategoryIcon}
          validationErrorsName={validationErrors.id}
      />
          <Input
            label={"Enter New Active Offer"}
            placeholder="Active Offer new name"
            ReactIcon={CategoryIcon}
            handleChange={handleChange}
            name={"name"}
            value={activeoffer.name}
            validationErrorsName={validationErrors.name}
          />
            </div>
          <div className="line-mb:flex space-y-2 line-mb:space-y-0 justify-center gap-6 flex-wrap">
            <button
              type="button"
              className="border-2 border-none w-full rounded-xl p-1 px-4 btn-color btnHover text-white font-semibold  cursor-pointer"
              onClick={handleUpdateCategory}
            >
              Update Active Offer
            </button>
            <button
              type="button"
              className="border-2 border-none w-full  rounded-xl p-1 px-4 bg-red-600 hover:bg-red-400 text-white font-semibold  cursor-pointer"
              onClick={handleDeleteCategory}
            >
              Delete Active Offer
            </button>
          </div>
          </div>
          <div className="space-y-2">
        <p>Create New Active Offer</p>
          <button
              type="button"
              className="border-2 border-none  rounded-xl p-1 px-4 btn-color btnHover text-white font-semibold  cursor-pointer"
              onClick={opencreateactiveoffermodel}
            >
              Create New cActive Offer
            </button>
          </div>
        </section>
      </div>
    </div>
  </div>
  )
}

export default Updateactiveoffermodel