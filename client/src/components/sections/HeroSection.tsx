import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative bg-primary text-white py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-black opacity-80">
        <div 
          className="w-full h-full bg-cover bg-center opacity-20"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')" 
          }}
        ></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">Get Up To 100% Financing For Your Real Estate Investments</h1>
          <p className="text-lg md:text-xl mb-8">Fund your fix & flips, rentals, or commercial properties with flexible terms and fast approvals. No credit minimums required.</p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-amber-500 hover:bg-amber-400 text-gray-800 font-bold py-3 px-6 rounded-md">
              Start Your Application
            </Button>
            <Button variant="outline" className="bg-white bg-opacity-20 text-white border border-white py-3 px-6 rounded-md hover:bg-opacity-30">
              Explore Options
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
