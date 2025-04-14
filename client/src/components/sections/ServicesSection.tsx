import { Button } from "@/components/ui/button";

interface ServiceProps {
  title: string;
  description: string;
  price: string;
  imageSrc: string;
  buttonText: string;
  buttonAction: () => void;
}

const services: ServiceProps[] = [
  {
    title: "CDNA Reports",
    description: "This comprehensive property valuation is as close as you can get to a professional appraisal without the high cost.",
    price: "$34.97",
    imageSrc: "https://images.unsplash.com/photo-1560518883-f9f81a25e1c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    buttonText: "Order Now",
    buttonAction: () => {
      document.location.href = "#contact";
      document.title = "Real Invest Funding - CDNA Reports";
    }
  },
  {
    title: "Proof of Funds",
    description: "Obtain your proof of funds letter to accompany purchase offers for investment properties across the nation for only $19.97.",
    price: "$19.97",
    imageSrc: "https://images.unsplash.com/photo-1582402978777-53d2506b8886?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    buttonText: "Request Now",
    buttonAction: () => {
      document.location.href = "#contact";
      document.title = "Real Invest Funding - Proof of Funds";
    }
  },
  {
    title: "Debt Stack Reports",
    description: "Get essential details about debts associated with an investment property, including mortgages, outstanding balances, and tax liens.",
    price: "Custom Pricing",
    imageSrc: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    buttonText: "Inquire",
    buttonAction: () => {
      document.location.href = "#contact";
      document.title = "Real Invest Funding - Debt Stack Reports";
    }
  },
  {
    title: "Off-Market Leads",
    description: "Access exclusive leads on non-owner-occupied properties with high equity using our advanced AI technology with little competition.",
    price: "Per Lead/Subscription",
    imageSrc: "https://images.unsplash.com/photo-1573599852326-2d4da0bbe613?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    buttonText: "Learn More",
    buttonAction: () => {
      document.location.href = "#contact";
      document.title = "Real Invest Funding - Off-Market Leads";
    }
  }
];

export function ServicesSection() {
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
                    onClick={service.buttonAction}
                    className="bg-primary text-white py-1.5 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm"
                  >
                    {service.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
