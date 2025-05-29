import React from "react";
import { Facebook, Instagram, Linkedin, PhoneCall, MapPin, Mail } from "lucide-react";
import Logo from "../assets/urbanLogo.png"; 
import Sub from "../assets/subMail.png"; // Assuming you have a subscription icon

const Footer = () => {
  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="newsletter">
        <div className="newsletter-left">
          <img src={Sub} alt="Subscibe mail icon" className="icon" />
         {/* <Mail className="icon" size={48} /> */}
          <div>
            <h3>Subscribe to our Newsletter</h3>
            <p>
              Want to know when our freshest produce, fish, and fowl are
              available? <br /> Join our newsletter and get exclusive access.
            </p>
          </div>
        </div>
        <div className="newsletter-right">
          <input type="email" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>
      </div>

      {/* Footer Main Content */}
      <div className="footer-main">
        <div className="footer-column brand">
          <img
            src={Logo}
            alt="Urban Lagos Logo"
            className="logo"
          />
          <p>
            Feeding Lagos and beyond with farm-fresh, responsibly grown produce
            and ethically raised animals.
          </p>
          <div className="social-icons">
            <a href="#">
              <Facebook size={20} />
            </a>
            <a href="#">
              <Instagram size={20} />
            </a>
            <a href="#">
              <Linkedin size={20} />
            </a>
            <a href="#">
              <PhoneCall size={20} />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Explore</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Track Order</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Shop By Category</h4>
          <ul>
            <li>
              <a href="#">Crops</a>
            </li>
            <li>
              <a href="#">Vegetables</a>
            </li>
            <li>
              <a href="#">Fishes</a>
            </li>
            <li>
              <a href="#">Poultry</a>
            </li>
            <li>
              <a href="#">Animal Products</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Delivery Info</a>
            </li>
            <li>
              <a href="#">Returns Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Information</h4>
          <ul className="contact-info">
  <li>
    <MapPin size={16} className="contact-icon" /> 
    Elerangbe Epe, Lagos State, Nigeria
  </li>
  <li>
    <PhoneCall size={16} className="contact-icon" /> 
    +234 (801) 234 4567
  </li>
  <li>
    <Mail size={16} className="contact-icon" /> 
    hello@greenlandfarms.ng
  </li>
</ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 Urban Lagos Greenlandfarms Ltd. All rights reserved.</p>
        <p>
          Made with <span className="heart">💚</span> in Nigeria | Powered by
          Nature & Tech
        </p>
      </div>

      <style jsx>{`
        .footer {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            sans-serif;
          background-color: #f5f5f5;
          color: #333;
        }

        /* === Newsletter Section === */
        .newsletter {
          background-color: #282828;
          color: white;
          padding: 2rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 2rem;
          align-items: center;
          text-align: left;
        }

        .newsletter-left {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          flex: 1 1 300px;
        }

        .newsletter-left h3 {
          margin: 0;
          font-size: 1.25rem;
        }

        .newsletter-left p {
          margin: 0.25rem 0 0;
          font-size: 0.875rem;
          color: #d1d5db;
        }

        .newsletter-left .icon {
          color: #79A637;
          margin-top: 10px;
        }

        .newsletter-right {
          width: 100%;
          display: flex;
          gap: 0.5rem;
          flex: 1 1 300px;
          flex-wrap: wrap;
        }

        .newsletter-right input {
        width: 100%;
          // flex: 1;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 5px;
          outline: none;
          max-width: 200px;
          font-size: 16px; 
        }

        .newsletter-right button {
          background-color: #79A637;
          border: none;
          color: white;
          padding: 0.5rem 1.2rem;
          border-radius: 5px;
          cursor: pointer;
          transition: background 0.3s;
        }

        .newsletter-right button:hover {
          background-color: #4d7c0f;
        }

        /* === Footer Main Content === */
        .footer-main {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          padding: 3rem 2rem;
          background-color: #e5e7eb;
          text-align: left;
        }

        .footer-column h4 {
          font-size: 1rem;
          margin-bottom: 1rem;
          font-weight: bold;
          text-align: left;
        }

        .footer-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-column ul li {
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
          text-align: left;
        }

        .footer-column ul li a {
          color: #828282;
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-column ul li a:hover {
          color: #828282;
        }

        .brand img.logo {
          height: 40px;
          margin-bottom: 1rem;
        }

        .brand p {
          font-size: 0.875rem;
          color: #828282;
          margin-bottom: 1rem;
        }

        /* === Social Icons === */
        .social-icons {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .social-icons a {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #8b8b8b;
          border-radius: 50%;
          width: 34px;
          height: 34px;
          color: white;
          transition: background 0.3s, color 0.3s;
        }

        .social-icons a:hover {
          background-color: #65a30d;
          color: white;
        }

       .contact-info .contact-icon {
  margin-right: 0.5rem;
  color: #828282;
  vertical-align: middle;
}

.contact-info li{
color: #828282
}
        /* === Footer Bottom === */
        .footer-bottom {
          background-color: white;
          padding: 1rem 2rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 1rem;
          font-size: 0.875rem;
          color: #828282;
        }

        .footer-bottom .heart {
          color: #65a30d;
        }

        /* === Responsive Breakpoints === */
        @media (max-width: 768px) {
          .newsletter {
            padding: 2rem 1.5rem;
            flex-direction: column;
            align-items: flex-start;
          }

          .newsletter-right {
            flex-direction: column;
            width: 100%;
          }

          .newsletter-right input {
            min-width: 100%;
            padding: 0.75rem;
            font-size: 14px;
          }

          .newsletter-right button {
            padding: 0.75rem;
            font-size: 14px;
          }

          .footer-main {
            grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
            padding: 2rem 1.5rem;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            padding: 1rem 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .newsletter-left {
            flex-direction: column;
          }

          .newsletter-right input {
            padding: 0.5rem;
            font-size: 14px;
            height: 40px;
          }

          .newsletter-right button {
            padding: 0.5rem;
            font-size: 14px;
            height: 40px;
          }

          .footer-column h4 {
            font-size: 0.95rem;
          }

          .footer-column ul li {
            font-size: 0.85rem;
          }

          .social-icons a {
            width: 30px;
            height: 30px;
          }

          .brand img.logo {
            height: 32px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
