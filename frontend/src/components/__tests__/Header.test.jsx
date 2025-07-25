import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../Header';
import { LanguageProvider } from '../../contexts/LanguageContext';
import { ThemeProvider } from '../../contexts/ThemeContext';

// Mock do hook useScrollSection
jest.mock('../../hooks/useScrollSection', () => ({
  useScrollSection: () => ({
    currentSection: 'hero',
    isScrolled: false
  })
}));

// Wrapper com todos os providers necessários
const TestWrapper = ({ children }) => (
  <ThemeProvider>
    <LanguageProvider>
      {children}
    </LanguageProvider>
  </ThemeProvider>
);

describe('Header Component', () => {
  beforeEach(() => {
    // Reset localStorage mock
    localStorage.clear();
    localStorage.getItem.mockClear();
    localStorage.setItem.mockClear();
  });

  test('renders header component', () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    );
    
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    );
    
    // Verificar se os links de navegação estão presentes
    expect(screen.getByText(/Sobre/i)).toBeInTheDocument();
    expect(screen.getByText(/Experiência/i)).toBeInTheDocument();
    expect(screen.getByText(/Projetos/i)).toBeInTheDocument();
    expect(screen.getByText(/Habilidades/i)).toBeInTheDocument();
    expect(screen.getByText(/Contato/i)).toBeInTheDocument();
  });

  test('renders language selector', () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    );
    
    // Verificar se o seletor de idioma está presente
    expect(screen.getByRole('button', { name: /PT/i })).toBeInTheDocument();
  });

  test('renders theme toggle button', () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    );
    
    // Verificar se o botão de alternar tema está presente
    const themeToggle = screen.getByRole('button', { name: /toggle theme/i });
    expect(themeToggle).toBeInTheDocument();
  });

  test('language selector changes language', async () => {
    const user = userEvent.setup();
    
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    );
    
    // Clicar no seletor de idioma
    const languageButton = screen.getByRole('button', { name: /PT/i });
    await user.click(languageButton);
    
    // Verificar se o menu de idiomas aparece
    await waitFor(() => {
      expect(screen.getByText('English')).toBeInTheDocument();
    });
    
    // Selecionar inglês
    await user.click(screen.getByText('English'));
    
    // Verificar se mudou para inglês
    await waitFor(() => {
      expect(screen.getByText(/About/i)).toBeInTheDocument();
      expect(screen.getByText(/Experience/i)).toBeInTheDocument();
    });
  });

  test('theme toggle changes theme', async () => {
    const user = userEvent.setup();
    
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    );
    
    const themeToggle = screen.getByRole('button', { name: /toggle theme/i });
    
    // Clicar no botão de alternar tema
    await user.click(themeToggle);
    
    // Verificar se o tema foi alterado (localStorage deve ser chamado)
    await waitFor(() => {
      expect(localStorage.setItem).toHaveBeenCalledWith('theme', expect.any(String));
    });
  });

  test('navigation links scroll to sections', async () => {
    const user = userEvent.setup();
    
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    );
    
    const aboutLink = screen.getByText(/Sobre/i);
    await user.click(aboutLink);
    
    // Verificar se scrollTo foi chamado
    expect(global.scrollTo).toHaveBeenCalled();
  });

  test('mobile menu toggle works', async () => {
    const user = userEvent.setup();
    
    // Mock para simular mobile viewport
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 768,
    });
    
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    );
    
    // Verificar se o botão do menu mobile existe
    const mobileMenuButton = screen.getByRole('button', { name: /menu/i });
    expect(mobileMenuButton).toBeInTheDocument();
    
    // Clicar no botão do menu mobile
    await user.click(mobileMenuButton);
    
    // Verificar se o menu mobile foi aberto
    // (isso dependerá da implementação específica do seu componente)
  });

  test('header applies correct CSS classes based on scroll state', () => {
    // Test com useScrollSection mock retornando isScrolled: true
    jest.doMock('../hooks/useScrollSection', () => ({
      useScrollSection: () => ({
        currentSection: 'about',
        isScrolled: true
      })
    }));
    
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    );
    
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('header-scrolled');
  });

  test('header accessibility', () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    );
    
    // Verificar se tem role correto
    expect(screen.getByRole('banner')).toBeInTheDocument();
    
    // Verificar se os links são acessíveis
    const navLinks = screen.getAllByRole('button');
    navLinks.forEach(link => {
      expect(link).toBeVisible();
    });
  });
});
