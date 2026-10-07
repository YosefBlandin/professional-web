import { Inter_Tight, JetBrains_Mono, Source_Serif_4 } from 'next/font/google';

const sourceSerif = Source_Serif_4({
    variable: '--font-source-serif',
    subsets: ['latin'],
    style: ['normal', 'italic'],
    axes: ['opsz'],
});

const interTight = Inter_Tight({
    variable: '--font-inter-tight',
    subsets: ['latin'],
    weight: ['400', '500', '600'],
});

const jetBrainsMono = JetBrains_Mono({
    variable: '--font-jetbrains-mono',
    subsets: ['latin'],
    weight: ['400', '500', '600'],
});

export const fontVariables = `${sourceSerif.variable} ${interTight.variable} ${jetBrainsMono.variable}`;
