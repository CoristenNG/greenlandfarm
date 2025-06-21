import React, { useState } from "react";
import {
    ArrowLeft,
    User,
    MapPin,
    Settings,
    LogOut,
    Package,
    PanelLeftOpen,
    X,
} from "lucide-react";
import OrderTrackingPage from "./Orderview";
import { Link } from "react-router-dom";

export default function OrderDetailsPage() {
    const [showCancelModal, setShowCancelModal] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const orderItems = [
        {
            id: 1,
            name: "Fresh Red Bell Peppers",
            unitPrice: "₦17,000",
            quantity: 5,
            totalPrice: "₦35,000",
            image: "🫑",
        },
        {
            id: 2,
            name: "Farm-Crate Chicken Eggs",
            unitPrice: "₦4,000",
            quantity: 10,
            totalPrice: "₦40,000",
            image: "🥚",
        },
        {
            id: 3,
            name: "Ata Rodo - Habanero Peppers",
            unitPrice: "₦2,800",
            quantity: 3,
            totalPrice: "₦8,400",
            image: "🌶️",
        },
        {
            id: 4,
            name: "Organic Greenhouse Tomatoes",
            unitPrice: "₦3,500",
            quantity: 6,
            totalPrice: "₦21,000",
            image: "🍅",
        },
    ];
    const sidebarItems = [
        { icon: Package, label: "My Orders", link: "/order", active: true },
        {
            icon: MapPin,
            label: "Shipping Address",
            link: "/addresses",
            active: false,
        },
        { icon: Settings, label: "Settings", link: "/settings", active: false },
        {
            icon: LogOut,
            label: "Logout",
            link: "",
            logout: true,
            active: false,
        },
    ];
    const customerDetails = {
        fullName: "Ayobami Kenneth Bully",
        email: "ayobamikenn@gmail.com",
        phone: "+234 9011 2345 678",
        shippingAddress: "No. 18 Phase 3 Street, Lagos",
        paymentMethod: "Palmpay",
        deliveryCode: "1234",
    };

    const handleCancelOrder = () => {
        setShowCancelModal(true);
    };

    const confirmCancel = () => {
        alert("Order has been cancelled successfully!");
        setShowCancelModal(false);
    };

    const calculateSubtotal = () => {
        return orderItems.reduce((sum, item) => {
            const price = parseInt(item.totalPrice.replace(/[₦,]/g, ""));
            return sum + price;
        }, 0);
    };

    const formatPrice = (amount) => {
        return `₦${amount.toLocaleString()}`;
    };

    return (
        <div className="min-h-screen md:max-w-6xl mx-auto mb-20 mt-px relative">
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
                                My Orders
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
            <div className="!sticky !top-40">
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
                                             item.active
                                                 ? "bg-[#4CAF50] text-white"
                                                 : "text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-green-100"
                                         }
                                       `}
                                        onClick={(e) => {
                                            if (item.logout) {
                                                e.preventDefault();
                                                setIsSidebarOpen(false);
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

                    {/* Overlay */}
                   

                    {/* Main Content */}
                    <div className="flex-1 md:p-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                {/* Order Details */}
                                <div className="lg:col-span-2">
                                    {/* Header */}
                                    {/* <div className="  bg-white"> */}
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center">
                                            <button className="flex items-center text-gray-600 hover:text-gray-800 mr-4">
                                                <ArrowLeft className="w-5 h-5 mr-2" />
                                                Back to Orders Page
                                            </button>
                                        </div>
                                    </div>
                                    {/* Order Header */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center">
                                            <h1 className="text-xl font-bold text-gray-900 mr-4">
                                                Order ORD-250615-0012
                                            </h1>
                                            <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                                                In Progress
                                            </span>
                                        </div>
                                        <button
                                            onClick={handleCancelOrder}
                                            className="px-4 h-8 bg-green-500 text-white text-xs rounded-lg hover:bg-green-600 transition-colors"
                                        >
                                            Cancel Order
                                        </button>
                                    </div>
                                    {/* </div> */}
                                    <div className="bg-white rounded-lg  ">
                                        {/* Order Items */}
                                        <div className="space-y-4">
                                            {orderItems.map((item) => (
                                                <div
                                                    key={item.id}
                                                    className="flex items-center p-4 border-b border-gray-100 rounded-lg"
                                                >
                                                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl mr-4">
                                                        {item.image}
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="font-medium text-gray-900">
                                                            {item.name}
                                                        </h3>
                                                        <div className="flex items-center text-sm text-gray-600 mt-1">
                                                            <span>
                                                                Unit price: Per
                                                                Kg |{" "}
                                                                {item.unitPrice}
                                                            </span>
                                                            <span className="mx-4">
                                                                Qty:{" "}
                                                                {item.quantity}
                                                            </span>
                                                        </div>
                                                        <div className="text-md font-bold text-gray-900">
                                                            {item.totalPrice}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            {/* Order Summary */}
                                            <OrderTrackingPage />
                                        </div>

                                        <div className="mt-8 border-t pt-6">
                                            <h2 className="text-lg font-bold text-gray-900 mb-4">
                                                Order Summary
                                            </h2>
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-gray-600">
                                                    <span>Subtotal:</span>
                                                    <span>
                                                        {formatPrice(
                                                            calculateSubtotal()
                                                        )}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between text-gray-600">
                                                    <span>Delivery Fee:</span>
                                                    <span>₦2,000</span>
                                                </div>
                                                <div className="flex justify-between text-gray-600">
                                                    <span>Service Fee:</span>
                                                    <span>₦1,000</span>
                                                </div>
                                                <hr className="my-2" />
                                                <div className="flex justify-between text-lg font-bold text-gray-900">
                                                    <span>Total:</span>
                                                    <span>
                                                        {formatPrice(
                                                            calculateSubtotal() +
                                                                3000
                                                        )}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Customer Details */}
                                <div className="space-y-6 sticky top-40">
                                    <div className="bg-white rounded-lg  p-6">
                                        <h2 className="text-lg font-bold text-gray-900 mb-4">
                                            Customer's Details
                                        </h2>

                                        <div className="space-y-4">
                                            <div>
                                                <h3 className="font-medium text-gray-900 mb-1">
                                                    Notes
                                                </h3>
                                                <p className="text-gray-600 text-sm">
                                                    No notes
                                                </p>
                                            </div>

                                            <div>
                                                <h3 className="font-medium text-gray-900 mb-1">
                                                    Full Name
                                                </h3>
                                                <p className="text-gray-600 text-sm">
                                                    {customerDetails.fullName}
                                                </p>
                                            </div>

                                            <div>
                                                <h3 className="font-medium text-gray-900 mb-1">
                                                    Email Address
                                                </h3>
                                                <p className="text-gray-600 text-sm">
                                                    {customerDetails.email}
                                                </p>
                                            </div>

                                            <div>
                                                <h3 className="font-medium text-gray-900 mb-1">
                                                    Phone Number
                                                </h3>
                                                <p className="text-gray-600 text-sm">
                                                    {customerDetails.phone}
                                                </p>
                                            </div>

                                            <div>
                                                <h3 className="font-medium text-gray-900 mb-1">
                                                    Shipping Address
                                                </h3>
                                                <p className="text-gray-600 text-sm">
                                                    {
                                                        customerDetails.shippingAddress
                                                    }
                                                </p>
                                            </div>

                                            <div>
                                                <h3 className="font-medium text-gray-900 mb-1">
                                                    Payment Method
                                                </h3>
                                                <p className="text-gray-600 text-sm">
                                                    {
                                                        customerDetails.paymentMethod
                                                    }
                                                </p>
                                            </div>

                                            <div>
                                                <h3 className="font-medium text-gray-900 mb-1">
                                                    Delivery Receiver Code
                                                </h3>
                                                <p className="text-gray-600 text-sm">
                                                    {
                                                        customerDetails.deliveryCode
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Cancel Order Modal */}
            {showCancelModal && (
                <div className="fixed inset-0  flex items-center justify-center z-50">
                    <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50"></div>
                    <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 z-50">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">
                            Cancel Order
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Are you sure you want to cancel this order? This
                            action cannot be undone.
                        </p>
                        <div className="flex space-x-3">
                            <button
                                onClick={() => setShowCancelModal(false)}
                                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                            >
                                Keep Order
                            </button>
                            <button
                                onClick={confirmCancel}
                                className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                            >
                                Cancel Order
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
