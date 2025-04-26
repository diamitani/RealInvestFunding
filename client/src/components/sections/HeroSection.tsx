import { Button } from "@/components/ui/button";
import heroBackgroundImg from "@/assets/images/hero-background.png";

export function HeroSection() {
  return (
    <section className="bg-gray-50 py-16 overflow-hidden border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Left Side: Text Content */}
          <div className="w-full md:w-1/2 space-y-4">
            <h1 className="text-gray-800 text-4xl md:text-5xl font-bold leading-none tracking-tight">
              <span className="block">Real</span>
              <span className="block mt-1">Invest</span>
              <span className="block mt-1">Funding <span className="text-amber-500">LLC</span></span>
            </h1>
            <p className="text-amber-600 text-xl md:text-2xl font-semibold my-4">
              "Up to 100% financing for your fix and flips!"
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We specialize in Funding Homes. Every seasoned and new investor has one thing in common. They need money. Though that need is extremely high, most investors don't know where to find the best funding options.
            </p>
            <div>
              <Button 
                className="bg-amber-500 hover:bg-amber-600 text-gray-800 font-bold py-3 px-8 rounded-full shadow-md transition-all duration-300"
                onClick={() => {
                  document.location.href = "#contact";
                  document.title = "Real Invest Funding - Get More Info";
                }}
              >
                Get More Info Today
              </Button>
            </div>
          </div>
          
          {/* Right Side: Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start md:-ml-10 md:-mt-8">
            <div className="relative w-full max-w-xl overflow-hidden rounded-lg shadow-xl border border-amber-100 transform scale-125">
              <img 
                src={heroBackgroundImg} 
                alt="Houses representing real estate investment" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-amber-500/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Secondary Content Area */}
      <div className="container mx-auto px-4 mt-12">
        <div className="grid md:grid-cols-2 gap-8 bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-amber-600 mb-4">Why Use Real Invest Funding LLC?</h2>
            <p className="text-gray-800 font-semibold text-lg mb-2">We specialize in Funding Homes</p>
            <div className="w-20 h-1 bg-amber-500 rounded-full mb-4"></div>
          </div>
          <div className="flex items-center">
            <p className="text-gray-700 leading-relaxed">
              Every seasoned and new investor has one thing in common. They need money. Though that need is extremely high, most investors don't know where to find the best funding options. Many investors pass on deals because they fall to the old adage that it takes money to make money. Well that is true, but if you leverage other people's money, you don't need your own. Get your private money loan from us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
