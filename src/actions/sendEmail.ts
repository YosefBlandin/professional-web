'use server';

import { Resend } from 'resend';
import { profile } from '@/content/profile';
import type { Locale } from '@/i18n/routing';
import { sendEmailSchema, type SendEmailValues } from '@/schemas/sendEmailSchema';

export type SendEmailResult = { ok: true } | { ok: false; error: 'invalid' | 'unavailable' | 'failed' };

export async function sendEmail(values: SendEmailValues, locale: Locale = 'en'): Promise<SendEmailResult> {
    const parsed = sendEmailSchema.safeParse(values);
    if (!parsed.success) {
        // A filled honeypot means a bot; report success so it doesn't retry.
        if (values.company) return { ok: true };
        return { ok: false, error: 'invalid' };
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return { ok: false, error: 'unavailable' };

    const { email, subject, message } = parsed.data;
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
        // onboarding@resend.dev can only deliver to the Resend account's own address; set CONTACT_FROM_EMAIL once a domain is verified.
        from: process.env.CONTACT_FROM_EMAIL ?? 'Portfolio <onboarding@resend.dev>',
        to: profile.email,
        replyTo: email,
        subject: `[Portfolio]${locale === 'en' ? '' : ` [${locale.toUpperCase()}]`} ${subject}`,
        text: `${message}\n\nReply to: ${email}`,
    });

    if (error) {
        // Log the error type only; never the visitor's address or message.
        console.error('sendEmail failed:', error.name);
        return { ok: false, error: 'failed' };
    }
    return { ok: true };
}
