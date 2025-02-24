import { Prisma, Image } from '@prisma/client';
import { prismaClient } from './utils/prismaClient';
import { log } from 'console';


export const getImage = async (): Promise<Image[]> => {
  return await prismaClient.image.findMany();
};

export const getImageById = async (id: string): Promise<Image | null> => {
  return await prismaClient.image.findUnique({where: {id}});
};

export const createImage = async (image: Prisma.ImageCreateWithoutProjectInput, projectId: string): Promise<string> => {
  log('image:', image);
  await prismaClient.image.create(
    {
      data: {
        url: image.url,
        alt: image.alt,
        project: {
          connect: {
            id: projectId,
          },
        },
      }    
    }
  );
  return image.id!;
};

export const updateImage = async (image: Prisma.ImageUpdateInput & { id: string }) => {
  await prismaClient.image.update({where: {id: image.id}, data: image});
};

export const deleteImage = async (id: string) => {
  await prismaClient.image.delete({where: {id}});
};