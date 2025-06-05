import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-serif font-bold text-teal-800">
              Professional Therapeutic Massage
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-teal-800 hover:text-teal-600 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('therapists')}
              className="text-teal-800 hover:text-teal-600 transition-colors"
            >
              Therapists
            </button>
            <button 
              onClick={() => scrollToSection('hours')}
              className="text-teal-800 hover:text-teal-600 transition-colors"
            >
              Hours
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-teal-800 hover:text-teal-600 transition-colors"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-teal-800 hover:text-teal-600 transition-colors"
            >
              Contact
            </button>
            <a 
              href="tel:+16162339533" 
              className="flex items-center bg-teal-700 text-white px-4 py-2 rounded-full hover:bg-teal-600 transition-colors"
            >
              <Phone size={16} className="mr-2" />
              (616) 233-9533
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-teal-800 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-teal-800 hover:text-teal-600 transition-colors py-2 border-b border-gray-100"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('therapists')}
                className="text-teal-800 hover:text-teal-600 transition-colors py-2 border-b border-gray-100"
              >
                Therapists
              </button>
              <button 
                onClick={() => scrollToSection('hours')}
                className="text-teal-800 hover:text-teal-600 transition-colors py-2 border-b border-gray-100"
              >
                Hours
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-teal-800 hover:text-teal-600 transition-colors py-2 border-b border-gray-100"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-teal-800 hover:text-teal-600 transition-colors py-2 border-b border-gray-100"
              >
                Contact
              </button>
              <a 
                href="tel:+16162339533" 
                className="flex items-center justify-center bg-teal-700 text-white px-4 py-2 rounded-full hover:bg-teal-600 transition-colors"
              >
                <Phone size={16} className="mr-2" />
                (616) 233-9533
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;