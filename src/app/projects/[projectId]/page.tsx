import React, { FC } from 'react';
import Actions from '@actions';
import ProjectDetail from '@/components/projects/projectDetailPage';

interface Props {
  params: Promise<{
    projectId: string
  }>
}

const ProjectDetailPage: FC<Props> = async ({params}) => {
  const {projectId} = await params;
  const project = await Actions.fetchProjectById(projectId);
  const admin = await Actions.isAdmin();

  return (
    <ProjectDetail project={project} isAdmin={admin}/>
  );
};

export default ProjectDetailPage;