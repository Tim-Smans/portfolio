"use client"
import { Box } from '@mui/material';
import { FC } from 'react';
import Hero from './heroSection';
import MainSection from './mainSection';
import { Skill } from '@prisma/client';

interface Props {
  skills: Skill[]
  isAdmin: boolean
}

const AboutLayout: FC<Props> = ({skills, isAdmin}) => {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Hero/>
      <MainSection isAdmin={isAdmin} skills={skills}/>
    </Box>
  );
};

export default AboutLayout;