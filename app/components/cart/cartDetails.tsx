// app/components/CartDetails.tsx
import React from 'react';
import { GiftShop } from '../../querries/giftshop/getgiftshops';
import { IoIosRemoveCircle } from 'react-icons/io';
import { Barlow_Condensed } from 'next/font/google';

interface CartDetailsProps {
  cart: GiftShop[];
  removeFromCart: (item: GiftShop) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  handleSendToWhatsApp: () => void;
}

const barlow_condensed = Barlow_Condensed({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const CartDetails: React.FC<CartDetailsProps> = ({ cart, removeFromCart, getTotalItems, getTotalPrice, handleSendToWhatsApp }) => {
  return (
    <div className={`p-4 ${barlow_condensed.className}`}>
      <div className="flex flex-col space-y-4 text-black">
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
              <IoIosRemoveCircle />
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4 text-black">
        <h2 className="text-xl font-bold">Summary</h2>
        <p>Total Items: {getTotalItems()}</p>
        <p>Total Price: Kes {getTotalPrice().toFixed(2)}</p>
        <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded" onClick={handleSendToWhatsApp}>
          Make Order
        </button>
      </div>
    </div>
  );
};

export default CartDetails;
