"use client";

import React, { useEffect, useState } from "react";
import Select from "@/components/Elements/Select";
import useApiRequest from "@/hooks/useApiRequest";
import { RequestTypeEnum } from "@/constants";
import CreatePlaybackModel from "./CreatePlaybackModel"; // Modified
import { reactToast } from "@/utils/helper";
import { useDispatch, useSelector } from "react-redux";
import UpdatePlaybackModel from "./UpdatePlaybackModel"; // Modified
import DotsLoader from "@/utils/DotsLoader";

const Playback = ({ formData, handleChange }) => { // Modified
  const dispatch = useDispatch();
  const { apiData, handleApiRequest, loading } = useApiRequest(
    "/playback",
    RequestTypeEnum.GET
  );
  const [isPlaybackModelOpen, setIsPlaybackModelOpen] = useState({ // Modified
    createModel: false,
    updateModel: false,
  });

  const { isplaybackcreated, message } = useSelector((state) => state.products); // Modified

  const handleCreatePlaybackModel = () => { // Modified
    setIsPlaybackModelOpen({
      createModel: !isPlaybackModelOpen.createModel,
    });
  };

  const handleUpdatePlaybackModel = () => { // Modified
    setIsPlaybackModelOpen({
      updateModel: !isPlaybackModelOpen.updateModel,
    });
  };

  useEffect(() => {
    handleApiRequest();
  }, []);

  useEffect(() => {
    if (isplaybackcreated) { // Modified
      handleApiRequest();
      dispatch({
        type: "productreducer/IsBPlaybackreated", // Modified
        payload: false,
      });
      reactToast("success", message);
    }
  }, [isplaybackcreated]);

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
            defaultText="Select Playback" // Modified
            name="playback" // Modified
            value={formData.playback} // Modified
            handleChange={handleChange}
            className="w-full px-2"
            options={
              apiData?.playback.map((playback) => playback.name) || [ // Modified
                "Watches",
                "Woofer",
                "657be09fada690d387d51f7d",
              ]
            }
            idoptions={apiData?.playback.map((playback) => playback._id)} // Modified
            multiple={false}
          />
        </aside>
        <aside className="w-full">
          <button
            type="button"
            onClick={handleCreatePlaybackModel}
            className="px-4 w-full bg-blue-500 hover:bg-blue-900 text-white rounded-md h-8"
          >
            Create Playback
          </button>
        </aside>
      </div>
      {isPlaybackModelOpen.createModel && (
        <CreatePlaybackModel // Modified
          handleCreatePlaybackModel={handleCreatePlaybackModel}
          opendeletemodel={handleUpdatePlaybackModel}
          openupdatemodel={handleUpdatePlaybackModel}
        />
      )}
      {isPlaybackModelOpen.updateModel && (
        <UpdatePlaybackModel // Modified
          handleCreatePlaybackModel={handleCreatePlaybackModel}
          opendeletemodel={handleUpdatePlaybackModel}
          openupdatemodel={handleUpdatePlaybackModel}
          closePlaybackModel={handleUpdatePlaybackModel} // Modified
        />
      )}
    </section>
      )}
    </div>
    
  );
};

export default Playback; // Modified
