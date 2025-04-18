import React, { FC } from 'react';
import Actions from '@actions';
import ProjectDetail from '@/components/projects/projectDetailPage';

interface Props {
  params: Promise<{
    slug: string
  }>
}

const ProjectDetailPage: FC<Props> = async ({params}) => {
  const {slug} = await params;
  const project = await Actions.fetchProjectBySlug(slug);
  const admin = await Actions.isAdmin();

  return (
    <ProjectDetail project={project} isAdmin={admin}/>
  );
};

export default ProjectDetailPage;