import { TrendingUp, ArrowUp, Clock, Palette, Target } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-navy-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              We Generate{" "}
              <span className="text-orange-highlight font-bold">
                Quote-Ready
              </span>{" "}
              Leads for Your Local Business
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              No Heavy Lifting Required! We handle the ads, qualify the leads, and deliver them straight to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("lead-capture")}
                className="bg-purple-cta text-white px-8 py-4 rounded hover:bg-purple-cta/90 transition-colors text-center font-bold"
              >
                Get More Leads!
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-1 transition-transform">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-navy-dark">Social Media Strategy</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <Clock className="w-8 h-8 text-purple-cta mx-auto mb-2" />
                    <div className="text-sm font-bold text-purple-cta">24/7</div>
                    <div className="text-xs text-gray-600">Support</div>
                  </div>
                  <div className="text-center">
                    <Palette className="w-8 h-8 text-orange-highlight mx-auto mb-2" />
                    <div className="text-sm font-bold text-orange-highlight">Creative</div>
                    <div className="text-xs text-gray-600">Content</div>
                  </div>
                  <div className="text-center">
                    <Target className="w-8 h-8 text-red-500 mx-auto mb-2" />
                    <div className="text-sm font-bold text-red-500">Results</div>
                    <div className="text-xs text-gray-600">Focused</div>
                  </div>
                </div>
                <div className="h-24 bg-gradient-to-r from-purple-cta/20 to-orange-highlight/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <ArrowUp className="w-6 h-6 text-purple-cta mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Strategy Planning</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
