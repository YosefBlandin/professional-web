import { NextResponse, type NextRequest } from 'next/server';
import { productionHost } from '@/content/profile';

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

    const response = NextResponse.next();
    // Preview deployments (workers.dev, localhost) must never be indexed.
    if (host !== productionHost) response.headers.set('X-Robots-Tag', 'noindex');
    return response;
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|.*\\.(?:png|jpg|jpeg|svg|ico|webp|avif|woff2)$).*)'],
};
