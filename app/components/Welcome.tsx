/* eslint-disable @next/next/no-img-element */
// Welcome.tsx

import React, { useState } from 'react';


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}


const Welcome: React.FC = () => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false); 
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); 


  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };


  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

 
  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };


  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div className="relative flex justify-center items-center h-screen bg-gradient-to-r from-blue-950 via-black to-black text-white p-4">
      <div className="flex flex-col items-center animate-fadeIn z-10 mb-40">
  
        <div className="rounded-full overflow-hidden mt-20">
          <img
            src="/book7.jpg"
            alt="welcome image"
            className="w-40 h-40 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 shadow-lg"
          />
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-4xl font-bold mb-5 animate-slideInUp text-shadow-lg">
            Discover the Joy of Reading
          </h2>
          <p className="italic text-lg mb-4 animate-slideInUp text-shadow-md">
            &quot;A reader lives a thousand lives before he dies. The man who never reads lives only one.&quot;
          </p>
          <p className="text-sm mb-6 animate-fadeIn text-shadow-sm">
            - George R.R. Martin
          </p>

        
          <div className="flex gap-4 flex-wrap justify-center">
       
            <button
              className="w-36 animate-pulse bg-yellow-600 text-white py-3 px-6 rounded-full hover:bg-yellow-800 transition-colors duration-300 shadow-md transform hover:scale-105"
              onClick={openRegisterModal}
            >
              Register
            </button>

      
            <button
              className="w-36 animate-pulse bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-800 transition-colors duration-300 shadow-md transform hover:scale-105"
              onClick={openLoginModal}
            >
              Login
            </button>
          </div>
        </div>
      </div>


      <RegisterModal isOpen={isRegisterModalOpen} onClose={closeRegisterModal} />
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </div>
  );
};

const RegisterModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegister = () => {
 
    if (!email.trim() || !username.trim() || !password.trim() || !confirmPassword.trim()) {
      setIsError(true);
      setSuccessMessage(''); 
      return;
    }
  
    if (password !== confirmPassword) {
      setIsError(true);
      setSuccessMessage('');
      return;
    }
  
    setIsError(false);
    setSuccessMessage('Successfully registered!'); 
    onClose();
  
    
    setEmail('');
    setUsername('');
    setPassword('');
    setConfirmPassword('');

    setTimeout(() => {
      setSuccessMessage(''); 
    }, 5000); 
  
    console.log('Success message:', successMessage); 
  };
  
  
  



  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 w-11/12 max-w-md mx-auto relative">

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M14.707 5.293a1 1 0 00-1.414 0L10 8.586 6.707 5.293a1 1 0 00-1.414 1.414L8.586 10l-3.293 3.293a1 1 0 101.414 1.414L10 11.414l3.293 3.293a1 1 0 001.414-1.414L11.414 10l3.293-3.293a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>


        <h2 className="text-2xl font-bold mb-6 text-center text-black">Register</h2>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          
   
          {isError && (
            <p className="text-red-500 text-sm">Please fill out all fields correctly.</p>
          )}

     
          <button
            type="button"
            onClick={handleRegister}
            className="w-full bg-yellow-600 text-white py-3 px-6 rounded-md hover:bg-yellow-800 transition-colors duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};


const LoginModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);


  const handleLogin = () => {
    if (!username || !password) {
      setIsError(true);
      return;
    }

    console.log('Logging in with:', { username, password });

    setIsError(false);
    onClose(); 
  };


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 w-11/12 max-w-md mx-auto relative">
     
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M14.707 5.293a1 1 0 00-1.414 0L10 8.586 6.707 5.293a1 1 0 00-1.414 1.414L8.586 10l-3.293 3.293a1 1 0 101.414 1.414L10 11.414l3.293 3.293a1 1 0 001.414-1.414L11.414 10l3.293-3.293a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

      
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Login</h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
  
          {isError && (
            <p className="text-red-500 text-sm">Please fill out all fields correctly.</p>
          )}

        
          <button
            type="button"
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-800 transition-colors duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Welcome;
