import React from 'react';
import { mockData } from '../mock';

const SkillsSection = () => {
  const skillCategories = [
    { title: 'Frontend', skills: mockData.skills.frontend, color: 'brand-primary' },
    { title: 'Mobile', skills: mockData.skills.mobile, color: 'secondary-olive' },
    { title: 'Backend', skills: mockData.skills.backend, color: 'secondary-yellow' },
    { title: 'Database', skills: mockData.skills.database, color: 'brand-primary' },
    { title: 'Tools & Testing', skills: mockData.skills.tools, color: 'secondary-olive' }
  ];

  return (
    <section id="skills" className="py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-2 mb-16 text-center">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                <h3 className="heading-5 text-primary border-b border-border-medium pb-2">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="flex justify-between items-center mb-2">
                        <span className="body-small font-medium text-primary">
                          {skill.name}
                        </span>
                        <span className="caption text-secondary">
                          {skill.years}y
                        </span>
                      </div>
                      
                      {/* Skill Progress Bar */}
                      <div className="w-full bg-border-light rounded-full h-2">
                        <div 
                          className="bg-brand-primary h-2 rounded-full transition-all duration-300 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      
                      <div className="flex justify-between mt-1">
                        <span className="caption">{skill.level}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;