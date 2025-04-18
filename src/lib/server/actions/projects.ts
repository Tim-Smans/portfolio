'use server';

import { ActionResponse } from '@/lib/models/actions';
import DAL from '@dal';
import { formAction } from '../mediators/actionMediators';
import { createProjectSchema, projectSchema } from '@/lib/schemas/projectSchema';
import { Project } from '@prisma/client';
import { Project as FullProject } from '@/lib/models/project';
import { redirect } from 'next/navigation';
import { log } from 'console';
import { revalidatePath } from 'next/cache';

export const fetchProjects = async () => {
  return await DAL.getProjects();
};

export const fetchProjectById = async (id: string): Promise<FullProject> => {
  return await DAL.getProjectById(id) as FullProject;
};

export const fetchProjectBySlug = async (slug: string): Promise<FullProject> => {
  return await DAL.getProjectBySlug(slug) as FullProject;
};

export const createNewProject = async (_prevState: ActionResponse, formData: FormData): Promise<ActionResponse> =>{
  return formAction(createProjectSchema, formData, async (data) => {
    log('formData:', formData);
    await DAL.createProject(data as Project);
    redirect('/');
  });
};


export const updateProject = async (_prevState: ActionResponse, formData: FormData): Promise<ActionResponse> =>{
  return formAction(projectSchema, formData, async (data) => {
    await DAL.updateProject(data as Project & {id: string});
    redirect('/');
  });
};


export const deleteProject = async (id: string) => {
  await DAL.deleteProject(id);
  revalidatePath('/', 'page');
};
