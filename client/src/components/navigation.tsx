import { useState } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-handwritten font-bold text-warm-orange">Țărăncuța</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('produse')}
                className="text-warm-gray hover:text-warm-orange transition-colors duration-200"
              >
                Produse
              </button>
              <button 
                onClick={() => scrollToSection('despre')}
                className="text-warm-gray hover:text-warm-orange transition-colors duration-200"
              >
                Despre Noi
              </button>
              <button 
                onClick={() => scrollToSection('cosuri')}
                className="text-warm-gray hover:text-warm-orange transition-colors duration-200"
              >
                Coșuri
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-warm-orange text-white px-4 py-2 rounded-full hover:bg-deep-brown transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-warm-gray hover:text-warm-orange"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button 
                onClick={() => scrollToSection('produse')}
                className="block px-3 py-2 text-warm-gray hover:text-warm-orange transition-colors duration-200"
              >
                Produse
              </button>
              <button 
                onClick={() => scrollToSection('despre')}
                className="block px-3 py-2 text-warm-gray hover:text-warm-orange transition-colors duration-200"
              >
                Despre Noi
              </button>
              <button 
                onClick={() => scrollToSection('cosuri')}
                className="block px-3 py-2 text-warm-gray hover:text-warm-orange transition-colors duration-200"
              >
                Coșuri
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-warm-gray hover:text-warm-orange transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
