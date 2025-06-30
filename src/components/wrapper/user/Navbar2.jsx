import React, { useState } from "react";
import {
    Search,
    User,
    ShoppingCart,
    Menu,
    X,
    MapPin,
    Phone,
    Facebook,
    Twitter,
    Instagram,
    MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar2() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="sticky -top-px z-50">
            {/* Top Bar */}
            <div className="bg-[#2C4802] text-[#85AE48] px-4 py-2">
                <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
                    {/* Social Icons */}
                    <div className="flex items-center space-x-3">
                        <Facebook className="w-4 h-4 hover:text-green-200 cursor-pointer" />
                        <Twitter className="w-4 h-4 hover:text-green-200 cursor-pointer" />
                        <Instagram className="w-4 h-4 hover:text-green-200 cursor-pointer" />
                        <MessageCircle className="w-4 h-4 hover:text-green-200 cursor-pointer" />
                    </div>

                    {/* Contact Info */}
                    <div className="hidden md:flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>Store Location</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4" />
                            <span>+234 (901) 234 5678</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="bg-white shadow-sm ">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <img
                                src="/images/urbanLogo.png"
                                className=" w-36 md:w-44"
                            />
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-6">
                            <a
                                href="/"
                                className="text-gray-700 hover:text-green-600 font-normal text-sm"
                            >
                                Home
                            </a>
                            <a
                                href="/shop"
                                className="text-gray-700 hover:text-green-600 font-normal text-sm"
                            >
                                Shop
                            </a>
                            <a
                                href="/about-us"
                                className="text-gray-700 hover:text-green-600 font-normal text-sm"
                            >
                                About Us
                            </a>
                            <a
                                href="/contact-us"
                                className="text-gray-700 hover:text-green-600 font-normal text-sm"
                            >
                                Contact Us
                            </a>
                        </div>

                        {/* Search Bar - Desktop */}
                        <div className="hidden md:flex items-center h-10 flex-1 max-w-sm mx-8 bg-gray-100 rounded-md">
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    placeholder="Search Product"
                                    className="w-full pl-4 pr-10 py-2.5 text-xs rounded-lg focus:outline-none focus:ring-2 focus:ring-green-100 focus:border-transparent"
                                />
                                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                            </div>
                        </div>

                        {/* Right Side Icons */}
                        <div className="flex items-center space-x-4">
                            {/* Search Icon - Mobile */}
                            <button className="md:hidden p-2 text-gray-600 hover:text-green-600">
                                <Search className="w-5 h-5" />
                            </button>

                            {/* Account */}
                            <Link
                                to="/settings"
                                className="flex items-center space-x-1 text-gray-600 hover:text-green-600"
                            >
                                <User className="w-5 h-5" />
                                <span className="hidden sm:inline text-sm font-medium">
                                    Account
                                </span>
                            </Link>

                            {/* Cart */}
                            <Link
                                to="/cart"
                                className="flex items-center space-x-1 text-gray-600 hover:text-green-600 relative"
                            >
                                <ShoppingCart className="w-5 h-5" />
                                <span className="hidden sm:inline text-sm font-medium">
                                    Cart
                                </span>
                                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    0
                                </span>
                            </Link>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={toggleMenu}
                                className="lg:hidden p-2 text-gray-600 hover:text-green-600"
                            >
                                {isMenuOpen ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Search Bar */}
                    <div className="md:hidden pb-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search Product"
                                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-white border-t border-gray-200">
                        <div className="px-4 py-2 space-y-1">
                            <a
                                href="/home"
                                className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md font-medium"
                            >
                                Home
                            </a>
                            <a
                                href="/shop"
                                className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md font-medium"
                            >
                                Shop
                            </a>

                            <a
                                href="/about-us"
                                className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md font-medium"
                            >
                                About Us
                            </a>
                            <a
                                href="/contact-us"
                                className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md font-medium"
                            >
                                Contact Us
                            </a>
                        </div>

                        {/* Mobile Contact Info */}
                        <div className="px-4 py-3 border-t border-gray-200 bg-gray-50">
                            <div className="space-y-2 text-sm">
                                <div className="flex items-center space-x-2 text-gray-600">
                                    <MapPin className="w-4 h-4" />
                                    <span>Store Location</span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-600">
                                    <Phone className="w-4 h-4" />
                                    <span>+234 (901) 234 5678</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
}
