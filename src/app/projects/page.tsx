import React, { FC } from 'react';
import ProjectsPage from '@/components/projects/projectPage';
import { fetchProjects, isAdmin } from '@/lib/server/actions';


const Projects: FC = async () => {
  const projects = await fetchProjects();
  const admin = await isAdmin();

  return(
    <ProjectsPage projectsData={projects} isAdmin={admin} />
  );
};

export default Projects;