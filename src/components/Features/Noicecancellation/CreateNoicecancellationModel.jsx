import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Input from "../../Elements/Input";
import { CategoryIcon } from "../../../utils/reactIcons";
import { useDispatch } from "react-redux";
import useApiRequest from "@/hooks/useApiRequest";
import { RequestTypeEnum } from "@/constants";

const CreateNoicecancellationModel = ({
  openUpdateModel,
  openDeleteModel,
  handleCreateNoicecancellationModel,
}) => {
  const dispatch = useDispatch();
  const [noicecancellation, setNoicecancellation] = useState({
    name: "",
  });

  const [validationErrors, setValidationErrors] = useState("");

  const { loading, handleSubmitRequest, apiResponse } = useApiRequest(
    "/categories",
    RequestTypeEnum.POST,
    noicecancellation
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNoicecancellation({
      name: value,
    });
    setValidationErrors(false);
  };

  const handleCreateNoicecancellation = () => {
    if (!noicecancellation.name || noicecancellation.name.length < 3) {
      setValidationErrors("Noicecancellation name must be minimum 3 characters");
    } else {
      handleSubmitRequest();
    }
  };

  useEffect(() => {
    if (apiResponse?.success) {
      dispatch({
        type: "productreducer/MESSAGE",
        payload: apiResponse?.message,
      });
      dispatch({
        type: "productreducer/IsNoicecancellationCreated",
        payload: true,
      });
      handleCreateNoicecancellationModel();
    }
  }, [apiResponse]);

  return (
    <div
      className='"w-full fixed z-50 pt-[10px] left-0 top-0 right-0 h-full overflow-auto bg-black bg-opacity-40'
      onClick={handleCreateNoicecancellationModel}
    >
      <div className="flex items-center justify-center h-full">
        <div
          className="bg-white w-[90vw] max-w-lg mx-auto my-5 p-2 md:p-5 border-1 border-gray-800 rounded-2xl relative"
          onClick={(e) => e.stopPropagation()}
        >
          <span
            className="absolute right-3 top-5 cursor-pointer"
            onClick={handleCreateNoicecancellationModel}
          >
            <AiOutlineClose className="text-2xl text-red-800" />
          </span>
          <section className="space-y-4">
            <p className="text-center text-xl font-semibold">
              Create New Noicecancellation
            </p>
            <div className="md:flex space-y-2 md:space-y-0 items-end justify-between gap-3">
              <div className="w-full">
                <Input
                  label={"Enter Noicecancellation Name"}
                  placeholder="Noicecancellation name"
                  ReactIcon={CategoryIcon}
                  handleChange={handleChange}
                  name={"noicecancellation"}
                  value={noicecancellation.name}
                  validationErrorsName={validationErrors}
                />
              </div>
              <div className="flex justify-start gap-6 flex-wrap w-full">
                <button
                  type="button"
                  className="border-2 hidden border-none rounded-xl p-1 px-4 bg-gray-700 text-white text-sm font-semibold hover:bg-gray-500 cursor-pointe"
                  onClick={handleCreateNoicecancellationModel}
                >
                  {/* No, cancel */}
                </button>
                <button
                  type="button"
                  className="border-2 w-full border-none rounded-xl p-1 px-4 btn-color btnHover text-white font-semibold  cursor-pointer"
                  onClick={handleCreateNoicecancellation}
                >
                  Create noicecancellation
                </button>
              </div>
            </div>
            <h4 className="text-md font-semibold">Other Operations</h4>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="border-2 border-none  rounded-xl p-1 px-4 btn-color btnHover text-white font-semibold  cursor-pointer"
                onClick={openUpdateModel}
              >
                Update noicecancellation
              </button>
              <button
                type="button"
                className="border-2 border-none  rounded-xl p-1 px-4 bg-red-600 hover:bg-red-400 text-white font-semibold  cursor-pointer"
                onClick={openDeleteModel}
              >
                Delete noicecancellation
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CreateNoicecancellationModel;
