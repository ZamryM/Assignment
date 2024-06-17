// components/Footer.tsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4"> {/* Decreased py-8 to py-4 */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="text-sm">
              <li className="flex items-center mb-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-blue-600 h-5 w-5 inline-block mr-2" />
                <span>zamryzam072@gmail.com</span>
              </li>
              <li className="flex items-center mb-2">
                <FontAwesomeIcon icon={faPhone} className="text-blue-600 h-5 w-5 inline-block mr-2" />
                <span>+94719186897</span>
              </li>
              <li className="flex items-center mb-2">
                <FontAwesomeIcon icon={faGlobe} className="text-blue-600 h-5 w-5 inline-block mr-2" />
                <span>www.ReadApp.com</span>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="https://facebook.com/example" className="flex items-center justify-center w-10 h-10 bg-gray-700 text-gray-300 rounded-full hover:bg-gray-600">
                  <FontAwesomeIcon icon={faFacebook} className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/example" className="flex items-center justify-center w-10 h-10 bg-gray-700 text-gray-300 rounded-full hover:bg-gray-600">
                  <FontAwesomeIcon icon={faTwitter} className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com/example" className="flex items-center justify-center w-10 h-10 bg-gray-700 text-gray-300 rounded-full hover:bg-gray-600">
                  <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a href="https://mail.google.com" className="flex items-center justify-center w-10 h-10 bg-gray-700 text-gray-300 rounded-full hover:bg-gray-600">
                  <FontAwesomeIcon icon={faGoogle} className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 flex flex-col justify-center items-center lg:items-end">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter for updates and offers.</p>
            <form className="flex flex-col sm:flex-row w-full max-w-xs sm:max-w-sm">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full sm:w-auto mb-2 sm:mb-0 sm:mr-2 bg-gray-700 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <p className="text-center mt-4"> {/* Decreased margin top from mt-8 to mt-4 */}
          © 2024 Read App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
