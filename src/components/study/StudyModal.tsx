'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useRef, useState, type ReactNode } from 'react';
import { CloseIcon } from '@/components/site/Icons';

export function StudyModal({ kicker, title, children }: { kicker: string; title: string; children: ReactNode }) {
    const t = useTranslations('study');
    const router = useRouter();
    const [open, setOpen] = useState(true);
    // The "Read case study" link that opened this dialog; focus goes back to it on close.
    const opener = useRef<Element | null>(typeof document === 'undefined' ? null : document.activeElement);

    function onOpenChange(next: boolean) {
        if (next) return;
        setOpen(false);
        router.back();
    }

    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <Dialog.Portal>
                <Dialog.Overlay className="study-overlay" />
                <Dialog.Content
                    className="study-dialog"
                    aria-describedby={undefined}
                    onCloseAutoFocus={(event) => {
                        event.preventDefault();
                        const target = opener.current;
                        requestAnimationFrame(() => {
                            if (target instanceof HTMLElement && target.isConnected) target.focus();
                        });
                    }}
                >
                    <div className="study-head">
                        <div>
                            <p className="label">{kicker}</p>
                            <Dialog.Title asChild>
                                <h2>{title}</h2>
                            </Dialog.Title>
                        </div>
                        <Dialog.Close className="icon-btn" aria-label={t('close')}>
                            <CloseIcon />
                        </Dialog.Close>
                    </div>
                    {children}
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
