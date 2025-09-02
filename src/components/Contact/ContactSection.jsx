import React, { useState } from 'react';
import { personalInfo } from '../../data/personal';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState({ type: '', text: '' });

  // ⚠️ REPLACE THIS URL WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby0cd3e_7Q6I_HuSKpDXcNjrOX3K3fmNeTAYspZP1uEnRP1hKhBsJTz7_O7E4_0XR8/exec';

  useScrollAnimation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const showFormMessage = (type, text) => {
    setFormMessage({ type, text });
    setTimeout(() => {
      setFormMessage({ type: '', text: '' });
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send form data to Google Apps Script
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        mode: 'no-cors' // Important for Google Apps Script
      });

      // Since we're using no-cors, we can't read the response
      // But if we get here without an error, assume it worked
      showFormMessage('success', 'Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      console.error('Form submission error:', error);
      showFormMessage('error', 'Sorry, there was an error sending your message. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark-900 section-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Work Together</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects, and creative ideas. 
                Whether you're a company looking to hire, or you're a fellow developer wanting to collaborate, 
                I'd love to hear from you.
              </p>
            </div>
            
            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-primary-100 dark:bg-primary-900 rounded-full w-12 h-12 flex items-center justify-center">
                  <i className="fas fa-envelope text-primary-600 dark:text-primary-400"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                  <a href={`mailto:${personalInfo.email}`} className="text-gray-600 dark:text-gray-300 hover:text-primary-500">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-primary-100 dark:bg-primary-900 rounded-full w-12 h-12 flex items-center justify-center">
                  <i className="fas fa-phone text-primary-600 dark:text-primary-400"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Phone</h4>
                  <a href={`tel:${personalInfo.phone}`} className="text-gray-600 dark:text-gray-300 hover:text-primary-500">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-primary-100 dark:bg-primary-900 rounded-full w-12 h-12 flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-primary-600 dark:text-primary-400"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                  <span className="text-gray-600 dark:text-gray-300">{personalInfo.location}</span>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {Object.entries(personalInfo.socialLinks).map(([platform, url]) => {
                  const iconMap = {
                    github: 'fab fa-github',
                    linkedin: 'fab fa-linkedin',
                    twitter: 'fab fa-twitter',
                    codepen: 'fab fa-codepen'
                  };
                  
                  return (
                    <a 
                      key={platform}
                      href={url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-300"
                    >
                      <i className={`${iconMap[platform]} text-gray-600 dark:text-gray-400`}></i>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-dark-800 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name *
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                    className="form-input w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-900 text-gray-900 dark:text-white transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                    className="form-input w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-900 text-gray-900 dark:text-white transition-all duration-300"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  required 
                  className="form-input w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-900 text-gray-900 dark:text-white transition-all duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="6" 
                  required 
                  className="form-input w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-900 text-gray-900 dark:text-white transition-all duration-300 resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary-500 hover:bg-primary-600 disabled:bg-primary-300 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-dark-800 disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane mr-2"></i>Send Message
                  </>
                )}
              </button>
            </form>
            
            {/* Success/Error Messages */}
            {formMessage.text && (
              <div className={`mt-4 p-4 rounded-lg ${
                formMessage.type === 'success' 
                  ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800' 
                  : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800'
              }`}>
                <p>{formMessage.text}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;