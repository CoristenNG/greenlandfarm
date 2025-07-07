import React from "react";

const LoadingSpinner = ({ size = "md", color = "primary" }) => {
    // Size classes
    const sizeClasses = {
        sm: "h-4 w-4",
        md: "h-8 w-8",
        lg: "h-12 w-12",
        xl: "h-16 w-16",
    };

    // Color classes
    const colorClasses = {
        primary: "border-blue-500",
        secondary: "border-gray-500",
        success: "border-green-500",
        danger: "border-red-500",
        warning: "border-yellow-500",
    };

    return (
        <div className="flex justify-center items-center">
            <div
                className={`animate-spin rounded-full border-4 border-solid ${colorClasses[color]} border-t-transparent ${sizeClasses[size]}`}
            />
        </div>
    );
};

export default LoadingSpinner;
