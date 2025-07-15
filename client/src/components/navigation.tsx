import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/assets/zparx-logo-clean.png" 
              alt="ZparX Marketing Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold text-gray-900">ZparX Marketing</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("services")} className="text-gray-700 hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("process")} className="text-gray-700 hover:text-primary transition-colors">
              Process
            </button>
            <a href="/funnel" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors font-semibold">
              Lead Generation
            </a>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors"
            >
              Get Started
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4 mt-4">
              <button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-primary transition-colors text-left">
                Home
              </button>
              <button onClick={() => scrollToSection("services")} className="text-gray-700 hover:text-primary transition-colors text-left">
                Services
              </button>
              <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-primary transition-colors text-left">
                About
              </button>
              <button onClick={() => scrollToSection("process")} className="text-gray-700 hover:text-primary transition-colors text-left">
                Process
              </button>
              <a href="/funnel" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors text-center font-semibold">
                Lead Generation
              </a>
              <button 
                onClick={() => scrollToSection("contact")} 
                className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors text-center"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
