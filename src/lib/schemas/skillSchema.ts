import {z} from 'zod';

export const skillSchema = z.object({
  id: z.string(),
  title: z.string().min(5, {
    message: 'The title of a skill must be at least 5 characters long',
  }),
  description: z.string().min(30, {
    message: 'The description of a skill must be at least 30 characters long',
  }),
  iconName: z.string().optional(),
});

export const createSkillSchema = skillSchema.pick({title: true, description: true, iconName:true});
