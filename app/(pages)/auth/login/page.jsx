"use client";
import React, { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import {
    setCredentials,
    useLoginMutation,
} from "../../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import LoadingSpinner from "../../../components/cards/loading";
import { toast } from "react-toastify";
import { isAuthenticated, server } from "../../../redux/api/axiosBaseQuery";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const [login, { isLoading }] = useLoginMutation();
    const dispatch = useDispatch();
    const router = useRouter();
    const isAuth = isAuthenticated();

    
  const handleLogin = () => {
      if (window) window.location.href = `${server}/auth/google`; // Redirect to the backend authentication route
  };


    useEffect(() => {
        if (isAuth) {
            router.push("/");
        }
    }, [isAuth, router]);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await login(formData).unwrap();
            console.log(result);
            dispatch(setCredentials(result.user));
            toast.success("Login successful!");
            router.push("/");
        } catch (err) {
            console.error("Login failed:", err);
            toast.error(err.data?.message || "Login failed");
        }
    };

    const handleGoogleSignUp = () => {
        console.log("Google sign up clicked");
    };

    const handleFacebookSignUp = () => {
        console.log("Facebook sign up clicked");
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Image */}
            <div
                className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('/images/auth.png')`,
                }}
            >
                <div className="absolute h-screen w-full top-0 left-0 opacity-50 inset-0 bg-gradient-to-br from-black via-black via-90% to-transparent "></div>
            </div>

            {/* Gradient Overlay */}

            {/* Sign Up Form */}
            <div className="absolute md:right-32 z-10 w-full max-w-md">
                <div className="bg-white rounded-2xl md:shadow-2xl p-8 backdrop-blur-sm">
                    {/* Header */}
                    <div className="text-center !mb-13 md:mb-8">
                        <h1 className="text-xl font-bold text-gray-900 mb-2">
                            Welcome to Urban Lagos
                        </h1>
                    </div>

                    {/* Form */}
                    <div className="space-y-8 md:space-y-4">
                        {/* Email Address */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3 md:mb-1.5">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                value={formData.email}
                                onChange={(e) =>
                                    handleInputChange("email", e.target.value)
                                }
                                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 text-xs rounded-lg focus:ring-2 focus:ring-[#79A637] focus:border-transparent outline-none transition-all duration-200"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3 md:mb-1.5">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "password",
                                            e.target.value
                                        )
                                    }
                                    className="w-full px-4 py-2.5 pr-12 bg-gray-50 border border-gray-200 text-xs rounded-lg focus:ring-2 focus:ring-[#79A637] focus:border-transparent outline-none transition-all duration-200"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    {showPassword ? (
                                        <EyeOff size={20} />
                                    ) : (
                                        <Eye size={20} />
                                    )}
                                </button>
                            </div>
                            <div className=" mt-2">
                                <a
                                    href="/auth/forgot-password"
                                    className="text-xs text-[#79A637] hover:text-green-700 font-medium"
                                >
                                    Forgot Password ?
                                </a>
                            </div>
                        </div>

                        {/* Register Button */}
                        <button
                            onClick={handleSubmit}
                            className="w-full bg-[#79A637] text-white py-2.5 px-4 mt-4 rounded-lg font-semibold hover:bg-green-700 focus:ring-4 focus:ring-green-200 transition-all duration-200 transform hover:scale-[1.02]"
                        >
                            {isLoading ? <LoadingSpinner /> : "Login"}
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="mt-6 text-center">
                        <span className="text-sm text-gray-500">
                            Or login in with
                        </span>
                    </div>

                    {/* Social Login Buttons */}
                    <div className="mt-4 grid grid-cols-2 gap-3">
                        <button
                            onClick={handleLogin}
                            className="flex items-center justify-center px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        >
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                <path
                                    fill="#4285F4"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                    fill="#34A853"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                    fill="#FBBC05"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                />
                                <path
                                    fill="#EA4335"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                />
                            </svg>
                            <span className="text-sm font-medium text-gray-700">
                                Google
                            </span>
                        </button>

                        <button
                            onClick={handleFacebookSignUp}
                            className="flex items-center justify-center px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        >
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="#1877F2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                            <span className="text-sm font-medium text-gray-700">
                                Facebook
                            </span>
                        </button>
                    </div>

                    {/* Login Link */}
                    <div className="mt-6 text-center">
                        <span className="text-sm text-gray-600">
                            Don't have an account yet?{" "}
                            <a
                                href="/auth/create-account"
                                className="text-green-600 hover:text-green-700 font-medium"
                            >
                                Register
                            </a>
                        </span>
                    </div>

                    {/* Terms and Privacy */}
                    <div className="mt-6 text-center">
                        <p className="text-xs text-gray-500 leading-relaxed">
                            By continuing, you agree to Urban Lagos's{" "}
                            <a
                                href="#"
                                className="text-green-600 hover:text-green-700 underline"
                            >
                                Terms of Service
                            </a>{" "}
                            and acknowledge that you have read our{" "}
                            <a
                                href="#"
                                className="text-green-600 hover:text-green-700 underline"
                            >
                                Privacy Policy
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
