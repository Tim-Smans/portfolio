import 'server-only';
import {prismaClient} from '@/lib/server/dal/utils/prismaClient';
import {Prisma, Session, User} from '@prisma/client';
import {Profile, SessionProfile} from '@/lib/models/user';
import {randomBytes} from 'crypto';
import {cache} from 'react';
import { hashPassword } from '../utils/passwordUtils';


/**
 *
 * @returns A list of users 
 */
export const getAllUsers = async (): Promise<Profile[]> => {
  return await prismaClient.user.findMany() as Profile[];
};

/**
 * Create a new user with a hashed and salted password.
 */
export const createUser = async (data: Prisma.UserCreateInput): Promise<User> => {

  const user = await prismaClient.user.create({
    data: {
      email: data.email,
      username: data.username,
      password: hashPassword(data.password),
      role:{
        connect: {id: '3fc523ca-5ab8-4f5d-ae24-9e85588256fe'},
      },
    },
  });
  console.log('User created successfully:', user);
  return user;
};

/**
 * Retrieve a user by email.
 * The result includes the hashed password and should therefore NEVER be exposed to the client.
 *
 * @param email The email address of the user to retrieve.
 */
export const getUserByEmail = async (email: string): Promise<User | null> => {
  return prismaClient.user.findFirst({where: {email}});
};

/**
 * Create a new session for the given user.
 *
 * @param userId
 */
export const startSession = async (userId: string): Promise<Session> => {
  // We maken hier een nieuw id aan via de randomBytes functie van Node.js.
  // Dit is een cryptografisch veilige functie om willekeurige strings te genereren.
  // Een V4 UUID is ook een goede optie, de randomBytes functie wordt hier gebruikt ter illustratie.
  // Deze functie is nuttig als je een unieke identifier hebt om een applicatie te ondertekenen.
  const id = randomBytes(32).toString('hex');
  return prismaClient.session.create({
    data: {
      id,
      userId,
      activeFrom: new Date(),
    },
  });
};

/**
 * Retrieve the session and associated user profile.
 * Only return active sessions, even if a session with the given id exists.
 *
 * @param id The id of the session to retrieve.
 */
export const getSessionProfile = cache(async (id: string): Promise<SessionProfile | null> => {
  return prismaClient.session.findUnique({
    where: {
      id,
      activeUntil: {
        gt: new Date(),
      },
    },
    include: {
      user: {
        include: {
          role: true,
        },
      },    
    },
  });
});

/**
 * Stop the session with the given id.
 *
 * @param id The id of the session to stop.
 */
export const stopSession = async(id: string): Promise<void> => {
  await prismaClient.session.delete({where: {id}});
};

/**
 * Extend the session with the given id for 24 hours.
 *
 * @param id The id of the session to extend.
 */
export const extendSession = async(id: string): Promise<Session> => {
  return prismaClient.session.update({
    where: {id},
    data: {
      activeUntil: new Date(Date.now() + 1000 * 60 * 60 * 24),
    },
  });
};

export const updateUser = async(userId: string, data: Prisma.UserUpdateInput) => {
  await prismaClient.user.update({
    where: {id: userId},
    data: data,
  });
};



export const addRoleToUser = async (userId: string, roleId: string) => {
  await prismaClient.user.update({
    where: {id: userId},
    data: {
      role: {
        connect: {
          id: roleId,
        },
      },
    },
  });
};

//Ik vervang hier de huidige rol met de `Student` rol
export const removeRoleFromUser = async (userId: string) => {
  await prismaClient.user.update({
    where: { id: userId },
    data: {
      role: {
        connect: {
          id: '4d7bb39d-5acb-4255-99fc-595ba4718f45',
        },
      },
    },
  });
};
