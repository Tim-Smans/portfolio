import Navbar from '@/components/shared/navbar';
import ClientThemeProvider from '@/components/shared/clientThemeProvider';
import type { Metadata } from 'next';
import React from 'react';
import { ThemeProvider } from '@/context/themeContext';
import { CssBaseline, GlobalStyles } from '@mui/material';
import Actions from '@actions';
import Footer from '@/components/shared/footer';

export const metadata: Metadata = {
  title: 'Portfolio of Tim Smans',
  description:
    'This is a portfolio created by Tim Smans, he is a belgian programmer who focuses on both front- and back-end',
};


const RootLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const admin = await Actions.isAdmin();
  return (
    <html lang='en'>
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
            <Navbar isAdmin={admin} />
            {children}
            <Footer/>
          </ClientThemeProvider>
        </ThemeProvider>

      </body>
    </html>
  );
};

export default RootLayout;