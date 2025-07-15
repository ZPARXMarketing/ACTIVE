import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Calendar, Target, Phone, CheckCircle, ArrowRight, Users, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const bookingFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().min(1, "Company name is required"),
  industry: z.string().min(1, "Please select your industry"),
  currentLeads: z.string().min(1, "Please select current lead volume"),
  preferredTime: z.string().min(1, "Please select a preferred meeting time"),
});

type BookingFormData = z.infer<typeof bookingFormSchema>;

export default function Funnel() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      industry: "",
      currentLeads: "",
      preferredTime: "",
    },
  });

  const bookingMutation = useMutation({
    mutationFn: async (data: BookingFormData) => {
      return await apiRequest("POST", "/api/book-consultation", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Consultation booked successfully!",
        description: "We'll contact you within 24 hours to confirm your meeting time.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error booking consultation",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: BookingFormData) => {
    bookingMutation.mutate(data);
  };

  const benefits = [
    {
      icon: Target,
      title: "10+ Qualified Leads Monthly",
      description: "We guarantee minimum 10 high-quality, ready-to-buy leads every month"
    },
    {
      icon: Phone,
      title: "We Handle Everything",
      description: "From lead generation to initial contact and appointment setting"
    },
    {
      icon: Calendar,
      title: "Calendar Filling Service",
      description: "We book qualified prospects directly into your calendar"
    },
    {
      icon: Shield,
      title: "Money-Back Guarantee",
      description: "If we don't deliver 10 leads per month, you get your money back"
    }
  ];

  const stats = [
    { number: "150+", label: "Leads Generated Monthly", icon: Users },
    { number: "85%", label: "Show-Up Rate", icon: Calendar },
    { number: "3x", label: "Average ROI", icon: TrendingUp },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <Card className="max-w-md mx-auto text-center">
          <CardHeader>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl text-green-600">Consultation Booked!</CardTitle>
            <CardDescription>
              Thank you for booking a consultation. We'll contact you within 24 hours to confirm your meeting time and discuss how we can fill your calendar with qualified leads.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => window.location.href = "/"} variant="outline" className="w-full">
              Return to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">ZparX Marketing</div>
          <Badge variant="secondary" className="bg-green-100 text-green-700">
            Limited Time Offer
          </Badge>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {step === 1 && (
          <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Fill Your Calendar with
                <span className="text-blue-600"> Qualified Leads</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We generate high-quality leads and book them directly into your calendar. 
                <strong> 10+ leads guaranteed per month</strong> or your money back.
              </p>
              <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 max-w-2xl mx-auto">
                <p className="text-yellow-800 font-semibold">
                  🎯 Special Launch Offer: First month 50% off for early adopters
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Benefits */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center text-gray-900">
                How Our Lead Generation Service Works
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="border-2 hover:border-blue-200 transition-colors">
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <benefit.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-gray-900 mb-2">
                            {benefit.title}
                          </h3>
                          <p className="text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                Our Simple 3-Step Process
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                  <h3 className="font-semibold text-lg mb-2">We Generate Leads</h3>
                  <p className="text-gray-600">Using proven strategies, we identify and attract potential customers in your target market</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                  <h3 className="font-semibold text-lg mb-2">We Qualify & Contact</h3>
                  <p className="text-gray-600">We reach out to leads on your behalf, qualifying their interest and budget</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                  <h3 className="font-semibold text-lg mb-2">We Book Appointments</h3>
                  <p className="text-gray-600">Qualified prospects are scheduled directly into your calendar for sales meetings</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Ready to Fill Your Calendar?
              </h2>
              <p className="text-lg text-gray-600">
                Book a free consultation to discuss your lead generation needs
              </p>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
                onClick={() => setStep(2)}
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <p className="text-sm text-gray-500">
                No commitment required • 30-minute consultation • Get your lead generation strategy
              </p>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Book Your Free Consultation</CardTitle>
                <CardDescription>
                  Tell us about your business and we'll show you how to get 10+ qualified leads per month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="John" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Smith" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@company.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="(555) 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Company Inc." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="industry"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Industry *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your industry" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="construction">Construction & Trades</SelectItem>
                              <SelectItem value="healthcare">Healthcare</SelectItem>
                              <SelectItem value="legal">Legal Services</SelectItem>
                              <SelectItem value="real-estate">Real Estate</SelectItem>
                              <SelectItem value="automotive">Automotive</SelectItem>
                              <SelectItem value="home-services">Home Services</SelectItem>
                              <SelectItem value="professional">Professional Services</SelectItem>
                              <SelectItem value="retail">Retail</SelectItem>
                              <SelectItem value="technology">Technology</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="currentLeads"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Current Monthly Lead Volume *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select current lead volume" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="0-5">0-5 leads per month</SelectItem>
                              <SelectItem value="6-15">6-15 leads per month</SelectItem>
                              <SelectItem value="16-30">16-30 leads per month</SelectItem>
                              <SelectItem value="30+">30+ leads per month</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="preferredTime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Meeting Time *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select preferred time" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                              <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                              <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                              <SelectItem value="flexible">I'm flexible</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        disabled={bookingMutation.isPending}
                      >
                        {bookingMutation.isPending ? "Booking..." : "Book My Free Consultation"}
                      </Button>
                    </div>

                    <p className="text-sm text-gray-500 text-center">
                      By submitting this form, you agree to be contacted about our lead generation services. 
                      No spam, just valuable insights about growing your business.
                    </p>
                  </form>
                </Form>
              </CardContent>
            </Card>

            <div className="text-center mt-6">
              <Button variant="ghost" onClick={() => setStep(1)}>
                ← Back to Information
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}