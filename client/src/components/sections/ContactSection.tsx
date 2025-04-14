import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    investmentType: "",
    propertyAddress: "",
    loanAmount: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, investmentType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await apiRequest("POST", "/api/leads", formData);
      toast({
        title: "Application Submitted",
        description: "We'll get back to you within 24 hours with your funding options.",
      });
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        investmentType: "",
        propertyAddress: "",
        loanAmount: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-8">Enter your information below and we will be in touch to answer all of your questions. We look forward to talking with you!</p>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-semibold text-gray-700">Full Name</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</Label>
                  <Input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number</Label>
                  <Input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="investmentType" className="text-sm font-semibold text-gray-700">Investment Type</Label>
                  <Select 
                    value={formData.investmentType} 
                    onValueChange={handleSelectChange}
                  >
                    <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary">
                      <SelectValue placeholder="Select Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fix-flip">Fix & Flip</SelectItem>
                      <SelectItem value="rental">Rental Property</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="construction">Ground-Up Construction</SelectItem>
                      <SelectItem value="pof">Proof of Funds</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="propertyAddress" className="text-sm font-semibold text-gray-700">Property Address (if available)</Label>
                <Input
                  id="propertyAddress"
                  value={formData.propertyAddress}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="loanAmount" className="text-sm font-semibold text-gray-700">Estimated Loan Amount</Label>
                <Input
                  id="loanAmount"
                  value={formData.loanAmount}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-semibold text-gray-700">Additional Details</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-primary text-white py-3 px-6 rounded-md font-heading font-medium hover:bg-blue-700 transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-heading font-semibold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center text-white mr-4 mt-1 flex-shrink-0">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email Us</p>
                    <a href="mailto:aattoh@realinvestfunding.com" className="text-primary hover:underline">aattoh@realinvestfunding.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center text-white mr-4 mt-1 flex-shrink-0">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Call Us</p>
                    <a href="tel:+16303439252" className="text-primary hover:underline">630-343-9252</a>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-heading font-semibold text-gray-800 mb-4">Referral Program</h4>
                <p className="text-gray-600 mb-4">We are excited to introduce our new referral program! Earn a minimum of $500 for each lead you send our way that results in a successful closing.</p>
                <a href="#" className="text-primary font-medium hover:underline" onClick={() => document.title = "Real Invest Funding - Referral Program"}>Learn More About Our Referral Program</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
