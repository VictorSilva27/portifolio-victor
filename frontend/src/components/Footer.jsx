import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { mockData } from '../mock';
import { useTranslation } from '../hooks/useTranslation';

const Footer = () => {
  const t = useTranslation();
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand/Logo */}
            <div className="md:col-span-2">
              <h3 className="font-display font-black text-2xl text-primary uppercase tracking-tight mb-4">
                {mockData.developer.name}
              </h3>
              <p className="body-small text-secondary mb-6 max-w-md">
                {t.footerDescription}
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a 
                  href={mockData.developer.social.github}
                  className="w-10 h-10 bg-card border border-border-light rounded-full flex items-center justify-center text-primary hover:text-brand-hover hover:border-border-medium transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                </a>
                <a 
                  href={mockData.developer.social.linkedin}
                  className="w-10 h-10 bg-card border border-border-light rounded-full flex items-center justify-center text-primary hover:text-brand-hover hover:border-border-medium transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href={`mailto:${mockData.developer.email}`}
                  className="w-10 h-10 bg-card border border-border-light rounded-full flex items-center justify-center text-primary hover:text-brand-hover hover:border-border-medium transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="heading-6 text-primary mb-4">{t.quickLinks}</h4>
              <nav className="space-y-2">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block text-left body-small text-secondary hover:text-brand-hover transition-colors"
                >
                  {t.about}
                </button>
                <button 
                  onClick={() => scrollToSection('skills')}
                  className="block text-left body-small text-secondary hover:text-brand-hover transition-colors"
                >
                  {t.skills}
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="block text-left body-small text-secondary hover:text-brand-hover transition-colors"
                >
                  {t.projects}
                </button>
                <button 
                  onClick={() => scrollToSection('experience')}
                  className="block text-left body-small text-secondary hover:text-brand-hover transition-colors"
                >
                  {t.experience}
                </button>
              </nav>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="heading-6 text-primary mb-4">{t.getInTouch}</h4>
              <div className="space-y-2">
                <a 
                  href={`mailto:${mockData.developer.email}`}
                  className="block body-small text-secondary hover:text-brand-hover transition-colors"
                >
                  {mockData.developer.email}
                </a>
                <a 
                  href={`tel:${mockData.developer.phone}`}
                  className="block body-small text-secondary hover:text-brand-hover transition-colors"
                >
                  {mockData.developer.phone}
                </a>
                <span className="block body-small text-secondary">
                  {mockData.developer.location}
                </span>
              </div>
            </div>
          </div>
          
          {/* Bottom Footer */}
          <div className="border-t border-border-light pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-6">
                <span className="caption text-secondary">
                  © {new Date().getFullYear()} {t.allRightsReserved}
                </span>
                
                <button 
                  onClick={scrollToTop}
                  className="caption text-primary hover:text-brand-hover transition-colors"
                >
                  {t.backToTop}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;