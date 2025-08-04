import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { mockData } from '../mock';
import { useTranslation } from '../hooks/useTranslation';
import { useScrollSection } from '../hooks/useScrollSection';
import { useTheme } from '../contexts/ThemeContext';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslation();
  const { isInHero } = useScrollSection();
  const { isLight } = useTheme();
  
  // Dynamic header styles based on section and theme
  const isHeroLight = isInHero && isLight;
  const headerBgClass = isHeroLight 
    ? 'bg-slate-900/90 backdrop-blur-sm border-white/20' 
    : 'bg-page/95 backdrop-blur-sm border-border-light';
    
  const textColorClass = isHeroLight ? 'text-white' : 'text-primary';
  const logoColorClass = isHeroLight ? 'text-white' : 'text-primary';

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${headerBgClass} ${isHeroLight ? 'header-hero-light' : ''}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Logo size={40} adaptive={true} className="hover:scale-105 transition-all duration-300 cursor-pointer" />
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
            
            {/* Theme Toggle and Language Selector */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <LanguageSelector />
            </div>
          </nav>

          {/* Mobile Menu Button, Theme Toggle and Language Selector */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
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