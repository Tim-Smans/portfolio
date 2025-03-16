import React, { FC } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import HeroSection from '@/components/home/heroSection';
import SkillsSection from '@/components/home/skillsSection';
import ProjectsSection from '@/components/home/projectsSection';
import { fetchProjects, fetchSkills, isAdmin } from '@/lib/server/actions';
import { hashPassword } from '@/lib/server/utils/passwordUtils';

const Home: FC = async () => {

  const admin = await isAdmin();
  const projects = await fetchProjects();
  const skills = await fetchSkills();

  const passwordHash = hashPassword('Kwispel123!');
  console.log(passwordHash);

  return (
    <>
      <HeroSection/>
      <SkillsSection isAdmin={admin} skills={skills}/>
      <ProjectsSection isAdmin={admin} projects={projects}/>
    </>
  );
};

export default Home;