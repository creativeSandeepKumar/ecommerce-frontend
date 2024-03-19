import Slidebuttons from "./slides/Slidebuttons";
import Slidegoto from "./slides/Slidegoto";
import Slideimagegoto from "./slides/Slideimagegoto";
import Slides from "./slides/Slides";
import Slidescontainer from "./slides/Slidescontainer";

import { AxiosResponse } from "axios";
// import { APISuccessResponseInterface } from "../interface/api";


// export const requestHandler = async (
//     api, // Function returning a Promise<AxiosResponse>
//     setLoading = null, // Optional function to set loading state
//     onSuccess, // Function to handle successful response
//     onError // Function to handle errors
//   ) => {
//     // Show loading state if setLoading function is provided
//     setLoading && setLoading(true);
  
//     try {
//       // Make the API request
//       const response = await api();
//       const { data } = response;
  
//       if (data?.success) {
//         // Call the onSuccess callback with the response data
//         onSuccess(data);
//       }
//     } catch (error) {
//       // Handle error cases, including unauthorized and forbidden cases
//       if ([401, 403].includes(error?.response?.status)) {
//         localStorage.clear(); // Clear local storage on authentication issues
//         if (typeof window !== 'undefined') window.location.href = "/login"; // Redirect to login page (check for browser environment)
//       }
//       onError(error?.response?.data?.message || "Something went wrong");
//     } finally {
//       // Hide loading state if setLoading function is provided
//       setLoading && setLoading(false);
//     }
//   };

export const requestHandler = async (
    api, // Function returning a Promise<AxiosResponse>
    setLoading = null, // Optional function to set loading state
    onSuccess, // Function to handle successful response
    onError // Function to handle errors
  ) => {
    // Show loading state if setLoading function is provided
    setLoading && setLoading(true);
  
    try {
      // Make the API request
      const response = await api();
      const { data } = response;
  
      // Check response against the interface structure (optional)
      if (
        typeof data.data !== "undefined" &&
        typeof data.message === "string" &&
        typeof data.statusCode === "number" &&
        typeof data.success === "boolean"
      ) {
        onSuccess(data);
      } else {
        onError("Invalid response format");
      }
    } catch (error) {
      // Handle error cases, including unauthorized and forbidden cases
      if ([401, 403].includes(error?.response?.status)) {
        localStorage.clear(); // Clear local storage on authentication issues
        if (typeof window !== 'undefined') window.location.href = "/login"; // Redirect to login page (check for browser environment)
      }
      onError(error?.response?.data?.message || "Something went wrong");
    } finally {
      // Hide loading state if setLoading function is provided
      setLoading && setLoading(false);
    }
  }

  export const classNames = (...classNames) => {
    // Filter out any falsy class names and join them with a space
    return classNames.filter(Boolean).join(" ");
  };

// export const isBrowser = typeof window !== "undefined";

export const getChatObjectMetadata = (chat, loggedInUser) => {
    // Determine the content of the last message, if any
    const lastMessage = chat.lastMessage?.content
      ? chat.lastMessage?.content
      : chat.lastMessage
      ? `${chat.lastMessage?.attachments?.length} attachment${
          chat.lastMessage.attachments.length > 1 ? "s" : ""
        }`
      : "No messages yet";
  
    if (chat.isGroupChat) {
      // Group chat metadata
      return {
        avatar: "https://via.placeholder.com/100x100.png",
        title: chat.name,
        description: `${chat.participants.length} members in the chat`,
        lastMessage: chat.lastMessage
          ? chat.lastMessage?.sender?.username + ": " + lastMessage
          : lastMessage,
      };
    } else {
      // Individual chat metadata
      const participant = chat.participants.find((p) => p._id !== loggedInUser?._id);
      return {
        avatar: participant?.avatar.url,
        title: participant?.username,
        description: participant?.email,
        lastMessage,
      };
    }
  };
  
// Local storage helper functions

const isBrowser = typeof window !== "undefined";

export const getLocalStorage = (key) => {
  if (!isBrowser) return null;
  const value = localStorage.getItem(key);
  if (value) {
    try {
      return JSON.parse(value);
    } catch (err) {
      return null;
    }
  }
  return null;
};

export const setLocalStorage = (key, value) => {
  if (!isBrowser) return;
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeLocalStorage = (key) => {
  if (!isBrowser) return;
  localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  if (!isBrowser) return;
  localStorage.clear();
};



export {Slides, Slidebuttons, Slidegoto, Slidescontainer, Slideimagegoto}