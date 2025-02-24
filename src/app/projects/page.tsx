import React, { FC } from 'react';
import ProjectsPage from '@/components/projects/projectPage';
import { fetchProjects } from '@/lib/server/actions';


const Projects: FC = async () => {
  const projects = await fetchProjects();

  return(
    <ProjectsPage projectsData={projects} />
  );
};

export default Projects;