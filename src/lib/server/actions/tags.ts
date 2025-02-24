'use server';

import { ActionResponse } from '@/lib/models/actions';
import DAL from '@dal';
import { formAction } from '../mediators/actionMediators';
import { Prisma } from '@prisma/client';
import { redirect } from 'next/navigation';
import { log } from 'console';
import { revalidatePath } from 'next/cache';
import { createTagSchema, tagSchema } from '@/lib/schemas/tagSchema';

export const fetchTags = async () => {
  return await DAL.getTags();
};

export const fetchTagById = async (id: string) => {
  return await DAL.getTagById(id);
};


export const createTag = async (_prevState: ActionResponse, formData: FormData): Promise<ActionResponse> =>{
  return formAction(createTagSchema, formData, async (data) => {
    log('formData:', formData);
    await DAL.createTag(data as Prisma.TagCreateInput);
    redirect('/');
  });
};


export const updateTag = async (_prevState: ActionResponse, formData: FormData): Promise<ActionResponse> =>{
  return formAction(tagSchema, formData, async (data) => {
    await DAL.updateTag(data as Prisma.TagUpdateInput & {id: string});
    redirect('/');
  });
};


export const deleteTag = async (id: string) => {
  await DAL.deleteTag(id);
  revalidatePath('/', 'page');
};
