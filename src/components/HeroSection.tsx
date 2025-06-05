import React from 'react';
import { Calendar } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-20 md:pt-0 min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundPosition: "center 30%"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 leading-tight">
            Restore Your Balance with Professional Therapeutic Massage
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Experience the healing power of touch with our expert massage therapists in Grand Rapids. Customized treatments to address your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToContact}
              className="flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-full transition-colors duration-300"
            >
              <Calendar size={20} className="mr-2" />
              Book Your Appointment
            </button>
            <a 
              href="tel:+16162339533"
              className="flex items-center justify-center bg-white hover:bg-gray-100 text-teal-800 font-medium py-3 px-6 rounded-full transition-colors duration-300"
            >
              Call Us Today
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;