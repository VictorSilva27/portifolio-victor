import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LanguageProvider, useLanguage } from '../LanguageContext';

// Componente de teste para usar o contexto
const TestComponent = () => {
  const { language, setLanguage, t } = useLanguage();
  
  return (
    <div>
      <span data-testid="current-language">{language}</span>
      <button onClick={() => setLanguage('en')}>Switch to English</button>
      <button onClick={() => setLanguage('pt')}>Switch to Portuguese</button>
      <span data-testid="translated-text">{t('navigation.about')}</span>
    </div>
  );
};

describe('LanguageContext', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('provides default language', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );
    
    expect(screen.getByTestId('current-language')).toHaveTextContent('pt');
  });

  test('changes language to English', async () => {
    const user = userEvent.setup();
    
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );
    
    await user.click(screen.getByText('Switch to English'));
    
    expect(screen.getByTestId('current-language')).toHaveTextContent('en');
  });

  test('changes language to Portuguese', async () => {
    const user = userEvent.setup();
    
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );
    
    // Primeiro muda para inglês
    await user.click(screen.getByText('Switch to English'));
    expect(screen.getByTestId('current-language')).toHaveTextContent('en');
    
    // Depois volta para português
    await user.click(screen.getByText('Switch to Portuguese'));
    expect(screen.getByTestId('current-language')).toHaveTextContent('pt');
  });

  test('persists language in localStorage', async () => {
    const user = userEvent.setup();
    
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );
    
    await user.click(screen.getByText('Switch to English'));
    
    expect(localStorage.setItem).toHaveBeenCalledWith('language', 'en');
  });

  test('loads language from localStorage', () => {
    localStorage.getItem.mockReturnValue('en');
    
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );
    
    expect(screen.getByTestId('current-language')).toHaveTextContent('en');
  });

  test('translation function works', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );
    
    const translatedText = screen.getByTestId('translated-text');
    expect(translatedText).toHaveTextContent('Sobre');
  });

  test('translation function works in English', async () => {
    const user = userEvent.setup();
    
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );
    
    await user.click(screen.getByText('Switch to English'));
    
    const translatedText = screen.getByTestId('translated-text');
    expect(translatedText).toHaveTextContent('About');
  });

  test('handles invalid language gracefully', () => {
    localStorage.getItem.mockReturnValue('invalid-lang');
    
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );
    
    // Should fallback to default language
    expect(screen.getByTestId('current-language')).toHaveTextContent('pt');
  });

  test('throws error when used outside provider', () => {
    // Suppress console.error for this test
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    expect(() => {
      render(<TestComponent />);
    }).toThrow('useLanguage must be used within a LanguageProvider');
    
    consoleError.mockRestore();
  });
});
