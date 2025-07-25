import { useState, useEffect } from 'react';

export const useScrollSection = () => {
  const [currentSection, setCurrentSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Check if scrolled beyond initial viewport
      setIsScrolled(scrollY > 50);
      
      // Get all sections
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      
      for (let section of sections) {
        const element = document.getElementById(section === 'hero' ? 'root' : section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + scrollY;
          const elementHeight = rect.height;
          
          // Check if we're in this section (with some offset for better UX)
          if (scrollY >= elementTop - 100 && scrollY < elementTop + elementHeight - 100) {
            setCurrentSection(section);
            break;
          }
        }
      }
      
      // Special case for hero - if we're at the very top
      if (scrollY < windowHeight * 0.8) {
        setCurrentSection('hero');
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    currentSection,
    isScrolled,
    isInHero: currentSection === 'hero',
    isInAbout: currentSection === 'about',
    isInSkills: currentSection === 'skills',
    isInProjects: currentSection === 'projects',
    isInExperience: currentSection === 'experience',
    isInContact: currentSection === 'contact'
  };
};
