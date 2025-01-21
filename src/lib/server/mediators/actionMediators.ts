import {ActionResponse} from '@/lib/models/actions';
import {Profile} from '@/lib/models/user';
import {z, ZodSchema} from 'zod';
import { getSessionProfileAndOptionallyRenew } from './sessionMediators';

interface Error {
  message: string;
}

type UnprotectedFormAction<T extends ZodSchema> = (validatedData: z.infer<T>) => Promise<ActionResponse | void>;
type ProtectedFormAction<T extends ZodSchema> = (
  validatedData: z.infer<T>,
  profile: Profile,
) => Promise<ActionResponse | void>;

export const formAction = async <T extends ZodSchema>(
  schema: T,
  unvalidatedData: FormData,
  fn: ProtectedFormAction<T>,
): Promise<ActionResponse> => {
  try {
    const profile = fn.length > 1 ? await getSessionProfileAndOptionallyRenew() : undefined;
    const {data, errors} = validateSchema(schema, unvalidatedData);
    if (errors) {
      return {
        errors,
        success: false,
        submittedData: Object.fromEntries(unvalidatedData.entries()) as Record<string, string>,
      };
    }

    const result = await (profile ? fn(data, profile) : (fn as UnprotectedFormAction<T>)(data));
    return result ?? {success: true};
  } catch (e) {
    const error = e as Error;
    if (error.message === 'NEXT_REDIRECT') {
      throw e;
    }

    console.error('Error in formAction:', error);

    return {
      errors: {
        errors: [error.message === 'User not logged in' ? 'Not authorized' : 'Something went wrong, please try again'],
      },
      success: false,
    };
  }
};

type ValidationResult<T> = {data: null; errors: Record<string, string[] | undefined>} | {data: T; errors: null};

/**
 * Validate the given data against the given ZodSchema.
 *
 * @param schema The schema to validate the data against.
 * @param data The data to validate, either FormData or a plain object.
 * @return An object which either contains the validated data or the validation errors.
 */
export const validateSchema = <T extends ZodSchema>(schema: T, data: unknown): ValidationResult<z.infer<T>> => {
  const result = schema.safeParse(data instanceof FormData ? convertFormData(data) : data);
  return result.success
    ? {data: result.data as z.infer<T>, errors: null}
    : {data: null, errors: result.error.flatten().fieldErrors};
};

export const convertFormData = <T>(data: FormData): T => {
  const result: Record<string, unknown> = {};

  Array.from(data.keys())
    .filter(key => !key.includes('.'))
    .forEach(key => (result[key] = data.get(key)));

  const multipartKeys = Array.from(data.keys()).filter(key => key.includes('.'));
  multipartKeys.sort();

  for (const multipartKey of multipartKeys) {
    const keyParts = multipartKey.split('.');
    let current: Record<string, unknown> | unknown[] = result; // Updated typing

    for (let i = 0; i < keyParts.length; i++) {
      const keyPart = keyParts[i];

      if (i === keyParts.length - 1) {
        (current as Record<string, unknown>)[keyPart] = data.get(multipartKey);
        continue;
      }

      // Type narrowing: Check if current is an object or array
      if (typeof current === 'object' && current !== null) {
        if (!(keyPart in current)) {
          (current as Record<string, unknown>)[keyPart] =
            isNaN(parseInt(keyParts[i + 1])) ? {} : [];
        }

        current = (current as Record<string, unknown>)[keyPart] as Record<string, unknown> | unknown[];
      }
    }
  }

  return result as T;
};


