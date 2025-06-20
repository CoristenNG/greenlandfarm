import React, { useState } from 'react';
import "../../styles/order.css";
import { Package, MapPin, Settings, LogOut, ChevronDown, ChevronRight } from 'lucide-react';

const OrdersPage = () => {
  const [selectedSection, setSelectedSection] = useState('Processing & Completed Orders');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const orders = [
    {
      id: 'ORD-250615-0012',
      items: 'Tomatoes, Eggs, Bell Pepper and More...',
      price: '₦ 76,270.34',
      status: 'In Progress',
      image: '/api/placeholder/50/50',
      color: 'orange'
    },
    {
      id: 'ORD-250615-0012',
      items: 'Tomatoes, Eggs, Bell Pepper and More...',
      price: '₦ 76,270.34',
      status: 'Delivered',
      image: '/api/placeholder/50/50',
      color: 'green'
    },
    {
      id: 'ORD-250615-0012',
      items: 'Tomatoes, Eggs, Bell Pepper and More...',
      price: '₦ 76,270.34',
      status: 'Delivered',
      image: '/api/placeholder/50/50',
      color: 'green'
    },
    {
      id: 'ORD-250615-0012',
      items: 'Tomatoes, Eggs, Bell Pepper and More...',
      price: '₦ 76,270.34',
      status: 'Delivered',
      image: '/api/placeholder/50/50',
      color: 'green'
    }
  ];

  const sidebarItems = [
    { icon: Package, label: 'My Orders', active: true },
    { icon: MapPin, label: 'Shipping Address', active: false },
    { icon: Settings, label: 'Settings', active: false },
    { icon: LogOut, label: 'Logout', active: false }
  ];

  const getStatusBadge = (status, color) => {
    const baseClasses = "px-3 py-1 rounded-full text-xs font-medium";
    const colorClasses = color === 'orange' 
      ? "bg-orange-100 text-orange-600" 
      : "bg-green-100 text-green-600";
    
    return `${baseClasses} ${colorClasses}`;
  };

  return (
    <div className="orders-page">
      {/* Header */}
      <header className="header">
        <div className="breadcrumb">
          <span>Home</span>
          <span>My Account</span>
          <span className="active">My Orders</span>
        </div>
      </header>

      <div className="main-container">
        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Package size={20} />
          Menu
        </button>

        {/* Sidebar */}
        <aside className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
          <nav className="sidebar-nav">
            {sidebarItems.map((item, index) => (
              <a 
                key={index}
                href="#" 
                className={`sidebar-item ${item.active ? 'active' : ''}`}
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
        </aside>

        {/* Main Content */}
        <main className="main-content">
          {/* Processing & Completed Orders Section */}
          <div className="orders-section">
            <div className="section-header">
              <h2>Processing & Completed Orders</h2>
              <ChevronDown size={20} />
            </div>
            
            <div className="orders-list">
              {orders.map((order, index) => (
                <div key={index} className="order-card">
                  <div className="order-image">
                    <div className="placeholder-image">
                      <Package size={24} className="text-gray-400" />
                    </div>
                  </div>
                  
                  <div className="order-details">
                    <div className="order-id">Order ID: {order.id}</div>
                    <div className="order-items">{order.items}</div>
                    <div className="order-price">{order.price}</div>
                  </div>
                  
                  <div className="order-status">
                    <span className={getStatusBadge(order.status, order.color)}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="view-more">
              <a href="#">View More →</a>
            </div>
          </div>

          {/* Cancelled Orders Section */}
          <div className="orders-section">
            <div className="section-header">
              <h2>Cancelled Orders</h2>
              <ChevronRight size={20} />
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="sidebar-overlay"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default OrdersPage;