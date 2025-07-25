import { renderHook } from '@testing-library/react';
import { useTranslation } from '../useTranslation';
import { LanguageProvider } from '../../contexts/LanguageContext';

describe('useTranslation Hook', () => {
  test('returns translation function', () => {
    const wrapper = ({ children }) => (
      <LanguageProvider>{children}</LanguageProvider>
    );
    
    const { result } = renderHook(() => useTranslation(), { wrapper });
    
    expect(typeof result.current).toBe('function');
  });

  test('translates Portuguese text correctly', () => {
    const wrapper = ({ children }) => (
      <LanguageProvider>{children}</LanguageProvider>
    );
    
    const { result } = renderHook(() => useTranslation(), { wrapper });
    
    const t = result.current;
    expect(t('navigation.about')).toBe('Sobre');
    expect(t('navigation.experience')).toBe('Experiência');
    expect(t('navigation.projects')).toBe('Projetos');
  });

  test('handles nested translation keys', () => {
    const wrapper = ({ children }) => (
      <LanguageProvider>{children}</LanguageProvider>
    );
    
    const { result } = renderHook(() => useTranslation(), { wrapper });
    
    const t = result.current;
    expect(t('hero.title')).toBeDefined();
    expect(t('hero.subtitle')).toBeDefined();
  });

  test('returns key when translation not found', () => {
    const wrapper = ({ children }) => (
      <LanguageProvider>{children}</LanguageProvider>
    );
    
    const { result } = renderHook(() => useTranslation(), { wrapper });
    
    const t = result.current;
    expect(t('nonexistent.key')).toBe('nonexistent.key');
  });

  test('handles empty or invalid keys gracefully', () => {
    const wrapper = ({ children }) => (
      <LanguageProvider>{children}</LanguageProvider>
    );
    
    const { result } = renderHook(() => useTranslation(), { wrapper });
    
    const t = result.current;
    expect(t('')).toBe('');
    expect(t(null)).toBe('');
    expect(t(undefined)).toBe('');
  });
});
