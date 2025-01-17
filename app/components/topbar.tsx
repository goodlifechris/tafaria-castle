import React, { useState } from 'react';
import { FaAngleLeft, FaGift } from 'react-icons/fa';
import { Barlow_Condensed } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { useNavigation } from '../context/NavigationContext';
import { PiCastleTurretFill } from 'react-icons/pi';
import { useCart } from '../context/hook/UseCart';
import CartDetails from './cart/cartDetails';

// Configure font
const barlow_condensed = Barlow_Condensed({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const TopBar = ({ title }: { title: string }) => {
  const router = useRouter();
  const { history, goBack } = useNavigation();
  const { cart, removeFromCart, getTotalItems, getTotalPrice, handleSendToWhatsApp } = useCart();

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBackClick = () => {
    if (history.length > 0) {
      goBack(); 
      router.back();
    } else {
      router.push('/'); 
    }
  };

  const handleHome = () => {
    router.push('/');
  };

  return (
    <div className="w-full">
      <h2 className={`${barlow_condensed.className} text-xl fixed bg-white z-10 w-full px-4 py-2 font-semibold text-center tracking-tight text-[#902729] capitalize border-b-2 border-[#902729] mx-auto flex items-center`}>
        <a onClick={handleBackClick} className="text-[#94723C] hover:underline cursor-pointer">
          <FaAngleLeft className="mr-2" />
        </a>
        <a onClick={handleHome} className="text-[#94723C] hover:underline cursor-pointer">
          <PiCastleTurretFill className="mr-2 text-2xl" />
        </a>
        {title}
        {title === 'Gift Shop' && (
          <button 
            className="px-4 py-2 ml-5 rounded-full relative bg-gray-200" 
            onClick={() => setIsModalOpen(true)} // Open modal
          >
            <FaGift />
            {getTotalItems() > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-xs">
                {getTotalItems()}
              </span>
            )}
          </button>
        )}
      </h2>

      {/* Modal for showing Cart Details */}
      {isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-6 shadow-lg relative 
                    w-full h-full sm:w-[90vw] sm:h-auto md:w-[60vw] lg:w-[50vw] max-w-lg">
      <h3 className="text-lg font-semibold text-center mb-4 text-black">Your Cart</h3>
      <button 
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" 
        onClick={() => setIsModalOpen(false)} // Close modal
      >
        ✕
      </button>
      
      {/* Show Cart Details in Modal */}
      <CartDetails
        cart={cart}
        removeFromCart={removeFromCart}
        getTotalItems={getTotalItems}
        getTotalPrice={getTotalPrice}
        handleSendToWhatsApp={handleSendToWhatsApp}
      />
    </div>
  </div>
)}

    </div>
  );
};

export default TopBar;
