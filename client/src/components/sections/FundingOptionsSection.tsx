import { Button } from "@/components/ui/button";

interface FundingOptionProps {
  title: string;
  features: string[];
  buttonText: string;
  buttonAction: () => void;
}

const fundingOptions: FundingOptionProps[] = [
  {
    title: "Fix & Flip Loans",
    features: [
      "Purchase + rehab financing",
      "Up to 100% of project costs",
      "Fast closing timeline",
      "No prepayment penalties"
    ],
    buttonText: "Apply Now",
    buttonAction: () => console.log("Apply for Fix & Flip")
  },
  {
    title: "Rental Property Loans",
    features: [
      "Long-term financing options",
      "DSCR-based qualification",
      "Portfolio loans available",
      "Competitive rates"
    ],
    buttonText: "Apply Now",
    buttonAction: () => console.log("Apply for Rental Property")
  },
  {
    title: "Commercial Property Loans",
    features: [
      "Mixed-use, retail, office funding",
      "Customized loan structures",
      "Flexible terms available",
      "Fast due diligence process"
    ],
    buttonText: "Apply Now",
    buttonAction: () => console.log("Apply for Commercial Property")
  },
  {
    title: "Ground-Up Construction",
    features: [
      "New build financing",
      "Draw schedule options",
      "Experience-based approvals",
      "Project management support"
    ],
    buttonText: "Apply Now",
    buttonAction: () => console.log("Apply for Ground-Up Construction")
  },
  {
    title: "Proof of Funds",
    features: [
      "Just $19.97 per letter",
      "Nationwide availability*",
      "Quick turnaround time",
      "Strengthen your offers"
    ],
    buttonText: "Request Now",
    buttonAction: () => console.log("Request Proof of Funds")
  },
  {
    title: "CDNA Reports",
    features: [
      "Detailed property valuation",
      "Only $34.97 per report",
      "Covers 95% of U.S. properties",
      "Make better-informed offers"
    ],
    buttonText: "Order Report",
    buttonAction: () => console.log("Order CDNA Report")
  }
];

export function FundingOptionsSection() {
  return (
    <section id="funding" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">Funding Options</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Flexible financing solutions for every type of real estate investment</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fundingOptions.map((option, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border-t-4 border-primary"
            >
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-4">{option.title}</h3>
                <ul className="space-y-3 mb-6">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={option.buttonAction}
                  className="bg-amber-500 hover:bg-amber-400 text-gray-800 font-medium py-2 px-4 rounded-md w-full"
                >
                  {option.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 mb-4">*Proof of Funds not available in AZ, MN, NV, OR, SD, UT, VT</p>
          <a 
            href="#contact" 
            className="inline-block bg-primary text-white py-3 px-8 rounded-md font-heading font-medium hover:bg-blue-700 transition-colors"
          >
            Contact Us For Custom Solutions
          </a>
        </div>
      </div>
    </section>
  );
}
