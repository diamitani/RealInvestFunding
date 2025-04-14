export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-6">MEET Real Invest Funding LLC</h2>
            <h3 className="text-xl md:text-2xl font-heading font-semibold text-primary mb-4">YOUR PARTNER IN YOUR REAL ESTATE INVESTING SUCCESS</h3>
            <p className="text-gray-600 mb-4">
              Welcome to Real Invest Funding LLC, where we transcend the role of a conventional private money lender. We take pride in being your committed partner on the journey towards building enduring and sustainable wealth through real estate investments.
            </p>
            <p className="text-gray-600 mb-4">
              Our CEO Antoinette Y Attoh has forged a reputation that hinges on the belief that your success is our success. At Real Invest Funding LLC, we prioritize our clients' needs above all else.
            </p>
            <h3 className="text-xl font-heading font-semibold text-gray-800 mt-6 mb-3">WHY CHOOSE Real Invest Funding LLC?</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li><strong>Proven Expertise:</strong> Our team brings a wealth of knowledge to guide your investment decisions.</li>
              <li><strong>Tailored Solutions:</strong> We understand that each investment journey is unique. Our solutions are personalized to align with your goals and aspirations.</li>
              <li><strong>Comprehensive Services:</strong> From Private Money Lending to Joint Ventures, we cover all aspects of real estate investment funding.</li>
              <li><strong>Integrity and Trust:</strong> Our commitment to transparency and ethical practices ensures your confidence in every investment choice.</li>
              <li><strong>Results-Driven:</strong> Our track record of success speaks for itself, demonstrating our ability to deliver impressive returns and market-ready properties.</li>
            </ul>
            <div className="mt-6">
              <a href="#contact" className="inline-block bg-primary text-white py-3 px-6 rounded-md font-heading font-medium hover:bg-blue-700 transition-colors">
                Partner With Us
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div 
                  className="bg-cover bg-center h-40 rounded-lg shadow-md" 
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80')" }}
                ></div>
                <div 
                  className="bg-cover bg-center h-64 rounded-lg shadow-md"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80')" }}
                ></div>
              </div>
              <div className="space-y-4 mt-8">
                <div 
                  className="bg-cover bg-center h-64 rounded-lg shadow-md"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80')" }}
                ></div>
                <div 
                  className="bg-cover bg-center h-40 rounded-lg shadow-md"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1561501878-aabd62634533?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80')" }}
                ></div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-500 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
