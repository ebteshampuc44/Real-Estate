// Home.jsx - আপডেটেড ভার্সন

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHome, FaBuilding, FaKey, FaArrowRight, FaStar, FaBed, FaBath, FaRuler } from "react-icons/fa";
import { Link } from "react-router-dom"; // Link ইম্পোর্ট করুন

const Home = () => {
  const [sliderRef, setSliderRef] = useState(null);

  // স্লাইডার ইমেজ array
  const sliderImages = [
    {
      url: "https://i.ibb.co.com/4ws1Vbxb/pexels-sebastians-731082.jpg",
      alt: "Modern House"
    },
    {
      url: "https://i.ibb.co.com/d4CRQ8Dm/pexels-jacob-o-3033815-4601194.jpg",
      alt: "Luxury Villa"
    },
    {
      url: "https://i.ibb.co.com/m5nj9JPH/pexels-david-kanigan-239927285-18926515.jpg",
      alt: "City Apartment"
    }
  ];

  // Featured Properties Data
  const featuredProperties = [
    {
      id: 1,
      title: "Luxury Apartment",
      location: "New York, NY",
      price: "$500,000",
      beds: 3,
      baths: 2,
      sqft: "1,800",
      image: "https://i.ibb.co.com/4ws1Vbxb/pexels-sebastians-731082.jpg",
      rating: 4.8
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
      rating: 4.9
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
      rating: 4.7
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
      rating: 5.0
    }
  ];

  // Services Data
  const services = [
    {
      icon: <FaHome className="text-4xl text-blue-600" />,
      title: "Buy a Home",
      description: "Find your perfect home with our extensive property listings and expert guidance."
    },
    {
      icon: <FaKey className="text-4xl text-blue-600" />,
      title: "Rent a Property",
      description: "Discover affordable rental properties that match your lifestyle and budget."
    },
    {
      icon: <FaBuilding className="text-4xl text-blue-600" />,
      title: "Sell Your Property",
      description: "List your property with us and reach thousands of potential buyers."
    }
  ];

  // How It Works Data
  const howItWorks = [
    {
      step: "01",
      title: "Search Property",
      description: "Browse through thousands of properties using our smart search filters."
    },
    {
      step: "02",
      title: "Contact Agent",
      description: "Connect with professional agents who will guide you through the process."
    },
    {
      step: "03",
      title: "Buy or Rent",
      description: "Complete your transaction smoothly with our expert support."
    }
  ];

  // Popular Locations Data
  const locations = [
    { name: "New York", count: "245 properties", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=500" },
    { name: "Los Angeles", count: "189 properties", image: "https://images.unsplash.com/photo-1580655653885-65763e259ed8?w=500" },
    { name: "Chicago", count: "156 properties", image: "https://images.unsplash.com/photo-1494522358652-f30e61a5d313?w=500" },
    { name: "Miami", count: "132 properties", image: "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?w=500" }
  ];

  // Testimonials Data
  const testimonials = [
    {
      name: "John Doe",
      role: "Home Buyer",
      comment: "Great platform to find homes! The search process was seamless and I found my dream home within weeks.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Sarah Smith",
      role: "Property Investor",
      comment: "Excellent service and professional agents. Highly recommended for anyone looking to invest in real estate.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      name: "Michael Johnson",
      role: "First-time Buyer",
      comment: "The platform made buying my first home so easy. The agents were very helpful throughout the process.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/3.jpg"
    }
  ];

  // স্লাইডার সেটিংস
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    fade: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    arrows: false,
    appendDots: (dots) => (
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <ul className="flex gap-3">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 bg-white/50 rounded-full cursor-pointer hover:bg-white transition-all duration-300"></div>
    )
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section with Navbar */}
      <div className="relative h-screen">
        <Navbar />
        <Slider ref={setSliderRef} {...settings}>
          {sliderImages.map((image, index) => (
            <div key={index} className="relative h-screen">
              <div 
                className="h-screen bg-cover bg-center"
                style={{ backgroundImage: `url('${image.url}')` }}
              >
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="max-w-7xl mx-auto px-6 text-center w-full relative z-10">
                    <h1 className="text-7xl font-bold mb-6 text-white drop-shadow-lg animate-fadeIn">
                      Find your 
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r text-white">
                        future home
                      </span>
                    </h1>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow animate-slideUp">
                      Discover your perfect property with our smart search
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Featured Properties Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our handpicked selection of premium properties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
                  <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-lg flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span className="text-sm font-semibold text-gray-900">{property.rating}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{property.title}</h3>
                  <p className="text-gray-500 text-sm mb-3">{property.location}</p>
                  <p className="text-2xl font-bold text-blue-600 mb-3">{property.price}</p>
                  <div className="flex justify-between text-gray-500 text-sm mb-4">
                    <span className="flex items-center gap-1"><FaBed /> {property.beds} Beds</span>
                    <span className="flex items-center gap-1"><FaBath /> {property.baths} Baths</span>
                    <span className="flex items-center gap-1"><FaRuler /> {property.sqft} sqft</span>
                  </div>
                  <Link 
                    to={`/booking/${property.id}`}
                    state={{ property }}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    View Details <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/properties"
              className="inline-block bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Browse All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive real estate solutions for all your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="inline-block p-4 bg-blue-50 rounded-full mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Three simple steps to your dream property
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="text-6xl font-bold text-blue-200 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/3 -right-4 text-2xl text-gray-300">
                    <FaArrowRight />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Locations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Locations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover properties in most sought-after locations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <Link 
                to={`/properties?location=${location.name.toLowerCase()}`} 
                key={index} 
                className="relative h-64 rounded-xl overflow-hidden group cursor-pointer"
              >
                <img src={location.image} alt={location.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">{location.name}</h3>
                  <p className="text-sm opacity-90">{location.count}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real stories from happy clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section 
        className="py-20 bg-cover bg-center bg-fixed relative"
        style={{ 
          backgroundImage: `url('https://i.ibb.co.com/fYLqx9Xk/wallpaperflare-com-wallpaper.jpg')`
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">Ready to find your dream home?</h2>
          <p className="text-xl text-white mb-8 drop-shadow">
            Start your property search today with thousands of listings
          </p>
          <Link 
            to="/properties"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Explore Properties
          </Link>
        </div>
      </section>

      {/* অ্যানিমেশন স্টাইল */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Home;