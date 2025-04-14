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
    description: "Get detailed property valuation data to make better investment decisions.",
    price: "$34.97",
    imageSrc: "https://images.unsplash.com/photo-1560518883-f9f81a25e1c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    buttonText: "Order Now",
    buttonAction: () => console.log("Order CDNA Report")
  },
  {
    title: "Proof of Funds",
    description: "Official letter verifying your funding capacity to strengthen your offers.",
    price: "$19.97",
    imageSrc: "https://images.unsplash.com/photo-1582402978777-53d2506b8886?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    buttonText: "Request Now",
    buttonAction: () => console.log("Request Proof of Funds")
  },
  {
    title: "Debt Stack Reports",
    description: "Discover tax liens and second mortgages to avoid costly surprises.",
    price: "Custom Pricing",
    imageSrc: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    buttonText: "Inquire",
    buttonAction: () => console.log("Inquire about Debt Stack Reports")
  },
  {
    title: "Off-Market Leads",
    description: "AI-sourced high-equity properties with low competition.",
    price: "Per Lead/Subscription",
    imageSrc: "https://images.unsplash.com/photo-1573599852326-2d4da0bbe613?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    buttonText: "Learn More",
    buttonAction: () => console.log("Learn about Off-Market Leads")
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">Value-Added Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Tools to help you make better investment decisions</p>
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
