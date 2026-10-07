import type { Locale } from '@/i18n/routing';
import { experienceEs, profileEs, projectsEs, proofEs, skillGroupsEs } from './es';
import { experience, skills } from './experience';
import { profile, proof } from './profile';
import { projects, type Project } from './projects';

function localizeProject(project: Project): Project {
    const copy = projectsEs[project.slug];
    if (!copy) return project;
    const { link, alt, slip, ...text } = copy;
    const media =
        project.media.kind === 'image'
            ? { ...project.media, alt: alt ?? project.media.alt }
            : { ...project.media, ...slip };
    return {
        ...project,
        ...text,
        link: project.link && { ...project.link, label: link ?? project.link.label },
        media,
    };
}

const content = {
    en: { profile, proof, projects, experience, skills },
    es: {
        profile: { ...profile, ...profileEs },
        proof: proofEs,
        projects: projects.map(localizeProject),
        experience: experienceEs,
        skills: skills.map((skill) => ({ ...skill, group: skillGroupsEs[skill.group] ?? skill.group })),
    },
};

export function getContent(locale: Locale) {
    return content[locale] ?? content.en;
}

export function getProject(slug: string, locale: Locale) {
    return getContent(locale).projects.find((project) => project.slug === slug);
}
