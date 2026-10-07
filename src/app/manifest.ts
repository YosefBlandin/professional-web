import type { MetadataRoute } from 'next';
import { profile } from '@/content/profile';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: `${profile.name} | ${profile.title}`,
        short_name: profile.name,
        description: profile.description,
        start_url: '/',
        display: 'browser',
        background_color: '#f6f5f2',
        theme_color: '#14213d',
        icons: [
            { src: '/icon.svg', type: 'image/svg+xml', sizes: 'any' },
            { src: '/apple-icon', type: 'image/png', sizes: '180x180' },
        ],
    };
}
