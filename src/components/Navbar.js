import React, { useState } from "react";
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
        <div className="container">
          {/* This can contain promotional text, contact info, etc. */}
        </div>
      </div>

      {/* Main Navigation Section */}
      <div className="main-nav-bar">
        <div className="container">
          <div className="nav-content">
            {/* Logo */}
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
              <button className="action-btn">
                <ShoppingCart size={18} />
                <span className="action-text">Cart</span>
              </button>
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

      <style jsx>{`
        .navbar-container {
          width: 100%;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            sans-serif;
        }

        /* Top Green Header Bar */
        .top-header-bar {
          background: #2c4802;
          height: 40px;
          width: 100%;
        }

        /* Main Navigation Bar */
        .main-nav-bar {
          background: white;
          border-bottom: 1px solid #e5e5e5;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
          gap: 2rem;
        }

        .logo {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .logo-image {
          height: 45px;
          width: auto;
          object-fit: contain;
        }

        .desktop-nav {
          display: flex;
          gap: 2rem;
          flex: 1;
          justify-content: center;
        }

        .nav-link {
          color: #333;
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 0;
          transition: color 0.3s ease;
          white-space: nowrap;
        }

        .nav-link:hover {
          color: #2c4802;
        }

        .search-container {
          flex: 0 0 150px;
          margin-right: 50px;
        }

        .search-wrapper {
          position: relative;
          width: 100%;
        }

        .search-input {
          width: 100%;
          max-width: 300px;
          padding: 0.65rem 0.9rem;
          padding-right: 3rem;
          border: 2px solid #e5e5e5;
          border-radius: 25px;
          font-size: 0.9rem;
          outline: none;
          background: white;
          color: #333;
          transition: border-color 0.3s ease;
        }

        .search-input:focus {
          border-color: #2c4802;
        }

        .search-input::placeholder {
          color: #999;
        }

        .search-icon {
          position: absolute;
          right: -2.5rem;
          top: 50%;
          transform: translateY(-50%);
          color: #666;
        }

        .user-actions {
          display: flex;
          gap: 1rem;
          flex-shrink: 0;
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: none;
          color: #333;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 6px;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .action-btn:hover {
          background: #f5f5f5;
          color: #2c4802;
        }

        .action-text {
          font-size: 0.9rem;
          font-weight: 500;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: #333;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 6px;
        }

        .mobile-menu {
          display: none;
          background: white;
          border-top: 1px solid #eee;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .mobile-menu-content {
          padding: 1rem;
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .mobile-nav-link {
          color: #333;
          text-decoration: none;
          padding: 0.75rem;
          border-radius: 6px;
          font-weight: 500;
          transition: background-color 0.3s ease;
        }

        .mobile-nav-link:hover {
          background: #f5f5f5;
          color: #2c4802;
        }

        .mobile-search {
          margin: 1rem 0;
        }

        .mobile-search .search-wrapper {
          width: 100%;
        }

        .mobile-search .search-input {
          width: 100%;
          padding: 0.6rem 1rem;
          font-size: 14px;
          height: 40px;
        }

        .mobile-search .search-icon {
          right: 1rem;
          pointer-events: none;
        }

        .mobile-actions {
          display: flex;
          gap: 0.5rem;
        }

        .mobile-action-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: 1px solid #ddd;
          color: #333;
          cursor: pointer;
          padding: 0.75rem 1rem;
          border-radius: 6px;
          flex: 1;
          justify-content: center;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .mobile-action-btn:hover {
          background: #f5f5f5;
          border-color: #2c4802;
          color: #2c4802;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .search-container {
            flex: 0 0 250px;
          }

          .desktop-nav {
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .desktop-nav,
          .search-container,
          .user-actions {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .mobile-menu {
            display: block;
          }

          .nav-content {
            height: 60px;
            gap: 1rem;
          }

          .logo-image {
            height: 40px;
          }

          .container {
            padding: 0 0.75rem;
          }

          .top-header-bar {
            height: 30px;
          }
          .search-input {
            font-size: 0.85rem;
            padding: 0.55rem 0.9rem;
            padding-right: 2.5rem;
            height: 38px;
            border-radius: 20px;
          }
        }

        @media (max-width: 480px) {
          .logo-image {
            height: 35px;
          }

          .logo-icon {
            width: 35px;
            height: 35px;
          }

          .house-icon {
            font-size: 18px;
          }

          .mobile-actions {
            flex-direction: column;
          }

          .container {
            padding: 0 0.5rem;
          }

          .top-header-bar {
            height: 25px;
          }
          .search-input {
            font-size: 0.8rem;
            padding: 0.5rem 0.8rem;
            padding-right: 2.2rem;
            height: 36px;
            border-radius: 18px;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
