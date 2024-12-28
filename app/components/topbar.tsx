import React from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { Barlow_Condensed } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { useNavigation } from '../context/NavigationContext';
import { PiCastleTurretFill } from 'react-icons/pi';

//👇 Configure our font object
const barlow_condensed = Barlow_Condensed({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const TopBar = ({ title }: { title: string }) => {
  const router = useRouter();
  const { history, goBack } = useNavigation();

  const handleBackClick = () => {
    if (history.length > 0) {
      goBack(); // Go back in history
      router.back(); // Navigate back to the previous page
    } else {
      router.push('/'); // Redirect to home if no history
    }
  };
  const handleHome = () => {
      router.push('/'); // Redirect to home if no history
    
  };

  return (
    <div className="w-full">
      <h2 className={`${barlow_condensed.className} text-xl fixed bg-white z-10 w-full px-4 py-2 font-semibold text-center tracking-tight text-[#902729] capitalize border-b-2 border-[#902729] mx-auto flex items-center`}>
        <a onClick={handleBackClick} className="text-[#94723C] hover:underline">
          <FaAngleLeft className="mr-2" />
        </a>
        <a onClick={handleHome} className="text-[#94723C] hover:underline">
          <PiCastleTurretFill className="mr-2 text-2xl" />
        </a>
        {title}
      </h2>
    </div>
  );
};

export default TopBar;