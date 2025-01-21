'use client';

import { useTheme } from '@/context/themeContext';
import { Container, Typography, Box, Stack, Button } from '@mui/material';
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
            Student Develop
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            I am a passionate student developer who is currently doing an internship in Finland
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" size="large">
              View Projects
            </Button>
            <Button variant="outlined" size="large">
              Contact Me
            </Button>
          </Stack>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Box
            component="img"
            src="/placeholder.svg?height=400&width=400"
            alt="Workspace illustration"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2,
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
