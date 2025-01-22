import { Prisma } from '@prisma/client';

export type Project = Prisma.ProjectGetPayload<
  Prisma.ProjectDefaultArgs & {
    include: {
      tags: true;
    };
  }
>;