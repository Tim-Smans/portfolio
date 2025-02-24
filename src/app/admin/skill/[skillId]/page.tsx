import React, { FC } from 'react';
import SkillForm from '@/components/admin/forms/skillForm';
import { Skill } from '@prisma/client';
import Actions from '@actions';

interface Props {
  params: Promise<{
    skillId: string
  }>
}

const UpdateCategoryPage: FC<Props> = async ({params}) => {
  const {skillId} = await params;
  const skill = await Actions.fetchSkillById(skillId);

  return (
    <SkillForm isUpdate={true} existingSkill={skill as Skill}/>
  );
};


export default UpdateCategoryPage;