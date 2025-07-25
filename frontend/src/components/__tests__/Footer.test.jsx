import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Footer from '../Footer';
import { LanguageProvider } from '../../contexts/LanguageContext';
import { ThemeProvider } from '../../contexts/ThemeContext';

const TestWrapper = ({ children }) => (
  <ThemeProvider>
    <LanguageProvider>
      {children}
    </LanguageProvider>
  </ThemeProvider>
);

describe('Footer Component', () => {
  test('renders footer component', () => {
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    );
    
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  test('displays social media links', () => {
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    );
    
    // Verificar se links sociais estão presentes
    const socialLinks = screen.getAllByRole('link');
    expect(socialLinks.length).toBeGreaterThan(0);
  });

  test('displays contact information', () => {
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    );
    
    // Verificar se informações de contato estão presentes
    expect(screen.getByText(/contato/i)).toBeInTheDocument();
  });

  test('displays navigation links', () => {
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    );
    
    // Verificar links de navegação no footer
    expect(screen.getByText(/Sobre/i)).toBeInTheDocument();
    expect(screen.getByText(/Projetos/i)).toBeInTheDocument();
  });

  test('displays copyright information', () => {
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    );
    
    // Verificar se há informação de copyright
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
  });

  test('social links have correct attributes', () => {
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    );
    
    const socialLinks = screen.getAllByRole('link');
    socialLinks.forEach(link => {
      // Verificar se links externos têm target="_blank"
      if (link.href && !link.href.startsWith('#')) {
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      }
    });
  });

  test('footer navigation works', async () => {
    const user = userEvent.setup();
    
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    );
    
    const aboutLink = screen.getByText(/Sobre/i);
    await user.click(aboutLink);
    
    // Verificar se o scroll foi acionado
    expect(global.scrollTo).toHaveBeenCalled();
  });

  test('has proper CSS classes', () => {
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    );
    
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass('footer-section');
  });

  test('email link works correctly', () => {
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    );
    
    const emailLink = screen.getByRole('link', { name: /email/i });
    expect(emailLink).toHaveAttribute('href', expect.stringMatching(/^mailto:/));
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
        <Footer />
      </TestWrapper>
    );
    
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  test('footer accessibility', () => {
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    );
    
    // Verificar se tem role contentinfo
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    
    // Verificar se todos os links são acessíveis
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).toBeVisible();
    });
  });
});
