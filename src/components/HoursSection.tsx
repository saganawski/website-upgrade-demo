import React from 'react';
import { Clock, MapPin, Phone, Mail } from 'lucide-react';
import { BusinessHours } from '../types';

interface HoursSectionProps {
  hours: BusinessHours;
  address: string;
  phone: string;
  email: string;
}

const HoursSection: React.FC<HoursSectionProps> = ({ hours, address, phone, email }) => {
  return (
    <section id="hours\" className="py-20 bg-teal-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-teal-800 mb-4">Hours & Location</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visit us at our convenient Grand Rapids location or contact us to schedule your appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Hours */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <Clock size={24} className="text-teal-700 mr-3" />
              <h3 className="text-2xl font-serif font-bold text-teal-800">Hours of Operation</h3>
            </div>
            <div className="space-y-3">
              {Object.entries(hours).map(([day, time]) => (
                <div key={day} className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-medium text-gray-700">{day}</span>
                  <span className="text-gray-600">{time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <MapPin size={24} className="text-teal-700 mr-3" />
              <h3 className="text-2xl font-serif font-bold text-teal-800">Find Us</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin size={20} className="text-teal-700 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-600">{address}</p>
                  <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-800 transition-colors mt-2 inline-block"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone size={20} className="text-teal-700 mr-3 flex-shrink-0" />
                <a 
                  href={`tel:${phone.replace(/[^0-9]/g, '')}`}
                  className="text-gray-600 hover:text-teal-700 transition-colors"
                >
                  {phone}
                </a>
              </div>
              
              <div className="flex items-center">
                <Mail size={20} className="text-teal-700 mr-3 flex-shrink-0" />
                <a 
                  href={`mailto:${email}`}
                  className="text-gray-600 hover:text-teal-700 transition-colors"
                >
                  {email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoursSection;