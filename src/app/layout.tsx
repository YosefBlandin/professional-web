// The real root layout is app/[locale]/layout.tsx, which sets <html lang>. This one only exists so
// files outside [locale] (sitemap, robots, icons, the global 404) have a layout to sit under.
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return children;
}
