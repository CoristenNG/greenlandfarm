import React, { useState, useEffect } from "react";
import "../styles/Cart.css";
import { MapPinned, Plus, Minus, X, Trash2, Box } from "lucide-react";
import { useCart } from "../context/CartContext";
import CheckoutPage from "../components/CheckoutPage";

const Cart = () => {
  const { setCartItemCount, updateQuantity: updateCartQuantity } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);



  const [savedAddresses, setSavedAddresses] = useState([
    {
      id: 1,
      name: "Ayobami A.",
      address: "34a, Victoria Garden Estate, Lekki Phase 1, Lagos State",
      code: "101233",
      isSelected: true,
    },
  ]);

  const [shippingMode, setShippingMode] = useState("pickup");
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [newAddress, setNewAddress] = useState({
    name: "",
    address: "",
    code: "",
  });

  const [cartItems, setCartItems] = useState([]);
  const [itemsTotal, setItemsTotal] = useState(0);

  // Load cart items on component mount
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(items);
    calculateTotal(items);
  }, []);

  // Calculate totals whenever cart items change
  const calculateTotal = (items) => {
    const total = items.reduce((sum, item) => {
      const price = parseFloat(
        item.price.toString().replace("₦", "").replace(",", "")
      );
      return sum + price * item.quantity;
    }, 0);
    setItemsTotal(total);
  };

  const updateQuantity = (id, change) => {
    const updatedItems = cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change);
        return {
          ...item,
          quantity: newQuantity,
          totalPrice: parseFloat(item.price) * newQuantity
        };
      }
      return item;
    });

    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
    calculateTotal(updatedItems);
    updateCartQuantity(id, change); // Now this will be defined
  };

  const removeAllItems = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
    setItemsTotal(0);
    setCartItemCount(0); // Update the global cart count
  };

  const selectAddress = (id) => {
    setSavedAddresses((addresses) =>
      addresses.map((addr) => ({
        ...addr,
        isSelected: addr.id === id,
      }))
    );
  };

  const handleAddNewAddress = () => {
    if (newAddress.name && newAddress.address && newAddress.code) {
      const newAddr = {
        id: Date.now(),
        name: newAddress.name,
        address: newAddress.address,
        code: newAddress.code,
        isSelected: false,
      };
      setSavedAddresses([...savedAddresses, newAddr]);
      setNewAddress({ name: "", address: "", code: "" });
      setShowAddressForm(false);
    }
  };

  // Add this function to get the selected address
  const getSelectedAddress = () => {
    return savedAddresses.find(addr => addr.isSelected) || savedAddresses[0];
  };

  const applyCoupon = () => {
    console.log("Apply coupon:", couponCode);
  };

  const discount = 0;
  const shippingFee = shippingMode === "delivery" ? 1000 : 0;
  const total = itemsTotal - discount + shippingFee;

  return (
    <div className="cart-container">
      {showCheckout ? (
        <CheckoutPage
          cartItems={cartItems}
          total={total}
          shippingAddress={getSelectedAddress()}
          onBackToCart={() => setShowCheckout(false)}
        />
      ) : (
        <>
          {/* Header */}
          <div className="cart-header">
            <h1>Cart</h1>
          </div>

          <div className="cart-content">
            {/* Left Column */}
            <div className="cart-left-column">
              {/* Shipping Address Section */}
              <div className="shipping-section">
                <h2>Shipping Address</h2>

                {savedAddresses.length === 0 ? (
                  <div className="no-address-message">
                    <MapPinned size={40} color="#ccc" className="map-icon" />
                    <p>No address saved</p>
                    <p className="address-subtext">
                      Add an address so we can show you exact costs and delivery
                    </p>
                    <button
                      onClick={() => setShowAddressForm(true)}
                      className="add-location-button"
                    >
                      Add new locations
                    </button>
                  </div>
                ) : (
                  <div className="saved-addresses">
                    <h3>Saved Address</h3>
                    {savedAddresses.map((address) => (
                      <div
                        key={address.id}
                        onClick={() => selectAddress(address.id)}
                        className={`address-card ${address.isSelected ? "selected" : ""
                          }`}
                      >
                        {address.isSelected && (
                          <div className="address-selected-indicator" />
                        )}
                        <div className="address-details">
                          <div className="address-name">{address.name}</div>
                          <div className="address-text">{address.address}</div>
                          <div className="address-text">{address.code}</div>
                        </div>
                      </div>
                    ))}
                    <button
                      onClick={() => setShowAddressForm(true)}
                      className="add-location-button"
                    >
                      Add new address
                    </button>
                  </div>
                )}

                {/* Warning Message */}
                <div className="warning-message">
                  Check your product before checkout.
                  <br />
                  <span className="warning-subtext">
                    Make sure check is perfect before completing the purchase.
                  </span>
                </div>

                {/* Address Form Modal */}
                {showAddressForm && (
                  <div className="address-modal-overlay">
                    <div className="address-modal !text-black">
                      <div className="modal-header">
                        <h3>Add New Address</h3>
                        <button
                          onClick={() => setShowAddressForm(false)}
                          className="close-modal-button"
                        >
                          <X size={20} />
                        </button>
                      </div>

                      <div className="form-group">
                        <label>Name</label>
                        <input
                          type="text"
                          value={newAddress.name}
                          onChange={(e) =>
                            setNewAddress({ ...newAddress, name: e.target.value })
                          }
                          placeholder="Enter your name"
                        />
                      </div>

                      <div className="form-group">
                        <label>Address</label>
                        <input
                          type="text"
                          value={newAddress.address}
                          onChange={(e) =>
                            setNewAddress({
                              ...newAddress,
                              address: e.target.value,
                            })
                          }
                          placeholder="Enter full address"
                        />
                      </div>

                      <div className="form-group">
                        <label>Postal Code</label>
                        <input
                          type="text"
                          value={newAddress.code}
                          onChange={(e) =>
                            setNewAddress({ ...newAddress, code: e.target.value })
                          }
                          placeholder="Enter postal code"
                        />
                      </div>

                      <button
                        onClick={handleAddNewAddress}
                        className="add-address-button"
                      >
                        Add Address
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Cart Items */}
              <div className="cart-items-section">
                <div className="cart-items-header">
                  <h2>Cart ({cartItems.length} Items)</h2>
                  {cartItems.length > 0 && (
                    <button onClick={removeAllItems} className="remove-all-button">
                      <Trash2 size={16} className="remove-icon" /> Remove all
                    </button>
                  )}
                </div>

                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                      <div className="cart-box">
                        <div className="item-image">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="product-image"
                          />
                        </div>

                        <div className="item-info">
                          <h3>{item.name}</h3>
                          <p>
                            ₦{" "}
                            {parseFloat(item.price).toLocaleString("en-NG", {
                              minimumFractionDigits: 2,
                            })}{" "}
                            /kg
                          </p>
                        </div>
                      </div>

                      <div className="quantity-controls">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="quantity-button"
                        >
                          <Minus size={16} />
                        </button>

                        <span className="quantity-value">{item.quantity}</span>

                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="quantity-button"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="empty-cart-message">
                    <p>Your cart is empty</p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="order-summary">
              <div className="summary-card">
                <h2>Order Summary</h2>

                {/* Shipping Mode Selection */}
                <div className="shipping-mode-section">
                  <p className="section-subtitle">Select the shipping mode</p>

                  <div
                    className={`shipping-option ${shippingMode === "pickup" ? "selected" : ""
                      }`}
                    onClick={() => setShippingMode("pickup")}
                  >
                    <div className="selection-indicator" />
                    <div className="option-details">
                      <div className="option-title">Store Pickup</div>
                      <div className="option-description">
                        Pick up the order directly in the shop yourself
                      </div>
                    </div>
                  </div>

                  <div
                    className={`shipping-option ${shippingMode === "delivery" ? "selected" : ""
                      }`}
                    onClick={() => setShippingMode("delivery")}
                  >
                    <div className="selection-indicator" />
                    <div className="option-details">
                      <div className="option-title">Delivery</div>
                      <div className="option-description">
                        The order is shipped to your doorstep depends on your pickup
                        range/delivery options.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coupon Code */}
                <div className="coupon-section">
                  <p className="section-subtitle">Got any coupon code?</p>
                  <div className="coupon-input-group">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Enter coupon code"
                      className="coupon-input"
                    />
                    <button onClick={applyCoupon} className="apply-coupon-button">
                      APPLY
                    </button>
                  </div>
                </div>

                {/* Order Totals */}
                <div className="order-totals">
                  <div className="total-row">
                    <span>Items Total</span>
                    <span>
                      ₦{" "}
                      {itemsTotal.toLocaleString("en-NG", {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  </div>

                  <div className="total-row">
                    <span>Discount</span>
                    <span>
                      ₦{" "}
                      {discount.toLocaleString("en-NG", {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  </div>

                  <div className="total-row">
                    <span>Shipping Fee</span>
                    <span>
                      ₦{" "}
                      {shippingFee.toLocaleString("en-NG", {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  </div>

                  <div className="total-row">
                    <span>Sub - Total</span>
                    <span>
                      ₦{" "}
                      {total.toLocaleString("en-NG", { minimumFractionDigits: 2 })}
                    </span>
                  </div>

                  <div className="grand-total-row">
                    <span>Total</span>
                    <span>
                      ₦{" "}
                      {total.toLocaleString("en-NG", { minimumFractionDigits: 2 })}
                    </span>
                  </div>

                  <button
                    className="checkout-button"
                    onClick={() => setShowCheckout(true)}
                  >
                    Proceed to Checkout ₦
                  </button>

                  {/* Large Quantities Info */}
                  <div className="bulk-order-info">
                    <div className="info-header">
                      <div className="info-icon">
                        <Box size={30} />
                      </div>
                      <span>Need Large Quantities?</span>
                    </div>
                    <p className="info-text">
                      For wholesale or bulk orders, kindly
                      <span className="highlight-text"> contact us</span> directly or call
                      <span className="highlight-text"> +234 (913) 443 4790</span> for customized pricing and delivery arrangements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
