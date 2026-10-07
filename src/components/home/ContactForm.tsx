'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useLocale, useTranslations } from 'next-intl';
import { useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/actions/sendEmail';
import { CopyButton } from '@/components/site/CopyButton';
import { profile } from '@/content/profile';
import type { Locale } from '@/i18n/routing';
import { buildSendEmailSchema, type SendEmailValues } from '@/schemas/sendEmailSchema';

type Status = 'idle' | 'sent' | 'failed';

export function ContactForm() {
    const t = useTranslations('contact');
    const locale = useLocale() as Locale;
    const schema = useMemo(
        () =>
            buildSendEmailSchema({
                emailRequired: t('errors.emailRequired'),
                emailInvalid: t('errors.emailInvalid'),
                subjectRequired: t('errors.subjectRequired'),
                subjectTooLong: t('errors.subjectTooLong'),
                messageRequired: t('errors.messageRequired'),
                messageTooLong: t('errors.messageTooLong'),
            }),
        [t],
    );
    const [status, setStatus] = useState<Status>('idle');
    const panel = useRef<HTMLDivElement>(null);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<SendEmailValues>({ resolver: zodResolver(schema) });

    async function onSubmit(values: SendEmailValues) {
        let ok = false;
        try {
            ok = (await sendEmail(values, locale)).ok;
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
                    <strong>{t('sentTitle')}</strong> {t('sentBody')}
                </p>
                <div className="cta-row">
                    <button className="btn btn-ghost btn-sm" type="button" onClick={() => setStatus('idle')}>
                        {t('sendAnother')}
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
                        <strong>{t('failedTitle')}</strong> {t('failedBody', { email: profile.email })}
                    </p>
                    <div className="cta-row">
                        <CopyButton text={profile.email} label={t('copyEmail')} />
                    </div>
                </div>
            )}
            <div className="field">
                <label htmlFor="f-email">{t('emailLabel')}</label>
                <input
                    id="f-email"
                    type="email"
                    autoComplete="email"
                    autoCapitalize="off"
                    spellCheck={false}
                    enterKeyHint="next"
                    placeholder={t('emailPlaceholder')}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby="e-email"
                    {...register('email')}
                />
                <span className="err" id="e-email">
                    {errors.email?.message}
                </span>
            </div>
            <div className="field">
                <label htmlFor="f-subject">{t('subjectLabel')}</label>
                <input
                    id="f-subject"
                    type="text"
                    autoComplete="off"
                    enterKeyHint="next"
                    placeholder={t('subjectPlaceholder')}
                    aria-invalid={errors.subject ? 'true' : 'false'}
                    aria-describedby="e-subject"
                    {...register('subject')}
                />
                <span className="err" id="e-subject">
                    {errors.subject?.message}
                </span>
            </div>
            <div className="field">
                <label htmlFor="f-message">{t('messageLabel')}</label>
                <textarea
                    id="f-message"
                    enterKeyHint="send"
                    placeholder={t('messagePlaceholder')}
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
                {isSubmitting ? t('sending') : t('send')}{' '}
                <span className="arrow" aria-hidden="true">
                    →
                </span>
            </button>
        </form>
    );
}
