"use client";
import React, { useState } from "react";
import {
    ChevronDown,
    ChevronUp,
    ArrowRight,
} from "lucide-react";
import SettingsWrapper from "../../components/wrapper/accountWrapper";
import { useRouter } from "next/navigation";

export default function OrdersPage() {
    const [processingExpanded, setProcessingExpanded] = useState(true);
    const [cancelledExpanded, setCancelledExpanded] = useState(false);
    const router = useRouter();

    const orderssdf = [
        {
            id: "ORD-250615-0012",
            description: "Tomatoes,Eggs, Bell Pepper and More..",
            price: "₦ 76,270.34",
            status: "In Progress",
            image: "/api/placeholder/60/60",
            isPlaceholder: true,
        },
        {
            id: "ORD-250615-0012",
            description: "Tomatoes,Eggs, Bell Pepper and More..",
            price: "₦ 76,270.34",
            status: "Delivered",
            image: "/api/placeholder/60/60",
            isVegetables: true,
        },
        {
            id: "ORD-250615-0012",
            description: "Tomatoes,Eggs, Bell Pepper and More..",
            price: "₦ 76,270.34",
            status: "Delivered",
            image: "/api/placeholder/60/60",
            isTomatoes: true,
        },
        {
            id: "ORD-250615-0012",
            description: "Tomatoes,Eggs, Bell Pepper and More..",
            price: "₦ 76,270.34",
            status: "Delivered",
            image: "/api/placeholder/60/60",
            isPlaceholder: true,
        },
    ];
    console.log(orderssdf);
    const orders = [];
    const getStatusBadge = (status) => {
        if (status === "In Progress") {
            return (
                <span className="inline-flex flex-shrink-0 items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                    In Progress
                </span>
            );
        }
        return (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Delivered
            </span>
        );
    };

    const getOrderImage = (order) => {
        if (order.isVegetables) {
            return (
                <div className="w-14 h-14 rounded-lg bg-red-500 flex items-center justify-center overflow-hidden">
                    <div className="grid grid-cols-2 gap-0.5 w-full h-full p-1">
                        <div className="bg-yellow-400 rounded-sm"></div>
                        <div className="bg-red-600 rounded-sm"></div>
                        <div className="bg-green-500 rounded-sm"></div>
                        <div className="bg-orange-500 rounded-sm"></div>
                    </div>
                </div>
            );
        }
        if (order.isTomatoes) {
            return (
                <div className="w-14 h-14 rounded-lg bg-green-600 flex items-center justify-center overflow-hidden">
                    <div className="flex flex-wrap gap-0.5 p-1">
                        <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                </div>
            );
        }
        return (
            <div className="w-14 h-14 rounded-lg bg-gray-200 flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-300 rounded"></div>
            </div>
        );
    };

    return (
        <SettingsWrapper page="order">
            {/* Main Content */}
            <div className="flex-1 md:p-6">
                <div className="bg-white rounded-lg">
                    {/* Processing & Completed Orders Section */}
                    <div className="border-b border-gray-300">
                        <button
                            onClick={() =>
                                setProcessingExpanded(!processingExpanded)
                            }
                            className="w-full px-6 py-4 flex items-center justify-between text-left bg-gray-50 hover:bg-gray-100"
                        >
                            <span className="font-medium text-gray-900">
                                Processing & Completed Orders
                            </span>
                            {processingExpanded ? (
                                <ChevronDown className="w-5 h-5 text-gray-400" />
                            ) : (
                                <ChevronUp className="w-5 h-5 text-gray-400" />
                            )}
                        </button>

                        {processingExpanded && (
                            <div
                                className="px-6 pb-4"
                                onClick={() => router.push("/order/2324")}
                            >
                                <div className="space-y-4">
                                    {orders.map((order, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
                                        >
                                            <div className="flex items-center space-x-4">
                                                {getOrderImage(order)}
                                                <div>
                                                    <div className="font-medium text-gray-900 text-sm">
                                                        Order ID: {order.id}
                                                    </div>
                                                    <div className="text-gray-600 text-sm">
                                                        {order.description}
                                                    </div>
                                                    <div className="font-semibold text-gray-900 text-sm mt-1">
                                                        {order.price}
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                {getStatusBadge(order.status)}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {orders.length > 5 && (
                                    <div className="mt-6 text-center">
                                        <button className="inline-flex items-center text-green-600 hover:text-green-700 font-medium text-sm">
                                            View More
                                            <ArrowRight className="w-4 h-4 ml-1" />
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Cancelled Orders Section */}
                    <div>
                        <button
                            onClick={() =>
                                setCancelledExpanded(!cancelledExpanded)
                            }
                            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50"
                        >
                            <span className="font-medium text-gray-900">
                                Cancelled Orders
                            </span>
                            {cancelledExpanded ? (
                                <ChevronDown className="w-5 h-5 text-gray-400" />
                            ) : (
                                <ChevronUp className="w-5 h-5 text-gray-400" />
                            )}
                        </button>

                        {cancelledExpanded && (
                            <div className="px-6 pb-4">
                                <div className="text-center py-8 text-gray-500">
                                    No cancelled orders found.
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </SettingsWrapper>
    );
}
