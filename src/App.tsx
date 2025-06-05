import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import TherapistsSection from './components/TherapistsSection';
import HoursSection from './components/HoursSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { services, therapists, businessHours, testimonials } from './data';

function App() {
  useEffect(() => {
    // Update page title
    document.title = "Professional Therapeutic Massage | Grand Rapids, MI";
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <ServicesSection services={services} />
      <TherapistsSection therapists={therapists} />
      <HoursSection 
        hours={businessHours} 
        address="2035 28th St SE, Suite P, Grand Rapids, MI 49508"
        phone="(616) 233-9533"
        email="grprofessionalmassage@gmail.com"
      />
      <TestimonialsSection testimonials={testimonials} />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;