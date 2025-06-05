import React from 'react';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-teal-800 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Business Info */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Professional Therapeutic Massage</h3>
            <p className="mb-2">2035 28th St SE, Suite P</p>
            <p className="mb-4">Grand Rapids, MI 49508</p>
            <div className="flex items-center mb-2">
              <Phone size={16} className="mr-2" />
              <a href="tel:+16162339533" className="hover:text-teal-300 transition-colors">
                (616) 233-9533
              </a>
            </div>
            <div className="flex items-center">
              <Mail size={16} className="mr-2" />
              <a href="mailto:grprofessionalmassage@gmail.com" className="hover:text-teal-300 transition-colors">
                grprofessionalmassage@gmail.com
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-teal-300 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('therapists');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-teal-300 transition-colors"
                >
                  Our Therapists
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('hours');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-teal-300 transition-colors"
                >
                  Hours & Location
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-teal-300 transition-colors"
                >
                  Contact & Booking
                </button>
              </li>
              <li>
                <a 
                  href="https://www.massagebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-teal-300 transition-colors"
                >
                  Book Online
                </a>
              </li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Connect With Us</h3>
            <p className="mb-4">
              Follow us on social media for wellness tips, special offers, and updates.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-white text-teal-800 p-2 rounded-full hover:bg-teal-100 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="bg-white text-teal-800 p-2 rounded-full hover:bg-teal-100 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-teal-700 mt-8 pt-8 text-center text-teal-300">
          <p>&copy; {currentYear} Professional Therapeutic Massage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;