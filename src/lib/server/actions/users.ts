'use server';

import DAL from '@dal';
import {redirect} from 'next/navigation';
import {Prisma} from '@prisma/client';
import { clearSessionCookie, getSessionId, setSessionCookie } from '../utils/sessionCookieUtils';
import { verifyPassword } from '../utils/passwordUtils';
import {revalidatePath} from 'next/cache';
import {ActionResponse} from '@/lib/models/actions';
import { createUserSchema, loginSchema, updateUserSchema } from '@/lib/schemas/userSchema';
import { formAction } from '../mediators/actionMediators'; 
import { log } from 'console';
import { getSessionProfile } from './sessions';

export const signInOrRegister = async (_prevState: ActionResponse, formData: FormData): Promise<ActionResponse> => {
  if (formData.has('username')) {
    return formAction(createUserSchema, formData, async data => {
      const input = {...data} as Prisma.UserCreateInput & {passwordConfirmation?: string};
      delete input.passwordConfirmation;
      const profile = await DAL.createUser(input);
      log(profile);

      const session = await DAL.startSession(profile.id);
      await setSessionCookie(session);

      redirect('/');
    });
  }

  return formAction(loginSchema, formData, async data => {
    const user = await DAL.getUserByEmail(data?.email);

    const errorResponse = {
      errors: {errors: ['No user found with the provided user/password combination.']},
      success: false,
    };
    if (!user) return errorResponse;

    const isValidPassword = verifyPassword(user.password, data.password);
    if (!isValidPassword) return errorResponse;

    const session = await DAL.startSession(user.id);
    await setSessionCookie(session);

    redirect('/');
  });
};

export const signOut = async (): Promise<void> => {
  const sessionId = await getSessionId();
  if (sessionId) {
    await DAL.stopSession(sessionId);
    await clearSessionCookie();
  }
};

export const updateProfile = async (_prevState: ActionResponse, data: FormData): Promise<ActionResponse> => {
  return formAction(updateUserSchema, data, async (data, profile) => {
    await DAL.updateUser(profile.id, data);
    revalidatePath('/', 'layout');
    revalidatePath('/account', 'page');
  });
};

export const isLoggedIn = async (): Promise<boolean> => {
  const sessionId = await getSessionId();
  return !!sessionId;
};

export const isAdmin = async (): Promise<boolean> => {
  const profile = await getSessionProfile();

  if (profile === null) {
    return false;
  }

  if (profile.role.name !== 'Admin') {
    return false;
  }

  return true;
};
