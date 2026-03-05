import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useLocation, Link } from "react-router-dom";
import { FaBed, FaBath, FaRuler, FaMapMarkerAlt, FaUser, FaEnvelope, FaPhone, FaCalendar, FaCreditCard } from "react-icons/fa";

const Booking = () => {
  const location = useLocation();
  const property = location.state?.property || null;
  
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slideImages = [
    "https://i.ibb.co.com/4ws1Vbxb/pexels-sebastians-731082.jpg",
    "https://i.ibb.co.com/m5nj9JPH/pexels-david-kanigan-239927285-18926515.jpg",
    "https://i.ibb.co.com/d4CRQ8Dm/pexels-jacob-o-3033815-4601194.jpg"
  ];

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);
  
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    paymentMethod: "credit",
    specialRequests: ""
  });

  const handleChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking submission here
    console.log("Booking Data:", bookingData);
    alert("Booking request submitted successfully!");
  };

  // Sample other properties
  const otherProperties = [
    {
      id: 2,
      title: "Modern Villa",
      location: "Los Angeles, CA",
      price: "$850,000",
      image: "https://i.ibb.co.com/d4CRQ8Dm/pexels-jacob-o-3033815-4601194.jpg",
      type: "Villa"
    },
    {
      id: 3,
      title: "Downtown Condo",
      location: "Chicago, IL",
      price: "$320,000",
      image: "https://i.ibb.co.com/m5nj9JPH/pexels-david-kanigan-239927285-18926515.jpg",
      type: "Condo"
    },
    {
      id: 4,
      title: "Beach House",
      location: "Miami, FL",
      price: "$750,000",
      image: "https://i.ibb.co.com/4ws1Vbxb/pexels-sebastians-731082.jpg",
      type: "House"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header with Sliding Images - Same as Properties page */}
      <div className="relative pt-32 pb-16 overflow-hidden">
        {/* Sliding Images Container */}
        <div className="absolute inset-0 z-0">
          {slideImages.map((image, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{
                backgroundImage: `url('${image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                opacity: currentSlide === index ? 1 : 0
              }}
            >
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          ))}
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {slideImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'w-6 bg-white' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Book Your Property</h1>
          <p className="text-xl text-white">Complete the form below to schedule a viewing or make a booking</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form - Left Side */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Selected Property Summary */}
              {property && (
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Selected Property</h2>
                  <div className="flex items-center gap-4">
                    <img 
                      src={property.image} 
                      alt={property.title}
                      className="w-24 h-24 rounded-xl object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{property.title}</h3>
                      <p className="text-gray-700 flex items-center gap-1 text-sm mb-2">
                        <FaMapMarkerAlt className="text-blue-600" /> {property.location}
                      </p>
                      <div className="flex gap-4 text-sm text-gray-700">
                        <span className="flex items-center gap-1"><FaBed className="text-gray-700" /> {property.beds} Beds</span>
                        <span className="flex items-center gap-1"><FaBath className="text-gray-700" /> {property.baths} Baths</span>
                        <span className="flex items-center gap-1"><FaRuler className="text-gray-700" /> {property.sqft} sqft</span>
                      </div>
                      <p className="text-2xl font-bold text-blue-600 mt-2">{property.price}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Booking Form */}
              <form onSubmit={handleSubmit} className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Booking Details</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2">
                      <FaUser className="inline mr-2 text-blue-600" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={bookingData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-900"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2">
                      <FaEnvelope className="inline mr-2 text-blue-600" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={bookingData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-900"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2">
                      <FaPhone className="inline mr-2 text-blue-600" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={bookingData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-900"
                      placeholder="+1 234 567 8900"
                    />
                  </div>

                  {/* Guests */}
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2">
                      <FaUser className="inline mr-2 text-blue-600" />
                      Number of Guests
                    </label>
                    <select
                      name="guests"
                      value={bookingData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-900"
                    >
                      {[1,2,3,4,5,6].map(num => (
                        <option key={num} value={num} className="text-gray-900">{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>

                  {/* Check-in Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2">
                      <FaCalendar className="inline mr-2 text-blue-600" />
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={bookingData.checkIn}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-900"
                    />
                  </div>

                  {/* Check-out Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2">
                      <FaCalendar className="inline mr-2 text-blue-600" />
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      value={bookingData.checkOut}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-900"
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-800 mb-2">
                    <FaCreditCard className="inline mr-2 text-blue-600" />
                    Payment Method
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['credit', 'debit', 'paypal'].map(method => (
                      <label key={method} className="flex items-center p-4 border border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 transition-colors">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method}
                          checked={bookingData.paymentMethod === method}
                          onChange={handleChange}
                          className="mr-3"
                        />
                        <span className="capitalize text-gray-800">{method} Card</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Special Requests */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-800 mb-2">
                    Special Requests
                  </label>
                  <textarea
                    name="specialRequests"
                    value={bookingData.specialRequests}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-900"
                    placeholder="Any special requirements or requests..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Other Properties - Right Side */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Other Properties</h3>
              <p className="text-gray-700 text-sm mb-6">You might also be interested in these properties</p>
              
              <div className="space-y-4">
                {otherProperties.map((prop) => (
                  <Link
                    key={prop.id}
                    to={`/booking/${prop.id}`}
                    state={{ property: prop }}
                    className="block group"
                  >
                    <div className="flex gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <img 
                        src={prop.image} 
                        alt={prop.title}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {prop.title}
                        </h4>
                        <p className="text-gray-700 text-xs flex items-center gap-1 mb-1">
                          <FaMapMarkerAlt className="text-blue-600" /> {prop.location}
                        </p>
                        <p className="text-blue-600 font-bold">{prop.price}</p>
                        <span className="inline-block mt-1 text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                          {prop.type}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Contact Info */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Need Help?</h4>
                <p className="text-sm text-gray-800 mb-3">
                  Call us at <span className="font-bold text-blue-600">+1 (800) 123-4567</span>
                </p>
                <p className="text-sm text-gray-800">
                  Email: <span className="font-bold text-blue-600">bookings@realestate.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;