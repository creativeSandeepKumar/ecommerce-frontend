import axios from "axios";
import { checkStatusCodeRange, reactToast } from "./helper";
import { showValidationToastError } from "./Validation";

export const handlePostRequest = async(setLoading, setApiResponse, requesturl, userdata) => {
    try {
        setLoading(true);
        const response = await axios.post(requesturl, userdata, {
          withCredentials: true,
        });
        setApiResponse(response.data);
      } catch (error) {
        setLoading(false);
        setApiResponse(error.response.data);
        console.error(error.response.data);
      }
}


export const handlePatchRequest = async(setLoading, setApiResponse, requesturl, userdata) => {
    try {
        setLoading(true);
        const response = await axios.patch(requesturl, userdata, {
          withCredentials: true,
        });
        setApiResponse(response.data);
      } catch (error) {
        setLoading(false);
        setApiResponse(error.response.data);
        console.error(error.response.data);
      }
}


export const handleGetRequest = async(setLoading, setApiResponse, requesturl) => {
 
  try {
        setLoading(true);
        const response = await axios.get(requesturl, {
          withCredentials: true,
        });
        setApiResponse(response?.data);
    } catch (error) {
      setLoading(false);
        setApiResponse(error?.response?.data);
        console.error(error?.response?.data);
      }
}


export const handleDeleteRequest = async(setLoading, setApiResponse, requesturl) => {
    try {
        setLoading(true);
        const response = await axios.delete(requesturl, {
          withCredentials: true,
        });
        setApiResponse(response?.data);
    } catch (error) {
      setLoading(false);
        setApiResponse(error?.response?.data);
        console.error(error?.response?.data);
      }
}

export const ApiResponseToUser = (apiResponse, setLoading, setApiData, requesttype) => {
    if (checkStatusCodeRange(apiResponse?.statusCode, 400, 499)) {
        setLoading(false);
        reactToast("error", apiResponse?.message);
        if (apiResponse?.errors) {
          showValidationToastError("error", apiResponse?.errors);
        }
      }
      if (checkStatusCodeRange(apiResponse?.statusCode, 200, 210)) {
        setLoading(false);
        setApiData(apiResponse?.data);
      }
}

export const ApiResponseToUserWithMessage = (apiResponse, setLoading, setApiData, otherItems) => {
    if (checkStatusCodeRange(apiResponse?.statusCode, 400, 499)) {
        setLoading(false);
        reactToast("error", apiResponse?.message);
        if (apiResponse?.errors) {
          showValidationToastError("error", apiResponse?.errors);
        }
      }
      if (checkStatusCodeRange(apiResponse?.statusCode, 200, 210)) {
        setLoading(false);
        setApiData(apiResponse?.data);
        reactToast("success", apiResponse?.message);
        if(otherItems) {
          otherItems();
        }
      }
}