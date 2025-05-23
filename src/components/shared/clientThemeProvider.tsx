'use client';

import { useTheme } from '@/context/themeContext';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React, { useEffect } from 'react';


const ClientThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const {theme: mode, changeTheme} = useTheme();
  
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme !== null) {
      changeTheme(storedTheme as 'light' | 'dark');
    }
  }, [changeTheme]);


  const theme = createTheme({
    palette: {
      primary: {
        main: '#2196f3',
      },
      mode: mode as 'light' | 'dark',
    },
    typography: {
      h2: {
        fontWeight: 700,
      },
      h4: {
        fontWeight: 600,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
          },
        },
      },
    },
  });
  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ClientThemeProvider;