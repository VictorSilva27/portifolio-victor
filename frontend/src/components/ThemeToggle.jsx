import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme, isDark, isLight } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative p-1 rounded-lg border transition-all duration-300 group ${
        isLight 
          ? 'bg-card border-border-light hover:border-border-medium' 
          : 'bg-transparent border-white/30 hover:border-white'
      }`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        {/* Sun Icon */}
        <Sun 
          size={20} 
          className={`absolute transition-all duration-300 transform ${
            isDark 
              ? 'rotate-90 scale-0 opacity-0' 
              : 'rotate-0 scale-100 opacity-100'
          } ${isLight ? 'text-primary' : 'text-white'}`}
        />
        
        {/* Moon Icon */}
        <Moon 
          size={20} 
          className={`absolute transition-all duration-300 transform ${
            isDark 
              ? 'rotate-0 scale-100 opacity-100' 
              : '-rotate-90 scale-0 opacity-0'
          } ${isLight ? 'text-primary' : 'text-white'}`}
        />
      </div>
      
      {/* Hover effect */}
      <div className="absolute inset-0 rounded-lg bg-brand-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
    </button>
  );
};

export default ThemeToggle;
