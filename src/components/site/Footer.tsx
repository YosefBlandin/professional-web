import { useTranslations } from 'next-intl';
import { profile } from '@/content/profile';

export function Footer() {
    const t = useTranslations('footer');
    return (
        <footer className="site-footer">
            <div className="wrap bar">
                <span>
                    © {new Date().getFullYear()} {profile.name}
                </span>
                <nav aria-label="Footer">
                    <a href={profile.links.linkedin} target="_blank" rel="noopener">
                        LinkedIn
                    </a>
                    <a href={profile.links.github} target="_blank" rel="noopener">
                        GitHub
                    </a>
                    <a href={profile.links.upwork} target="_blank" rel="noopener">
                        Upwork
                    </a>
                    <a href="#top">{t('backToTop')} ↑</a>
                </nav>
            </div>
        </footer>
    );
}
