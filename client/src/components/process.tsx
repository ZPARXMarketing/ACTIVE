export default function Process() {
  const steps = [
    {
      number: 1,
      title: "Discovery & Research",
      description: "We dive deep into your brand, audience, and competitors to understand your unique market position.",
      color: "bg-primary"
    },
    {
      number: 2,
      title: "Strategy Development",
      description: "Custom social media strategy tailored to your goals, timeline, and target audience preferences.",
      color: "bg-secondary"
    },
    {
      number: 3,
      title: "Content Creation & Launch",
      description: "Engaging content production and strategic campaign launch across your chosen platforms.",
      color: "bg-green-600"
    },
    {
      number: 4,
      title: "Monitor & Optimize",
      description: "Continuous monitoring, analysis, and optimization to ensure maximum ROI and sustained growth.",
      color: "bg-accent"
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Strategic Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic approach to social media success designed to deliver measurable results for your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className={`w-16 h-16 ${step.color} text-white rounded-full flex items-center justify-center mx-auto mb-4 relative z-10`}>
                <span className="text-xl font-bold">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-300 transform translate-x-8"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
