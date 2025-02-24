import {z} from 'zod';

export const imageSchema = z.object({
  id: z.string(),
  url: z.string().min(5, {
    message: 'The url of an image must be at least 5 characters long',
  }),
  alt: z.string().min(5, {
    message: 'The alt of an image must be at least 5 characters long',
  }),
  projectId: z.string().uuid(),
});

export const createImageSchema = imageSchema.pick({url: true, alt: true, projectId: true});
