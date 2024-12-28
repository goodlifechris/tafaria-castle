// app/components/Cart.tsx
"use client";
import React, { useState } from 'react';
import { FaGift } from 'react-icons/fa';
import { Barlow_Condensed } from 'next/font/google';
import { IoIosRemoveCircle } from 'react-icons/io';

interface Item {
  id: number;
  img: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
}

const items: Item[] = [
  { id: 1, img: "https://afinju.co.uk/wp-content/uploads/2024/09/benos.png", title: "A piece of history", description: "Description 1", price: 1000, quantity: 1 },
  { id: 2, img: "https://afinju.co.uk/wp-content/uploads/2024/11/718458D9-90D3-4A62-A2D1-B415CDC5D4BB_1_201_a.jpeg", title: "Art Museum Craft", description: "Description 2", price: 12000, quantity: 1 },
  { id: 3, img: "https://afinju.co.uk/wp-content/uploads/2024/08/EC4A86EA-CAD6-4A1C-BA8E-FB4B4FA340B4_1_105_c-1024x643.jpeg", title: "Beloved", description: "Description 2", price: 2230, quantity: 1 },
  { id: 4, img: "https://afinju.co.uk/wp-content/uploads/2024/10/FDEE836D-7B99-42D4-83B4-C4A8F6BFF9E7_1_105_c-300x300.jpeg", title: "A dream", description: "Description 2", price: 6000, quantity: 1 },
  { id: 5, img: "https://afinju.co.uk/wp-content/uploads/2024/09/benos.png", title: "A piece of history", description: "Description 1", price: 1000, quantity: 1 },
  { id: 6, img: "https://afinju.co.uk/wp-content/uploads/2024/11/718458D9-90D3-4A62-A2D1-B415CDC5D4BB_1_201_a.jpeg", title: "Art Museum Craft", description: "Description 2", price: 12000, quantity: 1 },
  { id: 7, img: "https://afinju.co.uk/wp-content/uploads/2024/08/EC4A86EA-CAD6-4A1C-BA8E-FB4B4FA340B4_1_105_c-1024x643.jpeg", title: "Beloved", description: "Description 2", price: 2230, quantity: 1 },
  { id: 8, img: "https://afinju.co.uk/wp-content/uploads/2024/10/FDEE836D-7B99-42D4-83B4-C4A8F6BFF9E7_1_105_c-300x300.jpeg", title: "A dream", description: "Description 2", price: 6000, quantity: 1 },

];
const barlow_condensed = Barlow_Condensed({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  });
const Cart = () => {
  const [cart, setCart] = useState<Item[]>([]);
  const [activeTab, setActiveTab] = useState<'items' | 'cart'>('items');

  const addToCart = (item: Item) => {
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

  const removeFromCart = (item: Item) => {
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
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className={`p-4 ${barlow_condensed.className}`}>
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setActiveTab('items')}
          className={`px-4 py-2 rounded ${activeTab === 'items' ? 'bg-[#902729] text-white' : 'bg-gray-200'}`}
        >
          Gift Shop
        </button>
        <button
          onClick={() => setActiveTab('cart')}
          className={`px-4 py-2 rounded-full relative ${activeTab === 'cart' ? 'bg-[#902729] text-white' : 'bg-gray-200'}`}
        >
          <FaGift />
          {getTotalItems() > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-xs">
              {getTotalItems()}
            </span>
          )}
        </button>
      </div>

      {activeTab === 'items' && (
        <div>
        
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {items.map((item) => (
              <div key={item.id} className="border p-4 rounded-lg">
                <img src={item.img} alt={item.title} className="w-full h-32 object-cover mb-2" />
                <h2 className="text-lg text-left font-bold">{item.title}</h2>
                {/* <p className="text-sm">{item.description}</p> */}
                <p className="text-lg text-left font-bold">Kes {item.price}</p>
                <button
                  onClick={() => addToCart(item)}
                  className="mt-2 float-left bg-[#94723C] text-white px-4 py-2 rounded"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'cart' && (
        <div>
          <div className="flex flex-col space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center border p-4 rounded-lg">
                <img src={item.img} alt={item.title} className="w-16 h-16 object-cover mr-4" />
                <div className="flex-1">
                  <h2 className="text-left text-lg font-bold">{item.title}</h2>
                  <p className="text-sm text-left">Quantity: {item.quantity}</p>
                </div>
                <p className="text-lg font-bold">Kes {(item.price * item.quantity).toFixed(2)}</p>
                <button
                  onClick={() => removeFromCart(item)}
                  className="ml-4 rounded-full bg-red-500 text-white px-4 py-2"
                >
                  <IoIosRemoveCircle/>
                </button>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-bold">Summary</h2>
            <p>Total Items: {getTotalItems()}</p>
            <p>Total Price: Kes {getTotalPrice().toFixed(2)}</p>
            <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;