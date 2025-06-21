// utils/axiosBaseQuery.js
import { toast } from 'react-toastify';
import { jwtDecode } from 'jwt-decode';

// Define error types for better type safety
export const ErrorType = {
    NETWORK_ERROR: "NETWORK_ERROR",
    SERVER_ERROR: "SERVER_ERROR",
    AUTH_ERROR: "AUTH_ERROR",
    VALIDATION_ERROR: "VALIDATION_ERROR",
    TIMEOUT_ERROR: "TIMEOUT_ERROR",
    UNKNOWN_ERROR: "UNKNOWN_ERROR",
};

let server = "http://localhost:5001";
if (process.env.NODE_ENV === "production") {
    server = "https://corislo-backend.onrender.com";
}

// Enhanced navigation helper
const navigateToErrorPage = async (errorType) => {
    switch (errorType) {
        case ErrorType.NETWORK_ERROR:
            window.location.href = "/error?type=network";
            break;
        case ErrorType.SERVER_ERROR:
            window.location.href = "/error?type=server";
            break;
        case ErrorType.AUTH_ERROR:
            // Clear auth data and navigate
            localStorage.removeItem("store_token");
            localStorage.removeItem("refresh_token");
            localStorage.removeItem("user_data");
            window.location.href = "/login";
            break;
        default:
            return;
    }
};

// Check network connectivity
const checkNetworkConnectivity = async () => {
    try {
        return navigator.onLine;
    } catch {
        return true; // Assume connected if check fails
    }
};

// Enhanced error categorization
const categorizeError = async (err) => {
    // Network/connectivity errors
    if (!err.response) {
        const networkErrorCodes = [
            "NETWORK_ERROR",
            "ECONNREFUSED",
            "ENOTFOUND",
            "ECONNABORTED",
        ];
        const isNetworkError =
            networkErrorCodes.includes(err.code || "") ||
            err.message.includes("Network Error");

        if (isNetworkError || err.code === "ECONNABORTED") {
            return {
                errorType:
                    err.code === "ECONNABORTED"
                        ? ErrorType.TIMEOUT_ERROR
                        : ErrorType.NETWORK_ERROR,
                shouldRetry: true,
            };
        }
    }

    const status = err.response?.status;

    // Server errors (5xx)
    if (status && status >= 500) {
        return { errorType: ErrorType.SERVER_ERROR, shouldRetry: true };
    }

    // Auth errors (401, 403)
    const authStatus = await isAuthenticated();
    if (!authStatus && (status === 401 || status === 403)) {
        return { errorType: ErrorType.AUTH_ERROR, shouldRetry: false };
    }

    // Validation errors (400, 422)
    if (status === 400 || status === 422) {
        return { errorType: ErrorType.VALIDATION_ERROR, shouldRetry: false };
    }

    return { errorType: ErrorType.UNKNOWN_ERROR, shouldRetry: false };
};

// Enhanced error message generation
const getErrorMessage = (errorType, errorData) => {
    switch (errorType) {
        case ErrorType.NETWORK_ERROR:
            return "Unable to connect to server. Please check your internet connection.";
        case ErrorType.SERVER_ERROR:
            return "Server is experiencing issues. Please try again later.";
        case ErrorType.TIMEOUT_ERROR:
            return "Request timed out. Please try again.";
        case ErrorType.VALIDATION_ERROR:
            return errorData?.message || "Please check your input and try again.";
        default:
            return errorData?.message || "Something went wrong. Please try again.";
    }
};

// Enhanced error handler
const handleError = async (customError, config = {}) => {
    const { showToast = true, navigate = true, customMessage } = config;

    // Check network connectivity for network errors
    if (customError.errorType === ErrorType.NETWORK_ERROR) {
        const isConnected = await checkNetworkConnectivity();
        if (!isConnected) {
            if (showToast) {
                toast.error("No internet connection. Please check your network settings.");
            }
            if (navigate) navigateToErrorPage(ErrorType.NETWORK_ERROR);
            return;
        }
    }

    // Show toast notification
    if (showToast) {
        const message =
            customMessage ||
            getErrorMessage(customError.errorType, customError.data);
        toast.error(message);
    }

    // Handle navigation
    if (navigate) {
        navigateToErrorPage(customError.errorType);
    }
};

// Retry mechanism
const retryRequest = async (requestFn, maxRetries = 3, delay = 1000) => {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            return await requestFn();
        } catch (error) {
            if (attempt === maxRetries) throw error;
            await new Promise((resolve) =>
                setTimeout(resolve, delay * attempt)
            );
        }
    }
};

// Get auth headers
const getAuthHeaders = async () => {
    const token = localStorage.getItem("store_token");
    return {
        headers: {
            'Content-Type': 'application/json',
            ...(token && { Authorization: `Bearer ${token}` }),
        }
    };
};

export const axiosBaseQuery = (defaultConfig = {}) => 
    async ({
        url,
        method,
        data,
        params,
        headers,
        authType = "store",
        skipErrorHandling = false,
        retryCount = 0,
    }) => {
        const makeRequest = async () => {
            const authHeaders = authType ? await getAuthHeaders() : { headers: {} };
            const mergedHeaders = {
                ...(headers ?? {}),
                ...(authHeaders?.headers ?? {}),
            };

            const response = await fetch(`${server}/api/v1${url}`, {
                method: method || 'GET',
                headers: mergedHeaders,
                body: data ? JSON.stringify(data) : undefined,
                signal: AbortSignal.timeout(10000), // 10 second timeout
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            const { type, message } = result || {};
            
            if (type === "success" && message !== "success") {
                toast.success(message);
            }
            
            return { data: result };
        };

        try {
            let result;

            if (retryCount > 0) {
                result = await retryRequest(makeRequest, retryCount + 1);
            } else {
                result = await makeRequest();
            }

            return result;
        } catch (error) {
            const { errorType, shouldRetry } = await categorizeError(error);

            const customError = {
                status: error.status || errorType,
                data: error.data || {
                    message: error.message,
                    errorType,
                },
                errorType,
                isServerDown:
                    errorType === ErrorType.NETWORK_ERROR ||
                    errorType === ErrorType.SERVER_ERROR,
                shouldRetry,
            };

            // Handle error if not skipped
            if (!skipErrorHandling) {
                await handleError(customError, defaultConfig);
            }

            return { error: customError };
        }
    };

// Enhanced token management
const checkTokenStatus = async () => {
    try {
        const getLocalToken = localStorage.getItem("store_token");
        if (!getLocalToken) {
            return { isValid: false, needsRefresh: false };
        }

        const decodedToken = jwtDecode(getLocalToken);
        const currentTime = Date.now() / 1000;
        const bufferTime = 5 * 60; // 5 minutes buffer

        if (typeof decodedToken.exp === "number") {
            const isValid = decodedToken.exp > currentTime;
            const needsRefresh = decodedToken.exp < currentTime + bufferTime;
            return { isValid, needsRefresh };
        }

        return { isValid: false, needsRefresh: false };
    } catch (error) {
        console.log(error);
        return { isValid: false, needsRefresh: false };
    }
};

export const isAuthenticated = async () => {
    const { isValid } = await checkTokenStatus();
    return isValid;
};

export const needsTokenRefresh = async () => {
    const { needsRefresh } = await checkTokenStatus();
    return needsRefresh;
};

export const isOffline = async () => {
    const authenticated = await isAuthenticated();
    return !authenticated;
};

// Utility for clearing auth data
export const clearAuthData = async () => {
    try {
        localStorage.removeItem("store_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("user_data");
    } catch (error) {
        console.error("Error clearing auth data:", error);
    }
};
