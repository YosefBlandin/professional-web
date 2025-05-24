import { z } from 'zod';

export const sendEmailSchema = z.object({
    email: z.string().email(),
    subject: z.string().min(1),
    message: z.string().min(1),
});
