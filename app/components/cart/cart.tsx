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
  const { cart, removeFromCart, getTotalItems, getTotalPrice, handleSendToWhatsApp } = useCart();

  const { data, isLoading, error } = useQuery({
    queryKey: ['giftShops'],
    queryFn: fetchGiftShops,
  });

  if (isLoading) return <p>Loading categories...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={`p-4 ${barlow_condensed.className}`}>


<ItemsList items={data} /> {/* No need to pass addToCart explicitly */}

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
