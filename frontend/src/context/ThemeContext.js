// ThemeContext.js — light / dark mode with localStorage persistence

import { createContext, useContext, useEffect, useState } from 'react';

const STORAGE_KEY = 'pipeline-theme';

const ThemeContext = createContext({
  mode: 'dark',
  toggleTheme: () => {},
  setTheme: () => {},
});

export const getInitialTheme = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'light' || saved === 'dark') {
    return saved;
  }
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

export const applyTheme = (mode) => {
  document.documentElement.setAttribute('data-theme', mode);
};

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(getInitialTheme);

  useEffect(() => {
    applyTheme(mode);
    localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((current) => (current === 'dark' ? 'light' : 'dark'));
  };

  const setTheme = (next) => {
    if (next === 'light' || next === 'dark') {
      setMode(next);
    }
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
