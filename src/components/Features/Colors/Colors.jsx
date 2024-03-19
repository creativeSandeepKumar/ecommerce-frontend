"use client";

import React, { useEffect, useState } from "react";
import Select from "@/components/Elements/Select";
import useApiRequest from "@/hooks/useApiRequest";
import { RequestTypeEnum } from "@/constants";
import CreateColorsModel from "./CreateColorsModel"; // Modified
import { reactToast } from "@/utils/helper";
import { useDispatch, useSelector } from "react-redux";
import UpdateColorsModel from "./UpdateColorsModel"; // Modified

const Colors = ({ formData, handleChange }) => { // Modified
  const dispatch = useDispatch();
  const { apiData, handleApiRequest } = useApiRequest(
    "/color",
    RequestTypeEnum.GET
  );
  const [isColorsModelOpen, setIsColorsModelOpen] = useState({ // Modified
    createModel: false,
    updateModel: false,
  });

  const { iscolorscreated, message } = useSelector((state) => state.products); // Modified

  const handleCreateColorsModel = () => { // Modified
    setIsColorsModelOpen({
      createModel: !isColorsModelOpen.createModel,
    });
  };

  const handleUpdateColorsModel = () => { // Modified
    setIsColorsModelOpen({
      updateModel: !isColorsModelOpen.updateModel,
    });
  };

  useEffect(() => {
    handleApiRequest();
  }, []);

  useEffect(() => {
    if (iscolorscreated) { // Modified
      handleApiRequest();
      dispatch({
        type: "productreducer/IsColorsCreated", // Modified
        payload: false,
      });
      reactToast("success", message);
    }
  }, [iscolorscreated]);

  return (
    <section>
      <div className="flex flex-wrap esm:flex-nowrap w-full py-1 items-end gap-2">
        <aside className="w-full">
          <Select
            label={"Select Cateory"}
            defaultText="Select Colors" // Modified
            name="color" // Modified
            value={formData.color} // Modified
            handleChange={handleChange}
            className="w-full px-2"
            options={
              apiData?.colors.map((colors) => colors.name) || [ // Modified
                "Watches",
                "Woofer",
                "657be09fada690d387d51f7d",
              ]
            }
            idoptions={apiData?.colors.map((colors) => colors._id)} // Modified
            multiple={false}
          />
        </aside>
        <aside className="w-full">
          <button
            type="button"
            onClick={handleCreateColorsModel}
            className="px-4 w-full bg-blue-500 hover:bg-blue-900 text-white rounded-md h-8"
          >
            Create Colors
          </button>
        </aside>
      </div>
      {isColorsModelOpen.createModel && (
        <CreateColorsModel // Modified
          handleCreateColorsModel={handleCreateColorsModel}
          opendeletemodel={handleUpdateColorsModel}
          openupdatemodel={handleUpdateColorsModel}
        />
      )}
      {isColorsModelOpen.updateModel && (
        <UpdateColorsModel // Modified
          handleCreateColorsModel={handleCreateColorsModel}
          opendeletemodel={handleUpdateColorsModel}
          openupdatemodel={handleUpdateColorsModel}
          closeColorsModel={handleUpdateColorsModel} // Modified
        />
      )}
    </section>
  );
};

export default Colors; // Modified
