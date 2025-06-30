// components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../redux/api/axiosBaseQuery";

const ProtectedRoute = ({ children }) => {
    const isAuth = isAuthenticated();
    console.log(isAuth);

    return isAuth ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
