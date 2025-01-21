'use server';

import {
  getSessionProfile as getProfile,
  getSessionProfileOrRedirect as getProfileOrRedirect,
  getSessionProfileAndOptionallyRenew as getProfileAndRenew,
} from '../mediators/sessionMediators';

export const getSessionProfile = async () => {
  return await getProfile();
};

export const getSessionProfileOrRedirect = async (url: string = '/login') => {
  return await getProfileOrRedirect(url);
};

export const getSessionProfileAndOptionallyRenew = async () => {
  return await getProfileAndRenew();
};
