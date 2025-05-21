import { Container, Grid } from '@mui/material';
import React, { FC } from 'react';
import PersonalInfo from './personalInfo';
import SkillsSection from './skillsSection';
import { Skill } from '@prisma/client';
import InterestsSection from './interestsSection';
import AboutMeSection from './aboutMeSection';
import ExperienceSection from './experienceSection';
import ConnectSection from './connectSection';
import ReferenceSection from './referenceSection';

interface Props {
  skills: Skill[]
  isAdmin: boolean
}

const MainSection: FC<Props> = ({ skills, isAdmin }) => {
  return (
    <Container sx={{ mb: 8 }}>
      <Grid container spacing={4}>
        {/* Left Column */}
        <Grid item xs={12} md={4}>
          <PersonalInfo />
          <SkillsSection skills={skills} isAdmin={isAdmin} />
          <InterestsSection />
        </Grid>
        {/* Right Column */}
        <Grid item xs={12} md={8}>
          <AboutMeSection/>
          <ExperienceSection/>
        </Grid>
      </Grid>
      <ReferenceSection/>
      <ConnectSection/>
    </Container>
  )
}

export default MainSection