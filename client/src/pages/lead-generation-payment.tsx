import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Check, Target, TrendingUp, Users, Calendar } from "lucide-react";
import PayPalButton from "@/components/PayPalButton";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const leadGenPackage = {
  id: "lead-gen",
  name: "Lead Generation Service",
  price: "2000",
  description: "Get 10 quote-ready leads in 30 days or money back guarantee",
  features: [
    "Custom lead generation strategy",
    "Targeted ad campaigns across multiple platforms",
    "Lead qualification and scoring process",
    "30-day money-back guarantee",
    "Weekly progress reports and analytics",
    "Direct phone consultation sessions",
    "CRM integration and setup"
  ],
  benefits: [
    {
      icon: Target,
      title: "Targeted Approach",
      description: "We identify and target your ideal customers using advanced demographic and behavioral data"
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Our system consistently delivers high-quality leads that convert into paying customers"
    },
    {
      icon: Users,
      title: "Quote-Ready Leads",
      description: "Each lead is pre-qualified and ready to discuss your services, saving you valuable time"
    },
    {
      icon: Calendar,
      title: "30-Day Guarantee",
      description: "If we don't deliver 10 qualified leads in 30 days, you get your money back - no questions asked"
    }
  ]
};

export default function LeadGenerationPayment() {
  const [customerInfo, setCustomerInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    targetLocation: ""
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-navy-dark hover:text-purple-cta transition-colors mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to ZparX Marketing
          </Link>
          <h1 className="text-3xl font-bold text-navy-dark mb-2">Lead Generation Service</h1>
          <p className="text-gray-600">Get 10 quote-ready leads in 30 days or your money back</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Service Details */}
          <div className="space-y-6">
            <Card className="border-2 border-purple-cta">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl text-navy-dark">{leadGenPackage.name}</CardTitle>
                    <CardDescription className="mt-2 text-base">{leadGenPackage.description}</CardDescription>
                  </div>
                  <Badge className="bg-orange-accent text-white text-lg px-3 py-1">
                    Guaranteed Results
                  </Badge>
                </div>
                <div className="text-3xl font-bold text-navy-dark mt-4">
                  ${leadGenPackage.price}
                  <span className="text-lg font-normal text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-navy-dark mb-3">What's Included:</h3>
                <ul className="space-y-3">
                  {leadGenPackage.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-navy-dark">Why Choose Our Lead Generation?</h3>
              {leadGenPackage.benefits.map((benefit, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-start space-x-3">
                    <benefit.icon className="w-6 h-6 text-purple-cta flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-navy-dark">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm mt-1">{benefit.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Customer Information & Payment */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-navy-dark">Customer Information</CardTitle>
                <CardDescription>Tell us about your business to customize your lead generation strategy</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={customerInfo.firstName}
                      onChange={(e) => setCustomerInfo({...customerInfo, firstName: e.target.value})}
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={customerInfo.lastName}
                      onChange={(e) => setCustomerInfo({...customerInfo, lastName: e.target.value})}
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    value={customerInfo.company}
                    onChange={(e) => setCustomerInfo({...customerInfo, company: e.target.value})}
                    placeholder="Your Company LLC"
                  />
                </div>

                <div>
                  <Label htmlFor="industry">Industry</Label>
                  <Input
                    id="industry"
                    value={customerInfo.industry}
                    onChange={(e) => setCustomerInfo({...customerInfo, industry: e.target.value})}
                    placeholder="e.g., HVAC, Plumbing, Legal Services"
                  />
                </div>

                <div>
                  <Label htmlFor="targetLocation">Target Location</Label>
                  <Input
                    id="targetLocation"
                    value={customerInfo.targetLocation}
                    onChange={(e) => setCustomerInfo({...customerInfo, targetLocation: e.target.value})}
                    placeholder="e.g., Dallas, TX or nationwide"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Order Summary & Payment */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-navy-dark">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-navy-dark">{leadGenPackage.name}</div>
                    <div className="text-sm text-gray-600">10 quote-ready leads guaranteed</div>
                  </div>
                  <div className="text-xl font-bold text-navy-dark">${leadGenPackage.price}/month</div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-navy-dark">${leadGenPackage.price}/month</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    30-day money-back guarantee if we don't deliver 10 qualified leads
                  </p>
                </div>

                <div className="pt-4">
                  {customerInfo.firstName && customerInfo.lastName && customerInfo.email && customerInfo.company && customerInfo.industry ? (
                    <PayPalButton 
                      amount={leadGenPackage.price}
                      currency="USD"
                      intent="CAPTURE"
                    />
                  ) : (
                    <Button disabled className="w-full">
                      Please fill in all required information to proceed
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}