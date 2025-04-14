import { LogoIcon } from "@/assets/index";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">Real Invest Funding LLC</h3>
            <p className="text-gray-300 mb-4">Your partner in real estate investment funding with flexible financing solutions.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-amber-500 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-amber-500 transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-white hover:text-amber-500 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-amber-500 transition-colors">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">Funding Options</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Fix & Flip Loans</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Rental Property Loans</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Commercial Property</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Ground-Up Construction</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Proof of Funds</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">CDNA Reports</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Debt Stack Reports</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Off-Market Leads</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Referral Program</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2 text-amber-500"></i>
                <a href="mailto:aattoh@realinvestfunding.com" className="text-gray-300 hover:text-white transition-colors">aattoh@realinvestfunding.com</a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone mr-2 text-amber-500"></i>
                <a href="tel:+18001234567" className="text-gray-300 hover:text-white transition-colors">1-800-123-4567</a>
              </li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact Form</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Real Invest Funding LLC. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
