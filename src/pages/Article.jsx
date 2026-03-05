import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link, useParams } from "react-router-dom";
import { FaCalendar, FaUser, FaComments, FaArrowLeft, FaFacebook, FaTwitter, FaLinkedin, FaLink } from "react-icons/fa";

const Article = () => {
  const { id } = useParams();
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

  // All blog posts data
  const allPosts = [
    {
      id: 1,
      title: "10 Tips for First-Time Home Buyers",
      fullContent: "Buying your first home is an exciting milestone, but it can also be overwhelming. Here are 10 essential tips to help you navigate the process with confidence.\n\n1. Start with Your Budget: Before you start looking at homes, determine how much you can afford. Consider your monthly income, expenses, and how much you have saved for a down payment.\n\n2. Get Pre-Approved: A mortgage pre-approval shows sellers you're serious and gives you a clear idea of your price range. It also speeds up the buying process once you find the right home.\n\n3. Research Neighborhoods: Location is everything in real estate. Research different areas to find one that fits your lifestyle, commute needs, and budget.\n\n4. Find the Right Real Estate Agent: A good agent will guide you through the process, negotiate on your behalf, and help you find properties that match your criteria.\n\n5. Don't Skip the Home Inspection: A professional inspection can reveal issues you might miss and save you from costly repairs down the road.\n\n6. Think Long-Term: Consider your future plans. Will this home still work for you in 5-10 years? Think about factors like family planning and career changes.\n\n7. Understand All Costs: Beyond the purchase price, factor in property taxes, insurance, maintenance, and potential HOA fees.\n\n8. Be Ready to Compromise: You might not find a home that checks every box. Prioritize your must-haves and be flexible on the nice-to-haves.\n\n9. Don't Skip the Final Walkthrough: This is your last chance to ensure everything is in order before closing. Check that requested repairs were made and the home is in agreed-upon condition.\n\n10. Read Everything Before Signing: Review all documents carefully and ask questions about anything you don't understand. Your agent and lawyer are there to help.\n\nRemember, buying a home is a journey. Take your time, do your research, and don't be afraid to ask questions every step of the way.",
      excerpt: "Essential advice for navigating the real estate market as a first-time buyer. Learn about budgeting, mortgage pre-approval, and finding the right neighborhood for your needs.",
      author: "John Doe",
      date: "Mar 15, 2024",
      comments: 24,
      image: "https://i.ibb.co.com/4ws1Vbxb/pexels-sebastians-731082.jpg",
      category: "Buying Guide",
      authorBio: "John is a senior real estate agent with over 8 years of experience helping first-time buyers find their dream homes.",
      tags: ["First-Time Buyers", "Home Buying Tips", "Real Estate Guide"]
    },
    {
      id: 2,
      title: "Understanding Mortgage Rates in 2024",
      fullContent: "Mortgage rates are one of the most important factors affecting your home buying budget. Here's what you need to know about rates in 2024.\n\nThe current economic landscape has created unique conditions for mortgage rates. With inflation concerns and Federal Reserve policies, rates have seen significant fluctuations.\n\nFixed vs. Variable Rates: Fixed-rate mortgages offer stability with the same interest rate for the entire loan term. Variable rates may start lower but can change over time, potentially saving money if rates drop or costing more if they rise.\n\nFactors That Affect Your Rate: Your credit score, down payment amount, loan term, and debt-to-income ratio all play a role in the rate you're offered. Even small differences in rates can mean thousands of dollars over the life of your loan.\n\nWhen to Lock Your Rate: Once you find a rate you're comfortable with, you can lock it in for a period of time. This protects you from rate increases while you complete the buying process.\n\nTips for Getting the Best Rate: Shop around with multiple lenders, improve your credit score, consider buying points to lower your rate, and compare loan estimates carefully.\n\nRemember that the lowest rate isn't always the best deal. Consider the total cost of the loan, including fees and closing costs.",
      excerpt: "A comprehensive guide to current mortgage rates and how they affect your purchase. Get insights on fixed vs variable rates and tips for securing the best deal.",
      author: "Sarah Smith",
      date: "Mar 12, 2024",
      comments: 18,
      image: "https://i.ibb.co.com/d4CRQ8Dm/pexels-jacob-o-3033815-4601194.jpg",
      category: "Finance",
      authorBio: "Sarah is a mortgage specialist and financial advisor with expertise in real estate financing.",
      tags: ["Mortgage Rates", "Home Financing", "Interest Rates"]
    },
    {
      id: 3,
      title: "Home Staging Tips That Actually Work",
      fullContent: "Professional home staging can make a huge difference in how quickly your home sells and for how much. Here are staging secrets that actually work.\n\nDeclutter and Depersonalize: Remove personal items like family photos and collections. Buyers need to imagine themselves in the space, which is harder when they see your personal belongings.\n\nDeep Clean Everything: A spotless home signals that it's been well-maintained. Pay special attention to kitchens and bathrooms, and don't forget windows and floors.\n\nNeutralize Colors: While you might love bold colors, neutral walls appeal to more buyers. Consider repainting in shades of beige, gray, or off-white.\n\nArrange Furniture for Flow: Create conversation areas and make sure rooms feel spacious. Remove oversized pieces that make rooms feel cramped.\n\nLet There Be Light: Open curtains and blinds, turn on all lights, and consider adding lamps to dark corners. Bright, well-lit rooms feel larger and more inviting.\n\nAdd Fresh Touches: Fresh flowers, bowls of fruit, or neatly folded towels in bathrooms add life to the space without overwhelming it.\n\nDon't Forget Curb Appeal: The outside of your home creates the first impression. Keep the lawn mowed, add potted plants, and make sure the entryway is welcoming.\n\nStage Each Room's Purpose: Help buyers understand how to use each space. A small room might be staged as a home office or cozy reading nook.\n\nRemember, the goal is to help buyers see your home as their future home. Professional staging is an investment that typically pays off in a faster sale and higher price.",
      excerpt: "Professional staging secrets to help your home sell faster and for more money. Simple changes that make a big impact on potential buyers.",
      author: "Emily Brown",
      date: "Mar 10, 2024",
      comments: 31,
      image: "https://i.ibb.co.com/m5nj9JPH/pexels-david-kanigan-239927285-18926515.jpg",
      category: "Selling Tips",
      authorBio: "Emily is an interior designer and home staging expert who has helped hundreds of homeowners prepare their properties for sale.",
      tags: ["Home Staging", "Selling Tips", "Home Improvement"]
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

  // Find current article
  const article = allPosts.find(post => post.id === parseInt(id)) || allPosts[0];
  
  // Filter other posts (excluding current article)
  const otherPosts = allPosts.filter(post => post.id !== parseInt(id)).slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header with Sliding Images */}
      <div className="relative pt-32 pb-16 overflow-hidden">
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
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          ))}
        </div>
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {slideImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'w-6 bg-white' : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Article Details</h1>
          <p className="text-xl text-white">In-depth insights from our real estate experts</p>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Article - Left Side (2/3 width) */}
          <div className="lg:col-span-2">
            {/* Back to Blog Link */}
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 group"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>

            {/* Article Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Article Image */}
              <div className="relative h-96">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-6 left-6 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {article.category}
                </span>
              </div>

              {/* Article Content */}
              <div className="p-8">
                {/* Title */}
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{article.title}</h1>
                
                {/* Author Info */}
                <div className="flex items-center gap-6 text-sm text-gray-700 mb-6 pb-6 border-b border-gray-200">
                  <span className="flex items-center gap-2">
                    <FaUser className="text-blue-600" />
                    {article.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaCalendar className="text-blue-600" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaComments className="text-blue-600" />
                    {article.comments} Comments
                  </span>
                </div>

                {/* Full Article Content */}
                <div className="prose prose-lg max-w-none">
                  {article.fullContent ? (
                    article.fullContent.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-gray-800 mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="text-gray-800 mb-4 leading-relaxed">{article.excerpt}</p>
                  )}
                </div>

                {/* Tags */}
                {article.tags && (
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">Tags:</h3>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Share Buttons */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Share this article:</h3>
                  <div className="flex gap-3">
                    <button className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                      <FaFacebook />
                    </button>
                    <button className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                      <FaTwitter />
                    </button>
                    <button className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                      <FaLinkedin />
                    </button>
                    <button className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                      <FaLink />
                    </button>
                  </div>
                </div>

                {/* Author Bio */}
                {article.authorBio && (
                  <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-2">About {article.author}</h3>
                    <p className="text-gray-700 text-sm">{article.authorBio}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar - Right Side (1/3 width) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Other Articles */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">More Articles</h3>
                <p className="text-gray-600 text-sm mb-6">You might also be interested in these</p>
                
                <div className="space-y-4">
                  {otherPosts.map((post) => (
                    <Link
                      key={post.id}
                      to={`/article/${post.id}`}
                      className="block group"
                    >
                      <div className="flex gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-gray-500 text-xs flex items-center gap-1 mt-1">
                            <FaCalendar className="text-blue-600" /> {post.date}
                          </p>
                          <span className="inline-block mt-1 text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* View All Link */}
                <Link 
                  to="/blog"
                  className="block text-center mt-6 pt-4 border-t border-gray-200 text-blue-600 font-semibold hover:text-blue-700"
                >
                  View All Articles
                </Link>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Newsletter</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Get the latest real estate insights delivered to your inbox
                </p>
                <form className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email address"
                    className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none"
                  />
                  <button className="w-full bg-white text-blue-600 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Categories</h3>
                <div className="space-y-2">
                  {['Buying Guide', 'Finance', 'Selling Tips', 'Neighborhood Guide', 'Investment', 'Home Improvement'].map((cat, index) => (
                    <Link 
                      key={index}
                      to={`/blog?category=${cat.toLowerCase().replace(' ', '-')}`}
                      className="block text-gray-700 hover:text-blue-600 text-sm py-1"
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;