import React, { FC } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import HeroSection from '@/components/home/heroSection';
import SkillsSection from '@/components/home/skillsSection';
import ProjectsSection from '@/components/home/projectsSection';

const Home: FC = () => {
  return (
    <>
      <HeroSection/>
      <SkillsSection/>
      <ProjectsSection/>
    </>
  );
};

export default Home;