import React, { FC } from 'react';
import DAL from '@dal';
import ProjectForm from '@/components/admin/forms/projectForm';
import { Project } from '@/lib/models/project';

interface Props {
  params: Promise<{
    projectId: string
  }>
}

const UpdateCategoryPage: FC<Props> = async ({params}) => {
  const {projectId} = await params;
  const project = await DAL.getProjectById(projectId);

  return (
    <ProjectForm isUpdate={true} existingProject={project as Project}/>
  );
};


export default UpdateCategoryPage;