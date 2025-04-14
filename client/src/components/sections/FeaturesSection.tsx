interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: "fas fa-bolt",
    title: "Fast Funding",
    description: "Get approved quickly and close on your investment opportunities before they disappear."
  },
  {
    icon: "fas fa-percentage",
    title: "Up to 100% Financing",
    description: "We finance the purchase price and rehab costs if the numbers make sense for your project."
  },
  {
    icon: "fas fa-file-contract",
    title: "No Credit Minimums",
    description: "We focus on the property's potential, not your credit score. Get funded based on your deal."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">Why Choose Real Invest Funding</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">We understand what real estate investors need: quick decisions, flexible terms, and a partner who knows the business.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-100 rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 text-white">
                <i className={`${feature.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
