export default function Process() {
  const steps = [
    {
      number: 1,
      title: "Gather Content",
      description: "In the initial step, we collect visuals that highlight your craftsmanship. These form the foundation of our strategy, serving to attract a great number of potential clients to your business.",
      color: "bg-purple-cta"
    },
    {
      number: 2,
      title: "Launch Ads",
      description: "Next, we launch ads based on the content we've collected. These ads are strategically designed and placed on popular social media platforms to capture clients' attention.",
      color: "bg-orange-highlight"
    },
    {
      number: 3,
      title: "Generate Leads",
      description: "Finally, we collect information from individuals who are genuinely interested in your services. Prioritizing quote-ready leads and eliminating tire kickers.",
      color: "bg-red-500"
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            Our Process
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className={`w-16 h-16 ${step.color} text-white rounded-full flex items-center justify-center mx-auto mb-4 relative z-10`}>
                <span className="text-xl font-bold">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold text-navy-dark mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-300 transform translate-x-8"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
