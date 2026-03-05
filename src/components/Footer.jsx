import React from 'react';
import { FaTwitter, FaYoutube, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800">
              HomeFind<span className="text-blue-600">.</span>
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Discover your perfect property with our smart search. We help you find the home of your dreams with thousands of listings across the country.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="#" className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <FaFacebookF className="text-gray-600 hover:text-white" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <FaTwitter className="text-gray-600 hover:text-white" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <FaInstagram className="text-gray-600 hover:text-white" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <FaLinkedinIn className="text-gray-600 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Buy', 'Rent', 'Sell', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Services</h4>
            <ul className="space-y-2">
              {['Property Listing', 'Agent Finder', 'Home Valuation', 'Market Reports', 'Legal Support'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-500 text-sm">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-blue-500" />
                <span>123 Main Street, New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <FaPhone className="flex-shrink-0 text-blue-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <FaEnvelope className="flex-shrink-0 text-blue-500" />
                <span>info@homefind.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} HomeFind. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;