import React from 'react';
import { Therapist } from '../types';

interface TherapistsSectionProps {
  therapists: Therapist[];
}

const TherapistsSection: React.FC<TherapistsSectionProps> = ({ therapists }) => {
  return (
    <section id="therapists\" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-teal-800 mb-4">Meet Our Therapists</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our licensed massage therapists bring years of experience and specialized training
            to provide you with exceptional care and personalized treatments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {therapists.map((therapist, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3">
                <div className="aspect-square rounded-full overflow-hidden bg-teal-100 flex items-center justify-center">
                  {therapist.imageUrl ? (
                    <img 
                      src={therapist.imageUrl} 
                      alt={therapist.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-6xl font-serif text-teal-700">
                      {therapist.name.charAt(0)}
                    </span>
                  )}
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-serif font-bold text-teal-800 mb-2">
                  {therapist.name}
                </h3>
                <p className="text-gray-500 mb-4">{therapist.title}</p>
                <p className="text-gray-600 mb-4">
                  {therapist.bio}
                </p>
                <div className="flex flex-wrap gap-2">
                  {therapist.specialties.map((specialty, i) => (
                    <span 
                      key={i} 
                      className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TherapistsSection;