import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { mockData } from '../mock';
import { useTranslation } from '../hooks/useTranslation';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslation();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-page/95 backdrop-blur-sm border-b border-border-light">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="font-display font-black text-xl text-primary uppercase tracking-tight">
            {mockData.developer.name.split(' ').map(name => name[0]).join('')}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="nav-link">
              {t.about}
            </button>
            <button onClick={() => scrollToSection('skills')} className="nav-link">
              {t.skills}
            </button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">
              {t.projects}
            </button>
            <button onClick={() => scrollToSection('experience')} className="nav-link">
              {t.experience}
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              {t.contact}
            </button>
            
            {/* Language Selector */}
            <LanguageSelector />
          </nav>

          {/* Mobile Menu Button and Language Selector */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageSelector />
            <button
              className="p-2 text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-primary hover:text-brand-hover">
              {t.about}
            </button>
            <button onClick={() => scrollToSection('skills')} className="block w-full text-left py-2 text-primary hover:text-brand-hover">
              {t.skills}
            </button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2 text-primary hover:text-brand-hover">
              {t.projects}
            </button>
            <button onClick={() => scrollToSection('experience')} className="block w-full text-left py-2 text-primary hover:text-brand-hover">
              {t.experience}
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-primary hover:text-brand-hover">
              {t.contact}
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;