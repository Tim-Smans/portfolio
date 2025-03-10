import { Container, Grid } from '@mui/material';
import React, { FC } from 'react';
import PersonalInfo from './personalInfo';
import SkillsSection from './skillsSection';
import { Skill } from '@prisma/client';
import InterestsSection from './interestsSection';
import AboutMeSection from './aboutMeSection';
import ExperienceSection from './experienceSection';
import ConnectSection from './connectSection';

interface Props {
  skills: Skill[]
}

const MainSection: FC<Props> = ({ skills }) => {
  return (
    <Container sx={{ mb: 8 }}>
      <Grid container spacing={4}>
        {/* Left Column */}
        <Grid item xs={12} md={4}>
          <PersonalInfo />
          <SkillsSection skills={skills} />
          <InterestsSection />
        </Grid>
        {/* Right Column */}
        <Grid item xs={12} md={8}>
          <AboutMeSection/>
          <ExperienceSection/>
        </Grid>
      </Grid>
      <ConnectSection/>
    </Container>
  )
}

export default MainSection