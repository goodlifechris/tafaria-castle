// app/components/Cart.tsx
"use client";
import React, { useState } from 'react';
import { FaGift } from 'react-icons/fa';
import { Barlow_Condensed } from 'next/font/google';
import { IoIosRemoveCircle } from 'react-icons/io';
import { useQuery } from '@tanstack/react-query';
import 'animate.css'; // Import animation styles

import { fetchGiftShops, GiftShop } from '../../querries/giftshop/getgiftshops';



// amount
// : 
// 1500
// description
// : 
// "Awesome Key Ring"
// id
// : 
// "cm5n1vzpw0018l0z0xdxdeo7g"
// images
// : 
// (2) [{…}, {…}]
// title
// : 
// "Key Ring"
// videos
// : 
// []


const barlow_condensed = Barlow_Condensed({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  });
const Cart = () => {

  const [cart, setCart] = useState<GiftShop[]>([]);
  const [activeTab, setActiveTab] = useState<'items' | 'cart'>('items');
  const [isAddedToCart, setIsAddedToCart] = useState(false); // State for animation

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
    
    setIsAddedToCart(true); // Trigger the animation when item is added
    setTimeout(() => setIsAddedToCart(false), 3000); // Reset after 1 second

  };
  const businessPhoneNumber = '+254705000315'; // Replace with your WhatsApp number (in international format)

  const handleSendToWhatsApp = () => {
    // Calculate the total cost
    const totalCost = cart.reduce((sum, item) => sum + item.amount * item.quantity, 0);
  
    // Create the message with item details and total cost
    const message = cart
      .map((item) => `${item.title} - Quantity: ${item.quantity} - Price: $${item.amount.toFixed(2)}`)
      .join('\n');
  
    // Encode the message with the total cost
    const encodedMessage = encodeURIComponent(
      `New Order:\n${message}\n\nTotal Cost: $${totalCost.toFixed(2)}`
    );
  
    const whatsappLink = `https://wa.me/${businessPhoneNumber}?text=${encodedMessage}`;
  
    // Open WhatsApp link in a new tab
    window.open(whatsappLink, '_blank');
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
  const { data, isLoading, error } = useQuery({ queryKey: ['giftShops'], queryFn: fetchGiftShops });
  if (isLoading) return <p>Loading categories...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log("dayta is", data)
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
            {data?.map((item) => (
              <div key={item.id} className="border p-4 rounded-lg">
                <img src={item.images[0].image.url} alt={item.title} className="w-full object-cover mb-2" />
                <h3 className="text-lg text-left font-bold">{item.title}</h3>
                <p className="text-sm text-left ">{item.description}</p>
                <p className="text-lg text-left font-bold">Kes {item.amount}</p>
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
                <img src={item.images[0].image.url} alt={item.title} className="w-16 h-16 object-cover mr-4" />
                <div className="flex-1">
                <h3 className="text-left text-lg font-bold">{item.title}</h3>
                <h2 className="text-left">{item.description}</h2>
                <p className="text-sm text-left">Quantity: {item.quantity}</p>
                </div>
                <p className="text-lg font-bold">Kes {(item.amount * item.quantity).toFixed(2)}</p>
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
            <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded"  onClick={handleSendToWhatsApp}>
              Make order
            </button>
          </div>
        </div>
      )}
            {/* Sticky Cart Notification */}
            {isAddedToCart && (
        <div className="fixed bottom-20 right-5 p-4 bg-green-500 text-white rounded-lg shadow-lg animate__animated animate__bounceIn"  onClick={() => setActiveTab('cart')}>
          <p>Item added to cart!</p>
        </div>
      )}
    </div>
  );
};

export default Cart;