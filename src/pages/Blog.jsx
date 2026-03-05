import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { FaCalendar, FaUser, FaComments, FaArrowRight } from "react-icons/fa";

const Blog = () => {
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

  const blogPosts = [
    {
      id: 1,
      title: "10 Tips for First-Time Home Buyers",
      excerpt: "Essential advice for navigating the real estate market as a first-time buyer. Learn about budgeting, mortgage pre-approval, and finding the right neighborhood for your needs.",
      author: "John Doe",
      date: "Mar 15, 2024",
      comments: 24,
      image: "https://i.ibb.co.com/4ws1Vbxb/pexels-sebastians-731082.jpg",
      category: "Buying Guide"
    },
    {
      id: 2,
      title: "Understanding Mortgage Rates in 2024",
      excerpt: "A comprehensive guide to current mortgage rates and how they affect your purchase. Get insights on fixed vs variable rates and tips for securing the best deal.",
      author: "Sarah Smith",
      date: "Mar 12, 2024",
      comments: 18,
      image: "https://i.ibb.co.com/d4CRQ8Dm/pexels-jacob-o-3033815-4601194.jpg",
      category: "Finance"
    },
    {
      id: 3,
      title: "Home Staging Tips That Actually Work",
      excerpt: "Professional staging secrets to help your home sell faster and for more money. Simple changes that make a big impact on potential buyers.",
      author: "Emily Brown",
      date: "Mar 10, 2024",
      comments: 31,
      image: "https://i.ibb.co.com/m5nj9JPH/pexels-david-kanigan-239927285-18926515.jpg",
      category: "Selling Tips"
    },
    {
      id: 4,
      title: "Best Neighborhoods for Families",
      excerpt: "Discover family-friendly communities with great schools and amenities. From parks to shopping centers, find the perfect place to raise your children.",
      author: "Michael Johnson",
      date: "Mar 8, 2024",
      comments: 42,
      image: "https://i.ibb.co.com/4ws1Vbxb/pexels-sebastians-731082.jpg",
      category: "Neighborhood Guide"
    },
    {
      id: 5,
      title: "Real Estate Investment Strategies",
      excerpt: "Learn how to build wealth through smart property investments. From rental properties to fix-and-flip, discover strategies that work in today's market.",
      author: "David Wilson",
      date: "Mar 5, 2024",
      comments: 27,
      image: "https://i.ibb.co.com/d4CRQ8Dm/pexels-jacob-o-3033815-4601194.jpg",
      category: "Investment"
    },
    {
      id: 6,
      title: "Renovation Tips That Add Value",
      excerpt: "Home improvements that give you the best return on investment. Which renovations pay off and which ones to avoid when selling your home.",
      author: "Lisa Anderson",
      date: "Mar 3, 2024",
      comments: 15,
      image: "https://i.ibb.co.com/m5nj9JPH/pexels-david-kanigan-239927285-18926515.jpg",
      category: "Home Improvement"
    }
  ];

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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Blog</h1>
          <p className="text-xl text-white">Latest insights and news from the real estate world</p>
        </div>
      </div>

      {/* Blog Grid - No Pagination */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-700 mb-4 line-clamp-3 text-sm leading-relaxed">{post.excerpt}</p>
                
                {/* Author Info - Smaller and cleaner */}
                <div className="flex items-center gap-3 text-xs text-gray-600 mb-4 pb-3 border-b border-gray-100">
                  <span className="flex items-center gap-1">
                    <FaUser className="text-blue-600 text-xs" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCalendar className="text-blue-600 text-xs" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaComments className="text-blue-600 text-xs" />
                    {post.comments}
                  </span>
                </div>
                
                {/* Read More Link */}
                <Link 
                  to={`/article/${post.id}`}
                  className="text-blue-600 font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all mt-auto group"
                >
                  Read Full Article 
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Simple note instead of pagination */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Stay tuned for more articles and updates from our team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;