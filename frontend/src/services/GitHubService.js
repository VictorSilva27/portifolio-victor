class GitHubService {
  constructor(username = 'VictorSilva27') {
    this.username = username;
    this.baseUrl = 'https://api.github.com';
    this.cache = new Map();
    this.cacheTimeout = 10 * 60 * 1000; // 10 minutos
  }

  // Método para cache
  getCacheKey(key) {
    return `github_${key}_${this.username}`;
  }

  setCache(key, data) {
    this.cache.set(this.getCacheKey(key), {
      data,
      timestamp: Date.now()
    });
  }

  getCache(key) {
    const cached = this.cache.get(this.getCacheKey(key));
    if (cached && (Date.now() - cached.timestamp) < this.cacheTimeout) {
      return cached.data;
    }
    return null;
  }

  // Buscar todos os repositórios
  async getAllRepositories() {
    const cacheKey = 'repositories';
    const cached = this.getCache(cacheKey);
    if (cached) return cached;

    try {
      const repositories = [];
      let page = 1;
      const perPage = 100;

      while (true) {
        const response = await fetch(`${this.baseUrl}/users/${this.username}/repos?page=${page}&per_page=${perPage}&sort=updated`);
        
        if (!response.ok) {
          throw new Error(`Erro HTTP: ${response.status}`);
        }

        const repos = await response.json();
        
        if (repos.length === 0) break;
        
        // Filtrar repositórios pessoais (não forks)
        const personalRepos = repos.filter(repo => !repo.fork);
        repositories.push(...personalRepos);
        
        if (repos.length < perPage) break;
        page++;
      }

      // Processar repositórios
      const processedRepos = repositories.map(repo => this.processRepository(repo));
      
      this.setCache(cacheKey, processedRepos);
      return processedRepos;
    } catch (error) {
      console.error('Erro ao buscar repositórios:', error);
      throw error;
    }
  }

  // Processar dados do repositório
  processRepository(repo) {
    return {
      id: repo.id,
      name: repo.name,
      fullName: repo.full_name,
      description: repo.description,
      language: repo.language,
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count,
      watchers_count: repo.watchers_count,
      size: repo.size,
      created_at: repo.created_at,
      updated_at: repo.updated_at,
      pushed_at: repo.pushed_at,
      homepage: repo.homepage,
      html_url: repo.html_url,
      clone_url: repo.clone_url,
      topics: repo.topics || [],
      visibility: repo.visibility,
      default_branch: repo.default_branch,
      archived: repo.archived,
      disabled: repo.disabled,
      hasPages: !!repo.has_pages,
      deployment: this.detectDeployment(repo),
      category: this.categorizeProject(repo),
      featured: this.isFeatured(repo),
      languages: {},
      lastCommit: repo.pushed_at
    };
  }

  // Detectar tipo de deployment
  detectDeployment(repo) {
    const homepage = repo.homepage || '';
    const description = repo.description || '';
    const topics = repo.topics || [];

    // Vercel
    if (homepage.includes('vercel.app') || topics.includes('vercel') || description.includes('vercel')) {
      return {
        platform: 'vercel',
        url: repo.homepage,
        status: 'deployed'
      };
    }

    // Netlify
    if (homepage.includes('netlify.app') || topics.includes('netlify') || description.includes('netlify')) {
      return {
        platform: 'netlify',
        url: repo.homepage,
        status: 'deployed'
      };
    }

    // GitHub Pages
    if (repo.has_pages || homepage.includes('github.io')) {
      return {
        platform: 'github-pages',
        url: repo.homepage || `https://${this.username}.github.io/${repo.name}`,
        status: 'deployed'
      };
    }

    // Heroku
    if (homepage.includes('herokuapp.com') || topics.includes('heroku') || description.includes('heroku')) {
      return {
        platform: 'heroku',
        url: repo.homepage,
        status: 'deployed'
      };
    }

    // Docker
    if (topics.includes('docker') || description.includes('docker')) {
      return {
        platform: 'docker',
        url: repo.homepage,
        status: repo.homepage ? 'deployed' : 'containerized'
      };
    }

    return {
      platform: 'none',
      url: null,
      status: 'not-deployed'
    };
  }

  // Categorizar projeto
  categorizeProject(repo) {
    const name = repo.name.toLowerCase();
    const description = (repo.description || '').toLowerCase();
    const topics = repo.topics || [];
    const language = repo.language || '';

    // Mobile
    if (language === 'Dart' || topics.includes('flutter') || topics.includes('react-native') || 
        name.includes('mobile') || name.includes('app') || description.includes('mobile') || 
        description.includes('flutter') || description.includes('react native')) {
      return 'mobile';
    }

    // Backend
    if (language === 'Python' || language === 'Java' || language === 'Go' || language === 'Rust' ||
        topics.includes('api') || topics.includes('backend') || topics.includes('server') ||
        name.includes('api') || name.includes('backend') || name.includes('server') ||
        description.includes('api') || description.includes('backend') || description.includes('server')) {
      return 'backend';
    }

    // Frontend
    if (language === 'JavaScript' || language === 'TypeScript' || 
        topics.includes('react') || topics.includes('vue') || topics.includes('angular') ||
        topics.includes('frontend') || topics.includes('web') ||
        name.includes('frontend') || name.includes('web') || name.includes('site') ||
        description.includes('frontend') || description.includes('web') || description.includes('react') || 
        description.includes('vue')) {
      return 'frontend';
    }

    // Fullstack
    if (topics.includes('fullstack') || topics.includes('full-stack') ||
        description.includes('fullstack') || description.includes('full stack')) {
      return 'fullstack';
    }

    // DevOps/Tools
    if (topics.includes('devops') || topics.includes('docker') || topics.includes('kubernetes') ||
        name.includes('config') || name.includes('setup') || name.includes('tool') ||
        description.includes('devops') || description.includes('tool') || description.includes('automation')) {
      return 'devops';
    }

    return 'other';
  }

  // Verificar se é projeto em destaque
  isFeatured(repo) {
    const minStars = 1;
    const hasDeployment = this.detectDeployment(repo).status === 'deployed';
    const recentActivity = new Date(repo.pushed_at) > new Date(Date.now() - 6 * 30 * 24 * 60 * 60 * 1000); // 6 meses
    const hasDescription = repo.description && repo.description.length > 20;
    const hasTopics = repo.topics && repo.topics.length > 0;

    return (repo.stargazers_count >= minStars || hasDeployment) && 
           (recentActivity || hasDescription || hasTopics);
  }

  // Analisar estatísticas do usuário
  async getUserStats() {
    try {
      const [userResponse, reposResponse] = await Promise.all([
        fetch(`${this.baseUrl}/users/${this.username}`),
        this.getAllRepositories()
      ]);

      if (!userResponse.ok) {
        throw new Error('Erro ao buscar dados do usuário');
      }

      const userData = await userResponse.json();
      const repositories = reposResponse;

      return {
        publicRepos: userData.public_repos,
        followers: userData.followers,
        following: userData.following,
        totalStars: repositories.reduce((sum, repo) => sum + repo.stargazers_count, 0),
        totalForks: repositories.reduce((sum, repo) => sum + repo.forks_count, 0),
        createdAt: userData.created_at,
        updatedAt: userData.updated_at
      };
    } catch (error) {
      console.error('Erro ao buscar estatísticas do usuário:', error);
      throw error;
    }
  }

  // Analisar skills baseadas nas linguagens dos repositórios
  async getSkillsFromRepositories() {
    try {
      const repositories = await this.getAllRepositories();
      const languageStats = {};
      const frameworkStats = {};
      const totalRepos = repositories.length;

      // Buscar linguagens de cada repositório
      for (const repo of repositories) {
        if (repo.language) {
          languageStats[repo.language] = (languageStats[repo.language] || 0) + 1;
        }

        // Analisar frameworks/tecnologias baseado em arquivos especiais
        const topics = repo.topics || [];
        const repoName = repo.name.toLowerCase();
        const description = (repo.description || '').toLowerCase();

        // Detectar React
        if (topics.includes('react') || repoName.includes('react') || description.includes('react')) {
          frameworkStats['React'] = (frameworkStats['React'] || 0) + 1;
        }

        // Detectar Vue.js
        if (topics.includes('vue') || topics.includes('vuejs') || repoName.includes('vue') || description.includes('vue')) {
          frameworkStats['Vue.js'] = (frameworkStats['Vue.js'] || 0) + 1;
        }

        // Detectar Angular
        if (topics.includes('angular') || repoName.includes('angular') || description.includes('angular')) {
          frameworkStats['Angular'] = (frameworkStats['Angular'] || 0) + 1;
        }

        // Detectar React Native
        if (topics.includes('react-native') || repoName.includes('react-native') || description.includes('react native')) {
          frameworkStats['React Native'] = (frameworkStats['React Native'] || 0) + 1;
        }

        // Detectar Flutter
        if (topics.includes('flutter') || repoName.includes('flutter') || description.includes('flutter')) {
          frameworkStats['Flutter'] = (frameworkStats['Flutter'] || 0) + 1;
        }

        // Detectar Node.js
        if (topics.includes('nodejs') || topics.includes('node') || repoName.includes('node') || description.includes('node')) {
          frameworkStats['Node.js'] = (frameworkStats['Node.js'] || 0) + 1;
        }

        // Detectar Express
        if (topics.includes('express') || topics.includes('expressjs') || description.includes('express')) {
          frameworkStats['Express.js'] = (frameworkStats['Express.js'] || 0) + 1;
        }

        // Detectar Next.js
        if (topics.includes('nextjs') || topics.includes('next') || repoName.includes('next') || description.includes('next')) {
          frameworkStats['Next.js'] = (frameworkStats['Next.js'] || 0) + 1;
        }

        // Detectar Nuxt.js
        if (topics.includes('nuxtjs') || topics.includes('nuxt') || repoName.includes('nuxt') || description.includes('nuxt')) {
          frameworkStats['Nuxt.js'] = (frameworkStats['Nuxt.js'] || 0) + 1;
        }

        // Detectar TypeScript
        if (repo.language === 'TypeScript' || topics.includes('typescript') || description.includes('typescript')) {
          frameworkStats['TypeScript'] = (frameworkStats['TypeScript'] || 0) + 1;
        }

        // Detectar Tailwind CSS
        if (topics.includes('tailwindcss') || topics.includes('tailwind') || description.includes('tailwind')) {
          frameworkStats['Tailwind CSS'] = (frameworkStats['Tailwind CSS'] || 0) + 1;
        }

        // Detectar Docker
        if (topics.includes('docker') || repoName.includes('docker') || description.includes('docker')) {
          frameworkStats['Docker'] = (frameworkStats['Docker'] || 0) + 1;
        }

        // Detectar PostgreSQL
        if (topics.includes('postgresql') || topics.includes('postgres') || description.includes('postgres')) {
          frameworkStats['PostgreSQL'] = (frameworkStats['PostgreSQL'] || 0) + 1;
        }

        // Detectar MongoDB
        if (topics.includes('mongodb') || topics.includes('mongo') || description.includes('mongo')) {
          frameworkStats['MongoDB'] = (frameworkStats['MongoDB'] || 0) + 1;
        }

        // Detectar MySQL
        if (topics.includes('mysql') || description.includes('mysql')) {
          frameworkStats['MySQL'] = (frameworkStats['MySQL'] || 0) + 1;
        }

        // Detectar Spring Boot
        if (topics.includes('spring-boot') || topics.includes('spring') || description.includes('spring')) {
          frameworkStats['Spring Boot'] = (frameworkStats['Spring Boot'] || 0) + 1;
        }

        // Detectar Django
        if (topics.includes('django') || description.includes('django')) {
          frameworkStats['Django'] = (frameworkStats['Django'] || 0) + 1;
        }

        // Detectar Flask
        if (topics.includes('flask') || description.includes('flask')) {
          frameworkStats['Flask'] = (frameworkStats['Flask'] || 0) + 1;
        }
      }

      // Converter para formato com porcentagens e níveis estimados
      const processStats = (stats) => {
        return Object.entries(stats)
          .map(([name, count]) => {
            const percentage = Math.round((count / totalRepos) * 100);
            // Estimar nível baseado no uso (mais realista)
            let level;
            if (count >= 5) level = Math.min(85 + Math.floor(Math.random() * 10), 95);
            else if (count >= 3) level = Math.min(75 + Math.floor(Math.random() * 15), 90);
            else if (count >= 2) level = Math.min(65 + Math.floor(Math.random() * 20), 85);
            else level = Math.min(60 + Math.floor(Math.random() * 15), 80);
            
            const years = Math.max(Math.floor(count / 2) + 1, 1); // Estimar anos baseado no uso
            
            return {
              name,
              level,
              percentage,
              count,
              years,
              category: this.categorizeSkill(name)
            };
          })
          .filter(skill => skill.count >= 1) // Filtrar skills com pelo menos 1 uso
          .sort((a, b) => b.count - a.count); // Ordenar por uso
      };

      const languages = processStats(languageStats);
      const frameworks = processStats(frameworkStats);

      // Categorizar skills
      const categorizedSkills = {
        frontend: [
          ...frameworks.filter(f => f.category === 'frontend'), 
          ...languages.filter(l => ['JavaScript', 'TypeScript', 'HTML', 'CSS'].includes(l.name))
        ],
        mobile: frameworks.filter(f => f.category === 'mobile'),
        backend: [
          ...frameworks.filter(f => f.category === 'backend'), 
          ...languages.filter(l => ['Python', 'Java', 'C#', 'Go', 'Rust', 'PHP', 'C++'].includes(l.name))
        ],
        database: frameworks.filter(f => f.category === 'database'),
        tools: frameworks.filter(f => f.category === 'tools'),
        languages: languages.filter(l => ![
          'JavaScript', 'TypeScript', 'HTML', 'CSS', 
          'Python', 'Java', 'C#', 'Go', 'Rust', 'PHP', 'C++'
        ].includes(l.name))
      };

      return {
        languages: languageStats,
        frameworks: frameworkStats,
        categorized: categorizedSkills,
        totalRepositories: totalRepos,
        summary: {
          topLanguages: languages.slice(0, 5),
          topFrameworks: frameworks.slice(0, 8),
          totalSkills: languages.length + frameworks.length
        }
      };

    } catch (error) {
      console.error('Erro ao analisar skills dos repositórios:', error);
      throw error;
    }
  }

  // Categorizar skill por tipo
  categorizeSkill(skillName) {
    const categories = {
      frontend: ['React', 'Vue.js', 'Angular', 'Next.js', 'Nuxt.js', 'Tailwind CSS', 'Sass', 'Less', 'Webpack', 'Vite', 'Svelte'],
      mobile: ['React Native', 'Flutter', 'Ionic', 'Xamarin', 'Swift', 'Kotlin', 'Dart'],
      backend: ['Node.js', 'Express.js', 'Django', 'Flask', 'Spring Boot', 'Spring', 'Laravel', 'ASP.NET', 'FastAPI'],
      database: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLite', 'Firebase', 'Firestore'],
      tools: ['Docker', 'Kubernetes', 'Git', 'AWS', 'Azure', 'Heroku', 'Vercel', 'Netlify', 'Jenkins', 'GitHub Actions'],
      language: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'Go', 'Rust', 'PHP', 'Swift', 'Kotlin', 'Dart', 'C++']
    };

    for (const [category, skills] of Object.entries(categories)) {
      if (skills.some(skill => skillName.toLowerCase().includes(skill.toLowerCase()))) {
        return category;
      }
    }

    return 'other';
  }

  // Buscar atividade recente
  async getRecentActivity() {
    try {
      const response = await fetch(`${this.baseUrl}/users/${this.username}/events/public?per_page=10`);
      
      if (!response.ok) {
        throw new Error('Erro ao buscar atividade recente');
      }

      const events = await response.json();
      return events.map(event => ({
        id: event.id,
        type: event.type,
        repo: event.repo.name,
        created_at: event.created_at,
        public: event.public
      }));
    } catch (error) {
      console.error('Erro ao buscar atividade recente:', error);
      return [];
    }
  }
}

export default GitHubService;
