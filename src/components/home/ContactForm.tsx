'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/actions/sendEmail';
import { CopyButton } from '@/components/site/CopyButton';
import { profile } from '@/content/profile';
import { sendEmailSchema, type SendEmailValues } from '@/schemas/sendEmailSchema';

type Status = 'idle' | 'sent' | 'failed';

export function ContactForm() {
    const [status, setStatus] = useState<Status>('idle');
    const panel = useRef<HTMLDivElement>(null);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<SendEmailValues>({ resolver: zodResolver(sendEmailSchema) });

    async function onSubmit(values: SendEmailValues) {
        let ok = false;
        try {
            ok = (await sendEmail(values)).ok;
        } catch {
            // Network or server failure; the failed panel offers the email address instead.
        }
        if (ok) reset();
        setStatus(ok ? 'sent' : 'failed');
        requestAnimationFrame(() => {
            panel.current?.focus({ preventScroll: true });
            panel.current?.scrollIntoView({ block: 'center' });
        });
    }

    if (status === 'sent') {
        return (
            <div className="ready" ref={panel} tabIndex={-1} role="status">
                <p>
                    <strong>Message sent.</strong> I’ll reply within one working day.
                </p>
                <div className="cta-row">
                    <button className="btn btn-ghost btn-sm" type="button" onClick={() => setStatus('idle')}>
                        Send another
                    </button>
                </div>
            </div>
        );
    }

    return (
        <form className="msg" onSubmit={handleSubmit(onSubmit)} noValidate>
            {status === 'failed' && (
                <div className="ready" ref={panel} tabIndex={-1} role="alert">
                    <p>
                        <strong>Your message didn’t send.</strong> Try again, or email me directly at {profile.email}.
                    </p>
                    <div className="cta-row">
                        <CopyButton text={profile.email} label="Copy email" />
                    </div>
                </div>
            )}
            <div className="field">
                <label htmlFor="f-email">Your email</label>
                <input
                    id="f-email"
                    type="email"
                    autoComplete="email"
                    autoCapitalize="off"
                    spellCheck={false}
                    enterKeyHint="next"
                    placeholder="you@company.com"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby="e-email"
                    {...register('email')}
                />
                <span className="err" id="e-email">
                    {errors.email?.message}
                </span>
            </div>
            <div className="field">
                <label htmlFor="f-subject">Subject</label>
                <input
                    id="f-subject"
                    type="text"
                    autoComplete="off"
                    enterKeyHint="next"
                    placeholder="React Native role, payments app"
                    aria-invalid={errors.subject ? 'true' : 'false'}
                    aria-describedby="e-subject"
                    {...register('subject')}
                />
                <span className="err" id="e-subject">
                    {errors.subject?.message}
                </span>
            </div>
            <div className="field">
                <label htmlFor="f-message">Message</label>
                <textarea
                    id="f-message"
                    enterKeyHint="send"
                    placeholder="What are you building, and where could I help?"
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby="e-message"
                    {...register('message')}
                />
                <span className="err" id="e-message">
                    {errors.message?.message}
                </span>
            </div>
            <div className="honeypot" aria-hidden="true">
                <label htmlFor="f-company">Company</label>
                <input id="f-company" type="text" tabIndex={-1} autoComplete="off" {...register('company')} />
            </div>
            <button className="btn btn-primary msg-submit" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending…' : 'Send message'}{' '}
                <span className="arrow" aria-hidden="true">
                    →
                </span>
            </button>
        </form>
    );
}
