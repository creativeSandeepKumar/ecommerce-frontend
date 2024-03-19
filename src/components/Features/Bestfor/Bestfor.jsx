"use client";

import React, { useEffect, useState } from "react";
import Select from "../../Elements/Select";
import useApiRequest from "@/hooks/useApiRequest";
import { RequestTypeEnum } from "@/constants";
import Createbestformodel from "./Createbestformodel";
import { reactToast } from "@/utils/helper";
import { useDispatch, useSelector } from "react-redux";
import Updatebestformodel from "./Updatebestformodel";
import DotsLoader from "@/utils/DotsLoader";

const Bestfor = ({ formData, handleChange }) => {
  const dispatch = useDispatch();
  const { apiData, handleApiRequest, loading } = useApiRequest(
    "/bestfor",
    RequestTypeEnum.GET
  );
  const [isBestformodelOpen, setIsBestformodelOpen] = useState({
    createModel: false,
    updateModel: false,
  });

  const { isbestforcreated, message } = useSelector((state) => state.products);

  const handleCreateBestforModel = () => {
    setIsBestformodelOpen({
      createModel: !isBestformodelOpen.createModel,
    });
  };

  const handleUpdateBestforModel = () => {
    setIsBestformodelOpen({
      updateModel: !isBestformodelOpen.updateModel,
    });
  };

  useEffect(() => {
    handleApiRequest();
  }, []);

  useEffect(() => {
    if (isbestforcreated) {
      handleApiRequest();
      dispatch({
        type: "productreducer/IsBestforCreated",
        payload: false,
      });
      reactToast("success", message);
    }
  }, [isbestforcreated]);

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
              defaultText="Select Bestfor"
              name="bestfor"
              value={formData.bestfor}
              handleChange={handleChange}
              className="w-full px-2"
              options={
                apiData?.bestfor.map((bestfor) => bestfor.name) || [
                  "Watches",
                  "Woofer",
                  "657be09fada690d387d51f7d",
                ]
              }
              idoptions={apiData?.bestfor.map((bestfor) => bestfor._id)}
              multiple={false}
            />
          </aside>
          <aside className="w-full">
            <button
              type="button"
              onClick={handleCreateBestforModel}
              className="px-4 w-full bg-blue-500 hover:bg-blue-900 text-white rounded-md h-8"
            >
              Create bestfor
            </button>
          </aside>
        </div>
        {isBestformodelOpen.createModel && (
          <Createbestformodel
            handleCreateBestforModel={handleCreateBestforModel}
            opendeletemodel={handleUpdateBestforModel}
            openupdatemodel={handleUpdateBestforModel}
          />
        )}
        {isBestformodelOpen.updateModel && (
          <Updatebestformodel
            handleCreateBestforModel={handleCreateBestforModel}
            opendeletemodel={handleUpdateBestforModel}
            openupdatemodel={handleUpdateBestforModel}
            closeBestforModel={handleUpdateBestforModel}
          />
        )}
      </section>
      )}
   
    </div>
  );
};

export default Bestfor;
