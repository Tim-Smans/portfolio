import { Prisma, Skill } from '@prisma/client';
import { prismaClient } from './utils/prismaClient';


export const getSkills = async (): Promise<Skill[]> => {
  return await prismaClient.skill.findMany();
};

export const getSkillById = async (id: string): Promise<Skill | null> => {
  return await prismaClient.skill.findUnique({
    where: {
      id,
    },
  });
};

export const createSkill = async (project: Prisma.SkillCreateInput): Promise<string> => {
  await prismaClient.skill.create({data: project});
  return project.id!;
};

export const updateSkill = async (project: Prisma.SkillUpdateInput & { id: string }): Promise<string> => {
  await prismaClient.skill.update({where: {id: project.id}, data: project});
  return project.id!;
};

export const deleteSkill = async (id: string) => {
  return await prismaClient.skill.delete({where: {id}});
};