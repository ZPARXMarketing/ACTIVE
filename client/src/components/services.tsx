import { Target, Palette, TrendingUp, Users, Megaphone, Handshake, Check } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Target,
      title: "Social Media Strategy & Planning",
      description: "Data-driven social media strategies customized for your business goals, target audience analysis, and competitive landscape research.",
      features: ["Competitor Analysis", "Content Calendars", "Audience Research"],
      gradient: "gradient-primary"
    },
    {
      icon: Palette,
      title: "Professional Content Creation",
      description: "High-quality visual content, engaging copywriting, and multimedia production designed to capture attention and drive engagement across all social platforms.",
      features: ["Graphic Design", "Video Production", "Copywriting"],
      gradient: "gradient-secondary"
    },
    {
      icon: TrendingUp,
      title: "Analytics & Performance Tracking",
      description: "Comprehensive social media analytics, detailed performance reporting, and ROI measurement to optimize campaigns and demonstrate measurable business impact.",
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
            Comprehensive Social Media Marketing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From strategic planning to campaign execution, we provide end-to-end social media marketing solutions 
            that drive engagement, increase brand awareness, and generate measurable business results.
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
