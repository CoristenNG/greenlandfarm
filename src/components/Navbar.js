import React, { useState } from "react";
import "../styles/Navbar.css";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import Logo from "../assets/urbanLogo.png";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar-container">
      {/* Top Green Header Bar */}
      <div className="top-header-bar">
        <div className="container"></div>
      </div>

      {/* Main Navigation Section */}
      <div className="main-nav-bar">
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <img src={Logo} alt="Urban Lagos Logo" className="logo-image" />
            </div>

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/shop" className="nav-link">
                Shop
              </Link>
              <Link to="/track" className="nav-link">
                Track
              </Link>
              <Link to="/about" className="nav-link">
                About Us
              </Link>
              <Link to="/contact" className="nav-link">
                Contact Us
              </Link>
            </nav>

            {/* Search Bar */}
            <div className="search-container">
              <div className="search-wrapper">
                <input
                  type="text"
                  placeholder="Search Product"
                  className="search-input"
                />
                <Search className="search-icon" size={18} />
              </div>
            </div>

            {/* Account & Cart */}
            <div className="user-actions">
              <button className="action-btn">
                <User size={18} />
                <span className="action-text">Account</span>
              </button>
              <Link to="/cart" className="action-btn">
                <ShoppingCart size={18} />
                <span className="action-text">Cart</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            <nav className="mobile-nav">
              <Link to="/" className="mobile-nav-link">
                Home
              </Link>
              <Link to="/shop" className="mobile-nav-link">
                Shop
              </Link>
              <Link to="/track" className="mobile-nav-link">
                Track
              </Link>
              <Link to="/about" className="mobile-nav-link">
                About Us
              </Link>
              <Link to="/contact" className="mobile-nav-link">
                Contact Us
              </Link>
            </nav>

            <div className="mobile-search">
              <div className="search-wrapper">
                <input
                  type="text"
                  placeholder="Search Product"
                  className="search-input"
                />
                <Search className="search-icon" size={18} />
              </div>
            </div>

            <div className="mobile-actions">
              <button className="mobile-action-btn">
                <User size={18} />
                <span>Account</span>
              </button>
              <button className="mobile-action-btn">
                <ShoppingCart size={18} />
                <span>Cart</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
