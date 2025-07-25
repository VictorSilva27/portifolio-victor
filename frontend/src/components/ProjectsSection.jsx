import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
import { mockData } from '../mock';

const ProjectsSection = () => {
  const featuredProjects = mockData.projects.filter(project => project.featured);
  const otherProjects = mockData.projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-32 bg-page">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-2 mb-16 text-center">
            Featured Projects
          </h2>
          
          {/* Featured Projects */}
          <div className="space-y-16 mb-20">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Project Image */}
                <div className="lg:w-1/2">
                  <div className="relative overflow-hidden rounded-lg border border-border-light hover:border-border-medium transition-colors">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-80 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Star className="text-brand-primary" size={24} />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:w-1/2 space-y-6">
                  <h3 className="heading-4 text-primary">
                    {project.title}
                  </h3>
                  
                  <p className="body-small text-secondary leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-card text-primary rounded-full caption border border-border-light"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-4">
                    <a 
                      href={project.githubUrl}
                      className="inline-flex items-center gap-2 text-primary hover:text-brand-hover transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                      <span className="body-small">Code</span>
                    </a>
                    <a 
                      href={project.liveUrl}
                      className="inline-flex items-center gap-2 text-primary hover:text-brand-hover transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                      <span className="body-small">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div>
            <h3 className="heading-5 mb-8 text-primary">
              Other Projects
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {otherProjects.map((project) => (
                <div 
                  key={project.id}
                  className="bg-card border border-border-light rounded-lg overflow-hidden hover:border-border-medium transition-colors group"
                >
                  <div className="relative">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <h4 className="heading-6 text-primary">
                      {project.title}
                    </h4>
                    
                    <p className="body-small text-secondary">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-page text-secondary rounded caption border border-border-light"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-secondary caption">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    {/* Links */}
                    <div className="flex gap-4 pt-2">
                      <a 
                        href={project.githubUrl}
                        className="inline-flex items-center gap-2 text-primary hover:text-brand-hover transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={18} />
                        <span className="caption">Code</span>
                      </a>
                      <a 
                        href={project.liveUrl}
                        className="inline-flex items-center gap-2 text-primary hover:text-brand-hover transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={18} />
                        <span className="caption">Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;