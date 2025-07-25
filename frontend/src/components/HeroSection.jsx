import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { mockData } from '../mock';
import { useTranslation } from '../hooks/useTranslation';
import OptimizedImage from './OptimizedImage';

const HeroSection = () => {
  const t = useTranslation();
  
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // For now, we'll open the LinkedIn profile. Later you can add a real PDF
    window.open(mockData.developer.social.linkedin, '_blank');
  };

  return (
    <section className="hero-section">
      <div className="hero-background">
        <OptimizedImage 
          src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=1920&q=80" 
          alt="Developer workspace"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container mx-auto px-6 h-full flex items-center">
        <div className="hero-content">
          <h1 className="hero-title">
            {mockData.developer.name}
          </h1>
          <p className="body-large mb-8 max-w-md">
            {t.heroTitle}
          </p>
          <p className="body-medium mb-12 max-w-lg text-primary opacity-90">
            {t.heroBio}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button 
              onClick={scrollToProjects}
              className="btn-primary btn-hover-scale"
            >
              {t.viewMyWork}
            </button>
            <button 
              onClick={downloadResume}
              className="btn-secondary btn-hover-scale"
            >
              {t.downloadResume}
            </button>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a 
              href={mockData.developer.social.github}
              className="text-primary hover:text-brand-hover transition-colors p-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a 
              href={mockData.developer.social.linkedin}
              className="text-primary hover:text-brand-hover transition-colors p-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href={`mailto:${mockData.developer.email}`}
              className="text-primary hover:text-brand-hover transition-colors p-2"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToAbout}
        className="scroll-indicator absolute bottom-12 left-1/2 transform -translate-x-1/2 text-primary hover:text-brand-hover transition-all duration-300 animate-bounce z-10"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;