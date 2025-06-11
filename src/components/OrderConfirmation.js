import React from "react";
import "../styles/Cart.css";
import Confirm from "../assets/confirm.png";
import { Plane, Check } from 'lucide-react';

const OrderConfirmation = ({ customerName, orderNumber, onViewOrder }) => {
  return (
    <div className="confirmation-container">
      <div className="confirmation-card">
        <img src={Confirm} alt="confirm" className="confirm-badge" />
        <div className="confirmation-header">
          <h1>Thank you for your order, {customerName}!</h1>
          <p className="confirmation-message">
            Your order has been successfully placed. We're getting it ready for dispatch and will notify <br></br>
            you once it's on the way.
          </p>
          <p className="forward-message">
            Sending this to someone else? Forward the 4-digit code below <br></br>so they can receive the package on your behalf.
          </p>
        </div>

<div className="order-timeline">
  <h2>Order Timeline</h2>
  <div className="timeline-steps">
    <div className="timeline-step active first-step">
      <div className="step-date">May 20</div>
      <div className="step-indicator">
        <Plane size={18} />
      </div>
      <div className="step-details">
        <div className="step-title">Order Placed</div>
      </div>
    </div>
    <div className="timeline-step active">
      <div className="step-indicator">
        <Check size={18} />
      </div>
      <div className="step-details">
        <div className="step-title">Processing</div>
      </div>
    </div>
    <div className="timeline-step active">
      <div className="step-indicator">
        <Check size={18} />
      </div>
      <div className="step-details">
        <div className="step-title">Shipped</div>
      </div>
    </div>
    <div className="timeline-step active">
      <div className="step-indicator">
        <Check size={18} />
      </div>
      <div className="step-details">
        <div className="step-title">Out for Delivery</div>
      </div>
    </div>
    <div className="timeline-step">
      <div className="step-indicator"></div>
      <div className="step-details">
        <div className="step-title">Delivered</div>
      </div>
    </div>
  </div>
</div>

        <button onClick={onViewOrder} className="view-order-button">
          Open Order Page
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;