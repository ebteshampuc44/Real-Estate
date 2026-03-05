import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from "react-icons/fa";

const ContactUs = () => {
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    alert("Message sent successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header with Sliding Images - Same as other pages */}
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-white">Get in touch with our team for any inquiries</p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-xl p-6 text-center">
            <div className="inline-block p-3 bg-blue-50 rounded-full mb-3">
              <FaPhone className="text-xl text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
            <p className="text-gray-800">+1 234 567 890</p>
            <p className="text-gray-800">+1 234 567 891</p>
          </div>
          <div className="bg-white rounded-lg shadow-xl p-6 text-center">
            <div className="inline-block p-3 bg-blue-50 rounded-full mb-3">
              <FaEnvelope className="text-xl text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
            <p className="text-gray-800">info@homefind.com</p>
            <p className="text-gray-800">support@homefind.com</p>
          </div>
          <div className="bg-white rounded-lg shadow-xl p-6 text-center">
            <div className="inline-block p-3 bg-blue-50 rounded-full mb-3">
              <FaMapMarkerAlt className="text-xl text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
            <p className="text-gray-800">123 Main Street</p>
            <p className="text-gray-800">New York, NY 10001</p>
          </div>
          <div className="bg-white rounded-lg shadow-xl p-6 text-center">
            <div className="inline-block p-3 bg-blue-50 rounded-full mb-3">
              <FaClock className="text-xl text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Working Hours</h3>
            <p className="text-gray-800">Mon-Fri: 9AM - 6PM</p>
            <p className="text-gray-800">Sat: 10AM - 4PM</p>
          </div>
        </div>
      </div>

      {/* Contact Form & Map */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                Send Message <FaPaperPlane />
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.914770697!2d-74.119763!3d40.697403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1645564623456!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Office Location"
            ></iframe>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">How can I schedule a property viewing?</h3>
              <p className="text-gray-800">You can contact our agents directly or use our online booking system to schedule a viewing at your convenience.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">What documents do I need to buy a property?</h3>
              <p className="text-gray-800">Typically you'll need ID, proof of income, bank statements, and pre-approval letter from a lender.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Do you offer property management services?</h3>
              <p className="text-gray-800">Yes, we offer comprehensive property management services for landlords and investors.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">How long does the buying process take?</h3>
              <p className="text-gray-800">The typical home buying process takes 30-45 days from offer acceptance to closing.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;