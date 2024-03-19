"use client";

import React, { useEffect, useState } from "react";
import Select from "@/components/Elements/Select";
import useApiRequest from "@/hooks/useApiRequest";
import { RequestTypeEnum } from "@/constants";
import CreateNoicecancellationModel from "./CreateNoicecancellationModel"; // Modified
import { reactToast } from "@/utils/helper";
import { useDispatch, useSelector } from "react-redux";
import UpdateNoicecancellationModel from "./UpdateNoicecancellationModel"; // Modified
import DotsLoader from "@/utils/DotsLoader";

const Noicecancellation = ({ formData, handleChange }) => { // Modified
  const dispatch = useDispatch();
  const { apiData, handleApiRequest, loading } = useApiRequest(
    "/noicecancellation",
    RequestTypeEnum.GET
  );
  const [isNoicecancellationModelOpen, setIsNoicecancellationModelOpen] = useState({ // Modified
    createModel: false,
    updateModel: false,
  });

  const { isNoicecancellationcreated, message } = useSelector((state) => state.products); // Modified

  const handleCreateNoicecancellationModel = () => { // Modified
    setIsNoicecancellationModelOpen({
      createModel: !isNoicecancellationModelOpen.createModel,
    });
  };

  const handleUpdateNoicecancellationModel = () => { // Modified
    setIsNoicecancellationModelOpen({
      updateModel: !isNoicecancellationModelOpen.updateModel,
    });
  };

  useEffect(() => {
    handleApiRequest();
  }, []);

  useEffect(() => {
    if (isNoicecancellationcreated) { // Modified
      handleApiRequest();
      dispatch({
        type: "productreducer/IsBNoicecancellationreated", // Modified
        payload: false,
      });
      reactToast("success", message);
    }
  }, [isNoicecancellationcreated]);

  return (
    <div>
      {loading ? (
          <DotsLoader/>
      ) : (
        <section>
        <div className="flex flex-wrap esm:flex-nowrap w-full py-1 items-end gap-2">
          <aside className="w-full">
            <Select
              label={"Select Cateory"}
              defaultText="Select Noicecancellation" // Modified
              name="noicecancellation" // Modified
              value={formData.noicecancellation} // Modified
              handleChange={handleChange}
              className="w-full px-2"
              options={
                apiData?.noicecancellation.map((noicecancellation) => noicecancellation.name) || [ // Modified
                  "Watches",
                  "Woofer",
                  "657be09fada690d387d51f7d",
                ]
              }
              idoptions={apiData?.noicecancellation.map((noicecancellation) => noicecancellation._id)} // Modified
              multiple={false}
            />
          </aside>
          <aside className="w-full">
            <button
              type="button"
              onClick={handleCreateNoicecancellationModel}
              className="px-4 w-full bg-blue-500 hover:bg-blue-900 text-white rounded-md h-8"
            >
              Create Noicecancellation
            </button>
          </aside>
        </div>
        {isNoicecancellationModelOpen.createModel && (
          <CreateNoicecancellationModel // Modified
            handleCreateNoicecancellationModel={handleCreateNoicecancellationModel}
            opendeletemodel={handleUpdateNoicecancellationModel}
            openupdatemodel={handleUpdateNoicecancellationModel}
          />
        )}
        {isNoicecancellationModelOpen.updateModel && (
          <UpdateNoicecancellationModel // Modified
            handleCreateNoicecancellationModel={handleCreateNoicecancellationModel}
            opendeletemodel={handleUpdateNoicecancellationModel}
            openupdatemodel={handleUpdateNoicecancellationModel}
            closeNoicecancellationModel={handleUpdateNoicecancellationModel} // Modified
          />
        )}
      </section>
      )}
    </div>
   
  );
};

export default Noicecancellation; // Modified
