"use client"
import React, { createContext, useContext, useState } from 'react';

// Create a context
const DropdownContext = createContext({
  isDropdownOpen: false,
  toggleDropdown: () => {
    console.log("welcome");
  },
});

// Create a provider component
export const DropdownProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    console.log("are you here");
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <DropdownContext.Provider value={{ isDropdownOpen, toggleDropdown }}>
      {children}
    </DropdownContext.Provider>
  );
};

// Create a custom hook to use the DropdownContext
export const useDropdown = () => {
  return useContext(DropdownContext);
};