// Real developer profile data
export const mockData = {
  developer: {
    name: "Seu Nome",
    title: "Desenvolvedor Frontend/Mobile",
    bio: "Desenvolvedor Frontend/Mobile com experiência em React, React Native, Flutter e Vue.js, especializado no desenvolvimento de interfaces interativas, componentes reutilizáveis e integração com APIs REST. Focado em boas práticas de UX, organização de projetos escaláveis e entrega de valor ao usuário.",
    email: "seu.email@gmail.com",
    phone: "+55 (11) 99999-9999",
    location: "Brasil",
    social: {
      github: "https://github.com/seuperfil",
      linkedin: "https://linkedin.com/in/seuperfil",
      twitter: "https://twitter.com/seuperfil"
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
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      githubUrl: "https://github.com/alexjohnson/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.alexjohnson.dev",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["Vue.js", "FastAPI", "PostgreSQL", "Socket.io"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71",
      githubUrl: "https://github.com/alexjohnson/task-manager",
      liveUrl: "https://tasks.alexjohnson.dev",
      featured: true
    },
    {
      id: 3,
      title: "Weather Analytics Dashboard",
      description: "Data visualization dashboard for weather analytics with interactive charts, real-time data updates, and location-based forecasting.",
      technologies: ["React", "D3.js", "Python", "Flask", "Redis"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
      githubUrl: "https://github.com/alexjohnson/weather-dashboard",
      liveUrl: "https://weather.alexjohnson.dev",
      featured: false
    },
    {
      id: 4,
      title: "Social Media Analytics Tool",
      description: "Analytics platform for social media performance tracking with automated reporting and engagement insights.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Chart.js"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      githubUrl: "https://github.com/alexjohnson/social-analytics",
      liveUrl: "https://analytics.alexjohnson.dev",
      featured: false
    }
  ],

  experience: [
    {
      id: 1,
      company: "TechCorp Solutions",
      position: "Senior Full Stack Developer",
      duration: "2022 - Present",
      location: "San Francisco, CA",
      description: "Lead development of enterprise web applications serving 100k+ users. Architect scalable solutions using React, Node.js, and cloud technologies.",
      achievements: [
        "Reduced application load time by 40% through optimization",
        "Led team of 4 developers on major product redesign",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ]
    },
    {
      id: 2,
      company: "StartupXYZ",
      position: "Full Stack Developer",
      duration: "2020 - 2022",
      location: "Remote",
      description: "Developed core platform features for B2B SaaS application. Worked closely with product team to deliver user-focused solutions.",
      achievements: [
        "Built real-time notification system handling 10k+ events/day",
        "Implemented payment processing with 99.9% uptime",
        "Developed responsive admin dashboard used by 500+ clients"
      ]
    },
    {
      id: 3,
      company: "Digital Agency Pro",
      position: "Junior Developer",
      duration: "2019 - 2020",
      location: "New York, NY",
      description: "Developed custom websites and web applications for various clients. Gained experience in multiple technologies and client communication.",
      achievements: [
        "Delivered 20+ client projects on time and within budget",
        "Improved website performance scores by average of 35%",
        "Mentored 2 intern developers"
      ]
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Sarah Mitchell",
      position: "Product Manager",
      company: "TechCorp Solutions",
      text: "Alex is an exceptional developer who consistently delivers high-quality code. His ability to understand complex requirements and translate them into elegant solutions is remarkable.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c"
    },
    {
      id: 2,
      name: "Mike Chen",
      position: "CTO",
      company: "StartupXYZ",
      text: "Working with Alex was a game-changer for our platform. His technical expertise and problem-solving skills helped us scale from 1k to 100k users seamlessly.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    }
  ]
};