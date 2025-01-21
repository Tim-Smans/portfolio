import Navbar from '@/components/shared/navbar';
import ClientThemeProvider from '@/components/shared/clientThemeProvider';
import type { Metadata } from 'next';
import React from 'react';
import { ThemeProvider } from '@/context/themeContext';
import { CssBaseline, GlobalStyles } from '@mui/material';

export const metadata: Metadata = {
  title: 'Portfolio of Tim Smans',
  description:
    'This is a portfolio created by Tim Smans, he is a belgian programmer who focuses on both front- and back-end',
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="en">
      <body>          
        <ThemeProvider >
          <ClientThemeProvider>
            <CssBaseline />
            <GlobalStyles
              styles={{
                '*': {
                  transition: 'background-color 0.3s ease, color 0.1s ease',
                },
              }}
            />
            <Navbar />
            {children}
          </ClientThemeProvider>
        </ThemeProvider>

      </body>
    </html>
  );
};

export default RootLayout;