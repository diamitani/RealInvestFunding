interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: "fas fa-clock",
    title: "It's Fast",
    description: "Flipping homes is a time-sensitive business. Depending on how fast you submit the loan package items, you can have your loan in several days to several weeks."
  },
  {
    icon: "fas fa-home",
    title: "It's Asset-Based, Not You",
    description: "Private money lenders are interested in the property value since the property is the asset that's backing the loan, not your credit score. We focus on asset-based deals instead of borrower qualifications."
  },
  {
    icon: "fas fa-money-bill-wave",
    title: "It's Everywhere",
    description: "Private money lenders often have funds parked in lower-yielding financial vehicles and are looking for newer ways to maximize their funds."
  },
  {
    icon: "fas fa-lightbulb",
    title: "It's Creative",
    description: "With Private money, you can get funding on great deals that banks would normally shun, like properties needing repairs."
  },
  {
    icon: "fas fa-arrows-alt",
    title: "It's Flexible",
    description: "Private money lenders don't have the same strictly enforced guidelines, so they are more willing to help creatively structure loans."
  },
  {
    icon: "fas fa-handshake",
    title: "It's Relationship-Based",
    description: "We build lasting relationships with our investors, offering continual support throughout your real estate investment journey."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">6 Reasons Why Investors Use Private Money</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Many Investors pass on deals because they fall to the old adage that it takes money to make money. Well that is true, but if you leverage other peoples money, you don't need your own.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        
        <div className="mt-12 text-center">
          <p className="text-gray-700 max-w-4xl mx-auto mb-8">
            Having a Private Money Lender, like Real Invest Funding LLC in your court gives you confidence to put properties under contract. As long as you find the no-brainer deal that fits our guidelines, do the proper due-diligence, and turn in an application, you can be rest-assured that the deal will be funded!
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-primary text-white py-3 px-8 rounded-md font-heading font-medium hover:bg-blue-700 transition-colors"
            onClick={() => {
              document.title = "Real Invest Funding - Get Started";
            }}
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}
