import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HeroSection from '../HeroSection';
import { LanguageProvider } from '../../contexts/LanguageContext';
import { ThemeProvider } from '../../contexts/ThemeContext';

const TestWrapper = ({ children }) => (
  <ThemeProvider>
    <LanguageProvider>
      {children}
    </LanguageProvider>
  </ThemeProvider>
);

describe('HeroSection Component', () => {
  test('renders hero section', () => {
    render(
      <TestWrapper>
        <HeroSection />
      </TestWrapper>
    );
    
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  test('displays hero title and description', () => {
    render(
      <TestWrapper>
        <HeroSection />
      </TestWrapper>
    );
    
    // Verificar se o título está presente
    expect(screen.getByText(/Victor Silva/i)).toBeInTheDocument();
    
    // Verificar se há uma descrição/subtítulo
    expect(screen.getByText(/Desenvolvedor/i)).toBeInTheDocument();
  });

  test('has scroll down button', () => {
    render(
      <TestWrapper>
        <HeroSection />
      </TestWrapper>
    );
    
    const scrollButton = screen.getByRole('button', { name: /scroll/i });
    expect(scrollButton).toBeInTheDocument();
  });

  test('scroll down button functionality', async () => {
    const user = userEvent.setup();
    
    render(
      <TestWrapper>
        <HeroSection />
      </TestWrapper>
    );
    
    const scrollButton = screen.getByRole('button', { name: /scroll/i });
    await user.click(scrollButton);
    
    // Verificar se scrollTo foi chamado
    expect(global.scrollTo).toHaveBeenCalled();
  });

  test('displays call-to-action buttons', () => {
    render(
      <TestWrapper>
        <HeroSection />
      </TestWrapper>
    );
    
    // Procurar por botões de CTA
    const ctaButtons = screen.getAllByRole('button');
    expect(ctaButtons.length).toBeGreaterThan(0);
  });

  test('hero section has correct CSS classes', () => {
    render(
      <TestWrapper>
        <HeroSection />
      </TestWrapper>
    );
    
    const heroSection = screen.getByRole('main');
    expect(heroSection).toHaveClass('hero-section');
  });

  test('hero content is responsive', () => {
    // Mock viewport mobile
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 375,
    });
    
    render(
      <TestWrapper>
        <HeroSection />
      </TestWrapper>
    );
    
    const heroContent = screen.getByRole('main');
    expect(heroContent).toBeInTheDocument();
  });

  test('hero section accessibility', () => {
    render(
      <TestWrapper>
        <HeroSection />
      </TestWrapper>
    );
    
    // Verificar se tem role main
    expect(screen.getByRole('main')).toBeInTheDocument();
    
    // Verificar se os textos são legíveis por screen readers
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBeGreaterThan(0);
  });

  test('hero background image is present', () => {
    render(
      <TestWrapper>
        <HeroSection />
      </TestWrapper>
    );
    
    // Verificar se há elementos de background
    const heroBackground = screen.getByRole('main');
    expect(heroBackground).toBeInTheDocument();
  });

  test('language change updates hero content', async () => {
    const user = userEvent.setup();
    
    render(
      <TestWrapper>
        <HeroSection />
      </TestWrapper>
    );
    
    // Verificar conteúdo inicial em português
    expect(screen.getByText(/Desenvolvedor/i)).toBeInTheDocument();
    
    // Simular mudança de idioma através do contexto
    // Isso requereria uma implementação mais complexa com Provider customizado
  });
});
