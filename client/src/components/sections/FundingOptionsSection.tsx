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
    buttonAction: () => {
      document.location.href = "#contact";
      document.title = "Real Invest Funding - Fix & Flip Loans";
    }
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
    buttonAction: () => {
      document.location.href = "#contact";
      document.title = "Real Invest Funding - Rental Property Loans";
    }
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
    buttonAction: () => {
      document.location.href = "#contact";
      document.title = "Real Invest Funding - Commercial Property Loans";
    }
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
    buttonAction: () => {
      document.location.href = "#contact";
      document.title = "Real Invest Funding - Ground-Up Construction";
    }
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
    buttonAction: () => {
      document.location.href = "#contact";
      document.title = "Real Invest Funding - Proof of Funds";
    }
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
    buttonAction: () => {
      document.location.href = "#contact";
      document.title = "Real Invest Funding - CDNA Reports";
    }
  }
];

export function FundingOptionsSection() {
  return (
    <section id="funding" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">Funding Solutions</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">The biggest blunder any investor can make in real estate is to shop too early for money. It's much easier to shop for cash when you have a deal in hand and under contract.</p>
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
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-heading font-semibold text-center text-gray-800 mb-8">The 4-Step Process to Get Your Deal Funded</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
              <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">1</div>
              <h4 className="font-heading font-semibold text-lg mb-2">Prospect and Review</h4>
              <p className="text-gray-600">Find and evaluate potential properties that match our investment criteria.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
              <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">2</div>
              <h4 className="font-heading font-semibold text-lg mb-2">Write Offers</h4>
              <p className="text-gray-600">Create and submit purchase offers on properties with potential.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
              <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">3</div>
              <h4 className="font-heading font-semibold text-lg mb-2">Get Offer Accepted</h4>
              <p className="text-gray-600">Negotiate terms until the seller accepts your purchase offer.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
              <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">4</div>
              <h4 className="font-heading font-semibold text-lg mb-2">Put Earnest Money in Escrow</h4>
              <p className="text-gray-600">Complete the contract by depositing earnest money into escrow.</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-700 mb-6">Once these 4 Steps are completed, you have a fully executed Purchase and Sale Agreement, the property is under contract, and you are ready to shop for cash.</p>
            <a 
              href="#contact" 
              className="inline-block bg-primary text-white py-3 px-8 rounded-md font-heading font-medium hover:bg-blue-700 transition-colors"
              onClick={() => document.title = "Real Invest Funding - Get Funded"}
            >
              Contact Us For Funding
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
