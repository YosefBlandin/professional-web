import type { MetadataRoute } from 'next';
import { siteUpdatedAt, siteUrl } from '@/content/profile';
import { projects } from '@/content/projects';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: siteUrl, lastModified: siteUpdatedAt, changeFrequency: 'monthly', priority: 1 },
        ...projects.map((project) => ({
            url: `${siteUrl}/work/${project.slug}`,
            lastModified: project.updatedAt,
            changeFrequency: 'yearly' as const,
            priority: 0.7,
        })),
    ];
}
