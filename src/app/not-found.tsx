import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Page not found',
    robots: { index: false },
};

export default function NotFound() {
    return (
        <section className="section" aria-labelledby="nf-title">
            <div className="wrap not-found">
                <p className="label">404</p>
                <h1 id="nf-title">This page doesn’t exist.</h1>
                <p className="lede">The link may be old or mistyped. Here’s where to go instead.</p>
                <div className="cta-row">
                    <Link className="btn btn-primary" href="/#work">
                        See selected work
                    </Link>
                    <Link className="btn btn-ghost" href="/#contact">
                        Get in touch
                    </Link>
                </div>
            </div>
        </section>
    );
}
