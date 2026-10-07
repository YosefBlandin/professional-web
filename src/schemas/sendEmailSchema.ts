import { z } from 'zod';

export const sendEmailSchema = z.object({
    email: z.string().trim().min(1, 'Enter your email so I can reply.').email('Enter an email like you@company.com.'),
    subject: z.string().trim().min(1, 'Add a subject.').max(150, 'Keep the subject under 150 characters.'),
    message: z.string().trim().min(1, 'Write a short message.').max(5000, 'Keep the message under 5,000 characters.'),
    // Honeypot: hidden from people, filled in by bots.
    company: z.string().max(0).optional(),
});

export type SendEmailValues = z.infer<typeof sendEmailSchema>;
