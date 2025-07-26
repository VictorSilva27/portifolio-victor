import React, { useState } from 'react';
import { Github, ExternalLink, Filter, Loader2, RefreshCw, BarChart3, Star } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { useGitHub } from '../hooks/useGitHub';
import { useTheme } from '../contexts/ThemeContext';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const t = useTranslation();
  const { isLight } = useTheme();
  const { 
    repositories, 
    loading, 
    error, 
    getFeaturedProjects, 
    getProjectsByCategory,
    getDeployedProjects,
    getProjectStats,
    refetch 
  } = useGitHub();

  const [activeFilter, setActiveFilter] = useState('featured');
  const [showStats, setShowStats] = useState(false);

  // Opções de filtro
  const filterOptions = [
    { key: 'featured', label: t.projectsSection.filters.featured || 'Destacados', icon: '⭐' },
    { key: 'deployed', label: t.projectsSection.filters.deployed || 'Com Deploy', icon: '🚀' },
    { key: 'frontend', label: t.projectsSection.filters.frontend || 'Frontend', icon: '⚛️' },
    { key: 'backend', label: t.projectsSection.filters.backend || 'Backend', icon: '🔧' },
    { key: 'mobile', label: t.projectsSection.filters.mobile || 'Mobile', icon: '📱' },
    { key: 'all', label: t.projectsSection.filters.all || 'Todos', icon: '📦' }
  ];

  // Filtrar projetos baseado no filtro ativo
  const getFilteredProjects = () => {
    switch (activeFilter) {
      case 'featured':
        return getFeaturedProjects();
      case 'deployed':
        return getDeployedProjects();
      case 'frontend':
        return getProjectsByCategory('frontend');
      case 'backend':
        return getProjectsByCategory('backend');
      case 'mobile':
        return getProjectsByCategory('mobile');
      case 'all':
        return repositories;
      default:
        return getFeaturedProjects();
    }
  };

  const filteredProjects = getFilteredProjects();
  const stats = getProjectStats();

  if (error) {
    return (
      <section id="projects" className="py-32 bg-page">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="bg-red-900 bg-opacity-20 border border-red-500 rounded-lg p-6 max-w-md mx-auto">
              <h3 className="heading-4 text-red-400 mb-2">{t.projectsSection.error.title || 'Erro ao carregar projetos'}</h3>
              <p className="body-small text-red-300 mb-4">{error}</p>
              <button 
                onClick={refetch}
                className="btn-secondary flex items-center gap-2 mx-auto"
              >
                <RefreshCw size={16} />
                {t.projectsSection.error.retry || 'Tentar novamente'}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-32 bg-page">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">
              {t.projectsSection.title || 'Meus Projetos'}
            </h2>
            <p className="body-large text-secondary max-w-3xl mx-auto mb-8">
              {t.projectsSection.subtitle || 'Aqui estão alguns dos meus projetos mais recentes do GitHub'}
            </p>

            {/* Estatísticas */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <button
                onClick={() => setShowStats(!showStats)}
                className="btn-secondary flex items-center gap-2"
              >
                <BarChart3 size={16} />
                {showStats ? 
                  (t.projectsSection.stats.hide || 'Ocultar') : 
                  (t.projectsSection.stats.show || 'Ver')
                } {t.projectsSection.stats.toggle || 'Estatísticas'}
              </button>
              
              <a
                href="https://github.com/VictorSilva27"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <Github size={16} />
                {t.projectsSection.github.viewOnGitHub || 'Ver no GitHub'}
              </a>
            </div>

            {/* Painel de estatísticas */}
            {showStats && (
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto mb-8 p-6 bg-card rounded-xl border border-border-light">
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-primary">{stats.totalRepos}</div>
                  <div className="text-sm text-secondary">{t.projectsSection.stats.repositories || 'Repositórios'}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">{stats.totalStars}</div>
                  <div className="text-sm text-secondary">{t.projectsSection.stats.stars || 'Stars'}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{stats.totalForks}</div>
                  <div className="text-sm text-secondary">{t.projectsSection.stats.forks || 'Forks'}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">{stats.featuredCount}</div>
                  <div className="text-sm text-secondary">{t.projectsSection.stats.featured || 'Destacados'}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{stats.deployedCount}</div>
                  <div className="text-sm text-secondary">{t.projectsSection.stats.deployed || 'Com Deploy'}</div>
                </div>
              </div>
            )}
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filterOptions.map((option) => (
              <button
                key={option.key}
                onClick={() => setActiveFilter(option.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === option.key
                    ? isLight ? 'bg-gray-200 text-gray-600' : 'bg-brand-primary text-white'
                    : isLight 
                      ? 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                      : 'bg-card text-secondary hover:bg-bg-light border border-border-light'
                }`}
              >
                <span>{option.icon}</span>
                {option.label}
              </button>
            ))}
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-20">
              <Loader2 className="animate-spin mx-auto mb-4 text-brand-primary" size={48} />
              <p className="body-medium text-secondary">{t.projectsSection.loading || 'Carregando projetos do GitHub...'}</p>
            </div>
          )}

          {/* Projects Display */}
          {!loading && (
            <>
              {filteredProjects.length > 0 ? (
                <>
                  {/* Featured Projects - Layout especial para projetos destacados */}
                  {activeFilter === 'featured' && filteredProjects.length > 0 && (
                    <div className="space-y-16 mb-20">
                      {filteredProjects.slice(0, 3).map((project, index) => (
                        <div 
                          key={project.id}
                          className={`flex flex-col lg:flex-row gap-12 items-center ${
                            index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                          }`}
                        >
                          {/* Project Image */}
                          <div className="lg:w-1/2">
                            <div className="relative overflow-hidden rounded-lg border border-border-light hover:border-border-medium transition-colors">
                              <div className="w-full h-64 lg:h-80 bg-gradient-to-br from-brand-primary to-secondary-olive opacity-20 flex items-center justify-center">
                                <Github size={64} className="text-brand-primary" />
                              </div>
                              <div className="absolute top-4 right-4">
                                <Star className="text-brand-primary" size={24} />
                              </div>
                              {project.deployment.status === 'deployed' && (
                                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                  🚀 Deploy
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Project Details */}
                          <div className="lg:w-1/2 space-y-6">
                            <h3 className="heading-4 text-primary">
                              {project.name}
                            </h3>
                            
                            <p className="body-small text-secondary leading-relaxed">
                              {project.description || 'Projeto desenvolvido com foco em boas práticas e tecnologias modernas.'}
                            </p>
                            
                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2">
                              {project.language && (
                                <span className="px-3 py-1 bg-card text-primary rounded-full caption border border-border-light">
                                  {project.language}
                                </span>
                              )}
                              {project.topics.slice(0, 4).map((topic, topicIndex) => (
                                <span 
                                  key={topicIndex}
                                  className="px-3 py-1 bg-card text-primary rounded-full caption border border-border-light"
                                >
                                  {topic}
                                </span>
                              ))}
                            </div>

                            {/* Project Stats */}
                            <div className="flex gap-4 text-sm text-secondary">
                              <span className="flex items-center gap-1">
                                <Star size={16} />
                                {project.stargazers_count}
                              </span>
                              <span className="flex items-center gap-1">
                                <Github size={16} />
                                {project.forks_count} forks
                              </span>
                            </div>
                            
                            {/* Links */}
                            <div className="flex gap-4">
                              <a 
                                href={project.html_url}
                                className="inline-flex items-center gap-2 text-primary hover:text-brand-hover transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github size={20} />
                                <span className="body-small">{t.projectsSection.viewCode || 'Código'}</span>
                              </a>
                              {project.deployment.url && (
                                <a 
                                  href={project.deployment.url}
                                  className="inline-flex items-center gap-2 text-primary hover:text-brand-hover transition-colors"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <ExternalLink size={20} />
                                  <span className="body-small">{t.projectsSection.viewDemo || 'Demo'}</span>
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* Grid para projetos restantes se houver */}
                      {filteredProjects.length > 3 && (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                          {filteredProjects.slice(3).map((project) => (
                            <ProjectCard key={project.id} project={project} />
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Grid normal para outros filtros */}
                  {activeFilter !== 'featured' && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">📁</div>
                  <h3 className="heading-4 text-secondary mb-2">
                    {t.projectsSection.noProjects.title || 'Nenhum projeto encontrado'}
                  </h3>
                  <p className="body-small text-secondary">
                    {t.projectsSection.noProjects.subtitle || 'Tente filtrar por uma categoria diferente'}
                  </p>
                </div>
              )}
            </>
          )}

          {/* GitHub CTA */}
          {!loading && filteredProjects.length > 0 && (
            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-4 p-6 bg-card rounded-xl border border-border-light">
                <Github size={24} className="text-primary" />
                <div className="text-left">
                  <h4 className="heading-6 text-primary mb-1">
                    {t.projectsSection.github.title || 'Veja mais no GitHub'}
                  </h4>
                  <p className="body-small text-secondary">
                    {t.projectsSection.github.subtitle || 'Explore todos os meus repositórios e contribuições'}
                  </p>
                </div>
                <a
                  href="https://github.com/VictorSilva27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2"
                >
                  <ExternalLink size={16} />
                  {t.projectsSection.github.button || 'Visitar GitHub'}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;