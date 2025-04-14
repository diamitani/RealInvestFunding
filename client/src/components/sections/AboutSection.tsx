export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-6">About Real Invest Funding LLC</h2>
            <p className="text-gray-600 mb-4">
              At Real Invest Funding LLC, we understand the unique challenges faced by real estate investors. 
              Founded by investors for investors, we've built a lending platform that prioritizes speed, 
              flexibility, and transparency.
            </p>
            <p className="text-gray-600 mb-4">
              Our team brings decades of combined experience in real estate investing, finance, and property 
              analysis. We use this expertise to evaluate deals based on their potential, not just traditional 
              lending metrics.
            </p>
            <p className="text-gray-600 mb-4">
              Whether you're a seasoned investor with multiple properties or just starting your real estate 
              journey, we offer funding solutions tailored to your specific needs and investment strategy.
            </p>
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
