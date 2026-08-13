import * as z from 'zod';

export const idSchema = z.uuid();

export const optionalStringSchema = z
  .string()
  .trim()
  .optional()
  .transform((value) => value ?? '');
