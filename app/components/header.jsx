"use client"
import React, { useState } from "react";
import Modal from "react-modal";
import { FaSearch } from "react-icons/fa";
import Select from "react-select";


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
        <div className="container mx-auto flex flex-wrap sm:flex-nowrap items-center justify-between space-y-4 sm:space-y-0 sm:flex-row sm:px-4">
          {/* Logo */}
          <div className="flex items-center justify-center sm:justify-start w-1/4">
            <img
              src="./logo.png"
              alt="Tafaria Castle Logo"
              className="w-16 h-16 sm:w-24 sm:h-24"
            />
          </div>

          {/* Search Button */}
          <div className="flex-1 flex justify-center">
            <button
              onClick={openModal}
              className="flex items-center bg-gray-200 text-gray-600 text-sm px-4 py-2 rounded-full shadow hover:bg-gray-300"
            >
              <FaSearch className="mr-2" />
             Tafaria's Experience
            </button>
          </div>

          {/* Book Now Button */}
          <div className="w-1/4 flex justify-center sm:justify-end mr-3">
            <button className="bg-[#94723C] text-white px-4 py-2 text-sm sm:text-base sm:px-6 sm:py-2 rounded-md font-semibold hover:bg-[#902729]">
           book
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
