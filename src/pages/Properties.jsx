import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom';
import { FaBed, FaBath, FaRuler, FaSearch, FaMapMarkerAlt } from "react-icons/fa";

const Properties = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  
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

  const properties = [
    {
      id: 1,
      title: "Luxury Apartment",
      location: "New York, NY",
      price: "$500,000",
      beds: 3,
      baths: 2,
      sqft: "1,800",
      image: "https://i.ibb.co.com/4ws1Vbxb/pexels-sebastians-731082.jpg",
      type: "Apartment",
      description: "Beautiful luxury apartment with modern amenities and stunning city views."
    },
    {
      id: 2,
      title: "Modern Villa",
      location: "Los Angeles, CA",
      price: "$850,000",
      beds: 4,
      baths: 3,
      sqft: "2,500",
      image: "https://i.ibb.co.com/d4CRQ8Dm/pexels-jacob-o-3033815-4601194.jpg",
      type: "Villa",
      description: "Spacious modern villa with pool, garden, and contemporary architecture."
    },
    {
      id: 3,
      title: "Downtown Condo",
      location: "Chicago, IL",
      price: "$320,000",
      beds: 2,
      baths: 2,
      sqft: "1,200",
      image: "https://i.ibb.co.com/m5nj9JPH/pexels-david-kanigan-239927285-18926515.jpg",
      type: "Condo",
      description: "Cozy downtown condo with easy access to shopping and entertainment."
    },
    {
      id: 4,
      title: "Beach House",
      location: "Miami, FL",
      price: "$750,000",
      beds: 4,
      baths: 3,
      sqft: "2,200",
      image: "https://i.ibb.co.com/4ws1Vbxb/pexels-sebastians-731082.jpg",
      type: "House",
      description: "Stunning beachfront property with direct access to the shore."
    },
    {
      id: 5,
      title: "Mountain Retreat",
      location: "Denver, CO",
      price: "$620,000",
      beds: 3,
      baths: 2,
      sqft: "1,900",
      image: "https://i.ibb.co.com/d4CRQ8Dm/pexels-jacob-o-3033815-4601194.jpg",
      type: "Cabin",
      description: "Cozy mountain cabin with breathtaking views and peaceful surroundings."
    },
    {
      id: 6,
      title: "City Penthouse",
      location: "New York, NY",
      price: "$1,200,000",
      beds: 3,
      baths: 3,
      sqft: "2,100",
      image: "https://i.ibb.co.com/m5nj9JPH/pexels-david-kanigan-239927285-18926515.jpg",
      type: "Penthouse",
      description: "Luxurious penthouse with panoramic city views and rooftop terrace."
    }
  ];

  // Filter properties based on search
  const filteredProperties = properties.filter(property => {
    return property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
           property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
           property.type.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header with Sliding Images */}
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Properties</h1>
          <p className="text-xl text-white">Discover your perfect property from our extensive collection</p>
        </div>
      </div>

      {/* Simple Search Bar - Previous Design */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-20">
        <div className="bg-white rounded-lg shadow-xl p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search by location, property type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900 placeholder-gray-400"
              />
            </div>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <p className="text-gray-600">
          Showing <span className="font-semibold text-blue-600">{filteredProperties.length}</span> properties
          {searchTerm && <span> for "<span className="font-semibold">{searchTerm}</span>"</span>}
        </p>
      </div>

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <div key={property.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                  {property.type}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-blue-600 px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                  {property.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{property.title}</h3>
                <p className="text-gray-500 flex items-center gap-2 mb-4">
                  <FaMapMarkerAlt className="text-blue-600" />
                  {property.location}
                </p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{property.description}</p>
                <div className="flex justify-between text-gray-500 text-sm border-t border-gray-100 pt-4 mb-4">
                  <span className="flex items-center gap-2"><FaBed className="text-blue-600" /> {property.beds} Beds</span>
                  <span className="flex items-center gap-2"><FaBath className="text-blue-600" /> {property.baths} Baths</span>
                  <span className="flex items-center gap-2"><FaRuler className="text-blue-600" /> {property.sqft} sqft</span>
                </div>
                <Link 
                  to={`/booking/${property.id}`}
                  state={{ property }}
                  className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 font-semibold shadow-md hover:shadow-lg"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No properties found</h3>
            <p className="text-gray-600">Try adjusting your search</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;