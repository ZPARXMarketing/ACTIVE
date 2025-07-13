import { Eye, Heart, DollarSign, Shield } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: Eye,
      title: "Increased Visibility",
      description: "Reach millions of potential customers across multiple platforms and expand your brand's digital footprint.",
      color: "text-primary"
    },
    {
      icon: Heart,
      title: "Enhanced Engagement",
      description: "Build meaningful relationships with your audience through authentic conversations and valuable content.",
      color: "text-secondary"
    },
    {
      icon: DollarSign,
      title: "Revenue Growth",
      description: "Convert social media followers into paying customers with strategic campaigns and targeted messaging.",
      color: "text-green-600"
    },
    {
      icon: Shield,
      title: "Brand Authority",
      description: "Establish your business as an industry leader through consistent, valuable content and thought leadership.",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Social Media Marketing Matters
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In today's digital landscape, social media isn't just an option—it's essential for business growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <benefit.icon className={`${benefit.color} text-2xl`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
