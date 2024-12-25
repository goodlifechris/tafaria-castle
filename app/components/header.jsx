"use client"
import React, { useState } from "react";
import Modal from "react-modal";
import { FaSearch } from "react-icons/fa";
import Select from "react-select";
import Link from "next/link";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedActivities, setSelectedActivities] = useState([]);

  const activitiesOptions = [
    { value: "hospitality", label: "Hospitality" },
    { value: "education", label: "Education" },
    { value: "conferencing", label: "Conferencing" },
    { value: "arts", label: "Arts" },
  ];

  const handleSelect = (selected) => {
    setSelectedActivities(selected || []);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
<header className="w-full bg-white py-2 shadow-md">
  <div className="container mx-auto flex items-center justify-between px-4">
    {/* Logo */}
    <div className="flex items-center">
      <Link href="/">
        <img
          src="./logo.png"
          alt="Tafaria Castle Logo"
          className="w-16 h-16 sm:w-24 sm:h-24 ml-5"
        />
      </Link>
    </div>
    {/* Contact Information and Book Now Button */}
    <div className="flex items-center">
      <a href="tel:0700151480" className="text-black m-2 text-sm underline">
        0700151480
      </a>
      <a href="mailto:info@tafaria.com" className="text-black m-2 text-sm underline">
        info@tafaria.com
      </a>
      <button className="bg-[#94723C] text-white px-4 py-2 text-sm sm:text-base sm:px-6 sm:py-2 rounded-md font-semibold hover:bg-[#902729]">
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
