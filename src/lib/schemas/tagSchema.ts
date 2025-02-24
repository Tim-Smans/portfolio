import {z} from 'zod';

export const tagSchema = z.object({
  id: z.string(),
  name: z.string().min(5, {
    message: 'The name of a tag must be at least 5 characters long',
  }),
});

export const createTagSchema = tagSchema.pick({name: true});
