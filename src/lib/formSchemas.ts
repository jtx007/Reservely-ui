import * as z from 'zod';

const passwordSchema = z
    .string()
    .min(8, { message: 'must be at least 8 characters' })
    .max(20, { message: 'must be less than 20 characters' })
    .refine((password) => /[A-Z]/.test(password), {
        message: 'must have 1 capital letter',
    })
    .refine((password) => /[a-z]/.test(password), {
        message: 'must have one lowercase letter',
    })
    .refine((password) => /[0-9]/.test(password), {
        message: 'must have at least one number',
    });

export const loginFormSchema = z.object({
    username: z
        .string()
        .min(7, 'username must be at least 7 characters')
        .max(15, 'username must be at least 15 characters'),
    password: z.string(),
});

export const signUpFormSchema = z.object({
    username: z
        .string()
        .min(7, 'username must be at least 7 characters')
        .max(15, 'username must be at least 15 characters'),
    email: z.email(),
    password: passwordSchema,
});
