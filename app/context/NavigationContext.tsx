"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context value
interface NavigationContextType {
  history: string[];
  addToHistory: (path: string) => void;
  goBack: () => void;
}

// Create the context with a default value
const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

// Define the props for the NavigationProvider
interface NavigationProviderProps {
  children: ReactNode; // Use ReactNode to allow any valid React child
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({ children }) => {
  const [history, setHistory] = useState<string[]>([]); // Specify the type for history

  const addToHistory = (path: string) => {
    setHistory((prev) => [...prev, path]);
  };

  const goBack = () => {
    setHistory((prev) => prev.slice(0, -1)); // Remove the last entry
  };

  return (
    <NavigationContext.Provider value={{ history, addToHistory, goBack }}>
      {children}
    </NavigationContext.Provider>
  );
};

// Custom hook to use the NavigationContext
export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};