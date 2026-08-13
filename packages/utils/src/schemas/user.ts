import * as z from 'zod';

export const emailSchema = z.string().trim().min(1, 'El email es obligatorio').pipe(z.email('El email no es válido'));

export const passwordSchema = z
  .string()
  .min(8, 'La contraseña debe tener al menos 8 caracteres')
  .max(128, 'La contraseña es demasiado larga');

export const userSchema = z.object({
  name: z.string().trim().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: emailSchema,
  password: passwordSchema,
});

export type UserInput = z.infer<typeof userSchema>;
