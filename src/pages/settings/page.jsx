import { useState } from "react";
import { Camera, Eye, EyeOff } from "lucide-react";
import SettingsWrapper from "../../components/wrapper/accountWrapper";
import useSWR from "swr";
import ProfilePictureUploader from "../../components/fileUpload";
import { useUpdatePictureMutation } from "../../redux/slices/userSlice";
import LoadingSpinner from "../../components/cards/loading";
import {
    useChangePasswordMutation,
    useOtpEmailMutation,
} from "../../redux/slices/authSlice";
import OTPVerification from "../auth/otp";
const SettingsPage = () => {
    const [updateImage, { isLoading }] = useUpdatePictureMutation();
    const [changePassword, { isLoading: changingPass }] =
        useChangePasswordMutation();
    const [sendOtp, ] = useOtpEmailMutation();
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showOtp, setShowOtp] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    // const [profile, setProfile] = useState([]);
    const [localProfile, setLocalProfile] = useState("");

    const { data } = useSWR("/user/get-account");
    const user = data?.user || {};
    console.log(data);

    const [formData, setFormData] = useState({
        email: "",
        phone: "",
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const togglePasswordVisibility = (field) => {
        switch (field) {
            case "current":
                setShowCurrentPassword(!showCurrentPassword);
                break;
            case "new":
                setShowNewPassword(!showNewPassword);
                break;
            case "confirm":
                setShowConfirmPassword(!showConfirmPassword);
                break;
        }
    };

    const fillNaame = `${user.first_name} ${user.last_name}`;

    return (
        <SettingsWrapper page="settings">
            {/* Main Content */}
            <main className="flex-1 min-w-0">
                <div className="bg-white rounded-lg  p-6 sm:p-8">
                    <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                        Settings
                    </h1>
                    <h2 className="text-md text-gray-600 mb-8">
                        Personal Information
                    </h2>

                    {/* Profile Picture */}
                    <ProfilePictureUploader
                        setFiles={() => {}}
                        setLocalFiles={setLocalProfile}
                        directUpload={(base64) =>
                            updateImage({
                                picture: base64,
                                type: "profile_image",
                                state: "add",
                            })
                        }
                        component={
                            <div className="mb-8">
                                <div className="relative inline-block">
                                    <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                                        {!isLoading ? (
                                            <img
                                                src={
                                                    localProfile
                                                        ? URL?.createObjectURL(
                                                              localProfile[0]
                                                          )
                                                        : user?.picture ||
                                                          "/images/profile_placeholder.png"
                                                }
                                                className="rounded-full"
                                            />
                                        ) : (
                                            <LoadingSpinner />
                                        )}
                                    </div>
                                    <button className="absolute bottom-0 right-0 bg-gray-600 text-white rounded-full p-1.5 hover:bg-gray-700 transition-colors">
                                        <Camera size={14} />
                                    </button>
                                </div>
                            </div>
                        }
                    />

                    {/* Personal Information Display */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div>
                            <h3 className="text-sm font-medium text-gray-900 mb-1">
                                Full Name
                            </h3>
                            <p className="text-gray-600">{`${user.first_name} ${user.last_name}`}</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-gray-900 mb-1">
                                Email Address
                            </h3>
                            <p className="text-gray-600">{user.email}</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-gray-900 mb-1">
                                Phone Number
                            </h3>
                            <p className="text-gray-600">
                                {user?.phone || "N/A"}
                            </p>
                        </div>
                    </div>

                    {/* Change Email Address & Phone Number */}
                    <div className="mb-8 !mt-14">
                        <h3 className="text-md  font-medium text-gray-700 mb-6">
                            Change Email Address & Phone Number
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <div className="flex space-x-3">
                                    <input
                                        type="email"
                                        placeholder="Enter your new email address"
                                        value={formData.email}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "email",
                                                e.target.value
                                            )
                                        }
                                        className="flex-1 w-44 md:w-auto text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                                    />
                                    <button
                                        onClick={async () => {
                                            await sendOtp({
                                                email: formData.email,
                                                username: fillNaame,
                                            })
                                            setShowOtp(true);
                                        }}
                                        className="px-6 py-3 bg-[#4CAF50] text-white rounded-lg hover:bg-[#4CAF50] transition-colors font-medium"
                                    >
                                        Verify
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number
                                </label>
                                <div className="flex space-x-3">
                                    <input
                                        type="tel"
                                        placeholder="Enter your new phone number"
                                        value={formData.phone}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "phone",
                                                e.target.value
                                            )
                                        }
                                        className="flex-1 w-44 md:w-auto px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                                    />
                                    <button className="px-6 py-3 bg-[#4CAF50] text-white rounded-lg hover:bg-[#4CAF50] transition-colors font-medium">
                                        Verify
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Change Password */}
                    <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-6">
                            Change Password
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Current Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={
                                            showCurrentPassword
                                                ? "text"
                                                : "password"
                                        }
                                        placeholder="Enter your current password"
                                        value={formData.currentPassword}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "currentPassword",
                                                e.target.value
                                            )
                                        }
                                        className="w-full px-4 !text-black py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            togglePasswordVisibility("current")
                                        }
                                        className="absolute inset-y-0 right-0 bottom-0 mt-1 mr-1 flex items-center bg-white h-10 pr-4 text-gray-400 hover:text-gray-600"
                                    >
                                        {showCurrentPassword ? (
                                            <EyeOff size={20} />
                                        ) : (
                                            <Eye size={20} />
                                        )}
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    New Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={
                                            showNewPassword
                                                ? "text"
                                                : "password"
                                        }
                                        placeholder="Enter your new password"
                                        value={formData.newPassword}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "newPassword",
                                                e.target.value
                                            )
                                        }
                                        className="w-full !text-black px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            togglePasswordVisibility("new")
                                        }
                                        className="absolute inset-y-0 right-0 bottom-0 mt-1 mr-1 flex items-center bg-white h-10 pr-4 text-gray-400 hover:text-gray-600"
                                    >
                                        {showNewPassword ? (
                                            <EyeOff size={20} />
                                        ) : (
                                            <Eye size={20} />
                                        )}
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Confirm New Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={
                                            showConfirmPassword
                                                ? "text"
                                                : "password"
                                        }
                                        placeholder="Enter your new password"
                                        value={formData.confirmPassword}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "confirmPassword",
                                                e.target.value
                                            )
                                        }
                                        className="w-full !text-black px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            togglePasswordVisibility("confirm")
                                        }
                                        className="absolute inset-y-0 right-0 bottom-0 mt-1 mr-1 flex items-center bg-white h-10 pr-4 text-gray-400 hover:text-gray-600"
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOff size={20} />
                                        ) : (
                                            <Eye size={20} />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-start mb-20">
                            <button
                                onClick={() =>
                                    changePassword({
                                        oldPassword: formData.currentPassword,
                                        confirmPassword:
                                            formData.confirmPassword,
                                        newPassword: formData.newPassword,
                                    })
                                }
                                className="w-full md:w-48 py-3 bg-[#4CAF50] text-white rounded-lg hover:bg-[#4CAF50] transition-colors font-medium"
                            >
                                {changingPass ? "CHANGING" : `Change Password`}
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            {/* Cancel Order Modal */}
            {showOtp && (
                <div className="fixed inset-0  flex items-center justify-center z-50">
                    <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50 z-30"></div>
                    <OTPVerification hideTerms email={formData.email} />
                </div>
            )}
        </SettingsWrapper>
    );
};

export default SettingsPage;
