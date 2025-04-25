import { useState } from "react";
import { Button } from "@/components/ui/button";
import { logoImg } from "@/assets/index";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <img src={logoImg} alt="Real Invest Funding LLC" className="h-24 mr-4" />
        </div>
        
        <nav className="hidden lg:flex space-x-8">
          <a href="#services" className="font-heading font-medium text-neutral-500 hover:text-primary transition-colors">Services</a>
          <a href="#funding" className="font-heading font-medium text-neutral-500 hover:text-primary transition-colors">Funding Options</a>
          <a href="#process" className="font-heading font-medium text-neutral-500 hover:text-primary transition-colors">Process</a>
          <a href="#about" className="font-heading font-medium text-neutral-500 hover:text-primary transition-colors">About Us</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <a href="#contact" className="bg-primary text-white py-2 px-4 rounded-md font-heading font-medium hover:bg-primary-light transition-colors hidden md:block">Contact Us</a>
          <Button 
            variant="ghost" 
            className="lg:hidden text-neutral-500" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <i className="fas fa-bars text-xl"></i>
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`lg:hidden bg-white px-4 py-3 shadow-md ${isMenuOpen ? 'block' : 'hidden'}`}>
        <nav className="flex flex-col space-y-3">
          <a href="#services" className="font-heading font-medium text-neutral-500 hover:text-primary transition-colors">Services</a>
          <a href="#funding" className="font-heading font-medium text-neutral-500 hover:text-primary transition-colors">Funding Options</a>
          <a href="#process" className="font-heading font-medium text-neutral-500 hover:text-primary transition-colors">Process</a>
          <a href="#about" className="font-heading font-medium text-neutral-500 hover:text-primary transition-colors">About Us</a>
          <a href="#contact" className="bg-primary text-white py-2 px-4 rounded-md font-heading font-medium hover:bg-primary-light transition-colors text-center">Contact Us</a>
        </nav>
      </div>
    </header>
  );
}
