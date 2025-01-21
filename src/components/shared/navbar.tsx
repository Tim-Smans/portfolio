'use client';
import { useTheme } from '@/context/themeContext';
import { AppBar, Button, Container, Stack, Toolbar, Typography } from '@mui/material';
import React, { FC } from 'react';

interface Props{
  isAdmin?: boolean
}

const Navbar: FC<Props> = ({isAdmin}) => {
  const { changeTheme, theme } = useTheme();
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" color="primary">
            Portfolio Tim Smans {isAdmin && <strong>(Admin)</strong>}
          </Typography>
          <Stack direction="row" spacing={4}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Projects</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Contact</Button>
            <Button color="inherit" onClick={() => changeTheme(theme === 'light' ? 'dark' : 'light')}>
              {theme === 'dark' ? 'Light' : 'Dark'}
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
