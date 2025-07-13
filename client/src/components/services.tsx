import { Target, Palette, TrendingUp, Users, Megaphone, Handshake, Check } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Comprehensive social media strategies tailored to your brand's goals, audience, and industry landscape.",
      features: ["Competitor Analysis", "Content Calendars", "Audience Research"],
      gradient: "gradient-primary"
    },
    {
      icon: Palette,
      title: "Content Creation",
      description: "Engaging visual content, compelling copy, and multimedia that resonates with your target audience.",
      features: ["Graphic Design", "Video Production", "Copywriting"],
      gradient: "gradient-secondary"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Detailed reporting and insights to track growth, engagement, and ROI across all platforms.",
      features: ["Monthly Reports", "ROI Tracking", "Growth Metrics"],
      gradient: "gradient-accent"
    },
    {
      icon: Users,
      title: "Community Management",
      description: "Active engagement with your audience, responding to comments, and building meaningful relationships.",
      features: ["24/7 Monitoring", "Response Management", "Crisis Management"],
      gradient: "bg-gradient-to-r from-green-500 to-primary"
    },
    {
      icon: Megaphone,
      title: "Paid Advertising",
      description: "Targeted ad campaigns that maximize your budget and drive qualified leads to your business.",
      features: ["Facebook Ads", "Instagram Ads", "LinkedIn Ads"],
      gradient: "bg-gradient-to-r from-purple-500 to-secondary"
    },
    {
      icon: Handshake,
      title: "Influencer Partnerships",
      description: "Strategic collaborations with influencers to expand your reach and build authentic connections.",
      features: ["Influencer Vetting", "Campaign Management", "Performance Tracking"],
      gradient: "bg-gradient-to-r from-indigo-500 to-accent"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Social Media Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From strategy to execution, we handle every aspect of your social media presence 
            with creativity and data-driven insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow group">
              <div className={`w-16 h-16 ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2 text-sm text-gray-600">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
