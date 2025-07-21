import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function LeadCapture() {
  const [formData, setFormData] = useState({
    fullName: "",
    website: "",
    email: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Success!",
        description: "We'll contact you within 24 hours with your personalized lead generation strategy.",
      });
      
      // Reset form
      setFormData({
        fullName: "",
        website: "",
        email: "",
        phone: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="lead-capture" className="py-20 bg-navy-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get 10 New Quote-Ready Leads
          </h2>
          <p className="text-xl text-orange-highlight mb-8 font-semibold">
            Within 30 Days, or You Don't Pay
          </p>
          
          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="fullName" className="text-navy-dark font-medium mb-2 block">
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="border-gray-300 focus:border-purple-cta focus:ring-purple-cta"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <Label htmlFor="website" className="text-navy-dark font-medium mb-2 block">
                  Website (URL) *
                </Label>
                <Input
                  id="website"
                  name="website"
                  type="url"
                  value={formData.website}
                  onChange={handleInputChange}
                  required
                  className="border-gray-300 focus:border-purple-cta focus:ring-purple-cta"
                  placeholder="https://yourwebsite.com"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-navy-dark font-medium mb-2 block">
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="border-gray-300 focus:border-purple-cta focus:ring-purple-cta"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-navy-dark font-medium mb-2 block">
                  Phone *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="border-gray-300 focus:border-purple-cta focus:ring-purple-cta"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>
            
            <div className="mt-8">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-cta hover:bg-purple-cta/90 text-white font-bold py-4 px-8 text-lg"
              >
                {isSubmitting ? "Submitting..." : "Get More Leads!"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}