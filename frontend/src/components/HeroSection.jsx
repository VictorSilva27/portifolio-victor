import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { mockData } from '../mock';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section">
      <div className="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2" 
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
            {mockData.developer.title}
          </p>
          <p className="body-small mb-12 max-w-lg text-secondary">
            {mockData.developer.bio}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="btn-primary">
              View My Work
            </button>
            <button className="btn-secondary">
              Download Resume
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary hover:text-brand-hover transition-colors animate-bounce"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;