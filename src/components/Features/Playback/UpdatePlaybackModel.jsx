import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Input from "../../Elements/Input";
import { CategoryIcon } from "../../../utils/reactIcons";
import { RequestTypeEnum } from "../../../constants";
import Select from "../../Elements/Select";
import { useDispatch } from "react-redux";
import useApiRequest from "@/hooks/useApiRequest";

const UpdatePlaybackModel = ({closePlaybackModel, openCreatePlaybackModel, openDeletePlaybackModel}) => {
    const dispatch = useDispatch();
    const [requesttype, setRequesttype] = useState({
        url: "/categories",
        type: RequestTypeEnum.GET
    })
    
    const [playback, setPlayback] = useState({
        name: "",
        id: "",
    });
    const { apiResponse, handleSubmitRequest, apiData } = useApiRequest(requesttype.url, requesttype.type, playback);

    const [validationErrors, setValidationErrors] = useState({
      name: "",
      id: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setPlayback((prevData) => ({
            ...prevData, [name]: value,
        })); // Update category directly with value
        setValidationErrors(false);
    }
    

  const handleUpdatePlayback = () => {
        if(!playback.name || playback.name.length < 3) {
            setValidationErrors({
              name: "Category name must be minimum 3 characters"
            });
        } else {
            setRequesttype({
                type: RequestTypeEnum.PATCH,
                url: `/categories/${playback.id}`
            });
        }
  };


  const handleDeletePlayback = () => {
       if(!playback.id) {
        setValidationErrors({
          id: "Please select a playback to delete"
        });
       } else {
        setRequesttype({
            type: RequestTypeEnum.DELETE,
            url: `/categories/${playback.id}`
        });
       }     
  };


  useEffect(() => {
   handleSubmitRequest();
  }, [requesttype, setRequesttype])
  

  useEffect(() => {
    if(requesttype.type !== RequestTypeEnum.GET)
        if(apiResponse?.success) {
            dispatch({
                type: "productreducer/MESSAGE",
                payload: apiResponse?.message,
            })
            dispatch({
                type: "productreducer/IsPlaybackCreated",
                payload: true,
            })
            closePlaybackModel();
        }
    
  }, [apiResponse]);


  return (
    <div
    className='"w-full fixed z-50 pt-[10px] left-0 top-0 right-0 h-full overflow-auto bg-black bg-opacity-40'
    onClick={closePlaybackModel}
  >
    <div className="flex items-center justify-center h-full">
      <div
        className="bg-white w-[90vw] max-w-xl mx-auto my-5 p-2 md:p-5 border-1 border-gray-800 rounded-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className="absolute right-3 top-5 cursor-pointer"
          onClick={closePlaybackModel}
        >
          <AiOutlineClose className="text-2xl text-red-800" />
        </span>
        <section className="space-y-4">
          <p className="text-center text-xl font-semibold">Update Best for Items</p>
          <h4 className="text-md font-semibold">Select value to Update/Delete</h4>
          <div className="line-mb:flex space-y-2 line-mb:space-y-0 items-end justify-between gap-3">
            <div className="w-full space-y-2">
            <Select
           options={apiData?.categories.map((playback) => playback.name)}
           idoptions={apiData?.categories.map((playback) => playback._id)}
          label="Select Playback"
          className=""
          defaultText={"Select Category"}
          name="id"
          value={playback.id}
          handleChange={handleChange}
          ReactIcon={CategoryIcon}
          validationErrorsName={validationErrors.id}
      />
          <Input
            label={"Enter New Category Name"}
            placeholder="Playback new name"
            ReactIcon={CategoryIcon}
            handleChange={handleChange}
            name={"name"}
            value={playback.name}
            validationErrorsName={validationErrors.name}
          />
            </div>
          <div className="line-mb:flex space-y-2 line-mb:space-y-0 justify-center gap-6 flex-wrap">
            <button
              type="button"
              className="border-2 border-none w-full rounded-xl p-1 px-4 btn-color btnHover text-white font-semibold  cursor-pointer"
              onClick={handleUpdatePlayback}
            >
              Update playback
            </button>
            <button
              type="button"
              className="border-2 border-none w-full  rounded-xl p-1 px-4 bg-red-600 hover:bg-red-400 text-white font-semibold  cursor-pointer"
              onClick={handleDeletePlayback}
            >
              Delete Playback
            </button>
          </div>
          </div>
          <div className="space-y-2">
        <p>Create New Playback Items</p>
          <button
              type="button"
              className="border-2 border-none  rounded-xl p-1 px-4 btn-color btnHover text-white font-semibold  cursor-pointer"
              onClick={openCreatePlaybackModel}
            >
              Create New playback
            </button>
          </div>
        </section>
      </div>
    </div>
  </div>
  )
}

export default UpdatePlaybackModel
