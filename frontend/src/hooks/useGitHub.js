import { useState, useEffect } from 'react';
import GitHubService from '../services/GitHubService';

export const useGitHub = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const githubService = new GitHubService();

  const fetchRepositories = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const repos = await githubService.getAllRepositories();
      setRepositories(repos);
    } catch (err) {
      setError('Erro ao carregar repositórios do GitHub');
      console.error('Erro ao buscar repositórios:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  // Filtrar projetos em destaque
  const getFeaturedProjects = () => {
    return repositories.filter(repo => repo.featured);
  };

  // Filtrar projetos por categoria
  const getProjectsByCategory = (category) => {
    return repositories.filter(repo => repo.category === category);
  };

  // Filtrar projetos com deploy
  const getDeployedProjects = () => {
    return repositories.filter(repo => repo.deployment.status === 'deployed');
  };

  // Calcular estatísticas dos projetos
  const getProjectStats = () => {
    const totalRepos = repositories.length;
    const totalStars = repositories.reduce((sum, repo) => sum + repo.stargazers_count, 0);
    const totalForks = repositories.reduce((sum, repo) => sum + repo.forks_count, 0);
    const featuredCount = getFeaturedProjects().length;
    const deployedCount = getDeployedProjects().length;

    return {
      totalRepos,
      totalStars,
      totalForks,
      featuredCount,
      deployedCount
    };
  };

  // Buscar projetos por linguagem
  const getProjectsByLanguage = (language) => {
    return repositories.filter(repo => 
      repo.language && repo.language.toLowerCase() === language.toLowerCase()
    );
  };

  // Buscar projetos recentes (últimos 6 meses)
  const getRecentProjects = () => {
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
    
    return repositories.filter(repo => 
      new Date(repo.updated_at) > sixMonthsAgo
    ).sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
  };

  // Buscar top projetos por stars
  const getTopStarredProjects = (limit = 5) => {
    return [...repositories]
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, limit);
  };

  return {
    repositories,
    loading,
    error,
    getFeaturedProjects,
    getProjectsByCategory,
    getDeployedProjects,
    getProjectStats,
    getProjectsByLanguage,
    getRecentProjects,
    getTopStarredProjects,
    refetch: fetchRepositories
  };
};
