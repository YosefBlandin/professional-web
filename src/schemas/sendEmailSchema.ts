import { z } from 'zod';

type ErrorMessages = Record<
    'emailRequired' | 'emailInvalid' | 'subjectRequired' | 'subjectTooLong' | 'messageRequired' | 'messageTooLong',
    string
>;

// The form builds this with the visitor's language; the server action only needs the rules.
export function buildSendEmailSchema(messages: ErrorMessages) {
    return z.object({
        email: z.string().trim().min(1, messages.emailRequired).email(messages.emailInvalid),
        subject: z.string().trim().min(1, messages.subjectRequired).max(150, messages.subjectTooLong),
        message: z.string().trim().min(1, messages.messageRequired).max(5000, messages.messageTooLong),
        // Honeypot: hidden from people, filled in by bots.
        company: z.string().max(0).optional(),
    });
}

export const sendEmailSchema = buildSendEmailSchema({
    emailRequired: 'Enter your email so I can reply.',
    emailInvalid: 'Enter an email like you@company.com.',
    subjectRequired: 'Add a subject.',
    subjectTooLong: 'Keep the subject under 150 characters.',
    messageRequired: 'Write a short message.',
    messageTooLong: 'Keep the message under 5,000 characters.',
});

export type SendEmailValues = z.infer<typeof sendEmailSchema>;
