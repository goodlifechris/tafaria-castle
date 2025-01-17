// app/context/CartContext.tsx
"use client"
import React, { createContext, useState, ReactNode } from 'react';

import { GiftShop } from '../querries/giftshop/getgiftshops';

interface CartContextType {
  cart: GiftShop[];
  addToCart: (item: GiftShop) => void;
  removeFromCart: (item: GiftShop) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  handleSendToWhatsApp: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode; // Type the children prop to allow any React components as children
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<GiftShop[]>([]);

  const addToCart = (item: GiftShop) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (item: GiftShop) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        );
      } else {
        return prevCart.filter((cartItem) => cartItem.id !== item.id);
      }
    });
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.amount * item.quantity, 0);
  };

  const handleSendToWhatsApp = () => {
    // Logic for sending WhatsApp message
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalItems, getTotalPrice, handleSendToWhatsApp }}>
      {children} {/* Render the children */}
    </CartContext.Provider>
  );
};
