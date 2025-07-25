import React from 'react';
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';
import { mockData } from '../mock';

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code size={32} />,
      title: "Componentes Reutilizáveis",
      description: "Criando interfaces escaláveis e organizadas com React, Vue.js e Flutter"
    },
    {
      icon: <Lightbulb size={32} />,
      title: "UX Focado",
      description: "Desenvolvendo experiências intuitivas com foco na jornada do usuário"
    },
    {
      icon: <Users size={32} />,
      title: "Trabalho Remoto",
      description: "Experiência colaborativa em equipes distribuídas geograficamente"
    },
    {
      icon: <Coffee size={32} />,
      title: "Aprendizado Contínuo",
      description: "Sempre explorando novas tecnologias e boas práticas de desenvolvimento"
    }
  ];

  return (
    <section id="about" className="py-32 bg-page">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-16 text-center">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* About Text */}
            <div>
              <p className="body-medium mb-8">
                {mockData.developer.bio}
              </p>
              <p className="body-small mb-8">
                Tenho experiência sólida em desenvolvimento frontend com React, Vue.js, e mobile com React Native e Flutter. 
                Minha paixão está em criar interfaces que combinam funcionalidade robusta com excelente experiência do usuário.
              </p>
              <p className="body-small mb-8">
                Trabalhei em projetos diversos, desde dashboards corporativos até aplicativos educacionais interativos, 
                sempre focando em código limpo, componentes reutilizáveis e integração eficiente com APIs REST.
              </p>
              <p className="body-small">
                Quando não estou codando, estou explorando novas tecnologias, contribuindo em projetos open source 
                ou compartilhando conhecimento com a comunidade de desenvolvedores.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-lg border border-border-light hover:border-border-medium transition-colors"
                >
                  <div className="text-primary mb-4">
                    {highlight.icon}
                  </div>
                  <h3 className="heading-6 mb-2 text-primary">
                    {highlight.title}
                  </h3>
                  <p className="caption">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;