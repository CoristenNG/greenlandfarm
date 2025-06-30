import React from 'react';
import { Package, Clock, CheckCircle, Truck, Home } from 'lucide-react';

const OrderTrackingPage = () => {
  const orderSummary = {
    totalItems: 4,
    discount: '₦ 0.00',
    shippingFee: '₦ 2,000.00',
    subTotal: '₦ 78,270.34',
    total: '₦ 78,270.34',
    orderDate: '10/06/2023',
    orderTime: '06:00AM',
    expectedDelivery: '16/06/2023 — 17/06/2023'
  };

  const trackingSteps = [
    {
      title: 'Order Placed',
      description: 'Your order has been placed successfully',
      time: '02:15 PM',
      date: 'Jun 10',
      status: 'completed',
      icon: CheckCircle
    },
    {
      title: 'Payment Confirmed',
      description: 'Your payment has been received and confirmed',
      time: '02:15 PM',
      date: 'Jun 10',
      status: 'completed',
      icon: CheckCircle
    },
    {
      title: 'Order Packed',
      description: 'Your order has been packed and ready for pickup',
      time: '12:23 PM',
      date: 'Jun 11',
      status: 'current',
      icon: Package
    },
    {
      title: 'Out for Delivery',
      description: 'Your package has been sent from our store to you',
      time: '03:12 AM',
      date: 'Jun 12',
      status: 'pending',
      icon: Truck
    },
    {
      title: 'Package Received',
      description: 'Customer received the order',
      time: '-',
      date: '-',
      status: 'pending',
      icon: Home
    },
    {
      title: 'Don\'t forget to rate',
      description: 'Rate us successfully and let us know',
      time: '-',
      date: '-',
      status: 'pending',
      icon: Clock
    }
  ];

  const getStepClasses = (status) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-100';
      case 'current':
        return 'text-blue-600 bg-blue-100';
      default:
        return 'text-gray-400 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen py-8 px-3">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg  p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total number of items</span>
                  <span className="text-gray-900 font-medium">{orderSummary.totalItems}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Discount</span>
                  <span className="text-gray-900 font-medium">{orderSummary.discount}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping Fee</span>
                  <span className="text-gray-900 font-medium">{orderSummary.shippingFee}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Sub - Total</span>
                  <span className="text-gray-900 font-medium">{orderSummary.subTotal}</span>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-gray-900 font-semibold">Total</span>
                    <span className="text-gray-900 font-bold text-lg">{orderSummary.total}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Order Date</span>
                  <span className="text-gray-900 font-medium">{orderSummary.orderDate}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Order Time</span>
                  <span className="text-gray-900 font-medium">{orderSummary.orderTime}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Expected Delivery</span>
                  <span className="text-gray-900 font-medium text-sm">{orderSummary.expectedDelivery}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Track Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg  p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-8">Track Details</h2>
              
              <div className="relative">
                {trackingSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  const isLast = index === trackingSteps.length - 1;
                  
                  return (
                    <div key={index} className="relative flex items-start pb-8">
                      {/* Vertical Line */}
                      {!isLast && (
                        <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-200"></div>
                      )}
                      
                      {/* Icon */}
                      <div className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full ${getStepClasses(step.status)}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      
                      {/* Content */}
                      <div className="ml-6 flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h3 className={`text-base font-medium ${
                              step.status === 'current' ? 'text-blue-600' : 
                              step.status === 'completed' ? 'text-gray-900' : 'text-gray-400'
                            }`}>
                              {step.title}
                            </h3>
                            <p className={`mt-1 text-sm ${
                              step.status === 'current' ? 'text-blue-500' :
                              step.status === 'completed' ? 'text-gray-600' : 'text-gray-400'
                            }`}>
                              {step.description}
                            </p>
                          </div>
                          
                          {/* Time and Date */}
                          <div className="text-right ml-4">
                            <div className={`text-sm font-medium ${
                              step.status === 'current' ? 'text-blue-600' :
                              step.status === 'completed' ? 'text-gray-900' : 'text-gray-400'
                            }`}>
                              {step.time}
                            </div>
                            <div className={`text-xs mt-1 ${
                              step.status === 'current' ? 'text-blue-500' :
                              step.status === 'completed' ? 'text-gray-600' : 'text-gray-400'
                            }`}>
                              {step.date}
                            </div>
                          </div>
                        </div>
                        
                        {/* Special styling for current step */}
                        {step.status === 'current' && (
                          <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-md">
                            <div className="text-sm text-blue-700 font-medium">
                              Current Status: {step.title}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Action Button */}
        <div className="mt-8 lg:hidden">
          <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors">
            Track Your Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderTrackingPage;