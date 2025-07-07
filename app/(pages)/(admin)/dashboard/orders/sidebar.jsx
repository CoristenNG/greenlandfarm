import React from "react";
import { X, User, Phone, MapPin, Truck } from "lucide-react";

export const OrderDetails = () => {
    return (
        <div className="max-w-md mx-auto bg-white min-h-screen">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
                <h1 className="text-lg font-semibold">Order Details</h1>
                <button className="p-1">
                    <X className="w-5 h-5 text-gray-600" />
                </button>
            </div>

            {/* Order Info */}
            <div className="px-4 py-3 border-b">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm text-gray-600">Placed on</p>
                        <p className="font-medium">Today, 06:04</p>
                    </div>
                    <div className="text-right">
                        <p className="text-sm text-gray-600">Order ID</p>
                        <p className="font-medium">ORD-4382</p>
                    </div>
                </div>
            </div>

            {/* Customer Details */}
            <div className="px-4 py-4 border-b">
                <h2 className="font-medium mb-3">Customer's Details</h2>

                <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <User className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                        <p className="font-medium">Adenrele Folakemi Teini</p>
                        <p className="text-sm text-gray-600">
                            adenrele@gmail.com
                        </p>
                    </div>
                </div>

                <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <Phone className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">Guest</p>
                        <p className="font-medium">+234 907 234 509</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <MapPin className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                        <p className="font-medium">
                            12, Dosunmu Street, Ikeja-Lagos
                        </p>
                    </div>
                </div>
            </div>

            {/* Delivery */}
            <div className="px-4 py-4 border-b">
                <div className="flex items-center">
                    <Truck className="w-5 h-5 text-gray-600 mr-2" />
                    <span className="text-gray-700">Delivery</span>
                </div>
            </div>

            {/* Product Lists */}
            <div className="px-4 py-4 border-b">
                <h2 className="font-medium mb-4">Product Lists</h2>

                {/* Product 1 */}
                <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg mr-3 flex items-center justify-center">
                        <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                        <p className="font-medium">Fresh Bell Bell Peppers</p>
                        <p className="text-sm text-gray-600">Qty: 2</p>
                    </div>
                </div>

                {/* Product 2 */}
                <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg mr-3 flex items-center justify-center">
                        <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                        <p className="font-medium">Parmo-Colos Chicken Spice</p>
                        <p className="text-sm text-gray-600">Qty: 1</p>
                    </div>
                </div>

                {/* Product 3 */}
                <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg mr-3 flex items-center justify-center">
                        <div className="w-8 h-8 bg-red-600 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                        <p className="font-medium">
                            Ata Rodo - Habanero Peppers
                        </p>
                        <p className="text-sm text-gray-600">Qty: 1</p>
                    </div>
                </div>

                {/* Product 4 */}
                <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg mr-3 flex items-center justify-center">
                        <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                        <p className="font-medium">
                            Organic Greenhouse Tomatoes
                        </p>
                        <p className="text-sm text-gray-600">Qty: 1</p>
                    </div>
                </div>
            </div>

            {/* Payment Summary */}
            <div className="px-4 py-4 border-b">
                <h2 className="font-medium mb-4">Payment Summary</h2>

                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-medium">₦ 5,000</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Shipping Fee</span>
                        <span className="font-medium">₦ 2,000.00</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Sub - Total</span>
                        <span className="font-medium">₦ 7,000.00</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                        <span>Total</span>
                        <span>₦ 7,000.34</span>
                    </div>
                </div>
            </div>

            {/* Payment Method */}
            <div className="px-4 py-4 border-b">
                <p className="text-sm text-gray-600 mb-2">PAYMENT METHOD</p>
                <p className="font-medium">Bank transfer</p>
            </div>

            {/* Action Buttons */}
            <div className="px-4 py-4 space-y-3">
                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                    Update Status
                </button>
                <button className="w-full bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition-colors">
                    Cancel Order
                </button>
            </div>
        </div>
    );
}
