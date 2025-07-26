import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { translations } from '../translations/translations';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const { isLight } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[language];

  const languages = [
    { code: 'pt', name: t.portuguese, flag: '🇧🇷' },
    { code: 'en', name: t.english, flag: '🇺🇸' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 transition-colors rounded-lg border ${
          isLight 
            ? 'text-primary bg-card border-border-light hover:border-border-medium hover:text-brand-hover' 
            : 'text-white bg-transparent border-white/30 hover:border-white hover:text-white'
        }`}
      >
        <Globe size={18} />
        <span className="hidden sm:inline text-sm">{currentLanguage?.flag}</span>
        <span className="hidden md:inline text-sm">{currentLanguage?.name}</span>
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className={`absolute top-full right-0 mt-2 border rounded-lg shadow-lg z-50 min-w-[140px] ${
          isLight
            ? 'bg-card border-border-light'
            : 'bg-transparent border-white/30'
        }`}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full text-left px-4 py-3 text-sm transition-colors hover:bg-border-light flex items-center gap-3 ${
                language === lang.code ? 'text-brand-primary bg-border-light' : 'text-secondary'
              }`}
            >
              <span className="text-base">{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;