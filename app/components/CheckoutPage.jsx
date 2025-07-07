import React, { useState } from "react";
import "../styles/CheckoutPage.css";
import OrderConfirmation from "./OrderConfirmation";
import { Box } from "lucide-react";
import Visa from "../assets/visa.png";
import Master from "../assets/master.png";
import PayPal from "../assets/paypal.png";

const CheckoutPage = ({ total, shippingAddress, onBackToCart }) => {
    const [paymentMethod, setPaymentMethod] = useState("bank");
    const [orderConfirmed, setOrderConfirmed] = useState(false);

    const handlePayment = () => {
        setOrderConfirmed(true);
    };

    if (orderConfirmed) {
        return (
            <OrderConfirmation
                customerName={shippingAddress.name.split(" ")[0]} // Get first name
                orderNumber={`#${Math.floor(100000 + Math.random() * 900000)}`}
                onViewOrder={() => {
                    // Handle view order action
                    console.log("View order details");
                }}
            />
        );
    }

    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <h1>Checkout</h1>
                <button onClick={onBackToCart} className="back-button">
                    Back to Cart
                </button>
            </div>

            <div className="checkout-columns">
                {/* Left Column - Shipping Address */}
                <div className="checkout-left-column">
                    <div className="checkout-section">
                        <h2>Shipping Address</h2>

                        <div className="delivery-address-section">
                            <h3>Delivery Address</h3>
                            <div className="address-display">
                                <div>
                                    <p>
                                        <strong>{shippingAddress.name}</strong>
                                    </p>
                                    <p>{shippingAddress.address}</p>
                                    <p>{shippingAddress.code}</p>
                                </div>

                                <div>
                                    <button className="change-button">
                                        Change
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="delivery-details-section">
                            <h3>Delivery or Pickup Details</h3>
                            <div className="delivery-option">
                                <div>
                                    <p>
                                        <strong>Delivery</strong>
                                    </p>
                                    <p>
                                        The order is delivered to your location
                                        across Nigeria but prices may differ due
                                        to location.
                                    </p>
                                </div>
                                <div>
                                    <button className="change-button">
                                        Change
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="optional-address-section">
                            <h3>Delivery Address (Optional)</h3>
                            <textarea placeholder="Notes about your order e.g special areas for delivery."></textarea>
                        </div>

                        <div className="payment-method-section">
                            <h3>Payment Method</h3>
                            <div className="payment-option">
                                <input
                                    type="radio"
                                    id="bank"
                                    name="payment"
                                    checked={paymentMethod === "bank"}
                                    onChange={() => setPaymentMethod("bank")}
                                />
                                <label htmlFor="bank">
                                    Pay with Bank transfer and Debit Cards
                                </label>
                                <div className="payment-logo">
                                    <img src={Visa} alt="visa" />
                                    <img src={Master} alt="master" />
                                </div>
                            </div>

                            <div className="payment-option">
                                <input
                                    type="radio"
                                    id="opay"
                                    name="payment"
                                    checked={paymentMethod === "opay"}
                                    onChange={() => setPaymentMethod("opay")}
                                />
                                <label htmlFor="opay">Pay with Opay</label>
                                <div className="payment-logo">
                                    <img src={PayPal} alt="paypal" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Order Summary */}
                <div className="checkout-right-column">
                    <div className="checkout-section">
                        <h2>Order Summary</h2>

                        <div className="order-total">
                            <div className="total-row">
                                <span>Items Total</span>
                                <span>
                                    ₦{" "}
                                    {total.toLocaleString("en-NG", {
                                        minimumFractionDigits: 2,
                                    })}
                                </span>
                            </div>
                            <div className="total-row">
                                <span>Discount</span>
                                <span>₦ 0.00</span>
                            </div>
                            <div className="total-row">
                                <span>Shipping Fee</span>
                                <span>₦ 0.00</span>
                            </div>
                            <div className="total-row">
                                <span>Sub - Total</span>
                                <span>
                                    ₦{" "}
                                    {total.toLocaleString("en-NG", {
                                        minimumFractionDigits: 2,
                                    })}
                                </span>
                            </div>
                            <div className="grand-total-row">
                                <span>Total</span>
                                <span>
                                    ₦{" "}
                                    {total.toLocaleString("en-NG", {
                                        minimumFractionDigits: 2,
                                    })}
                                </span>
                            </div>
                        </div>

                        <button
                            className="pay-now-button"
                            onClick={handlePayment}
                        >
                            Proceed to Pay
                        </button>

                        <div className="bulk-order-inform">
                            <div className="info-header">
                                <div className="info-icon">
                                    <Box size={30} />
                                </div>
                                <span>Need Large Quantities?</span>
                            </div>
                            <p className="info-text">
                                For wholesale or bulk orders, kindly
                                <span className="highlight-text">
                                    {" "}
                                    contact us
                                </span>{" "}
                                directly or call
                                <span className="highlight-text">
                                    {" "}
                                    +234 (913) 443 4790
                                </span>{" "}
                                for customized pricing and delivery
                                arrangements.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
