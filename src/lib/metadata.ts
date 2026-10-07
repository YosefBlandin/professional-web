import type { Metadata } from 'next';
import { profile } from '@/content/profile';

// Next merges metadata per top-level key, so a page that sets `openGraph` or `twitter` replaces the
// layout's object entirely. Building every page's metadata here keeps those objects complete.
export function pageMetadata({
    title,
    description,
    path,
    absoluteTitle = false,
}: {
    title: string;
    description: string;
    path: string;
    absoluteTitle?: boolean;
}): Metadata {
    const socialTitle = absoluteTitle ? title : `${title} | ${profile.name}`;
    return {
        title: absoluteTitle ? { absolute: title } : title,
        description,
        alternates: { canonical: path },
        openGraph: {
            type: 'website',
            siteName: profile.name,
            locale: 'en_US',
            url: path,
            title: socialTitle,
            description,
        },
        twitter: { card: 'summary_large_image', title: socialTitle, description },
    };
}
