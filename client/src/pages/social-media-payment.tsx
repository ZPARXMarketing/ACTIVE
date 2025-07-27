import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";
import PayPalButton from "@/components/PayPalButton";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const socialMediaPlans = [
  {
    id: "starter",
    name: "Social Media Starter",
    price: "999",
    description: "Perfect for small businesses getting started with social media",
    features: [
      "3 Posts per week",
      "Basic content creation",
      "Monthly analytics report",
      "Email support"
    ]
  },
  {
    id: "growth",
    name: "Growth Package",
    price: "1499",
    description: "Ideal for growing businesses wanting more engagement",
    popular: true,
    features: [
      "5 Posts per week",
      "Advanced content creation",
      "Weekly analytics reports",
      "Priority support",
      "Story management"
    ]
  },
  {
    id: "premium",
    name: "Premium Package", 
    price: "2499",
    description: "Complete social media management for serious growth",
    features: [
      "Daily posts",
      "Premium content creation",
      "Real-time analytics",
      "24/7 phone support",
      "Community management",
      "Influencer outreach"
    ]
  }
];

export default function SocialMediaPayment() {
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [customerInfo, setCustomerInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: ""
  });

  const selectedPlanData = socialMediaPlans.find(plan => plan.id === selectedPlan);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-navy-dark hover:text-purple-cta transition-colors mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to ZparX Marketing
          </Link>
          <h1 className="text-3xl font-bold text-navy-dark mb-2">Social Media Management</h1>
          <p className="text-gray-600">Choose the perfect social media package for your business</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Plans Selection */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-navy-dark mb-4">Choose Your Plan</h2>
            
            <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan} className="space-y-4">
              {socialMediaPlans.map((plan) => (
                <div key={plan.id} className="relative">
                  <RadioGroupItem value={plan.id} id={plan.id} className="sr-only" />
                  <Label
                    htmlFor={plan.id}
                    className={`block cursor-pointer transition-all ${
                      selectedPlan === plan.id
                        ? "ring-2 ring-purple-cta"
                        : "hover:ring-1 hover:ring-gray-300"
                    }`}
                  >
                    <Card className="relative">
                      {plan.popular && (
                        <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-orange-accent text-white">
                          <Star className="w-3 h-3 mr-1" />
                          Most Popular
                        </Badge>
                      )}
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl text-navy-dark">{plan.name}</CardTitle>
                            <CardDescription className="mt-1">{plan.description}</CardDescription>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-navy-dark">${plan.price}</div>
                            <div className="text-sm text-gray-500">/month</div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {plan.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm">
                              <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Customer Information & Payment */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-navy-dark">Customer Information</CardTitle>
                <CardDescription>Please fill in your details to complete your order</CardDescription>
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
              </CardContent>
            </Card>

            {/* Order Summary & Payment */}
            {selectedPlan && selectedPlanData && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-navy-dark">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-navy-dark">{selectedPlanData.name}</div>
                      <div className="text-sm text-gray-600">{selectedPlanData.description}</div>
                    </div>
                    <div className="text-xl font-bold text-navy-dark">${selectedPlanData.price}/month</div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center text-lg font-semibold">
                      <span>Total</span>
                      <span className="text-navy-dark">${selectedPlanData.price}/month</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    {customerInfo.firstName && customerInfo.lastName && customerInfo.email ? (
                      <PayPalButton 
                        amount={selectedPlanData.price}
                        currency="USD"
                        intent="CAPTURE"
                      />
                    ) : (
                      <Button disabled className="w-full">
                        Please fill in customer information to proceed
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {!selectedPlan && (
              <Card>
                <CardContent className="text-center py-8">
                  <p className="text-gray-600">Please select a plan to continue</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}