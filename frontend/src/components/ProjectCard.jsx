import React from 'react';
import { Github, ExternalLink, Star, GitFork, Eye, Calendar, Globe, Server, Smartphone, Database, Code, Layers } from 'lucide-react';

const ProjectCard = ({ project }) => {
  // Ícones para categorias
  const getCategoryIcon = (category) => {
    const icons = {
      frontend: <Globe size={16} className="text-blue-400" />,
      backend: <Server size={16} className="text-green-400" />,
      mobile: <Smartphone size={16} className="text-purple-400" />,
      fullstack: <Layers size={16} className="text-orange-400" />,
      database: <Database size={16} className="text-yellow-400" />,
      devops: <Code size={16} className="text-red-400" />,
      other: <Code size={16} className="text-gray-400" />
    };
    return icons[category] || icons.other;
  };

  // Cores para status de deployment
  const getDeploymentColor = (platform) => {
    const colors = {
      vercel: 'bg-black text-white',
      netlify: 'bg-teal-500 text-white',
      'github-pages': 'bg-gray-800 text-white',
      heroku: 'bg-purple-600 text-white',
      docker: 'bg-blue-600 text-white',
      none: 'bg-gray-500 text-white'
    };
    return colors[platform] || colors.none;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'short'
    });
  };

  return (
    <div className="bg-card border border-border-light rounded-lg overflow-hidden hover:border-border-medium transition-all duration-300 group hover:shadow-lg">
      {/* Header */}
      <div className="p-6 border-b border-border-light">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            {getCategoryIcon(project.category)}
            <h3 className="heading-6 text-primary truncate">
              {project.name}
            </h3>
          </div>
          
          {/* Featured badge */}
          {project.featured && (
            <div className="flex items-center gap-1 px-2 py-1 bg-brand-primary bg-opacity-20 text-brand-primary rounded-md text-xs">
              <Star size={12} />
              Destaque
            </div>
          )}
        </div>

        <p className="body-small text-secondary line-clamp-2 mb-4">
          {project.description || 'Projeto desenvolvido com foco em boas práticas e tecnologias modernas.'}
        </p>

        {/* Language and Topics */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.language && (
            <span className="px-2 py-1 bg-brand-primary bg-opacity-20 text-brand-primary rounded-md text-xs font-medium">
              {project.language}
            </span>
          )}
          {project.topics.slice(0, 3).map((topic, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-page text-secondary rounded-md text-xs border border-border-light"
            >
              {topic}
            </span>
          ))}
          {project.topics.length > 3 && (
            <span className="px-2 py-1 text-secondary text-xs">
              +{project.topics.length - 3}
            </span>
          )}
        </div>

        {/* Deployment Status */}
        {project.deployment.status === 'deployed' && (
          <div className="flex items-center gap-2 mb-4">
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${getDeploymentColor(project.deployment.platform)}`}>
              🚀 {project.deployment.platform === 'vercel' ? 'Vercel' :
                   project.deployment.platform === 'netlify' ? 'Netlify' :
                   project.deployment.platform === 'github-pages' ? 'GitHub Pages' :
                   project.deployment.platform === 'heroku' ? 'Heroku' :
                   project.deployment.platform === 'docker' ? 'Docker' : 'Deploy'}
            </div>
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="px-6 py-4 bg-page border-b border-border-light">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-yellow-400 mb-1">
              <Star size={16} />
              <span className="font-medium">{project.stargazers_count}</span>
            </div>
            <span className="caption text-secondary">Stars</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-green-400 mb-1">
              <GitFork size={16} />
              <span className="font-medium">{project.forks_count}</span>
            </div>
            <span className="caption text-secondary">Forks</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-blue-400 mb-1">
              <Eye size={16} />
              <span className="font-medium">{project.watchers_count}</span>
            </div>
            <span className="caption text-secondary">Watchers</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1 text-secondary caption">
            <Calendar size={12} />
            <span>Atualizado {formatDate(project.updated_at)}</span>
          </div>
          
          {project.size && (
            <span className="caption text-secondary">
              {Math.round(project.size / 1024)} KB
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex-1 flex items-center justify-center gap-2"
          >
            <Github size={16} />
            <span>Código</span>
          </a>
          
          {project.deployment.url && (
            <a
              href={project.deployment.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 flex items-center justify-center gap-2"
            >
              <ExternalLink size={16} />
              <span>Demo</span>
            </a>
          )}
        </div>

        {/* Additional Info */}
        {(project.archived || project.disabled) && (
          <div className="mt-3 p-2 bg-yellow-900 bg-opacity-20 border border-yellow-500 rounded text-center">
            <span className="caption text-yellow-400">
              {project.archived ? '📦 Arquivado' : '⚠️ Desabilitado'}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
