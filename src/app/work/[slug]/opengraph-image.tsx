import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { profile } from '@/content/profile';
import { getProject, projects } from '@/content/projects';

// One static image per case study, rendered at build time.
export const alt = 'Case study by Yosef Blandin';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const dynamicParams = false;

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

async function screenshotSrc(file: string) {
    const data = await readFile(join(process.cwd(), 'src/assets', file));
    return `data:image/png;base64,${data.toString('base64')}`;
}

export default async function CaseStudyImage({ params }: { params: Promise<{ slug: string }> }) {
    const project = getProject((await params).slug)!;
    const media = project.media;
    const image = media.kind === 'image' ? await screenshotSrc(media.file) : null;

    return new ImageResponse(
        (
            <div style={{ display: 'flex', width: '100%', height: '100%', background: '#f6f5f2', color: '#14213d' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: 560, padding: '0 56px 0 72px', gap: 24 }}>
                    <div style={{ display: 'flex', fontSize: 20, letterSpacing: 3, textTransform: 'uppercase', color: '#5c6270' }}>
                        Case study · {project.company}
                    </div>
                    <div style={{ display: 'flex', fontSize: 58, lineHeight: 1.08, letterSpacing: -1.5 }}>{project.title}</div>
                    <div style={{ display: 'flex', fontSize: 24, color: '#5c6270' }}>{project.tags.slice(0, 4).join(' · ')}</div>
                    <div style={{ display: 'flex', fontSize: 24, color: '#6b1f2a' }}>
                        {profile.name} · {profile.title}
                    </div>
                </div>
                <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', background: '#eeede8', padding: 40 }}>
                    {image ? (
                        <img
                            src={image}
                            alt=""
                            width={560}
                            height={420}
                            style={{ objectFit: 'cover', objectPosition: 'top left', borderRadius: 16, border: '1px solid #e0dfda' }}
                        />
                    ) : media.kind === 'slip' ? (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, color: '#6b1f2a' }}>
                            <div style={{ display: 'flex', fontSize: 84, lineHeight: 1 }}>{media.figure}</div>
                            <div style={{ display: 'flex', fontSize: 26, color: '#5c6270', maxWidth: 480 }}>{media.caption}</div>
                        </div>
                    ) : null}
                </div>
            </div>
        ),
        size,
    );
}
