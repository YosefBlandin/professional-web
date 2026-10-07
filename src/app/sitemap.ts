import type { MetadataRoute } from 'next';
import { siteUrl } from '@/content/profile';
import { projects } from '@/content/projects';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: siteUrl, changeFrequency: 'monthly', priority: 1 },
        ...projects.map((project) => ({
            url: `${siteUrl}/work/${project.slug}`,
            changeFrequency: 'yearly' as const,
            priority: 0.7,
        })),
    ];
}
