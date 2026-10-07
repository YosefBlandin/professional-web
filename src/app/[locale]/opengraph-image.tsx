import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { getContent } from '@/content';
import { profile as baseProfile } from '@/content/profile';
import { routing, type Locale } from '@/i18n/routing';

// Rendered once at build time, so reading the portrait from disk is safe on any runtime.
export const dynamic = 'force-static';

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

const copy: Record<Locale, { eyebrow: string; tagline: string }> = {
    en: { eyebrow: 'Mobile & Frontend Engineer · Fintech', tagline: 'Focused on payments and banking.' },
    es: { eyebrow: 'Ingeniero Mobile y Frontend · Fintech', tagline: 'Enfocado en pagos y banca.' },
};
export const alt = `${baseProfile.name}, ${baseProfile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params;
    const profile = getContent(locale).profile;
    const portrait = await readFile(join(process.cwd(), 'src/assets/yosef-portrait.jpg'));
    const portraitSrc = `data:image/jpeg;base64,${portrait.toString('base64')}`;

    return new ImageResponse(
        (
            <div style={{ display: 'flex', width: '100%', height: '100%', background: '#f6f5f2', color: '#14213d' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1, padding: '0 72px', gap: 28 }}>
                    <div style={{ display: 'flex', fontSize: 22, letterSpacing: 3, textTransform: 'uppercase', color: '#5c6270' }}>
                        {copy[locale].eyebrow}
                    </div>
                    <div style={{ display: 'flex', fontSize: 76, lineHeight: 1.05, letterSpacing: -2 }}>{profile.name}</div>
                    <div style={{ display: 'flex', fontSize: 34, lineHeight: 1.3, color: '#6b1f2a', maxWidth: 620 }}>
                        {copy[locale].tagline}
                    </div>
                    <div style={{ display: 'flex', fontSize: 24, color: '#5c6270' }}>React · React Native · Next.js · TypeScript</div>
                    <div style={{ display: 'flex', fontSize: 22, color: '#5c6270' }}>
                        {profile.location} · {profile.timezone}
                    </div>
                </div>
                <img src={portraitSrc} alt="" width={420} height={630} style={{ objectFit: 'cover', objectPosition: '50% 30%' }} />
            </div>
        ),
        size,
    );
}
