"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [total, setTotal] = useState(0);

  // Load cart data on mount
  useEffect(() => {
    const loadCart = () => {
      const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCartItems(savedCart);
      setCartItemCount(savedCart.length);
      calculateTotal(savedCart);
    };

    loadCart();
    window.addEventListener('storage', loadCart);
    return () => window.removeEventListener('storage', loadCart);
  }, []);

  // Calculate total price
  const calculateTotal = (items) => {
    const sum = items.reduce((acc, item) => {
      return acc + (item.price * item.quantity);
    }, 0);
    setTotal(sum);
  };

  // Add item to cart
  const addToCart = (item) => {
    const updatedCart = [...cartItems];
    const existingItem = updatedCart.find(i => i.id === item.id);

    if (existingItem) {
      existingItem.quantity += item.quantity;
      existingItem.totalPrice = existingItem.price * existingItem.quantity;
    } else {
      updatedCart.push({
        ...item,
        totalPrice: item.price * item.quantity
      });
    }

    setCartItems(updatedCart);
    setCartItemCount(updatedCart.length);
    calculateTotal(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Remove item from cart
  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
    setCartItemCount(updatedCart.length);
    calculateTotal(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);
    setCartItemCount(0);
    setTotal(0);
    localStorage.removeItem('cart');
  };

  // Update item quantity
  const updateQuantity = (itemId, change) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === itemId) {
        const newQuantity = Math.max(1, item.quantity + change);
        return {
          ...item,
          quantity: newQuantity,
          totalPrice: item.price * newQuantity
        };
      }
      return item;
    });

    setCartItems(updatedCart);
    calculateTotal(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      cartItemCount,
      total,
      addToCart,
      removeFromCart,
      clearCart,
      updateQuantity
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);