'use client';

import { useTheme } from '@/context/themeContext';
import { Container, Typography, Box, Stack, Button } from '@mui/material';
import Link from 'next/link';
import React, { FC } from 'react';

const HeroSection: FC = () => {
  const { theme } = useTheme();
  const color = theme === 'light' ? '#f5f5f5' : '#1F1F1F';

  
  return (
    <Container sx={{ mt: 8, mb: 15, p: 4, backgroundColor: color, borderRadius: '10px' }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 6 } }>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h2" gutterBottom>
            Hi, I&apos;m <Box component="span" color="primary.main">Tim Smans</Box>
          </Typography>
          <Typography variant="h4" gutterBottom color="text.secondary">
            Student Developer
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
          I am an enthusiastic student developer, having recently completed an enriching and challenging internship experience in Finland          </Typography>
          <Stack direction="row" spacing={2}>
            <Link href={'/projects'}>
              <Button variant="contained" size="large">
                View Projects
              </Button>
            </Link>
            <Link href={'/contact'}>
              <Button variant="outlined" size="large">
                Contact Me
              </Button>
            </Link>
          </Stack>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Box
            component="img"
            src='/comp.svg'
            alt="Workspace illustration"
            sx={{
              color: 'text.secondary',
              width: '50%',
              height: 'auto',
              borderRadius: 2,
              marginLeft: 10,
              display: { xs: 'none', md: 'block' },
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
