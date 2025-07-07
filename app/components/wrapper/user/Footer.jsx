import React from "react";
import {
    Facebook,
    Instagram,
    Linkedin,
    PhoneCall,
    MapPin,
    Mail,
    Heart,
} from "lucide-react";
import "../../../styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            {/* Newsletter Section */}
            <div className="newsletter">
                <div className="newsletter-left">
                    <img
                        width={"auto"}
                        height={"auto"}
                        src={"/images/subMail.png"}
                        alt="Subscibe mail icon"
                        className="icon"
                    />
                    {/* <Mail className="icon" size={48} /> */}
                    <div>
                        <h3>Subscribe to our Newsletter</h3>
                        <p>
                            Want to know when our freshest produce, fish, and
                            fowl are available? <br /> Join our newsletter and
                            get exclusive access.
                        </p>
                    </div>
                </div>
                <div className="newsletter-right">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                    />
                    <button>Subscribe</button>
                </div>
            </div>

            {/* Footer Main Content */}
            <div className="footer-main">
                <div className="footer-column brand">
                    <img
                        src={"/images/urbanLogo.png"}
                        alt="Urban Lagos Logo"
                        className="logo"
                    />
                    <p>
                        Feeding Lagos and beyond with farm-fresh, responsibly{" "}
                        <br /> grown produce and ethically raised animals.
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

                <div className="footer-submain">
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
                                65, Fola Oshibo Street, Lekki Phase 1, Lagos
                                State, Nigeria
                            </li>
                            <li>
                                <PhoneCall size={16} className="contact-icon" />
                                +234 (913) 443 4790
                            </li>
                            <li>
                                <Mail size={16} className="contact-icon" />
                                urbanlagosfarms@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>
                    ©{new Date().getFullYear()} Urban Lagos Greenlandfarms Ltd.
                    All rights reserved.
                </p>
                <p>
                    Made with{" "}
                    <span className="heart">
                        <Heart className="heart-icon" size={16} />
                    </span>{" "}
                    in Nigeria | Powered by Nature & Tech
                </p>
            </div>
        </footer>
    );
};

export default Footer;
