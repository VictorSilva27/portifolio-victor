// Sistema de recomendações personalizadas baseadas no LinkedIn
// Para adicionar novas recomendações, simplesmente copie o texto do LinkedIn e adicione aqui

export const testimonials = [
  {
    id: 1,
    name: "Lucas Garcez Gonçalves da Silva",
    position: "Full Stack Developer",
    company: "Muu Agrotech",
    text: "Trabalhei com o Victor por quase dois anos na Muu Agrotech, onde colaboramos em pelo menos três projetos. Durante esse período, ele se destacou como um profissional de alta competência e versatilidade, contribuindo em projetos tanto mobile quanto web e sempre com excelentes entregas. Victor possui facilidade em aprender e consegue se adaptar às demandas e desafios com naturalidade. Além disso, ele é uma pessoa colaborativa e proativa, qualidades que tornam o ambiente de trabalho mais produtivo e o trabalho em equipe mais fluido.",
    avatar: "/images/testimonials/lucas-garcez.svg",
    linkedinUrl: "https://www.linkedin.com/in/lucasggsilva",
    date: "2024-11-15",
    isLinkedInRecommendation: true
  },
  {
    id: 2,
    name: "Camilla Avila",
    position: "Software Developer",
    company: "Muu Agrotech",
    text: "Foi um grande prazer trabalhar com o Victor na Muu. Tive a oportunidade de trabalhar com ele em vários projetos e testemunhar de perto sua versatilidade, tanto no desenvolvimento web quanto mobile. Além de sua experiência com React Native e React.js, Victor atendeu super bem as demandas de um app em Kotlin, demonstrando sua capacidade de se adaptar rapidamente a novas tecnologias e entregar resultados de qualidade. Ele é um profissional extremamente dedicado, sempre disposto a ajudar o time e com uma curva de aprendizado impressionante.",
    avatar: "/images/testimonials/camilla-avila.svg",
    linkedinUrl: "https://www.linkedin.com/in/avilacamilla",
    date: "2024-10-20",
    isLinkedInRecommendation: true
  },
  {
    id: 3,
    name: "Mateus Hoffman",
    position: "Desenvolvedor Full Stack",
    company: "Muu Agrotech",
    text: "Eu recomendo muito o Victor Silva como desenvolvedor Full Stack e Mobile. Ele é super qualificado, principalmente em React Native, e tem um conhecimento sólido em JavaScript, TypeScript, React.js e Node.js. Trabalhei com ele na MUU Agrotech e pude ver de perto sua habilidade para criar aplicativos mobile robustos e entregar soluções completas, tanto no front-end quanto no back-end. Ele tem bastante experiência com integração de APIs, bancos de dados como MySQL e MongoDB, e também usa Docker para otimizar os ambientes de desenvolvimento.",
    avatar: "/images/testimonials/mateus-hoffman.svg",
    linkedinUrl: "https://www.linkedin.com/in/mateushoffman",
    date: "2024-09-10",
    isLinkedInRecommendation: true
  },
  {
    id: 4,
    name: "Lygia Dias",
    position: "Desenvolvedora Front-End",
    company: "Muu Agrotech",
    text: "Tive o privilégio de trabalhar com o Victor e foi uma experiência extremamente positiva. Suas habilidades técnicas são de alto nível, sempre encontrando soluções criativas e eficazes para os desafios do desenvolvimento. Ele também se destacou pela sua disposição em colaborar com a equipe, tornando o ambiente de trabalho muito mais produtivo. Além disso, o bom humor constante do Victor trazia leveza ao time, contribuindo para um ambiente agradável e motivador.",
    avatar: "/images/testimonials/lygia-dias.svg",
    linkedinUrl: "https://www.linkedin.com/in/lygiiadias",
    date: "2024-08-25",
    isLinkedInRecommendation: true
  },
  {
    id: 5,
    name: "Luiz de Freitas",
    position: "Full Stack Developer",
    company: "Projetos Colaborativos",
    text: "O Victor é um grande desenvolvedor web! Extremamente inteligente, focado, aprende e desenvolve de maneira rápida e eficaz. Possui grandes habilidades em lógica de programação, bastante fluência em JavaScript e ReactJs. Mas, gostaria de destacar principalmente sua comunicação. Trabalhamos algumas vezes em grupo, e pude observar grande empatia do Victor pelos colegas, sempre disposto a ajudar e contribuir para o desenvolvimento dos projetos e dos grupos em que participamos. Victor é aquele típico integrante que não pode faltar no time.",
    avatar: "/images/testimonials/luiz-freitas.svg",
    linkedinUrl: "https://www.linkedin.com/in/luiz-de-freitas-lima-neto",
    date: "2024-07-18",
    isLinkedInRecommendation: true
  }
  // Para adicionar novas recomendações do LinkedIn:
  // 1. Acesse seu perfil no LinkedIn
  // 2. Vá para a seção "Recomendações"
  // 3. Copie o texto da recomendação
  // 4. Adicione um novo objeto aqui seguindo o modelo acima
  // 5. Salve a foto da pessoa em /public/images/testimonials/
  // 6. Use o caminho local: "/images/testimonials/nome-da-foto.jpg"
];

// Função para buscar recomendações (preparada para futuras integrações)
export const getTestimonials = () => {
  return testimonials.sort((a, b) => new Date(b.date) - new Date(a.date));
};

// Função para adicionar nova recomendação programaticamente
export const addTestimonial = (testimonial) => {
  const newTestimonial = {
    ...testimonial,
    id: testimonials.length + 1,
    date: new Date().toISOString().split('T')[0]
  };
  testimonials.push(newTestimonial);
  return newTestimonial;
};
