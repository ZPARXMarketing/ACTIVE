import { Lightbulb, BarChart, Clock, Rocket, ArrowRight } from "lucide-react";

export default function About() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    {
      icon: Lightbulb,
      title: "Creative Innovation",
      description: "Fresh ideas that make your brand stand out",
      color: "text-secondary"
    },
    {
      icon: BarChart,
      title: "Data-Driven Approach",
      description: "Every decision backed by analytics and insights",
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "Dedicated Support",
      description: "24/7 commitment to your success",
      color: "text-green-600"
    },
    {
      icon: Rocket,
      title: "Growth Focused",
      description: "Strategies designed for scalable results",
      color: "text-accent"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="ZparX Marketing team collaborating on social media marketing strategies in modern office" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-xl">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Dedicated</div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Expert Social Media Marketing Team
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              ZparX Marketing delivers comprehensive social media marketing solutions that transform your digital presence. 
              Our experienced team specializes in creating targeted campaigns that increase brand awareness, drive engagement, and generate measurable ROI.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              From strategic social media planning to content creation and performance analytics, we provide the expertise 
              your business needs to succeed in today's competitive digital marketplace.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <feature.icon className={`${feature.color} text-xl mt-1`} />
                  <div>
                    <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-colors inline-flex items-center"
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              Let's Discuss Your Goals
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
