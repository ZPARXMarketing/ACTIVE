import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import PayPalButton from "@/components/PayPalButton";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const paymentPlans = [
  {
    id: "starter",
    name: "Social Media Starter",
    price: "497",
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
    price: "797",
    description: "Ideal for growing businesses wanting more engagement",
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
    price: "1197",
    description: "Complete social media management for serious growth",
    features: [
      "Daily posts",
      "Premium content creation",
      "Real-time analytics",
      "24/7 phone support",
      "Community management",
      "Influencer outreach"
    ]
  },
  {
    id: "lead-gen",
    name: "Lead Generation Service",
    price: "997",
    description: "Get 10 quote-ready leads in 30 days or money back",
    features: [
      "Custom lead generation strategy",
      "Targeted ad campaigns",
      "Lead qualification process",
      "30-day guarantee",
      "Weekly progress reports"
    ]
  }
];

export default function Payment() {
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    company: ""
  });
  const [showPayPal, setShowPayPal] = useState(false);

  const selectedPlanData = paymentPlans.find(plan => plan.id === selectedPlan);

  const handleCustomerInfoChange = (field: string, value: string) => {
    setCustomerInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleProceedToPayment = () => {
    if (selectedPlan && customerInfo.name && customerInfo.email) {
      setShowPayPal(true);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-navy-dark hover:text-purple-cta transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to ZparX Marketing</span>
            </Link>
            <h1 className="text-2xl font-bold text-navy-dark">Payment Portal</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {!showPayPal ? (
            <>
              {/* Plan Selection */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-navy-dark text-center mb-8">
                  Choose Your Service Package
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {paymentPlans.map((plan) => (
                    <Card 
                      key={plan.id}
                      className={`cursor-pointer transition-all ${
                        selectedPlan === plan.id 
                          ? 'ring-2 ring-purple-cta border-purple-cta' 
                          : 'hover:shadow-lg'
                      }`}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-navy-dark">{plan.name}</CardTitle>
                            <CardDescription className="mt-2">{plan.description}</CardDescription>
                          </div>
                          <div className="text-right">
                            <div className="text-3xl font-bold text-purple-cta">${plan.price}</div>
                            <div className="text-sm text-gray-500">/month</div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {plan.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm">
                              <div className="w-2 h-2 bg-orange-highlight rounded-full mr-3"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Customer Information */}
              {selectedPlan && (
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-navy-dark">Customer Information</CardTitle>
                    <CardDescription>
                      Please provide your details to complete the purchase
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          value={customerInfo.name}
                          onChange={(e) => handleCustomerInfoChange('name', e.target.value)}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={customerInfo.email}
                          onChange={(e) => handleCustomerInfoChange('email', e.target.value)}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="company">Company Name (Optional)</Label>
                      <Input
                        id="company"
                        type="text"
                        value={customerInfo.company}
                        onChange={(e) => handleCustomerInfoChange('company', e.target.value)}
                        placeholder="Your company name"
                      />
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Proceed to Payment */}
              {selectedPlan && customerInfo.name && customerInfo.email && (
                <div className="text-center">
                  <Button
                    onClick={handleProceedToPayment}
                    className="bg-purple-cta hover:bg-purple-cta/90 text-white px-8 py-3 text-lg"
                  >
                    Proceed to Payment
                  </Button>
                </div>
              )}
            </>
          ) : (
            /* PayPal Checkout */
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-navy-dark text-center">Complete Your Purchase</CardTitle>
                  <CardDescription className="text-center">
                    Review your order and pay securely with PayPal
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Order Summary */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-navy-dark mb-4">Order Summary</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Service:</span>
                        <span className="font-medium">{selectedPlanData?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Customer:</span>
                        <span className="font-medium">{customerInfo.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Email:</span>
                        <span className="font-medium">{customerInfo.email}</span>
                      </div>
                      {customerInfo.company && (
                        <div className="flex justify-between">
                          <span>Company:</span>
                          <span className="font-medium">{customerInfo.company}</span>
                        </div>
                      )}
                      <div className="border-t pt-2 mt-4">
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total:</span>
                          <span className="text-purple-cta">${selectedPlanData?.price}/month</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* PayPal Button */}
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-4">
                      Click the button below to complete your payment securely with PayPal
                    </p>
                    <div className="inline-block">
                      <PayPalButton
                        amount={selectedPlanData?.price || "0"}
                        currency="USD"
                        intent="CAPTURE"
                      />
                    </div>
                  </div>

                  {/* Back Button */}
                  <div className="text-center">
                    <Button
                      variant="outline"
                      onClick={() => setShowPayPal(false)}
                      className="mt-4"
                    >
                      Back to Order Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}