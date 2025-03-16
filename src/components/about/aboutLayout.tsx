"use client"
import { Box } from '@mui/material';
import { FC } from 'react';
import Hero from './heroSection';
import MainSection from './mainSection';
import { Skill } from '@prisma/client';

interface Props {
  skills: Skill[]
}

const AboutLayout: FC<Props> = ({skills}) => {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Hero/>
      <MainSection skills={skills}/>
    </Box>
  );
};

export default AboutLayout;