import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Error = () => {
  // Backup image URL (you can replace this with your own working image link)
  const errorImage = "https://i.ibb.co.com/JFR3J5Wg/491004790-549808141111610-4972119779593889411-n.jpg";
  // If your original image link starts working, replace the above line with:
  // const errorImage = "https://i.ibb.co.com/JFR3J5Wg/491004790-549808141111610-4972119779593889411-n.jpg";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Error Image */}
        <div className="relative mb-8 flex justify-center">
          <div className="relative inline-block">
            <img 
              src={errorImage} 
              alt="404 Error - Page Not Found" 
              className="rounded-2xl shadow-2xl max-w-full h-auto max-h-96 object-cover"
            />
            {/* Overlay removed - now just the image */}
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="pt-6">
          <Link
            to="/"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <FaHome className="text-xl" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;