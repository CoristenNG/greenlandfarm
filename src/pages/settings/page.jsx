import React, { useState } from "react";
import {
    Package,
    MapPin,
    Settings,
    LogOut,
    Camera,
    Eye,
    EyeOff,
    Menu,
    X,
} from "lucide-react";

const SettingsPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        phone: "",
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const sidebarItems = [
        { icon: Package, label: "My Orders", active: false },
        { icon: MapPin, label: "Shipping Address", active: false },
        { icon: Settings, label: "Settings", active: true },
        { icon: LogOut, label: "Logout", active: false },
    ];

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

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <span>Home</span>
                            <span>&gt;</span>
                            <span>My Account</span>
                            <span>&gt;</span>
                            <span className="text-gray-900 font-medium">
                                My Orders
                            </span>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                        >
                            {isSidebarOpen ? (
                                <X size={24} />
                            ) : (
                                <Menu size={24} />
                            )}
                        </button>
                    </div>
                </div>
            </header>

            <div className="">
                <div className="flex flex-col lg:flex-row ">
                    {/* Sidebar */}
                    <aside
                        className={`
            fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:shadow-sm lg:rounded-lg
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
                    >
                        <div className="p-6">
                            <nav className="space-y-2">
                                {sidebarItems.map((item, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className={`
                      flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors
                      ${
                          item.active
                              ? "bg-[#4CAF50] text-white"
                              : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                      }
                    `}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setIsSidebarOpen(false);
                                        }}
                                    >
                                        <item.icon size={20} />
                                        <span>{item.label}</span>
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Overlay */}
                    {isSidebarOpen && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                            onClick={() => setIsSidebarOpen(false)}
                        />
                    )}

                    {/* Main Content */}
                    <main className="flex-1 min-w-0">
                        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
                            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                                Settings
                            </h1>
                            <h2 className="text-lg text-gray-600 mb-8">
                                Personal Information
                            </h2>

                            {/* Profile Picture */}
                            <div className="mb-8">
                                <div className="relative inline-block">
                                    <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
                                        <Camera className="w-8 h-8 text-gray-500" />
                                    </div>
                                    <button className="absolute bottom-0 right-0 bg-gray-600 text-white rounded-full p-2 hover:bg-gray-700 transition-colors">
                                        <Camera size={16} />
                                    </button>
                                </div>
                            </div>

                            {/* Personal Information Display */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900 mb-1">
                                        Full Name
                                    </h3>
                                    <p className="text-gray-600">
                                        Ayobami Kenneth Bully
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900 mb-1">
                                        Email Address
                                    </h3>
                                    <p className="text-gray-600">
                                        ayobamikenneth@gmail.com
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900 mb-1">
                                        Phone Number
                                    </h3>
                                    <p className="text-gray-600">
                                        +234 901 2345 678
                                    </p>
                                </div>
                            </div>

                            {/* Change Email Address & Phone Number */}
                            <div className="mb-8">
                                <h3 className="text-lg font-medium text-gray-900 mb-6">
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
                                            <button className="px-6 py-3 bg-[#4CAF50] text-white rounded-lg hover:bg-[#4CAF50] transition-colors font-medium">
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
                                                    togglePasswordVisibility(
                                                        "current"
                                                    )
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
                                                    togglePasswordVisibility(
                                                        "new"
                                                    )
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
                                                    togglePasswordVisibility(
                                                        "confirm"
                                                    )
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

                                <div className="flex justify-start">
                                    <button className="w-40 py-3 bg-[#4CAF50] text-white rounded-lg hover:bg-[#4CAF50] transition-colors font-medium">
                                        Verify
                                    </button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
