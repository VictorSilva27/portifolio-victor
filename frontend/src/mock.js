// Real developer profile data
export const mockData = {
  developer: {
    name: "Victor Silva",
    title: "Desenvolvedor FullStack",
    bio: "Desenvolvedor FullStack com experiência em React, React Native, Flutter e Vue.js, especializado no desenvolvimento de interfaces interativas, componentes reutilizáveis e integração com APIs REST. Focado em boas práticas de UX, organização de projetos escaláveis e entrega de valor ao usuário.",
    email: "victoradaosilva2@gmail.com",
    phone: "+55 (14) 99855-2940",
    location: "Brasil",
    social: {
      github: "https://github.com/VictorSilva27",
      linkedin: "https://linkedin.com/in/victor-silva027",
    }
  },
  
  skills: {
    frontend: [
      { name: "React.js", level: 90, years: 3 },
      { name: "Vue.js 3", level: 85, years: 2 },
      { name: "TypeScript", level: 88, years: 2 },
      { name: "JavaScript ES6+", level: 95, years: 4 },
      { name: "HTML5/CSS3", level: 92, years: 4 },
      { name: "Tailwind CSS", level: 90, years: 2 },
      { name: "Vuetify", level: 85, years: 2 }
    ],
    mobile: [
      { name: "React Native", level: 88, years: 2 },
      { name: "Flutter", level: 85, years: 2 },
      { name: "Kotlin", level: 75, years: 1 },
      { name: "flutter_bloc", level: 80, years: 1 }
    ],
    backend: [
      { name: "Node.js", level: 85, years: 2 },
      { name: "Nuxt.js", level: 80, years: 1 },
      { name: "Express.js", level: 83, years: 2 },
      { name: "RESTful APIs", level: 90, years: 3 }
    ],
    database: [
      { name: "SQL", level: 88, years: 3 },
      { name: "PostgreSQL", level: 85, years: 2 },
      { name: "MySQL", level: 85, years: 2 }
    ],
    tools: [
      { name: "Git/GitHub", level: 90, years: 3 },
      { name: "Android Studio", level: 85, years: 2 },
      { name: "VS Code", level: 95, years: 4 },
      { name: "Yarn", level: 88, years: 2 },
      { name: "Jest", level: 80, years: 1 },
      { name: "Jira", level: 75, years: 1 }
    ]
  },

  projects: [
    {
      id: 1,
      title: "Dashboard de Gestão Escolar",
      description: "Sistema completo de gestão escolar com KPIs, gráficos interativos, pop-ups informativos e filtros avançados. Interface responsiva desenvolvida em React com integração a APIs REST para dados em tempo real.",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Chart.js", "RESTful APIs"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      githubUrl: "https://github.com/seuperfil/dashboard-escolar",
      liveUrl: "https://dashboard-escolar.vercel.app",
      featured: true
    },
    {
      id: 2,
      title: "App Educacional Interativo",
      description: "Aplicação mobile educativa com múltiplas funcionalidades: carrossel de conteúdos, drag and drop, preenchimento de frases e questões de múltipla escolha. Desenvolvido em React Native com foco na experiência do usuário.",
      technologies: ["React Native", "JavaScript", "Redux", "Expo", "Styled Components"],
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
      githubUrl: "https://github.com/seuperfil/app-educacional",
      liveUrl: "https://expo.dev/@seuperfil/app-educacional",
      featured: true
    },
    {
      id: 3,
      title: "Sistema de Login e Autenticação",
      description: "Fluxo completo de autenticação com login, criação de senha e melhorias em UI/UX. Implementação de boas práticas de segurança e design responsivo para múltiplas plataformas.",
      technologies: ["Vue.js 3", "Vuetify", "Node.js", "Express.js", "JWT"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
      githubUrl: "https://github.com/seuperfil/sistema-auth",
      liveUrl: "https://auth-system.netlify.app",
      featured: false
    },
    {
      id: 4,
      title: "App Flutter com Gerenciamento de Estado",
      description: "Aplicativo Flutter desenvolvido em equipe remota usando flutter_bloc para gerenciamento de estado. Implementação de telas complexas com navegação fluida e integração com APIs.",
      technologies: ["Flutter", "Dart", "flutter_bloc", "RESTful APIs"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
      githubUrl: "https://github.com/seuperfil/flutter-app",
      liveUrl: "https://play.google.com/store/apps/details?id=com.exemplo.app",
      featured: false
    },
    {
      id: 5,
      title: "Projeto Full Stack com React + Nuxt",
      description: "Arquitetura separada com frontend em React e backend em Nuxt.js. Sistema completo com separação clara de responsabilidades e comunicação eficiente entre as camadas.",
      technologies: ["React.js", "Nuxt.js", "TypeScript", "SQL", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      githubUrl: "https://github.com/seuperfil/fullstack-project",
      liveUrl: "https://fullstack-project.vercel.app",
      featured: false
    },
    {
      id: 6,
      title: "App com Sistema de Pagamentos",
      description: "Aplicação mobile com integração de pagamentos (em desenvolvimento). Foco em experiência do usuário fluida e segurança nas transações financeiras.",
      technologies: ["React Native", "Kotlin", "Payment APIs", "Redux"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      githubUrl: "https://github.com/seuperfil/payment-app",
      liveUrl: "Em desenvolvimento",
      featured: false
    }
  ],

  experience: [
    {
      id: 1,
      company: "Desenvolvimento Freelancer",
      position: "Desenvolvedor Frontend/Mobile",
      duration: "2022 - Presente",
      location: "Brasil (Remoto)",
      description: "Desenvolvimento de aplicações web e mobile utilizando React, React Native, Flutter e Vue.js. Trabalho em equipe remota com foco em entrega de valor e qualidade de código.",
      achievements: [
        "Desenvolveu dashboard escolar completo com KPIs e gráficos interativos",
        "Criou apps educacionais com funcionalidades drag-and-drop e múltipla escolha",
        "Implementou sistemas de autenticação com melhorias em UI/UX",
        "Trabalhou em equipe remota de 5 pessoas usando Flutter e diferentes SOs"
      ]
    },
    {
      id: 2,
      company: "Projetos Acadêmicos e Estudos",
      position: "Estudante de Desenvolvimento",
      duration: "2020 - 2022",
      location: "Brasil",
      description: "Período de aprendizado intensivo em tecnologias frontend e mobile. Desenvolvimento de projetos práticos para consolidar conhecimentos em React, Vue.js e Flutter.",
      achievements: [
        "Domínio de React.js e Vue.js 3 com TypeScript",
        "Experiência prática com React Native e Flutter",
        "Aprendizado de SQL avançado com queries complexas",
        "Desenvolvimento de componentes reutilizáveis e escaláveis"
      ]
    },
    {
      id: 3,
      company: "Primeira Experiência Tech",
      position: "Desenvolvedor Júnior",
      duration: "2019 - 2020",
      location: "Brasil",
      description: "Início da carreira em desenvolvimento. Foco em aprender boas práticas de programação, trabalho em equipe e comunicação eficiente.",
      achievements: [
        "Aprendeu fundamentos sólidos de JavaScript e HTML/CSS",
        "Desenvolveu primeira aplicação com integração a APIs REST",
        "Praticou testes manuais e documentação de bugs usando Jira",
        "Adquiriu experiência com versionamento Git e trabalho colaborativo"
      ]
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Colega de Equipe",
      position: "Desenvolvedor Flutter",
      company: "Projeto Colaborativo",
      text: "Trabalhar com ele foi uma excelente experiência. Mesmo usando sistemas diferentes (Windows/Linux), conseguimos manter uma comunicação eficiente e entregar um produto de qualidade usando Flutter.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
      id: 2,
      name: "Cliente Satisfeito",
      position: "Gestor de Produto",
      company: "Projeto Dashboard",
      text: "O dashboard de gestão escolar superou nossas expectativas. A interface é intuitiva, os gráficos são claros e as funcionalidades atendem perfeitamente às nossas necessidades.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c"
    }
  ]
};