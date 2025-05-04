import React, { createContext, useEffect, useState } from 'react';
import { ColorMode, ColorTheme, ThemeContextType } from '../types/theme';

// Create the theme context with default values
export const ThemeContext = createContext<ThemeContextType>({
  colorTheme: 'crimson',
  colorMode: 'light',
  setColorTheme: () => {},
  setColorMode: () => {},
  toggleColorMode: () => {},
  toggleColorTheme: () => {},
});

// Get initial theme from localStorage or system preference
const getInitialColorTheme = (): ColorTheme => {
  const savedTheme = localStorage.getItem('colorTheme');
  return (savedTheme as ColorTheme) || 'crimson';
};

// Get initial mode from localStorage or system preference
const getInitialColorMode = (): ColorMode => {
  const savedMode = localStorage.getItem('colorMode');
  if (savedMode) {
    return savedMode as ColorMode;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [colorTheme, setColorTheme] = useState<ColorTheme>('crimson');
  const [colorMode, setColorMode] = useState<ColorMode>('light');
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize theme on mount (client-side only)
  useEffect(() => {
    setColorTheme(getInitialColorTheme());
    setColorMode(getInitialColorMode());
    setIsInitialized(true);
  }, []);

  // Update localStorage and apply theme when colorTheme changes
  useEffect(() => {
    if (!isInitialized) return;
    
    localStorage.setItem('colorTheme', colorTheme);
    document.documentElement.setAttribute('data-theme', colorTheme);
  }, [colorTheme, isInitialized]);

  // Update localStorage and apply mode when colorMode changes
  useEffect(() => {
    if (!isInitialized) return;
    
    localStorage.setItem('colorMode', colorMode);
    document.documentElement.setAttribute('data-mode', colorMode);
  }, [colorMode, isInitialized]);

  // Toggle between light and dark modes
  const toggleColorMode = () => {
    setColorMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };
  const toggleColorTheme = () => {
    console.log("pressessss")
    setColorTheme(prevMode => {
      if (prevMode === 'crimson') return 'field';
      if (prevMode === 'field') return 'aura';
      return 'crimson';
    });
  };
  

  // Add key binding for theme switching
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Shift + D to toggle dark/light mode
      if (event.shiftKey && event.key === 'D') {
        toggleColorMode();
      }
      
      // Shift + 1/2/3 to switch themes
      if (event.shiftKey) {
        switch (event.key) {
          case '1':
            setColorTheme('crimson');
            break;
          case '2':
            setColorTheme('field');
            break;
          case '3':
            setColorTheme('aura');
            break;
          default:
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        colorTheme,
        colorMode,
        setColorTheme,
        setColorMode,
        toggleColorMode,
        toggleColorTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};