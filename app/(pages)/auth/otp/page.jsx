"use client";
import { useRouter } from "next/navigation";
import OTPVerification from "./otpPage";
import toast from "react-hot-toast";
import { useVerifyOtpMutation } from "@/app/redux/slices/authSlice";
import { use } from "react";

const OtpPage = ({ searchParams }) => {
    const { email="" } = use(searchParams);
   
    console.log(email);
    const router = useRouter();
    const [verifyOtp, { isLoading }] = useVerifyOtpMutation();

    const handleOtpVerification = async (otp) => {
        try {
            const result = await verifyOtp({ otp, email }).unwrap();
            console.log(result);
            if (result.type === "success") {
                router.push("/");
            }
        } catch (err) {
            toast.error(err.data?.message || "OTP verification failed");
        }
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

            {/* OTP PAGE */}
            <div className="absolute md:right-32 z-10 w-full max-w-md">
                <OTPVerification
                    onSubmit={handleOtpVerification}
                    isLoading={isLoading}
                    email={email}
                />
            </div>
        </div>
    );
};

export default OtpPage;
