import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ServiceFormModal } from "../forms/ServiceFormModal";

interface ServiceProps {
  title: string;
  description: string;
  price: string;
  imageSrc: string;
  buttonText: string;
  formTitle: string;
  formDescription: string;
  serviceName: string;
  includePropertyAddress: boolean;
  includeLoanAmount: boolean;
}

const services: ServiceProps[] = [
  {
    title: "CDNA Reports",
    description: "This comprehensive property valuation is as close as you can get to a professional appraisal without the high cost.",
    price: "$34.97",
    imageSrc: "https://images.unsplash.com/photo-1560518883-f9f81a25e1c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    buttonText: "Order Now",
    formTitle: "Order CDNA Report",
    formDescription: "Fill out the form below to order your CDNA Report. We'll process your order and contact you with next steps.",
    serviceName: "CDNA Report",
    includePropertyAddress: true,
    includeLoanAmount: false
  },
  {
    title: "Proof of Funds",
    description: "Obtain your proof of funds letter to accompany purchase offers for investment properties across the nation for only $19.97.",
    price: "$19.97",
    imageSrc: "https://images.unsplash.com/photo-1582402978777-53d2506b8886?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    buttonText: "Request Now",
    formTitle: "Request Proof of Funds",
    formDescription: "Complete this form to request your Proof of Funds letter. Once submitted, we'll prepare your document and contact you shortly.",
    serviceName: "Proof of Funds",
    includePropertyAddress: false,
    includeLoanAmount: true
  },
  {
    title: "Debt Stack Reports",
    description: "Get essential details about debts associated with an investment property, including mortgages, outstanding balances, and tax liens.",
    price: "Custom Pricing",
    imageSrc: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    buttonText: "Inquire",
    formTitle: "Request Debt Stack Report",
    formDescription: "Interested in a Debt Stack Report? Fill out this form with your property details and we'll provide you with pricing and next steps.",
    serviceName: "Debt Stack Report",
    includePropertyAddress: true,
    includeLoanAmount: false
  },
  {
    title: "Off-Market Leads",
    description: "Access exclusive leads on non-owner-occupied properties with high equity using our advanced AI technology with little competition.",
    price: "Per Lead/Subscription",
    imageSrc: "https://images.unsplash.com/photo-1573599852326-2d4da0bbe613?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    buttonText: "Learn More",
    formTitle: "Off-Market Leads Information",
    formDescription: "Interested in our Off-Market Leads service? Complete this form and we'll contact you with details about our lead packages and pricing.",
    serviceName: "Off-Market Leads",
    includePropertyAddress: false,
    includeLoanAmount: false
  }
];

export function ServicesSection() {
  const [activeServiceIndex, setActiveServiceIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setActiveServiceIndex(index);
  };

  const closeModal = () => {
    setActiveServiceIndex(null);
  };

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">At Real Invest Funding LLC, we are genuinely invested in your real estate investment success. Our resources help you minimize risks and maximize ROI.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div 
                className="w-full h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.imageSrc})` }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold">{service.price}</span>
                  <Button 
                    onClick={() => openModal(index)}
                    className="bg-primary text-white py-1.5 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm"
                  >
                    {service.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Form Modals */}
        {activeServiceIndex !== null && (
          <ServiceFormModal
            isOpen={true}
            onClose={closeModal}
            serviceName={services[activeServiceIndex].serviceName}
            title={services[activeServiceIndex].formTitle}
            description={services[activeServiceIndex].formDescription}
            includePropertyAddress={services[activeServiceIndex].includePropertyAddress}
            includeLoanAmount={services[activeServiceIndex].includeLoanAmount}
          />
        )}
      </div>
    </section>
  );
}
