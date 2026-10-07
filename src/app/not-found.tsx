import Link from 'next/link';
import { fontVariables } from './fonts';
import './globals.css';

// Fallback for requests that never reach a locale (the middleware skips them), so it needs its own <html>.
export default function GlobalNotFound() {
    return (
        <html lang="en" className={fontVariables}>
            <body>
                <section className="section">
                    <div className="wrap not-found">
                        <p className="label">404</p>
                        <h1>This page doesn’t exist.</h1>
                        <Link className="btn btn-primary" href="/">
                            Go to the home page
                        </Link>
                    </div>
                </section>
            </body>
        </html>
    );
}
