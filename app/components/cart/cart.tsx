// app/components/Cart.tsx
"use client";
import React from 'react';
import { useCart } from '../../context/hook/UseCart';
import { Barlow_Condensed } from 'next/font/google';
import { useQuery } from '@tanstack/react-query';
import { fetchGiftShops } from '../../querries/giftshop/getgiftshops';
import ItemsList from '../cart/ItemList';
import CartDetails from '../cart/cartDetails'; // Import CartDetails

const barlow_condensed = Barlow_Condensed({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const Cart: React.FC = () => {
  const { cart, addToCart, removeFromCart, getTotalItems, getTotalPrice, handleSendToWhatsApp } = useCart();

  const { data, isLoading, error } = useQuery({
    queryKey: ['giftShops'],
    queryFn: fetchGiftShops,
  });

  if (isLoading) return <p>Loading categories...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={`p-4 ${barlow_condensed.className}`}>
      {/* <div className="flex space-x-4 mb-4">
        <button className="px-4 py-2 rounded bg-[#902729] text-white">Gift Shop</button>
        <button className="px-4 py-2 rounded-full relative bg-gray-200">
          <FaGift />
          {getTotalItems() > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-xs">
              {getTotalItems()}
            </span>
          )}
        </button>
      </div> */}

      <ItemsList items={data} addToCart={addToCart} />

      {/* Use CartDetails Component here */}
      <CartDetails
        cart={cart}
        removeFromCart={removeFromCart}
        getTotalItems={getTotalItems}
        getTotalPrice={getTotalPrice}
        handleSendToWhatsApp={handleSendToWhatsApp} // This should work now
      />

 
    </div>
  );
};

export default Cart;
