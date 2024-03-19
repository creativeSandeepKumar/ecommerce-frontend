"use client";

import React, { useEffect, useState } from "react";
import Select from "@/components/Elements/Select";
import useApiRequest from "@/hooks/useApiRequest";
import { RequestTypeEnum } from "@/constants";
import CreateFeatureModel from "./CreateFeatureModel"; // Modified
import { reactToast } from "@/utils/helper";
import { useDispatch, useSelector } from "react-redux";
import UpdateFeatureModel from "./UpdateFeatureModel"; // Modified
import CheckInput from "@/components/Elements/CheckInput";
import DotsLoader from "@/utils/DotsLoader";

const Feature = ({ formData, handleChange }) => { // Modified
  const dispatch = useDispatch();
  const { apiData, handleApiRequest, loading } = useApiRequest(
    "/features",
    RequestTypeEnum.GET
  );
  const [isFeatureModelOpen, setIsFeatureModelOpen] = useState({ // Modified
    createModel: false,
    updateModel: false,
  });

  const { isfeaturecreated, message } = useSelector((state) => state.products); // Modified

  const handleCreateFeatureModel = () => { // Modified
    setIsFeatureModelOpen({
      createModel: !isFeatureModelOpen.createModel,
    });
  };

  const handleUpdateFeatureModel = () => { // Modified
    setIsFeatureModelOpen({
      updateModel: !isFeatureModelOpen.updateModel,
    });
  };

  useEffect(() => {
    handleApiRequest();
  }, []);

  useEffect(() => {
    if (isfeaturecreated) { // Modified
      handleApiRequest();
      dispatch({
        type: "productreducer/IsFeatureCreated", // Modified
        payload: false,
      });
      reactToast("success", message);
    }
  }, [isfeaturecreated]);

  return (
    <div>
      {loading ? (
        <DotsLoader/>
      ) : (
<section>
      <div className="flex flex-wrap esm:flex-nowrap w-full py-1 items-end gap-2">
        <aside className="w-full">
          <CheckInput
            label={"Select Category"}
            defaultText="Select Feature" // Modified
            name="features" // Modified
            value={formData.feature} // Modified
            handleChange={handleChange}
            className="w-full px-2"
            options={
              apiData?.feature.map((feature) => feature.name) || [ // Modified
                "Watches",
                "Woofer",
                "657be09fada690d387d51f7d",
              ]
            }
            idoptions={apiData?.feature.map((feature) => feature._id)} // Modified
            multiple={false}
          />
        </aside>
        <aside className="w-full">
          <button
            type="button"
            onClick={handleCreateFeatureModel}
            className="px-4 w-full bg-blue-500 hover:bg-blue-900 text-white rounded-md h-8"
          >
            Create Feature
          </button>
        </aside>
      </div>
      {isFeatureModelOpen.createModel && (
        <CreateFeatureModel // Modified
          handleCreateFeatureModel={handleCreateFeatureModel}
          opendeletemodel={handleUpdateFeatureModel}
          openupdatemodel={handleUpdateFeatureModel}
        />
      )}
      {isFeatureModelOpen.updateModel && (
        <UpdateFeatureModel // Modified
          handleCreateFeatureModel={handleCreateFeatureModel}
          opendeletemodel={handleUpdateFeatureModel}
          openupdatemodel={handleUpdateFeatureModel}
          closeFeatureModel={handleUpdateFeatureModel} // Modified
        />
      )}
    </section>
      )}
    </div>
    
  );
};

export default Feature; // Modified
