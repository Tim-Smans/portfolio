"use client"
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { FC } from 'react';
import Hero from './heroSection';
import MainSection from './mainSection';
import { Skill } from '@prisma/client';
import ConnectSection from './connectSection';

interface Props {
  skills: Skill[]
}

const AboutLayout: FC<Props> = ({skills}) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Hero/>
      <MainSection skills={skills}/>
    </Box>
  );
};

export default AboutLayout;