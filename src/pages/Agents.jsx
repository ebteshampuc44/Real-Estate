import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { FaPhone, FaEnvelope, FaStar, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Agents = () => {
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

  const agents = [
    {
      id: 1,
      name: "John Doe",
      role: "Senior Real Estate Agent",
      experience: "8+ years",
      properties: 124,
      rating: 4.9,
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      phone: "+1 234 567 890",
      email: "john.doe@homefind.com"
    },
    {
      id: 2,
      name: "Sarah Smith",
      role: "Luxury Property Specialist",
      experience: "6+ years",
      properties: 98,
      rating: 4.8,
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      phone: "+1 234 567 891",
      email: "sarah.smith@homefind.com"
    },
    {
      id: 3,
      name: "Michael Johnson",
      role: "Commercial Real Estate Expert",
      experience: "10+ years",
      properties: 156,
      rating: 5.0,
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      phone: "+1 234 567 892",
      email: "michael.j@homefind.com"
    },
    {
      id: 4,
      name: "Emily Brown",
      role: "Residential Property Consultant",
      experience: "5+ years",
      properties: 87,
      rating: 4.7,
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      phone: "+1 234 567 893",
      email: "emily.b@homefind.com"
    },
    {
      id: 5,
      name: "David Wilson",
      role: "Investment Property Specialist",
      experience: "7+ years",
      properties: 112,
      rating: 4.8,
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      phone: "+1 234 567 894",
      email: "david.w@homefind.com"
    },
    {
      id: 6,
      name: "Lisa Anderson",
      role: "First-time Buyer Specialist",
      experience: "4+ years",
      properties: 76,
      rating: 4.9,
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      phone: "+1 234 567 895",
      email: "lisa.a@homefind.com"
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Agents</h1>
          <p className="text-xl text-white">Meet our team of professional real estate experts</p>
        </div>
      </div>

      {/* Agents Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent) => (
            <div key={agent.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-64">
                <img src={agent.image} alt={agent.name} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-lg flex items-center gap-1 shadow-lg">
                  <FaStar className="text-yellow-400" />
                  <span className="font-semibold text-gray-900">{agent.rating}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{agent.name}</h3>
                <p className="text-blue-600 mb-3">{agent.role}</p>
                <div className="flex justify-between text-sm text-gray-700 mb-4 pb-4 border-b border-gray-100">
                  <span>{agent.experience} Experience</span>
                  <span>{agent.properties} Properties</span>
                </div>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-800 flex items-center gap-2">
                    <FaPhone className="text-blue-600 text-sm" />
                    {agent.phone}
                  </p>
                  <p className="text-gray-800 flex items-center gap-2">
                    <FaEnvelope className="text-blue-600 text-sm" />
                    {agent.email}
                  </p>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Contact
                  </button>
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <FaFacebook className="text-gray-700" />
                  </button>
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <FaTwitter className="text-gray-700" />
                  </button>
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <FaLinkedin className="text-gray-700" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agents;