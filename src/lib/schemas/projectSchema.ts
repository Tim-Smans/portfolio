import {z} from 'zod';

export const projectSchema = z.object({
  id: z.string(),
  name: z.string().min(5, {
    message: 'The name of a project must be at least 5 characters long',
  }),
  shortDescription: z.string().min(10, {
    message: 'The short description of a project must be at least 10 characters long',
  }),
  description: z.string().min(30, {
    message: 'The description of a project must be at least 30 characters long',
  }),
  coverImageUrl: z.string().optional(),
});

export const createProjectSchema = projectSchema.pick({name: true, description: true, shortDescription: true, coverImageUrl: true});
