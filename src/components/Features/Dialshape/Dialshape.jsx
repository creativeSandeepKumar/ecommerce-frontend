"use client";

import React, { useEffect, useState } from "react";
import Select from "@/components/Elements/Select";
import useApiRequest from "@/hooks/useApiRequest";
import { RequestTypeEnum } from "@/constants";
import Createdialshapemodel from "./Createdialshapemodel";
import { reactToast } from "@/utils/helper";
import { useDispatch, useSelector } from "react-redux";
import Updatedialshapemodel from "./Updatedialshapemodel";
import DotsLoader from "@/utils/DotsLoader";

const Dialshape = ({ formData, handleChange }) => {
  const dispatch = useDispatch();
  const { apiData, handleApiRequest, loading } = useApiRequest(
    "/dialshape",
    RequestTypeEnum.GET
  );
  const [isDialshapemodelOpen, setIsDialshapemodelOpen] = useState({
    createModel: false,
    updateModel: false,
  });

  const { isdialshapecreated, message } = useSelector((state) => state.products);

  const handleCreateDialshapeModel = () => {
    setIsDialshapemodelOpen({
      createModel: !isDialshapemodelOpen.createModel,
    });
  };

  const handleUpdateDialshapeModel = () => {
    setIsDialshapemodelOpen({
      updateModel: !isDialshapemodelOpen.updateModel,
    });
  };

  useEffect(() => {
    handleApiRequest();
  }, []);

  useEffect(() => {
    if (isdialshapecreated) {
      handleApiRequest();
      dispatch({
        type: "productreducer/IsBDialshapereated",
        payload: false,
      });
      reactToast("success", message);
    }
  }, [isdialshapecreated]);

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
              defaultText="Select Dialshape"
              name="dialshape"
              value={formData.dialshape}
              handleChange={handleChange}
              className="w-full px-2"
              options={
                apiData?.dialshape.map((dialshape) => dialshape.name) || [
                  "Watches",
                  "Woofer",
                  "657be09fada690d387d51f7d",
                ]
              }
              idoptions={apiData?.dialshape.map((dialshape) => dialshape._id)}
              multiple={false}
            />
          </aside>
          <aside className="w-full">
            <button
              type="button"
              onClick={handleCreateDialshapeModel}
              className="px-4 w-full bg-blue-500 hover:bg-blue-900 text-white rounded-md h-8"
            >
              Create dialshape
            </button>
          </aside>
        </div>
        {isDialshapemodelOpen.createModel && (
          <Createdialshapemodel
            handleCreateDialshapeModel={handleCreateDialshapeModel}
            opendeletemodel={handleUpdateDialshapeModel}
            openupdatemodel={handleUpdateDialshapeModel}
          />
        )}
        {isDialshapemodelOpen.updateModel && (
          <Updatedialshapemodel
            handleCreateDialshapeModel={handleCreateDialshapeModel}
            opendeletemodel={handleUpdateDialshapeModel}
            openupdatemodel={handleUpdateDialshapeModel}
            closeDialshapeModel={handleUpdateDialshapeModel}
          />
        )}
      </section>
      )}
    </div>
   
  );
};

export default Dialshape;
