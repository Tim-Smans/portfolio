import React, { FC } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import HeroSection from '@/components/home/heroSection';
import SkillsSection from '@/components/home/skillsSection';
import ProjectsSection from '@/components/home/projectsSection';
import { fetchProjects, isAdmin } from '@/lib/server/actions';

const Home: FC = async () => {

  const admin = await isAdmin();
  const projects = await fetchProjects();

  return (
    <>
      <HeroSection/>
      <SkillsSection isAdmin={admin}/>
      <ProjectsSection isAdmin={admin} projects={projects}/>
    </>
  );
};

export default Home;