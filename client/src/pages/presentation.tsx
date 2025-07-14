import { ArrowLeft, Download, Play, Users, TrendingUp, Target } from "lucide-react";
import { Link } from "wouter";

export default function Presentation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-2">
              <img 
                src="/assets/zparx-logo-clean.png" 
                alt="ZparX Marketing Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-lg font-bold text-gray-900">ZparX Marketing</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your <span className="text-blue-600">Social Media</span> Presence
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Professional presentation showcasing our comprehensive social media marketing strategies 
            and proven methodologies for business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Start Presentation</span>
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </section>

      {/* Presentation Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What You'll Discover
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Strategic Planning</h3>
              <p className="text-gray-600">
                Our proven framework for developing comprehensive social media strategies 
                that align with your business objectives.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Growth Methodologies</h3>
              <p className="text-gray-600">
                Data-driven approaches to increase engagement, followers, and 
                ultimately drive conversions for your business.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Audience Engagement</h3>
              <p className="text-gray-600">
                Best practices for building authentic connections with your target 
                audience and fostering community growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Presentation Slides Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Presentation Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Current Market Landscape",
                description: "Analysis of social media trends and opportunities",
                slideNumber: "01"
              },
              {
                title: "Strategy Framework", 
                description: "Our proven 5-step methodology for success",
                slideNumber: "02"
              },
              {
                title: "Content Strategy",
                description: "Creating engaging content that converts",
                slideNumber: "03"
              },
              {
                title: "Platform Optimization",
                description: "Maximizing reach across all social channels",
                slideNumber: "04"
              },
              {
                title: "Analytics & ROI",
                description: "Measuring success and optimizing performance",
                slideNumber: "05"
              },
              {
                title: "Next Steps",
                description: "How to get started with ZparX Marketing",
                slideNumber: "06"
              }
            ].map((slide, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-sm text-blue-600 font-semibold mb-2">
                  Slide {slide.slideNumber}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {slide.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {slide.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Social Media Strategy?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our proven methodologies can help your business 
            achieve its social media marketing goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Schedule Consultation
            </Link>
            <Link href="/" className="border border-blue-400 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img 
              src="/assets/zparx-logo-clean.png" 
              alt="ZparX Marketing Logo" 
              className="w-8 h-8 object-contain"
            />
            <span className="text-lg font-bold">ZparX Marketing</span>
          </div>
          <p className="text-gray-400">
            © 2024 ZparX Marketing. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}