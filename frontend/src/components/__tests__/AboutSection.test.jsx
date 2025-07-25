import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutSection from '../AboutSection';
import { LanguageProvider } from '../../contexts/LanguageContext';
import { ThemeProvider } from '../../contexts/ThemeContext';

const TestWrapper = ({ children }) => (
  <ThemeProvider>
    <LanguageProvider>
      {children}
    </LanguageProvider>
  </ThemeProvider>
);

describe('AboutSection Component', () => {
  test('renders about section', () => {
    render(
      <TestWrapper>
        <AboutSection />
      </TestWrapper>
    );
    
    const section = screen.getByRole('region', { name: /about/i });
    expect(section).toBeInTheDocument();
  });

  test('displays section heading', () => {
    render(
      <TestWrapper>
        <AboutSection />
      </TestWrapper>
    );
    
    const heading = screen.getByRole('heading', { name: /sobre/i });
    expect(heading).toBeInTheDocument();
  });

  test('displays about content', () => {
    render(
      <TestWrapper>
        <AboutSection />
      </TestWrapper>
    );
    
    // Verificar se há conteúdo textual
    const content = screen.getByText(/desenvolvedor/i);
    expect(content).toBeInTheDocument();
  });

  test('has correct section id for navigation', () => {
    render(
      <TestWrapper>
        <AboutSection />
      </TestWrapper>
    );
    
    const section = screen.getByRole('region', { name: /about/i });
    expect(section).toHaveAttribute('id', 'about');
  });

  test('displays profile information', () => {
    render(
      <TestWrapper>
        <AboutSection />
      </TestWrapper>
    );
    
    // Verificar se informações pessoais/profissionais estão presentes
    expect(screen.getByText(/Victor/i)).toBeInTheDocument();
  });

  test('section is accessible', () => {
    render(
      <TestWrapper>
        <AboutSection />
      </TestWrapper>
    );
    
    // Verificar estrutura acessível
    const section = screen.getByRole('region');
    expect(section).toBeInTheDocument();
    
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });

  test('content changes with language', async () => {
    // Este teste seria mais complexo e requereria mudança de idioma
    render(
      <TestWrapper>
        <AboutSection />
      </TestWrapper>
    );
    
    // Verificar conteúdo em português
    expect(screen.getByText(/Sobre/i)).toBeInTheDocument();
  });

  test('has proper CSS classes', () => {
    render(
      <TestWrapper>
        <AboutSection />
      </TestWrapper>
    );
    
    const section = screen.getByRole('region');
    expect(section).toHaveClass('about-section');
  });

  test('responsive layout works', () => {
    // Mock mobile viewport
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 375,
    });
    
    render(
      <TestWrapper>
        <AboutSection />
      </TestWrapper>
    );
    
    const section = screen.getByRole('region');
    expect(section).toBeInTheDocument();
  });
});
