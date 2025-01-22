import ProjectForm from '@/components/admin/forms/projectForm';
import React, { FC } from 'react';


const ProjectCreatePage: FC = () => {
  
  return (
    <ProjectForm isUpdate={false} />
  );
};

export default ProjectCreatePage;