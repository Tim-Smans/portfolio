import { Prisma, Tag } from '@prisma/client';
import { prismaClient } from './utils/prismaClient';


export const getTags = async (): Promise<Tag[]> => {
  return await prismaClient.tag.findMany();
};

export const getTagById = async (id: string): Promise<Tag | null> => {
  return await prismaClient.tag.findUnique({where: {id}});
};

export const createTag = async (tag: Prisma.TagCreateInput): Promise<string> => {
  await prismaClient.tag.create({data: tag});
  return tag.id!;
};

export const updateTag = async (tag: Prisma.TagUpdateInput & { id: string }) => {
  await prismaClient.tag.update({where: {id: tag.id}, data: tag});
};

export const deleteTag = async (id: string) => {
  await prismaClient.tag.delete({where: {id}});
};