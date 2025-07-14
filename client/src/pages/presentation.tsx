import { useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, Home } from "lucide-react";
import { Link } from "wouter";

const slides = [
  {
    title: "ZPARX MARKETING",
    content: (
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold text-blue-600 mb-8">ZPARX MARKETING</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-12">Here's what we are going to cover</h2>
        <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="space-y-4 text-left">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <span className="text-xl font-medium">Results</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <span className="text-xl font-medium">The problem</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <span className="text-xl font-medium">The solution</span>
            </div>
          </div>
          <div className="space-y-4 text-left">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <span className="text-xl font-medium">Our offer</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <span className="text-xl font-medium">About Us</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "About Us",
    content: (
      <div className="space-y-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">About Us</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
              <span className="text-2xl font-semibold">Small team of media buyers</span>
            </div>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
              <span className="text-2xl font-semibold">Located in Huntsville, Alabama (rocket city)</span>
            </div>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
              <span className="text-2xl font-semibold">Specialized in FB ads for Trade Businesses.</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Total Business Cap",
    content: (
      <div className="space-y-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Total Business Cap</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-12 mb-12">
            <h3 className="text-3xl font-bold text-red-600 text-center mb-6">
              We only service 10 customers total. Period.
            </h3>
          </div>
          <div className="space-y-8">
            <h4 className="text-2xl font-semibold text-gray-800 mb-8">Why do we only service 10 clients?</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h5 className="text-xl font-bold text-blue-600 mb-3">Quality &gt; Quantity</h5>
                <p className="text-gray-700">We rather work with fewer clients to produce better results.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h5 className="text-xl font-bold text-blue-600 mb-3">Better service</h5>
                <p className="text-gray-700">More time and resources per client.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h5 className="text-xl font-bold text-blue-600 mb-3">Internal business operations</h5>
                <p className="text-gray-700">The right people at the right place. We can handle growth and readiness to scale.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h5 className="text-xl font-bold text-blue-600 mb-3">Scalability</h5>
                <p className="text-gray-700">Willing to invest more into what works. We want to find businesses that can and want to scale.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "The Problem",
    content: (
      <div className="space-y-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">The Problem</h2>
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-red-500">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Sales and marketing</h3>
            <p className="text-lg text-gray-700">Most trade businesses are great at production, but lack marketing and sales skills. No proven system.</p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-red-500">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Offline marketing</h3>
            <p className="text-lg text-gray-700">Door knocking, tv and radio, yard signs, referrals, billboards. Not trackable or scalable.</p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-red-500">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Lead Generation websites</h3>
            <p className="text-lg text-gray-700">Hipages, HomeAdvisor, Thumbtack, etc. Duplicate and expensive leads.</p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-red-500">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Google ads PPC</h3>
            <p className="text-lg text-gray-700">Very popular and therefore extreme competition which creates high prices that kill margins.</p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-red-500">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">SEO</h3>
            <p className="text-lg text-gray-700">High competition, takes a long time to get results. Expensive with ZERO guaranteed results.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Our Goal",
    content: (
      <div className="space-y-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Goal</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-12">
            <p className="text-2xl text-center text-gray-800 leading-relaxed">
              Help local businesses generate more <span className="font-bold text-blue-600">high-quality, exclusive leads and deals</span> under their own brand, without wasting their time and money on duplicate and expensive "leads" that are impossible to get ahold of.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Our Offer & Closing Remarks",
    content: (
      <div className="space-y-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Offer</h2>
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-12">
            <h3 className="text-3xl font-bold text-green-600 text-center mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-center text-gray-800 mb-8">
              Join our exclusive group of 10 trade businesses and start generating high-quality leads with Facebook advertising.
            </p>
            <div className="text-center">
              <Link href="/#contact" className="bg-blue-600 text-white px-12 py-4 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-colors inline-block">
                Get Started Today
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Closing Remarks</h3>
            <p className="text-lg text-gray-700">
              Thank you for your time. We look forward to helping your business grow with proven Facebook advertising strategies.
            </p>
          </div>
        </div>
      </div>
    )
  }
];

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Top Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Website</span>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <img 
                  src="/assets/zparx-logo-clean.png" 
                  alt="ZparX Marketing Logo" 
                  className="w-8 h-8 object-contain"
                />
                <span className="text-lg font-bold text-gray-900">ZparX Marketing</span>
              </div>
              <span className="text-sm text-gray-500">
                {currentSlide + 1} / {slides.length}
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Presentation Container */}
      <div className="flex-1 flex flex-col">
        {/* Slide Content */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-2xl p-12 min-h-[600px] flex items-center justify-center">
              {slides[currentSlide].content}
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="bg-white border-t p-4">
          <div className="container mx-auto flex items-center justify-between">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                currentSlide === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-blue-600 hover:bg-blue-50'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Previous</span>
            </button>

            {/* Slide Indicators */}
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                currentSlide === slides.length - 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-blue-600 hover:bg-blue-50'
              }`}
            >
              <span>Next</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gray-50 border-t p-4">
          <div className="container mx-auto flex items-center justify-center space-x-4">
            <Link 
              href="/#contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Return to Website</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}