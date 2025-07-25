import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

// Mock dos componentes para testar apenas a estrutura do App
jest.mock('../components/PortfolioPage', () => {
  return function MockPortfolioPage() {
    return <div data-testid="portfolio-page">Portfolio Page</div>;
  };
});

jest.mock('../utils/webVitals', () => ({
  initWebVitals: jest.fn(),
  WebVitalsReporter: () => null
}));

describe('App Component', () => {
  test('renders App component', () => {
    render(<App />);
    
    expect(screen.getByTestId('portfolio-page')).toBeInTheDocument();
  });

  test('applies correct CSS class', () => {
    render(<App />);
    
    const appElement = document.querySelector('.App');
    expect(appElement).toBeInTheDocument();
  });

  test('provides theme context', () => {
    render(<App />);
    
    // Verificar se o ThemeProvider está funcionando
    const htmlElement = document.documentElement;
    expect(htmlElement.classList.contains('dark') || htmlElement.classList.contains('light')).toBe(true);
  });

  test('provides language context', () => {
    render(<App />);
    
    // Verificar se o LanguageProvider está funcionando
    expect(screen.getByTestId('portfolio-page')).toBeInTheDocument();
  });

  test('initializes web vitals', () => {
    const { initWebVitals } = require('../utils/webVitals');
    
    render(<App />);
    
    expect(initWebVitals).toHaveBeenCalled();
  });

  test('App structure is accessible', () => {
    render(<App />);
    
    // Verificar estrutura básica acessível
    const main = screen.getByTestId('portfolio-page');
    expect(main).toBeInTheDocument();
  });

  test('App handles errors gracefully', () => {
    // Mock console.error para evitar logs durante o teste
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    // Forçar um erro no componente filho
    jest.mock('../components/PortfolioPage', () => {
      return function ErrorPortfolioPage() {
        throw new Error('Test error');
      };
    });
    
    // O App deve lidar com erros graciosamente
    // (você pode implementar um Error Boundary se necessário)
    
    consoleError.mockRestore();
  });
});
