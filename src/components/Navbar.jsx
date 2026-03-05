import React, { useState, useEffect, useRef } from "react";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  // মেনু টগল ফাংশন
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // মেনু বন্ধ করার ফাংশন
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // বাইরে ক্লিক করলে মেনু বন্ধ হবে
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // স্ক্রিন সাইজ পরিবর্তন হলে মেনু বন্ধ হবে
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // মেনু আইটেমগুলোর Array with paths
  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "PROPERTIES", path: "/properties" },
    { name: "AGENTS", path: "/agents" },
    { name: "BLOG", path: "/blog" },
    { name: "CONTACT US", path: "/contact-us" }
  ];

  // Check if link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between text-white">

        {/* Logo with Link */}
        <Link to="/" className="text-2xl font-bold hover:text-gray-300 transition-colors">
          HomeFind<span className="text-gray-300">.</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-semibold tracking-wide">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link 
                to={item.path}
                className={`cursor-pointer hover:text-gray-300 transition-colors ${
                  isActive(item.path) ? 'text-gray-300 border-b-2 border-white pb-1' : ''
                }`}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Profile Icon - Updated to link to login */}
        <Link 
          to="/login" 
          className="hidden md:block border border-white rounded-full p-3 cursor-pointer hover:bg-white hover:text-black transition-all duration-300"
        >
          <FaUser />
        </Link>

        {/* Hamburger Icon - Mobile */}
        <div className="md:hidden flex items-center gap-4">
          {/* Mobile Profile Icon - Updated to link to login */}
          <Link 
            to="/login" 
            className="border border-white rounded-full p-2 cursor-pointer hover:bg-white hover:text-black transition-all duration-300"
          >
            <FaUser className="text-sm" />
          </Link>
          
          {/* Hamburger Button */}
          <button 
            onClick={toggleMenu}
            className="text-white focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 md:hidden"
            style={{ zIndex: 40 }}
            onClick={closeMenu}
          />
        )}

        {/* Mobile Menu Slide Panel - 50% width */}
        <div 
          ref={menuRef}
          className={`fixed top-0 right-0 h-full w-1/2 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ zIndex: 45 }}
        >
          <div className="flex flex-col h-full pt-20 px-6">
            {/* Close Button Inside Menu */}
            <button 
              onClick={closeMenu}
              className="absolute top-6 right-6 text-gray-500 hover:text-gray-800 transition-colors"
              aria-label="Close menu"
            >
              <FaTimes className="text-xl" />
            </button>

            {/* Mobile Menu Items */}
            <ul className="space-y-6">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.path}
                    className={`text-gray-800 hover:text-blue-600 text-lg font-semibold transition-colors duration-200 block ${
                      isActive(item.path) ? 'text-blue-600 border-l-4 border-blue-600 pl-2' : ''
                    }`}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Footer */}
            <div className="mt-auto pb-10">
              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-500">
                  © 2024 HomeFind. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;