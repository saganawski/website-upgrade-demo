import React from 'react';
import { FileMusic as Muscle, Flame, Waves, Users } from 'lucide-react';
import { Service } from '../types';

interface ServicesSectionProps {
  services: Service[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  // Map service names to icons
  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Deep Tissue Massage':
        return <Muscle size={40} className="text-teal-700" />;
      case 'Hot Stone Massage':
        return <Flame size={40} className="text-teal-700" />;
      case 'Swedish Massage':
        return <Waves size={40} className="text-teal-700" />;
      case 'Couples Massage':
        return <Users size={40} className="text-teal-700" />;
      default:
        return <Muscle size={40} className="text-teal-700" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-teal-800 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a variety of massage therapies tailored to your specific needs, 
            helping you achieve relaxation, pain relief, and overall wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="mb-6 flex justify-center">
                  {getServiceIcon(service.name)}
                </div>
                <h3 className="text-2xl font-serif font-bold text-teal-800 mb-3 text-center">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  {service.description}
                </p>
                <div className="text-center">
                  <button 
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 italic">
            * Couples Massage available upon request. Please call to schedule.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;