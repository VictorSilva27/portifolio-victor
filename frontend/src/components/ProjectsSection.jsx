import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
import { mockData } from '../mock';
import { useTranslation } from '../hooks/useTranslation';

const ProjectsSection = () => {
  const t = useTranslation();
  
  const projects = [
    {
      id: 1,
      title: t.dashboardTitle,
      description: t.dashboardDesc,
      technologies: ["React.js", "Chart.js", "REST API", "Responsive Design"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      githubUrl: "https://github.com/seuperfil/dashboard-escolar",
      liveUrl: "https://dashboard-escolar.vercel.app",
      featured: true
    },
    {
      id: 2,
      title: t.educationalAppTitle,
      description: t.educationalAppDesc,
      technologies: ["React Native", "Drag & Drop", "Educational UI"],
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
      githubUrl: "https://github.com/seuperfil/educational-app",
      liveUrl: "https://educational-app.expo.dev",
      featured: true
    },
    {
      id: 3,
      title: t.authSystemTitle,
      description: t.authSystemDesc,
      technologies: ["Vue.js", "Authentication", "UI/UX", "Security"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
      githubUrl: "https://github.com/seuperfil/auth-system",
      liveUrl: "https://auth-system.netlify.app",
      featured: true
    },
    {
      id: 4,
      title: t.flutterAppTitle,
      description: t.flutterAppDesc,
      technologies: ["Flutter", "flutter_bloc", "Team Collaboration", "Cross-platform"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
      githubUrl: "https://github.com/seuperfil/flutter-app",
      liveUrl: "Em desenvolvimento",
      featured: false
    },
    {
      id: 5,
      title: t.fullstackTitle,
      description: t.fullstackDesc,
      technologies: ["React", "Nuxt.js", "Full Stack", "API Integration"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      githubUrl: "https://github.com/seuperfil/fullstack-project",
      liveUrl: "https://fullstack-project.vercel.app",
      featured: false
    },
    {
      id: 6,
      title: t.paymentAppTitle,
      description: t.paymentAppDesc,
      technologies: ["React Native", "Kotlin", "Payment APIs", "Redux"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      githubUrl: "https://github.com/seuperfil/payment-app",
      liveUrl: "Em desenvolvimento",
      featured: false
    }
  ];
  
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-32 bg-page">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-2 mb-16 text-center">
            {t.projectsTitle}
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
                      <span className="body-small">{t.code}</span>
                    </a>
                    <a 
                      href={project.liveUrl}
                      className="inline-flex items-center gap-2 text-primary hover:text-brand-hover transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                      <span className="body-small">{t.liveDemo}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div>
            <h3 className="heading-5 mb-8 text-primary">
              {t.otherProjects}
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
                          +{project.technologies.length - 3} {t.more}
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
                        <span className="caption">{t.code}</span>
                      </a>
                      <a 
                        href={project.liveUrl}
                        className="inline-flex items-center gap-2 text-primary hover:text-brand-hover transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={18} />
                        <span className="caption">{t.liveDemo}</span>
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