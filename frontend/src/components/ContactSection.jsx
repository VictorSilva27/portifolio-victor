import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { mockData } from '../mock';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-2 mb-16 text-center">
            Get In Touch
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="heading-4 text-primary mb-6">
                  Let's Work Together
                </h3>
                <p className="body-small text-secondary mb-8 leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a project in mind or just want to connect, I'd love to hear from you.
                </p>
              </div>
              
              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                    <Mail className="text-page" size={20} />
                  </div>
                  <div>
                    <h4 className="heading-6 text-primary">Email</h4>
                    <a 
                      href={`mailto:${mockData.developer.email}`}
                      className="body-small text-secondary hover:text-brand-hover transition-colors"
                    >
                      {mockData.developer.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                    <Phone className="text-page" size={20} />
                  </div>
                  <div>
                    <h4 className="heading-6 text-primary">Phone</h4>
                    <a 
                      href={`tel:${mockData.developer.phone}`}
                      className="body-small text-secondary hover:text-brand-hover transition-colors"
                    >
                      {mockData.developer.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                    <MapPin className="text-page" size={20} />
                  </div>
                  <div>
                    <h4 className="heading-6 text-primary">Location</h4>
                    <span className="body-small text-secondary">
                      {mockData.developer.location}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div>
                <h4 className="heading-6 text-primary mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href={mockData.developer.social.github}
                    className="w-10 h-10 bg-page border border-border-light rounded-full flex items-center justify-center text-primary hover:text-brand-hover hover:border-border-medium transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href={mockData.developer.social.linkedin}
                    className="w-10 h-10 bg-page border border-border-light rounded-full flex items-center justify-center text-primary hover:text-brand-hover hover:border-border-medium transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href={mockData.developer.social.twitter}
                    className="w-10 h-10 bg-page border border-border-light rounded-full flex items-center justify-center text-primary hover:text-brand-hover hover:border-border-medium transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block heading-6 text-primary mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-page border border-border-light rounded-lg text-primary placeholder-secondary focus:border-brand-primary focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block heading-6 text-primary mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-page border border-border-light rounded-lg text-primary placeholder-secondary focus:border-brand-primary focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block heading-6 text-primary mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-page border border-border-light rounded-lg text-primary placeholder-secondary focus:border-brand-primary focus:outline-none transition-colors"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block heading-6 text-primary mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-page border border-border-light rounded-lg text-primary placeholder-secondary focus:border-brand-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;