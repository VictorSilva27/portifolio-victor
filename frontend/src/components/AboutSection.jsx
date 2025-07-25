import React from 'react';
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';
import { mockData } from '../mock';

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code size={32} />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time"
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Problem Solver",
      description: "Turning complex challenges into elegant, user-friendly solutions"
    },
    {
      icon: <Users size={32} />,
      title: "Team Player",
      description: "Collaborating effectively with cross-functional teams"
    },
    {
      icon: <Coffee size={32} />,
      title: "Continuous Learner",
      description: "Always exploring new technologies and best practices"
    }
  ];

  return (
    <section id="about" className="py-32 bg-page">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-16 text-center">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* About Text */}
            <div>
              <p className="body-medium mb-8">
                {mockData.developer.bio}
              </p>
              <p className="body-small mb-8">
                I believe in building applications that not only function flawlessly but also provide 
                exceptional user experiences. My approach combines technical expertise with creative 
                problem-solving to deliver solutions that make a real impact.
              </p>
              <p className="body-small">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
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