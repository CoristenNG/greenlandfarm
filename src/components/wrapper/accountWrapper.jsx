import React, { useState } from "react";
import {
    Package,
    MapPin,
    Settings,
    LogOut,
    Camera,
    Eye,
    EyeOff,
    X,
    PanelLeftOpen,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import UserWrapper from "./user";

const SettingsWrapper = ({ children, page = "order" }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const sidebarItems = [
        { icon: Package, label: "My Orders", link: "/order" },
        { icon: MapPin, label: "Shipping Address", link: "/addresses" },
        { icon: Settings, label: "Settings", link: "/settings" },
        { icon: LogOut, label: "Logout", link: "", logout: true },
    ];
    return (
        <UserWrapper>
            <div className="min-h-screen max-w-6xl mx-auto">
                {/* Header */}
                <header className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 md:py-4 sticky top-38 md:top-24 z-40">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2 text-sm text-gray-500">
                                <span>Home</span>
                                <span>&gt;</span>
                                <span>My Account</span>
                                <span>&gt;</span>
                                <span className="text-gray-900 font-medium">
                                    {
                                        sidebarItems.filter(
                                            (x) => x.link === `/${page}`
                                        )?.[0].label
                                    }
                                </span>
                            </div>

                            <button
                                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                                className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                            >
                                {isSidebarOpen ? (
                                    <X size={24} />
                                ) : (
                                    <PanelLeftOpen size={24} />
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
                            fixed inset-y-0 left-0 w-64 z-40 md:z-0 md:sticky top-38 md:top-0 bg-white shadow-sm md:shadow-none  transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:rounded-lg
                            ${
                                isSidebarOpen
                                    ? "translate-x-0"
                                    : "-translate-x-full"
                            }
                        `}
                        >
                            <div className="p-6">
                                <nav className="space-y-2">
                                    {sidebarItems.map((item, index) => (
                                        <Link
                                            key={index}
                                            to={item.link}
                                            className={`
                                          flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors
                                          ${
                                              item.link === `/${page}`
                                                  ? "bg-[#4CAF50] text-white"
                                                  : "text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-green-100"
                                          }
                                        `}
                                            onClick={(e) => {
                                                if (item.logout) {
                                                    e.preventDefault();
                                                    dispatch(
                                                        logoutUser({ navigate })
                                                    );
                                                }
                                            }}
                                        >
                                            <item.icon size={20} />
                                            <span>{item.label}</span>
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        </aside>
                        {children}
                    </div>
                </div>
            </div>
        </UserWrapper>
    );
};

export default SettingsWrapper;
