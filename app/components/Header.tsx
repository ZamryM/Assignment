/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

interface HeaderProps {
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('welcome'); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleTabClick = (page: string) => {
    setActiveTab(page); 
    setCurrentPage(page); 
    setIsOpen(false); 
  };

  return (
    <nav className="bg-gradient-to-r from-gray-500 to-gray-300 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/book8.png"
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
          <div
            className="text-white text-2xl font-bold ml-3 cursor-pointer"
            onClick={() => handleTabClick('welcome')}
          >
            ReadApp
          </div>
        </div>

        <div className="hidden md:flex space-x-6">
          <div
            className={`text-gray-950 hover:text-white transition-colors duration-300 cursor-pointer ${
              activeTab === 'welcome' ? 'text-white' : ''
            }`}
            onClick={() => handleTabClick('welcome')}
          >
            Home
          </div>
          <div
            className={`text-gray-950 hover:text-white transition-colors duration-300 cursor-pointer ${
              activeTab === 'booklist' ? 'text-white' : ''
            }`}
            onClick={() => handleTabClick('booklist')}
          >
            Books
          </div>
          <div
            className={`text-gray-950 hover:text-white transition-colors duration-300 cursor-pointer ${
              activeTab === 'about' ? 'text-white' : ''
            }`}
            onClick={() => handleTabClick('about')}
          >
            About Us
          </div>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2 space-y-1 bg-gray-800 p-4 rounded-lg shadow-lg">
          <div
            className={`block text-gray-300 hover:text-white py-1 transition-colors duration-300 cursor-pointer ${
              activeTab === 'welcome' ? 'text-white' : ''
            }`}
            onClick={() => handleTabClick('welcome')}
          >
            Home
          </div>
          <div
            className={`block text-gray-300 hover:text-white py-1 transition-colors duration-300 cursor-pointer ${
              activeTab === 'booklist' ? 'text-white' : ''
            }`}
            onClick={() => handleTabClick('booklist')}
          >
            Books
          </div>
          <div
            className={`block text-gray-300 hover:text-white py-1 transition-colors duration-300 cursor-pointer ${
              activeTab === 'about' ? 'text-white' : ''
            }`}
            onClick={() => handleTabClick('about')}
          >
            About
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
