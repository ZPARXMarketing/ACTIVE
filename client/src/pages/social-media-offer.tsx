import { useState } from "react";
import { Check, ArrowRight, Star, Calendar, TrendingUp, Users, MessageCircle, Camera, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SocialMediaOffer() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      id: "starter",
      name: "Starter",
      price: "$497",
      period: "/month",
      description: "Perfect for small businesses getting started with social media",
      popular: false,
      features: [
        "3 posts per week (12 posts/month)",
        "Instagram + Facebook management",
        "Custom graphic design for each post",
        "Basic hashtag research",
        "Monthly performance report",
        "Email support",
        "Content calendar planning"
      ],
      includes: [
        { icon: Camera, text: "Professional content creation" },
        { icon: Calendar, text: "Consistent posting schedule" },
        { icon: BarChart3, text: "Performance tracking" }
      ]
    },
    {
      id: "growth",
      name: "Growth",
      price: "$797",
      period: "/month",
      description: "Ideal for businesses ready to scale their social presence",
      popular: true,
      features: [
        "5 posts per week (20 posts/month)",
        "Instagram + Facebook + LinkedIn",
        "Custom graphic design + video content",
        "Advanced hashtag strategy",
        "Story content (3 per week)",
        "Community management (respond to comments)",
        "Bi-weekly strategy calls",
        "Detailed analytics & insights"
      ],
      includes: [
        { icon: TrendingUp, text: "Growth-focused strategy" },
        { icon: MessageCircle, text: "Community engagement" },
        { icon: Users, text: "Multi-platform presence" }
      ]
    },
    {
      id: "premium",
      name: "Premium",
      price: "$1,197",
      period: "/month",
      description: "Complete social media domination for serious businesses",
      popular: false,
      features: [
        "Daily posts (30 posts/month)",
        "All major platforms (Instagram, Facebook, LinkedIn, TikTok)",
        "Video content + Reels + Stories",
        "Influencer outreach coordination",
        "Paid ad management (ad spend separate)",
        "24/7 community management",
        "Weekly strategy calls",
        "Competitor analysis",
        "Brand reputation monitoring",
        "Custom landing pages for campaigns"
      ],
      includes: [
        { icon: Star, text: "Premium content & strategy" },
        { icon: TrendingUp, text: "Paid advertising management" },
        { icon: Users, text: "Full-service social media" }
      ]
    }
  ];

  const benefits = [
    {
      icon: Camera,
      title: "Professional Content Creation",
      description: "High-quality graphics, videos, and copy that represents your brand perfectly"
    },
    {
      icon: TrendingUp,
      title: "Proven Growth Strategies",
      description: "Data-driven approaches that increase followers, engagement, and conversions"
    },
    {
      icon: Calendar,
      title: "Consistent Posting",
      description: "Never miss a post with our strategic content calendar and automated scheduling"
    },
    {
      icon: MessageCircle,
      title: "Community Management",
      description: "We engage with your audience and build meaningful relationships with customers"
    }
  ];

  const handleSelectPlan = (planId: string, planName: string, price: string) => {
    setSelectedPlan(planId);
    // Open Calendly with pre-filled information
    const calendlyUrl = `https://calendly.com/zparx/30min?text1=${encodeURIComponent(`Interested in ${planName} plan (${price}/month) for social media management`)}&name=Social Media Consultation`;
    window.open(calendlyUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img 
              src="/assets/zparx-logo-clean.png" 
              alt="ZparX Marketing Logo" 
              className="w-10 h-10 object-contain"
            />
            <div className="text-2xl font-bold text-purple-600">ZparX Marketing</div>
          </a>
          <Badge variant="secondary" className="bg-purple-100 text-purple-700">
            Social Media Management
          </Badge>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Social Media
            <span className="text-purple-600"> Management</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Let us handle your social media so you can focus on running your business. 
            Professional content, consistent posting, and real growth.
          </p>
          <div className="bg-purple-100 border border-purple-300 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-purple-800 font-semibold">
              🚀 Get started this week - content creation begins within 48 hours
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center border-2 hover:border-purple-200 transition-colors">
              <CardContent className="pt-6">
                <div className="bg-purple-100 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Social Media Plan
            </h2>
            <p className="text-lg text-gray-600">
              All plans include professional content creation, scheduling, and analytics
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <Card 
                key={plan.id} 
                className={`relative ${plan.popular ? 'border-2 border-purple-500 shadow-lg scale-105' : 'border border-gray-200'} transition-all hover:shadow-lg`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-purple-600 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Key Includes */}
                  <div className="space-y-3">
                    {plan.includes.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="bg-purple-100 p-1 rounded">
                          <item.icon className="w-4 h-4 text-purple-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full ${plan.popular ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-900 hover:bg-gray-800'} text-white`}
                    onClick={() => handleSelectPlan(plan.id, plan.name, plan.price)}
                  >
                    Choose {plan.name}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-lg p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Our Simple Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold text-lg mb-2">Strategy Call</h3>
              <p className="text-gray-600 text-sm">We learn about your brand, goals, and target audience</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold text-lg mb-2">Content Creation</h3>
              <p className="text-gray-600 text-sm">Our team creates high-quality, branded content for your approval</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold text-lg mb-2">Scheduling & Posting</h3>
              <p className="text-gray-600 text-sm">We handle all posting and community management</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="font-semibold text-lg mb-2">Growth & Optimization</h3>
              <p className="text-gray-600 text-sm">Monthly reports and strategy adjustments for continuous growth</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-2">How quickly can you start?</h3>
              <p className="text-gray-600 text-sm mb-4">We can begin content creation within 48 hours of your strategy call and have your first posts live within one week.</p>
              
              <h3 className="font-semibold text-lg mb-2">Do I own the content you create?</h3>
              <p className="text-gray-600 text-sm mb-4">Yes, all content created for your brand belongs to you completely. You can use it however you'd like.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Can I approve content before it goes live?</h3>
              <p className="text-gray-600 text-sm mb-4">Absolutely. We provide content calendars for your review and approval before any posts go live.</p>
              
              <h3 className="font-semibold text-lg mb-2">What if I want to cancel?</h3>
              <p className="text-gray-600 text-sm">All plans are month-to-month with 30 days notice for cancellation. No long-term contracts required.</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Grow Your Social Media Presence?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Book a free strategy call to discuss which plan is right for your business
          </p>
          <a
            href="https://calendly.com/zparx/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg rounded-lg font-semibold transition-colors"
          >
            Book Free Strategy Call
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          <p className="text-sm text-gray-500 mt-4">
            No commitment required • 30-minute consultation • Get your social media strategy
          </p>
        </div>
      </div>
    </div>
  );
}