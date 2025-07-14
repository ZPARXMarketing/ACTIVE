import { useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, Home } from "lucide-react";
import { Link } from "wouter";

const slides = [
  {
    title: "ZPARX MARKETING",
    content: (
      <div className="text-center w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">ZPARX MARKETING</h1>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-8">Here's what we are going to cover</h2>
        <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
          <div className="space-y-3 text-left">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-lg font-medium">Results</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-lg font-medium">The problem</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-lg font-medium">The solution</span>
            </div>
          </div>
          <div className="space-y-3 text-left">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-lg font-medium">Our offer</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-lg font-medium">About Us</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "About Us",
    content: (
      <div className="text-center w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">About Us</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <span className="text-lg md:text-xl font-semibold">Small team of media buyers</span>
            </div>
          </div>
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <span className="text-lg md:text-xl font-semibold">Located in Huntsville, Alabama (rocket city)</span>
            </div>
          </div>
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <span className="text-lg md:text-xl font-semibold">Specialized in FB ads for Trade Businesses</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Total Business Cap",
    content: (
      <div className="text-center w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Total Business Cap</h2>
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-6 max-w-2xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-red-600">
            We only service 10 customers total. Period.
          </h3>
        </div>
        <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Why do we only service 10 clients?</h4>
        <div className="grid grid-cols-2 gap-3 max-w-2xl mx-auto">
          <div className="bg-blue-50 rounded-lg p-3">
            <h5 className="text-sm md:text-base font-bold text-blue-600 mb-1">Quality &gt; Quantity</h5>
            <p className="text-xs md:text-sm text-gray-700">Better results with fewer clients</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-3">
            <h5 className="text-sm md:text-base font-bold text-blue-600 mb-1">Better service</h5>
            <p className="text-xs md:text-sm text-gray-700">More time per client</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-3">
            <h5 className="text-sm md:text-base font-bold text-blue-600 mb-1">Right operations</h5>
            <p className="text-xs md:text-sm text-gray-700">Proper growth readiness</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-3">
            <h5 className="text-sm md:text-base font-bold text-blue-600 mb-1">Scalability</h5>
            <p className="text-xs md:text-sm text-gray-700">Find businesses that scale</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "The Problem",
    content: (
      <div className="text-center w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">The Problem</h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-red-50 rounded-lg p-3 border-l-4 border-red-500">
            <h3 className="text-sm md:text-base font-bold text-gray-800 mb-1">Sales and marketing</h3>
            <p className="text-xs md:text-sm text-gray-700">No proven system for marketing</p>
          </div>
          <div className="bg-red-50 rounded-lg p-3 border-l-4 border-red-500">
            <h3 className="text-sm md:text-base font-bold text-gray-800 mb-1">Offline marketing</h3>
            <p className="text-xs md:text-sm text-gray-700">Not trackable or scalable</p>
          </div>
          <div className="bg-red-50 rounded-lg p-3 border-l-4 border-red-500">
            <h3 className="text-sm md:text-base font-bold text-gray-800 mb-1">Lead websites</h3>
            <p className="text-xs md:text-sm text-gray-700">Duplicate and expensive leads</p>
          </div>
          <div className="bg-red-50 rounded-lg p-3 border-l-4 border-red-500">
            <h3 className="text-sm md:text-base font-bold text-gray-800 mb-1">Google ads PPC</h3>
            <p className="text-xs md:text-sm text-gray-700">High competition kills margins</p>
          </div>
          <div className="bg-red-50 rounded-lg p-3 border-l-4 border-red-500 md:col-span-2">
            <h3 className="text-sm md:text-base font-bold text-gray-800 mb-1">SEO</h3>
            <p className="text-xs md:text-sm text-gray-700">Takes long time, expensive with ZERO guaranteed results</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Our Goal",
    content: (
      <div className="text-center w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Goal</h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              Help local businesses generate more <span className="font-bold text-blue-600">high-quality, exclusive leads and deals</span> under their own brand, without wasting time and money on duplicate and expensive "leads" that are impossible to get ahold of.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Our Offer & Closing Remarks",
    content: (
      <div className="text-center w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Offer</h2>
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <h3 className="text-xl md:text-2xl font-bold text-green-600 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-base md:text-lg text-gray-800 mb-6">
              Join our exclusive group of 10 trade businesses and start generating high-quality leads with Facebook advertising.
            </p>
            <Link href="/#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-block">
              Get Started Today
            </Link>
          </div>
          <div className="text-center">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Closing Remarks</h3>
            <p className="text-sm md:text-base text-gray-700">
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
    <div className="h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col">
      {/* Top Navigation - Fixed Height */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm border-b flex-shrink-0">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium text-sm">Back to Website</span>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <img 
                  src="/assets/zparx-logo-clean.png" 
                  alt="ZparX Marketing Logo" 
                  className="w-7 h-7 object-contain"
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

      {/* Slide Content - Takes remaining space */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-6">
        <div className="w-full h-full max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-2xl h-full flex items-center justify-center p-6 md:p-8 overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              {slides[currentSlide].content}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation - Fixed Height */}
      <div className="bg-white border-t flex-shrink-0">
        {/* Navigation Controls */}
        <div className="px-4 py-3 border-b">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                currentSlide === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-blue-600 hover:bg-blue-50'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {/* Slide Indicators */}
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                currentSlide === slides.length - 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-blue-600 hover:bg-blue-50'
              }`}
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gray-50 px-4 py-3">
          <div className="flex items-center justify-center space-x-3 max-w-4xl mx-auto">
            <Link 
              href="/#contact" 
              className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
            >
              Contact Us
            </Link>
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors px-6 py-2.5 rounded-lg hover:bg-gray-100 text-sm"
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