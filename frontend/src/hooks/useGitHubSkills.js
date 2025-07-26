import { useState, useEffect } from 'react';
import GitHubService from '../services/GitHubService';

export const useGitHubSkills = () => {
  const [skills, setSkills] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const githubService = new GitHubService();

  const fetchSkills = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const skillsData = await githubService.getSkillsFromRepositories();
      setSkills(skillsData);
    } catch (err) {
      setError('Erro ao carregar skills do GitHub');
      console.error('Erro ao buscar skills:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const getSkillsByCategory = (category) => {
    if (!skills) return [];
    return skills.categorized[category] || [];
  };

  const getTopSkills = (limit = 5) => {
    if (!skills) return [];
    return [
      ...skills.summary.topLanguages,
      ...skills.summary.topFrameworks
    ].slice(0, limit);
  };

  const getAllSkills = () => {
    if (!skills) return [];
    const allSkills = [];
    Object.values(skills.categorized).forEach(categorySkills => {
      allSkills.push(...categorySkills);
    });
    return allSkills.sort((a, b) => b.count - a.count);
  };

  return {
    skills,
    loading,
    error,
    getSkillsByCategory,
    getTopSkills,
    getAllSkills,
    refetch: fetchSkills
  };
};
