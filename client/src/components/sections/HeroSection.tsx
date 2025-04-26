import { Button } from "@/components/ui/button";
import heroBackgroundImg from "@/assets/images/hero-background.png";

export function HeroSection() {
  return (
    <section className="bg-gray-50 py-10 overflow-hidden border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 items-center">
          {/* Left Side: Text Content */}
          <div className="order-2 md:order-1 space-y-4 max-w-xl mx-auto md:mx-0">
            <h1 className="text-gray-900 text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              <span className="block">Real</span>
              <span className="block mt-1">Invest</span>
              <span className="block mt-1">Funding <span className="text-amber-500">LLC</span></span>
            </h1>
            <p className="text-amber-600 text-xl md:text-2xl font-semibold my-4">
              "Up to 100% financing for your fix and flips!"
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We specialize in Funding Homes. Every seasoned and new investor has one thing in common. They need money. Though that need is extremely high, most investors don't know where to find the best funding options.
            </p>
            <div className="pt-4">
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
          <div className="order-1 md:order-2 flex justify-center items-center h-full">
            <div className="relative w-full max-w-lg overflow-hidden rounded-lg shadow-lg border border-amber-200 transform scale-110">
              <img 
                src={heroBackgroundImg} 
                alt="Houses representing real estate investment" 
                className="w-full h-auto object-cover filter contrast-125 brightness-115 saturate-130"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-500/25 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Secondary Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid md:grid-cols-2 gap-8 bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-amber-600 mb-3">Why Use Real Invest Funding LLC?</h2>
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
