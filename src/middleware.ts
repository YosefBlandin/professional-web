import createIntlMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest } from 'next/server';
import { productionHost } from '@/content/profile';
import { routing } from '@/i18n/routing';

const intlMiddleware = createIntlMiddleware(routing);

export function middleware(request: NextRequest) {
    const host = (request.headers.get('host') ?? '').split(':')[0];

    // One canonical host: www redirects to the apex domain.
    if (host === `www.${productionHost}`) {
        const url = request.nextUrl.clone();
        url.protocol = 'https';
        url.host = productionHost;
        url.port = '';
        return NextResponse.redirect(url, 301);
    }

    const response = intlMiddleware(request);
    // Preview deployments (workers.dev, localhost) must never be indexed.
    if (host !== productionHost) response.headers.set('X-Robots-Tag', 'noindex');
    return response;
}

export const config = {
    // Everything except Next internals, files with an extension, the root-level apple-icon route, and
    // OG images: their URLs always carry the locale (/en/…/opengraph-image) and must not be redirected.
    matcher: ['/((?!_next|_vercel|apple-icon|.*opengraph-image|.*\\..*).*)'],
};
