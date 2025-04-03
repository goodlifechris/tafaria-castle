import React, { useEffect, useState } from 'react';
import { FaAngleLeft, FaGift } from 'react-icons/fa';
import { Barlow_Condensed } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { useNavigation } from '../context/NavigationContext';
import { PiCastleTurretFill } from 'react-icons/pi';
import { useCart } from '../context/hook/UseCart';
import CartDetails from './cart/cartDetails';
import Link from 'next/link';

// Configure font
const barlow_condensed = Barlow_Condensed({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const TopBar = ({ title, type }: { title: string, type: string }) => {
  const router = useRouter();
  const { history, goBack } = useNavigation();
  const { cart, removeFromCart, getTotalItems, getTotalPrice, handleSendToWhatsApp } = useCart();

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>(type); // Default to 'images' tab

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


  useEffect(() => {
    // Scroll to the specific card if the card parameter is present
    if (type) {
      setActiveTab(type)
    }
  }, [type]);
  return (
    <div className="w-full flex">
      <div className={`${barlow_condensed.className} text-xl fixed bg-white z-10 w-full px-4 py-2 font-semibold text-center tracking-tight text-[#902729] capitalize border-b-2 border-[#902729] mx-auto flex items-center`}>
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
        <div className="flex justify-center space-x-4 m-auto">
          {title !== 'Gift Shop' && (
            <>


              <Link

                href={`/menu?id=${title}&name=${encodeURIComponent(title)}&type=${encodeURIComponent('Images')}`}
              >
                <button
                  className={`px-4 py-2 ${activeTab === 'Images' ? 'bg-[#902729] text-white' : 'bg-gray-200 text-[#902729]'} rounded-full`}
                  onClick={() => setActiveTab('Images')}
                >
                  Images
                </button>
              </Link>
              <Link

                href={`/menu?id=${title}&name=${encodeURIComponent(title)}&type=${encodeURIComponent('Videos')}`}
              >
                <button
                  className={`px-4 py-2 ${activeTab === 'Videos' ? 'bg-[#902729] text-white' : 'bg-gray-200 text-[#902729]'} rounded-full`}
                  onClick={() => setActiveTab('Videos')}
                >
                  Videos
                </button>
              </Link>
              {/* <Link

                href={`/menu?id=${title}&name=${encodeURIComponent(title)}&type=${encodeURIComponent('Blogs')}`}
              >
                <button
                  className={`px-4 py-2 ${activeTab === 'Blogs' ? 'bg-[#902729] text-white' : 'bg-gray-200 text-[#902729]'} rounded-full`}
                  onClick={() => setActiveTab('Blogs')}
                >
                  Blogs
                </button>
              </Link> */}
            </>
          )}
        </div>
      </div>

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
