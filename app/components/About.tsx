/* eslint-disable @next/next/no-img-element */


import React, { useState } from 'react';

interface HeaderProps {
    setCurrentPage: (page: string) => void;
  }

const About: React.FC = () => {
    
  return (
    <div className="bg-gradient-to-r from-blue-950 via-black to-black text-gray-300 px-4 py-16">
      <div className="max-w-2xl mx-auto flex flex-col items-center relative top-4">
        <div className="w-full mb-8 relative">
          <img
            src="/book7.jpg"
            alt="Book Image"
            className="w-full h-64 md:h-72 object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 z-0"
          />
          <div className="absolute bottom-0 w-full flex transform translate-y-1/2">
            <h1 className="text-3xl font-bold text-white bg-blue-900 p-2 rounded-lg z-10 animate-slideIn">
              About ReadApp
            </h1>
          </div>
        </div>
        <div className="text-center">
          <p className="text-lg mb-6 animate-fadeIn">
            Welcome to ReadApp, your ultimate destination for discovering and reading books. We provide a vast collection of books across various genres, personalized recommendations, and a user-friendly interface.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
