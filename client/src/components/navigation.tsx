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
          <div className="flex items-center space-x-2 min-w-0 flex-shrink">
            <img 
              src="/assets/zparx-logo-clean.png" 
              alt="ZparX Marketing Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain flex-shrink-0"
            />
            <span className="text-lg sm:text-xl font-bold text-gray-900 truncate">ZparX Marketing</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 xl:space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-primary transition-colors text-sm xl:text-base">
              Home
            </button>

            <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-primary transition-colors text-sm xl:text-base">
              About
            </button>

            <button 
              onClick={() => scrollToSection("contact")} 
              className="bg-primary text-white px-4 xl:px-6 py-2 rounded-full hover:bg-primary/90 transition-colors text-sm xl:text-base whitespace-nowrap"
            >
              Get Started
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 flex-shrink-0 p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3 mt-4">
              <button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-primary transition-colors text-left py-2">
                Home
              </button>

              <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-primary transition-colors text-left py-2">
                About
              </button>

              <div className="pt-2">
                <button 
                  onClick={() => scrollToSection("contact")} 
                  className="w-full bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors text-center"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
