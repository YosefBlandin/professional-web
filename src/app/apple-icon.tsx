import { ImageResponse } from 'next/og';

// Home-screen icon, rendered once at build time.
export const dynamic = 'force-static';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    background: '#14213d',
                    color: '#f6f5f2',
                    fontSize: 96,
                    fontFamily: 'serif',
                    letterSpacing: -2,
                }}
            >
                Y<span style={{ color: '#e5aea9', fontStyle: 'italic' }}>B</span>
            </div>
        ),
        size,
    );
}
