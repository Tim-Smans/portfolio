'use server';

import { ActionResponse } from '@/lib/models/actions';
import DAL from '@dal';
import { formAction } from '../mediators/actionMediators';
import { Prisma } from '@prisma/client';
import { redirect } from 'next/navigation';
import { log } from 'console';
import { revalidatePath } from 'next/cache';
import { createSkillSchema, skillSchema } from '@/lib/schemas/skillSchema';

export const fetchSkills = async () => {
  return await DAL.getSkills();
};

export const fetchSkillById = async (id: string) => {
  return await DAL.getSkillById(id);
};


export const createSkill = async (_prevState: ActionResponse, formData: FormData): Promise<ActionResponse> =>{
  return formAction(createSkillSchema, formData, async (data) => {
    log('formData:', formData);
    await DAL.createSkill(data as Prisma.SkillCreateInput);
    redirect('/');
  });
};


export const updateSkill = async (_prevState: ActionResponse, formData: FormData): Promise<ActionResponse> =>{
  return formAction(skillSchema, formData, async (data) => {
    await DAL.updateSkill(data as Prisma.SkillUpdateInput & {id: string});
    redirect('/');
  });
};


export const deleteSkill = async (id: string) => {
  await DAL.deleteSkill(id);
  revalidatePath('/', 'page');
};
