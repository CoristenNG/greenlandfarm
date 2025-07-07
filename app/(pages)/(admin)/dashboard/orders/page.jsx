"use client";
import PageBreadcrumb from "../../../../components/common/PageBreadCrumb";
import React, { useEffect, useRef, useState } from "react";
import { Search, Filter, MoreHorizontal } from "lucide-react";
import {OrderDetails} from "./sidebar";

const OrderDashboard = () => {
    const orderInfoRef = useRef(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterOpen, setFilterOpen] = useState(false);
    const [orderInfo, setOrderInfo] = useState("");

    useEffect(() => {
        const handleClickOut = (e) => {
            if (
                orderInfoRef.current &&
                !orderInfoRef.current.contains(e.target)
            ) {
                setOrderInfo("");
            }
        };
        document.addEventListener("mousedown", handleClickOut);
        return () => document.removeEventListener("mousedown", handleClickOut);
    }, []);

    const stats = [
        {
            title: "Total Orders Today",
            value: "300",
            change: "+29%",
            trend: "up",
            subtitle: "Against Last Month",
        },
        {
            title: "Completed Orders",
            value: "290",
            change: "+29%",
            trend: "up",
            subtitle: "Against Last Month",
        },
        {
            title: "Pending Orders",
            value: "10",
            change: "+29%",
            trend: "up",
            subtitle: "Against Last Month",
        },
        {
            title: "Cancelled Orders",
            value: "13",
            change: "+15.7%",
            trend: "down",
            subtitle: "Against Last Month",
        },
    ];

    const orders = [
        {
            id: "ORD-1001",
            customer: "Tolu Adebayo",
            phone: "+234 803 123 4567",
            date: "22/06/2025 - 9:30AM",
            type: "Delivery",
            address: "No. 14, Akobo Road, Yaba, Lagos",
            items: "Tomatoes x 5, Green Bell Pepper x 2, Eggs x 1",
            userType: "Guest",
            status: "In Progress",
        },
        {
            id: "ORD-1002",
            customer: "Ngozi Okeke",
            phone: "+234 805 234 5678",
            date: "22/06/2025 - 11:45AM",
            type: "Pick Up",
            address: "",
            items: "Pepper x 3, Smoked Fish x 1, Lettuce x 2",
            userType: "Guest",
            status: "In Progress",
        },
        {
            id: "ORD-1003",
            customer: "Samuel Eze",
            phone: "+234 806 345 6789",
            date: "22/06/2025 - 1:05PM",
            type: "Delivery",
            address: "5, Unity Street, Phase 2, Lagos",
            items: "Tomatoes x 10, Habanero Pepper x 1, Red Bell Pepper x 1",
            userType: "User",
            status: "Completed",
        },
        {
            id: "ORD-1004",
            customer: "Kemi Ajayi",
            phone: "+234 807 456 7890",
            date: "21/06/2025 - 4:12PM",
            type: "Delivery",
            address: "31, Ikoyi Road, Ogudu, Lagos",
            items: "Eggs x 2, Yellow Bell Pepper x 1, Pepper x 5",
            userType: "Guest",
            status: "Completed",
        },
        {
            id: "ORD-1005",
            customer: "Chuka Nwosu",
            phone: "+234 809 567 8901",
            date: "21/06/2025 - 10:18AM",
            type: "Pick Up",
            address: "",
            items: "Lettuce x 3, Tomatoes x 4, Red Bell Pepper x 2",
            userType: "Guest",
            status: "Completed",
        },
        {
            id: "ORD-1006",
            customer: "Maryam Sulaiman",
            phone: "+234 810 678 9012",
            date: "21/06/2025 - 8:50AM",
            type: "Delivery",
            address: "House 9 Alhaji Street, Ikeja",
            items: "Green Bell Pepper x 3, Carolina Pepper x 1, Eggs x 1",
            userType: "User",
            status: "Completed",
        },
        {
            id: "ORD-1007",
            customer: "Seun Bapoola",
            phone: "+234 812 789 0123",
            date: "20/06/2025 - 3:35PM",
            type: "Delivery",
            address: "12, Dolphin Estate, Ikoyi, Lagos",
            items: "Pepper x 2, Tomatoes x 6, Lettuce x 1",
            userType: "User",
            status: "Cancelled",
        },
        {
            id: "ORD-1008",
            customer: "Judith Odili",
            phone: "+234 813 890 1234",
            date: "20/06/2025 - 12:30PM",
            type: "Delivery",
            address: "21, Aguda Close, Surulere",
            items: "Smoked Fish x 2, Habanero Pepper x 0.5, Green Bell Pepper x 1",
            userType: "Guest",
            status: "Completed",
        },
        {
            id: "ORD-1009",
            customer: "Ibrahim Musa",
            phone: "+234 814 901 2345",
            date: "20/06/2025 - 7:40AM",
            type: "Delivery",
            address: "10, Airport Road, Mafoluku",
            items: "Tomatoes x 7, Eggs x 3",
            userType: "User",
            status: "Cancelled",
        },
        {
            id: "ORD-1010",
            customer: "Funke Oladimeji",
            phone: "+234 815 012 3456",
            date: "19/06/2025 - 2:15PM",
            type: "Pick Up",
            address: "",
            items: "Red Bell Pepper x 2, Yellow Bell Pepper x 2, Carolina Pepper x 1",
            userType: "Guest",
            status: "Completed",
        },
        {
            id: "ORD-1011",
            customer: "Daniel Opara",
            phone: "+234 816 123 4567",
            date: "19/06/2025 - 10:05AM",
            type: "Delivery",
            address: "3, Ring Road, Lekki",
            items: "Eggs x 1, Green Bell Pepper x 5, Habanero Pepper x 2",
            userType: "Guest",
            status: "Cancelled",
        },
        {
            id: "ORD-1012",
            customer: "Amina Zubair",
            phone: "+234 817 234 5678",
            date: "19/06/2025 - 6:25PM",
            type: "Delivery",
            address: "45, Garki II, Abuja",
            items: "Pepper x 6, Lettuce x 2.5, Red Bell Pepper x 6",
            userType: "User",
            status: "Completed",
        },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case "Completed":
                return "bg-green-100 text-green-800 border-green-200 shrink-0";
            case "In Progress":
                return "bg-orange-100 text-orange-800 border-orange-200 shrink-0";
            case "Cancelled":
                return "bg-red-100 text-red-800 border-red-200 shrink-0";
            default:
                return "bg-gray-100 text-gray-800 border-gray-200 shrink-0";
        }
    };

    const getUserTypeColor = (type) => {
        return type === "User"
            ? "bg-blue-100 text-blue-800"
            : "bg-gray-100 text-gray-800";
    };

    const filteredOrders = orders.filter(
        (order) =>
            order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.phone.includes(searchTerm)
    );

    const TrendChart = ({ trend }) => (
        <div className="w-16 h-8 flex items-center justify-center">
            {trend === "up" ? (
                <svg
                    width="32"
                    height="16"
                    viewBox="0 0 32 16"
                    className="text-green-500"
                >
                    <path
                        d="M2 14 L8 8 L14 10 L20 6 L26 2 L30 4"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                    />
                </svg>
            ) : (
                <svg
                    width="32"
                    height="16"
                    viewBox="0 0 32 16"
                    className="text-red-500"
                >
                    <path
                        d="M2 2 L8 8 L14 6 L20 10 L26 14 L30 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                    />
                </svg>
            )}
        </div>
    );

    return (
        <>
            <PageBreadcrumb pageTitle="Orders" />
            <div className="p-6 relative  min-h-screen">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg p-6  border border-gray-200"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-sm font-medium text-gray-600 mb-1">
                                        {stat.title}
                                    </h3>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-2xl font-bold text-gray-900">
                                            {stat.value}
                                        </span>
                                        <span
                                            className={`text-sm font-medium ${
                                                stat.trend === "up"
                                                    ? "text-green-600"
                                                    : "text-red-600"
                                            }`}
                                        >
                                            {stat.change}
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-500">
                                        {stat.subtitle}
                                    </p>
                                </div>
                                <TrendChart trend={stat.trend} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Order List */}
                <div className="bg-white rounded-lg  border border-gray-200">
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold text-gray-900">
                                Order List
                            </h2>
                            <div className="flex gap-3">
                                <div className="relative">
                                    <button
                                        onClick={() =>
                                            setFilterOpen(!filterOpen)
                                        }
                                        className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                                    >
                                        <Filter className="w-4 h-4" />
                                        Filter
                                    </button>
                                </div>
                                <div className="relative">
                                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        value={searchTerm}
                                        onChange={(e) =>
                                            setSearchTerm(e.target.value)
                                        }
                                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="text-left py-3 px-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Order ID
                                    </th>
                                    <th className="text-left py-3 px-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Customer Name
                                    </th>
                                    <th className="text-left py-3 px-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Phone Number
                                    </th>
                                    <th className="text-left py-3 px-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Date & Time
                                    </th>
                                    <th className="text-left py-3 px-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Delivery Type
                                    </th>
                                    <th className="text-left py-3 px-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Delivery Address
                                    </th>

                                    <th className="text-left py-3 px-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        User Type
                                    </th>
                                    <th className="text-left py-3 px-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="text-left py-3 px-2 text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredOrders.map((order) => (
                                    <tr
                                        key={order.id}
                                        className="hover:bg-gray-50"
                                    >
                                        <td className="py-4 px-2 text-sm font-medium text-gray-900">
                                            {order.id}
                                        </td>
                                        <td className="py-4 px-2 text-sm text-gray-900">
                                            {order.customer}
                                        </td>
                                        <td className="py-4 px-2 text-sm text-gray-900">
                                            {order.phone}
                                        </td>
                                        <td className="py-4 px-2 text-sm text-gray-900">
                                            {order.date}
                                        </td>
                                        <td className="py-4 px-2 text-sm text-gray-900">
                                            {order.type}
                                        </td>
                                        <td className="py-4 px-2 text-sm text-gray-900">
                                            {order.address || "-"}
                                        </td>

                                        <td className="py-4 px-2">
                                            <span
                                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getUserTypeColor(
                                                    order.userType
                                                )}`}
                                            >
                                                {order.userType}
                                            </span>
                                        </td>
                                        <td className="py-4 px-2">
                                            <span
                                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(
                                                    order.status
                                                )}`}
                                            >
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="py-4 px-2">
                                            <button className="text-gray-400 hover:text-gray-600">
                                                <MoreHorizontal
                                                    className="w-4 h-4"
                                                    onClick={() =>
                                                        setOrderInfo("jljhlj")
                                                    }
                                                />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {orderInfo && (
                    <>
                        <div className="fixed z-[1000000] top-0 left-0 w-full h-full bg-black opacity-45"></div>
                        <div
                            ref={orderInfoRef}
                            className="fixed z-[1000010] top-0 right-0 w-[370px] h-full bg-white overflow-auto p-3"
                        >
                            <OrderDetails />
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default OrderDashboard;
