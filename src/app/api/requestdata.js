"use client";
import { useRouter } from "next/router";
import { useState } from "react";
import { getAllProducts, getProductDetails, logInUser, registerUser } from ".";
import { requestHandler, setLocalStorage } from "@/utils";

const requestdata = () => {
const [isLoading, setIsLoading] = useState(false); // Assuming React is available
const [user, setUser] = useState(null);
const [token, setToken] = useState(null);
// const router = useRouter(); // Assuming useNavigate is from a routing library



  // const login = async (data) => { // Data object structure assumed to be the same
  //   setIsLoading(true);
  //   try {
  //     const response = await requestHandler(
  //       async () => await logInUser(data),
  //       setIsLoading // Pass setIsLoading directly
  //     );
  //     const { data } = response;
  //     setUser(data.user);
  //     setToken(data.accessToken);
  //     setLocalStorage("user", data.user);
  //     setLocalStorage("token", data.accessToken);
  //     router.push("/chat"); // Redirect to the chat page after successful login
  //   } catch (error) {
  //     alert(error.message || "Login failed"); // Handle errors with a generic message
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // const register = async (data) => { // Data object structure assumed to be the same
  //   setIsLoading(true);
  //   try {
  //     await requestHandler(
  //       async () => await registerUser(data),
  //       setIsLoading // Pass setIsLoading directly
  //     );
  //     alert("Account created successfully! Go ahead and login.");
  //     router.push("/login"); // Redirect to the login page after successful registration
  //   } catch (error) {
  //     alert(error.message || "Registration failed"); // Handle errors with a generic message
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  const productDetails = async (id) => { // Data object structure assumed to be the same
      setIsLoading(true);
      try {
        const response = await requestHandler(
          async () => await getProductDetails(id),
          setIsLoading // Pass setIsLoading directly
        );
        const { data } = response;
        return data;
      } catch (error) {
        console.log(error.message || "Login failed"); // Handle errors with a generic message
      } finally {
        setIsLoading(false);
      }
    };

  const AllProducts = async () => { // Data object structure assumed to be the same
      setIsLoading(true);
      try {
        const response = await requestHandler(
          async () => await getAllProducts(),
          setIsLoading // Pass setIsLoading directly
        );
        const { data } = response;
        return data;
      } catch (error) {
        console.log(error.message || "Login failed"); // Handle errors with a generic message
      } finally {
        setIsLoading(false);
      }
    };

  return {
    productDetails, AllProducts, isLoading
  }
}

export default requestdata
  
