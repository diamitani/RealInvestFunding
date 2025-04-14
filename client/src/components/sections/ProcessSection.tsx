import { Button } from "@/components/ui/button";

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

const processSteps: ProcessStepProps[] = [
  {
    number: 1,
    title: "Apply Online",
    description: "Complete our simple application form with your deal details."
  },
  {
    number: 2,
    title: "Get Term Sheet",
    description: "Receive your custom term sheet within 24 business hours."
  },
  {
    number: 3,
    title: "Review & Accept",
    description: "Review terms and accept the offer that works for your project."
  },
  {
    number: 4,
    title: "Get Funded",
    description: "We'll handle the closing process and fund your deal fast."
  }
];

export function ProcessSection() {
  return (
    <section id="process" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">Our Simple Process</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Get funded quickly with our streamlined application process</p>
        </div>
        
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            className="bg-amber-500 hover:bg-amber-400 text-gray-800 font-bold py-3 px-8 rounded-md"
          >
            Start Your Application Now
          </Button>
        </div>
      </div>
    </section>
  );
}
