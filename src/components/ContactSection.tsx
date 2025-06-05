import React, { useState } from 'react';
import { Send, Calendar, Gift } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({ submitted: true, success: true, message: 'Thank you for your message! We will get back to you soon.' });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-teal-800 mb-4">Contact & Booking</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to experience the benefits of professional massage therapy? 
            Contact us to schedule your appointment or ask any questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-serif font-bold text-teal-800 mb-6">Send Us a Message</h3>
            
            {formStatus && (
              <div className={`mb-6 p-4 rounded-md ${formStatus.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {formStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
          
          {/* Booking Options */}
          <div className="space-y-8">
            <div className="bg-teal-50 rounded-lg shadow-md p-8">
              <div className="flex items-center mb-4">
                <Calendar size={24} className="text-teal-700 mr-3" />
                <h3 className="text-2xl font-serif font-bold text-teal-800">Online Booking</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Schedule your appointment online through our MassageBook platform. 
                Choose your preferred therapist, service, and time.
              </p>
              <a
                href="https://www.massagebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 text-center"
              >
                Book Online Now
              </a>
            </div>
            
            <div className="bg-teal-50 rounded-lg shadow-md p-8">
              <div className="flex items-center mb-4">
                <Gift size={24} className="text-teal-700 mr-3" />
                <h3 className="text-2xl font-serif font-bold text-teal-800">Gift Certificates</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Give the gift of relaxation and wellness to someone special. 
                Our gift certificates are available for purchase online or in-person.
              </p>
              <a
                href="#"
                className="block w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 text-center"
              >
                Purchase Gift Certificate
              </a>
            </div>
            
            <div className="bg-teal-50 rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-serif font-bold text-teal-800 mb-4">Quick Contact</h3>
              <p className="text-gray-600 mb-2">
                <strong>Phone:</strong> <a href="tel:+16162339533" className="hover:text-teal-700 transition-colors">(616) 233-9533</a>
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> <a href="mailto:grprofessionalmassage@gmail.com" className="hover:text-teal-700 transition-colors">grprofessionalmassage@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;