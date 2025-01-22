import { Project as PrismaProject } from '@prisma/client';
import { prismaClient } from './utils/prismaClient';
import { Project } from '@/lib/models/project';


export const getProjects = async (): Promise<Project[]> => {
  return await prismaClient.project.findMany({
    include: {
      tags: true,
      images: true,
      _count: true,
    },
  });
};

export const getProjectById = async (id: string): Promise<Project | null> => {
  return await prismaClient.project.findUnique({
    where: {
      id,
    },
    include: {
      tags: true,
      images: true,
      _count: true,
    },
  });
};

export const createProject = async (project: PrismaProject) => {
  if(project.coverImageUrl === ''){
    project.coverImageUrl = 'https://via.assets.so/img.jpg?w=200&h=150&tc=white&bg=#cecece';
  }
  
  return await prismaClient.project.create({data: project});
};

export const updateProject = async (project: PrismaProject & { id: string }) => {
  return await prismaClient.project.update({where: {id: project.id}, data: project});
};

export const deleteProject = async (id: string) => {
  return await prismaClient.project.delete({where: {id}});
};

export const addTagToProject = async (projectId: string, tagId: string) => {
  return await prismaClient.project.update({
    where: {id: projectId},
    data: {
      tags: {
        connect: {
          id: tagId,
        },
      },
    },
  });
};

export const removeTagFromProject = async (projectId: string, tagId: string) => {
  return await prismaClient.project.update({
    where: {id: projectId},
    data: {
      tags: {
        disconnect: {
          id: tagId,
        },
      },
    },
  });
};