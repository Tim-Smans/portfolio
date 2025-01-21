'use client';
import {createContext, FC, ReactNode, useContext, useState} from 'react';
import React from 'react';

export interface ThemeContextType {
  theme: 'light' | 'dark'
  changeTheme: (newTheme: 'light' | 'dark') => void
}
interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const changeTheme = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};


export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme has to be used inside the themeProvider');
  }
  return context;
};