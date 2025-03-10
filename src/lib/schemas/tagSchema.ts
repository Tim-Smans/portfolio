import {z} from 'zod';

export const tagSchema = z.object({
  id: z.string(),
  name: z.string().min(5, {
    message: 'The name of a tag must be at least 5 characters long',
  }),
  projectId: z.string().uuid(),
  color: z.string().default('#000000'),
  iconName: z.string().default(''),
});

export const createTagSchema = tagSchema.pick({name: true, projectId: true, color: true, iconName: true});
