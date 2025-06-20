import OTPVerification from "./otp";

const OtpPage = () => {
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
                <OTPVerification />
            </div>
        </div>
    );
};

export default OtpPage;
