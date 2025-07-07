/* eslint-disable no-undef */
// utils/axiosBaseQuery.js
"use client"
import { jwtDecode } from 'jwt-decode';
import toast from 'react-hot-toast';

export const server = process.env.NODE_ENV === "production" 
    ? "https://greenlandfarm.onrender.com" 
    : "http://localhost:5001";


// const handleAuthError = () => {
//     localStorage.removeItem("store_token");
//     localStorage.removeItem("refresh_token");
//     localStorage.removeItem("user_data");
//     window.location.href = "/login";
// };

const getAuthHeaders = async () => {
    const token = localStorage.getItem("user_token") || "";
    console.log(token, "token")
    return {
        'Content-Type': 'application/json',
        ...({ Authorization: `Bearer ${token}` }),
    };
};

// const showErrorToast = (error, response) => {
//     const status = response?.status;
//     const serverMessage = response?.data?.message || error.message;

//     if (status === 401 || status === 403) {
//         toast.error("Your session has expired. Please log in again.");
//         return;
//     }

//     if (status >= 400 && status < 500) {
//         toast.error(serverMessage || "Please check your input and try again.");
//         return;
//     }

//     if (status >= 500) {
//         toast.error("Server error. Please try again later.");
//         return;
//     }

//     // Network or other errors
//     if (!response) {
//         toast.error("Unable to connect. Please check your internet connection.");
//         return;
//     }

//     toast.error(serverMessage || "Something went wrong. Please try again.");
// };

// Show success message if available
const showSuccessToast = (data) => {
    const { type, message } = data || {};
    if (type === "success" && message && message !== "success") {
        toast.success(message);
    }
};

// Main query function
export const axiosBaseQuery = () => async (requestConfig) => {
    const {
        url,
        method = 'GET',
        data,
        params,
        headers = {},
        skipSuccessToast = false,
    } = requestConfig;

    try {
        // Build headers
        const authHeaders = await getAuthHeaders();
        const mergedHeaders = { ...authHeaders, ...headers };
        console.log(mergedHeaders)

        // Build URL with params
        const fullUrl = new URL(`${server}/api/v1${url}`);
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined && value !== null) {
                    fullUrl.searchParams.append(key, value);
                }
            });
        }

        const response = await fetch(fullUrl.toString(), {
            method,
            headers: mergedHeaders,
            body: data ? JSON.stringify(data) : undefined,
        });

        // Parse response
        let responseData;
        try {
            responseData = await response.json();
        } catch {
            responseData = null;
        }

        if (!response.ok) {
            const error = new Error(`HTTP ${response.status}`);
            error.response = response;
            error.data = responseData;
            throw error;
        }

        // Handle success message
        if (!skipSuccessToast) {
            showSuccessToast(responseData);
        }

        return { data: responseData };

    } catch (error) {
        console.error("Request failed:", error);

        // Handle auth errors
        // const status = error.response?.status;
        // if (status === 401 || status === 403) {
        //     if (!skipErrorHandling) {
        //         showErrorToast(error, error.response);
        //         setTimeout(handleAuthError, 1000); // Small delay for toast
        //     }
        // } else {
        //     // Handle other errors
        //     if (!skipErrorHandling) {
        //         showErrorToast(error, error.response);
        //     }
        // }


        console.log({
            status: status || 0,
            data: error.data || { message: error.message },
            message: error.message,
        })
        toast.error(error.data.message)
        return {
            error: {
                status: status || 0,
                data: error.data || { message: error.message },
                message: error.message,
            }
        };
    }
};

// Token validation
const checkTokenStatus = () => {
    try {
        const token = localStorage.getItem("user_token");
        if (!token) return { isValid: false, needsRefresh: false };

        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        const bufferTime = 5 * 60; // 5 minutes

        if (typeof decodedToken.exp === "number") {
            const isValid = decodedToken.exp > currentTime;
            const needsRefresh = decodedToken.exp < currentTime + bufferTime;
            return { isValid, needsRefresh };
        }

        return { isValid: false, needsRefresh: false };
    } catch {
        return { isValid: false, needsRefresh: false };
    }
};

// Export utility functions
export const isAuthenticated = () => {
    const { isValid } = checkTokenStatus();
    console.log(isValid, "isValid")
    return isValid;
};

export const needsTokenRefresh = () => {
    const { needsRefresh } = checkTokenStatus();
    return needsRefresh;
};

export const clearAuthData = () => {
    localStorage.removeItem("store_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user_data");
};

// Default instance
export const api = axiosBaseQuery();