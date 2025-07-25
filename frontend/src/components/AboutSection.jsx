import React from 'react';
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';
import { mockData } from '../mock';
import { useTranslation } from '../hooks/useTranslation';

const AboutSection = () => {
  const t = useTranslation();
  
  const highlights = [
    {
      icon: <Code size={32} />,
      title: t.cleanCode,
      description: t.cleanCodeDesc
    },
    {
      icon: <Lightbulb size={32} />,
      title: t.uxFocused,
      description: t.uxFocusedDesc
    },
    {
      icon: <Users size={32} />,
      title: t.teamPlayer,
      description: t.teamPlayerDesc
    },
    {
      icon: <Coffee size={32} />,
      title: t.continuousLearner,
      description: t.continuousLearnerDesc
    }
  ];

  return (
    <section id="about" className="py-32 bg-page">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-16 text-center">
            {t.aboutTitle}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* About Text */}
            <div>
              <p className="body-medium mb-8">
                {t.aboutDescription1}
              </p>
              <p className="body-small mb-8">
                {t.aboutDescription2}
              </p>
              <p className="body-small">
                {t.aboutDescription3}
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-lg border border-border-light hover:border-border-medium transition-colors"
                >
                  <div className="text-primary mb-4">
                    {highlight.icon}
                  </div>
                  <h3 className="heading-6 mb-2 text-primary">
                    {highlight.title}
                  </h3>
                  <p className="caption">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;