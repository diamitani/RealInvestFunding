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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">Real Invest Funding LLC</h1>
          <p className="text-2xl md:text-3xl font-semibold mb-8">"Up to 100% financing for your fix and flips!"</p>
          <p className="text-lg mb-8">We specialize in Funding Homes. Every seasoned and new investor has one thing in common. They need money. Though that need is extremely high, most investors don't know where to find the best funding options.</p>
          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-amber-500 hover:bg-amber-400 text-gray-800 font-bold py-3 px-6 rounded-md"
              onClick={() => {
                document.location.href = "#contact";
                document.title = "Real Invest Funding - Get More Info";
              }}
            >
              Get More Info Today
            </Button>
            <Button 
              variant="outline" 
              className="bg-white bg-opacity-20 text-white border border-white py-3 px-6 rounded-md hover:bg-opacity-30"
              onClick={() => {
                document.location.href = "#funding";
                document.title = "Real Invest Funding - Explore Options";
              }}
            >
              Explore Options
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
