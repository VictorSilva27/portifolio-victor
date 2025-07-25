import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { mockData } from '../mock';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-16 text-center">
            Experience
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border-medium md:left-1/2 md:-translate-x-0.5"></div>
            
            <div className="space-y-12">
              {mockData.experience.map((exp, index) => (
                <div 
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-brand-primary rounded-full border-4 border-page md:left-1/2 md:-translate-x-1/2"></div>
                  
                  {/* Experience Card */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-page border border-border-light rounded-lg p-6 ml-8 md:ml-0 hover:border-border-medium transition-colors">
                      <div className="space-y-4">
                        {/* Header */}
                        <div>
                          <h3 className="heading-5 text-primary mb-1">
                            {exp.position}
                          </h3>
                          <h4 className="body-medium text-brand-primary mb-2">
                            {exp.company}
                          </h4>
                          
                          <div className="flex flex-wrap gap-4 text-secondary">
                            <div className="inline-flex items-center gap-1">
                              <Calendar size={16} />
                              <span className="caption">{exp.duration}</span>
                            </div>
                            <div className="inline-flex items-center gap-1">
                              <MapPin size={16} />
                              <span className="caption">{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Description */}
                        <p className="body-small text-secondary">
                          {exp.description}
                        </p>
                        
                        {/* Achievements */}
                        <div>
                          <h5 className="heading-6 text-primary mb-3">
                            Key Achievements
                          </h5>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li 
                                key={achIndex}
                                className="flex items-start gap-3"
                              >
                                <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="caption text-secondary">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;