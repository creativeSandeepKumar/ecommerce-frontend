import { getLocalStorage } from "@/utils";
import axios from "axios";

const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000",
    withCredentials: true,
    timeout: 120000,
});

apiClient.interceptors.request.use((config) => {
    const token = getLocalStorage("token");
    config.headers.Authorization = token ? `Bearer ${token} : ""` : "";
    return config;
},
(error) => {
    return Promise.reject(error);
}
);

export const logInUser = (data) => {
    return apiClient.post("/users/login", data);
}


export const registerUser = (data) => {
    return apiClient.post("/users/register", data);
}

export const logoutUser = (data) => {
    return apiClient.post("/users/logout", data);
}

export const getAvailableUser = (data) => {
    return apiClient.get("/users/role", data);
}


export const getProductDetails = (id) => {
    return apiClient.get(`product/${id}`);
}

export const getAllProducts = () => {
    return apiClient.get(`products`);
}

