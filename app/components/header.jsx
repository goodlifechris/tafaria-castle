"use client"
import React, { useState } from "react";
import Modal from "react-modal";
import Select from "react-select";
import Link from "next/link";
import { IoLocation } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { FaFacebookF, FaInstagram, FaLocationArrow, FaMapMarked, FaMapMarker, FaMapPin, FaTwitter } from "react-icons/fa";
import Image from "next/image";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const router = useRouter();

  const activitiesOptions = [
    { value: "hospitality", label: "Hospitality" },
    { value: "education", label: "Education" },
    { value: "conferencing", label: "Conferencing" },
    { value: "arts", label: "Arts" },
  ];
  const handleBook = () => {
    router.push('/book');
  };
  const openBookingPage = () => {
    window.location.href = "https://apps.hti-systems.com/hostech/tafaria/desktop.html?locale=en_US";
  };
  const handleSelect = (selected) => {
    setSelectedActivities(selected || []);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleLocation = () => {
    router.push('/'); // Redirect to home if no history
  
};
  return (
    <>
<header className="w-full bg-white shadow-md">
  <div className="container mx-auto flex items-center justify-between px-4">
    {/* Logo */}
    <div className="flex items-center">
      <Link href="/">
        <Image
          src="/logo.png"
          width={100}
          height={100}
          alt="Tafaria Castle Logo"
          className="w-16 h-16 sm:w-24 sm:h-24 "
        />
      </Link>

    </div>
       <div className="flex items-center space-x-3">
             <div className='hidden  items-center space-x-4   md:flex '>
                <a href="https://www.facebook.com/TafariaCaslteArts/" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="text-white bg-[#902729] rounded-full p-2 "  size={28} />
                </a>
                <a href="https://x.com/tafariacastle?lang=en" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-white  bg-[#902729]  rounded-full p-2 "  size={28}/>
                </a>
                <a href="https://www.instagram.com/tafaria.castle/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-white  bg-[#902729]  rounded-full p-2 "  size={28} />
                </a>
                <a href="https://www.google.com/maps/search/Tafaria+Castle/@-0.1164533,36.6279602,17z?hl=en&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                  <FaMapMarker className="text-white  bg-[#902729]  rounded-full p-2 "  size={28} />
                </a>
              </div>
    {/* <a className="bg-[#f673735d]  rounded-full p-2" href="https://www.google.com/maps/search/Tafaria+Castle/@-0.1164533,36.6279602,17z?hl=en&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" >
      <IoLocation className="lg:text-4xl sm:text-sm md:text-2xl text-[#902729]"/>
        </a> */}
      <a href="tel:070015000" className="text-black  text-xs underline">
        0700151480
      </a>
      <a href="mailto:info@tafaria.com" className="text-black text-xs underline">
        info@tafaria.com
      </a>
      <button  onClick={handleBook} className="bg-[#94723C] text-white px-5 py-2 text-sm sm:text-base sm:px-6 sm:py-2 rounded-md font-semibold hover:bg-[#902729]">
        Book 
      </button>

    </div>
  </div>
</header>

{/* Modal for Activity Selection */}
<Modal
  isOpen={isModalOpen}
  onRequestClose={closeModal}
  style={{
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Dimmed background
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      inset:"0px important!" , 

    },
    content: {
      position: "relative",
      width: "100%", // Half the screen width
      height: "50%", // Half the screen height
      margin: "auto",
      borderRadius: "12px",
      padding: "20px",
      border: "1px solid #d1d5db",
      overflow: "auto",
    },
  }}
  contentLabel="Activity Selection"
  ariaHideApp={false}
>
  <h2 className="text-lg font-bold text-center mb-4 text-[#902729]">
    Search Tafaria's Castle Experience
  </h2>
  <Select
    isMulti
    options={activitiesOptions}
    value={selectedActivities}
    onChange={handleSelect}
    placeholder="Search and select activities..."
    className="text-black w-full"
    classNamePrefix="react-select"
    styles={{
      control: (provided) => ({
        ...provided,
        borderRadius: "6px",
        borderColor: "#d1d5db",
        boxShadow: "none",
        inset:"0px important!" , 

      }),
      menu: (provided) => ({
        ...provided,
        zIndex: 9999,
      }),
    }}
  />
  <div className="text-center mt-4">
    <button
      onClick={closeModal}
      className="bg-[#94723C] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#902729]"
    >
      Done
    </button>
  </div>
</Modal>

    </>
  );
};

export default Header;
