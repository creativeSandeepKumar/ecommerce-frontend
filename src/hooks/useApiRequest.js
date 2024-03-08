import {useEffect, useState} from "react"
import { ApiResponseToUser, handleDeleteRequest, handleGetRequest, handlePatchRequest, handlePostRequest } from "../utils/ApiRequests";
import { AvailableRequestType, RequestTypeEnum } from "../constants";
import { reactToast } from "../utils/helper";

const useApiRequest = (requesturl, requesttype="GET", requestdata) => {
    const [loading, setLoading] = useState(false);
    const [apiResponse, setApiResponse] = useState(false);
    const [apiData, setApiData] = useState(null);

    const handleApiRequest = () => {
        if(!AvailableRequestType.includes(requesttype) ) {
            return  reactToast("error", `Invalid request type ${requesttype}`); 
        }
        
        switch (requesttype) {
            case RequestTypeEnum.GET:
                handleGetRequest(setLoading, setApiResponse, requesturl);
                break;
            case RequestTypeEnum.POST:
                handlePostRequest(setLoading, setApiResponse, requesturl, requestdata);
                break;
            case RequestTypeEnum.PATCH:
                handlePatchRequest(setLoading, setApiResponse, requesturl, requestdata);
                break;
            case RequestTypeEnum.DELETE:
                handleDeleteRequest(setLoading, setApiResponse, requesturl);
                break;
        }
    }

    const handlSubmitRequest = () => {
        handleApiRequest();
    }

    useEffect(() => {
        if(apiResponse){
                ApiResponseToUser(apiResponse, setLoading, setApiData, requesttype);
        }
    }, [apiResponse, apiData]);
    
    return {loading, apiData, apiResponse, handleApiRequest, handlSubmitRequest};
}

export default useApiRequest;