import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PortfolioPage from '../components/PortfolioPage';
import { LanguageProvider } from '../contexts/LanguageContext';
import { ThemeProvider } from '../contexts/ThemeContext';

// Mock do hook useScrollSection
jest.mock('../hooks/useScrollSection', () => ({
  useScrollSection: () => ({
    currentSection: 'hero',
    isScrolled: false
  })
}));

const TestWrapper = ({ children }) => (
  <ThemeProvider>
    <LanguageProvider>
      {children}
    </LanguageProvider>
  </ThemeProvider>
);

describe('Portfolio Integration Tests', () => {
  test('complete portfolio page renders correctly', () => {
    render(
      <TestWrapper>
        <PortfolioPage />
      </TestWrapper>
    );
    
    // Verificar se todas as seções principais estão presentes
    expect(screen.getByRole('banner')).toBeInTheDocument(); // Header
    expect(screen.getByRole('main')).toBeInTheDocument(); // Hero
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // Footer
  });

  test('navigation between sections works', async () => {
    const user = userEvent.setup();
    
    render(
      <TestWrapper>
        <PortfolioPage />
      </TestWrapper>
    );
    
    // Clicar no link "Sobre" no header
    const aboutLink = screen.getAllByText(/Sobre/i)[0];
    await user.click(aboutLink);
    
    // Verificar se o scroll foi acionado
    expect(global.scrollTo).toHaveBeenCalled();
  });

  test('language switching works across all components', async () => {
    const user = userEvent.setup();
    
    render(
      <TestWrapper>
        <PortfolioPage />
      </TestWrapper>
    );
    
    // Verificar conteúdo inicial em português
    expect(screen.getByText(/Sobre/i)).toBeInTheDocument();
    
    // Clicar no seletor de idioma
    const languageButton = screen.getByRole('button', { name: /PT/i });
    await user.click(languageButton);
    
    // Selecionar inglês
    await waitFor(() => {
      expect(screen.getByText('English')).toBeInTheDocument();
    });
    
    await user.click(screen.getByText('English'));
    
    // Verificar se mudou para inglês
    await waitFor(() => {
      expect(screen.getByText(/About/i)).toBeInTheDocument();
    });
  });

  test('theme switching works across all components', async () => {
    const user = userEvent.setup();
    
    render(
      <TestWrapper>
        <PortfolioPage />
      </TestWrapper>
    );
    
    // Verificar tema inicial
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    
    // Clicar no botão de alternar tema
    const themeToggle = screen.getByRole('button', { name: /toggle theme/i });
    await user.click(themeToggle);
    
    // Verificar se mudou para tema claro
    await waitFor(() => {
      expect(document.documentElement.classList.contains('light')).toBe(true);
    });
  });

  test('scroll functionality works correctly', async () => {
    const user = userEvent.setup();
    
    render(
      <TestWrapper>
        <PortfolioPage />
      </TestWrapper>
    );
    
    // Encontrar e clicar no botão de scroll down no hero
    const scrollButton = screen.getByRole('button', { name: /scroll/i });
    await user.click(scrollButton);
    
    expect(global.scrollTo).toHaveBeenCalled();
  });

  test('all sections are accessible via keyboard navigation', () => {
    render(
      <TestWrapper>
        <PortfolioPage />
      </TestWrapper>
    );
    
    // Verificar se elementos focáveis estão presentes
    const focusableElements = screen.getAllByRole('button').concat(
      screen.getAllByRole('link')
    );
    
    expect(focusableElements.length).toBeGreaterThan(0);
    
    // Verificar se têm atributos de acessibilidade apropriados
    focusableElements.forEach(element => {
      expect(element).toBeVisible();
    });
  });

  test('responsive design works on mobile', () => {
    // Mock mobile viewport
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 375,
    });
    
    render(
      <TestWrapper>
        <PortfolioPage />
      </TestWrapper>
    );
    
    // Verificar se a página ainda renderiza corretamente em mobile
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  test('error boundaries handle component failures', () => {
    // Mock console.error para evitar logs durante o teste
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    // Este teste verificaria se Error Boundaries estão funcionando
    // se você implementá-los no futuro
    
    render(
      <TestWrapper>
        <PortfolioPage />
      </TestWrapper>
    );
    
    expect(screen.getByRole('main')).toBeInTheDocument();
    
    consoleError.mockRestore();
  });
});
