'use server';

import { ActionResponse } from '@/lib/models/actions';
import { formAction } from '../mediators/actionMediators';
import { createImageSchema } from '@/lib/schemas/imageSchema';
import { Prisma } from '@prisma/client';
import DAL from "@dal";
import { redirect } from 'next/navigation';

export const createImage = async (_prevState: ActionResponse, formData: FormData): Promise<ActionResponse> =>{
  return formAction(createImageSchema, formData, async (data) => {
    await DAL.createImage(data as Prisma.ImageCreateWithoutProjectInput, data.projectId);
    redirect('/');
  });
};
