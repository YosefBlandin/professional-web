import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const truncateWithEllipsis = (
    input: string,
    maxLength?: number
): string => {
    if (typeof input !== 'string') {
        // Handle unexpected input gracefully
        return '';
    }

    if (input.length <= (maxLength || 30)) {
        return input;
    }

    // If the string is longer than 30 characters, return its first 30 characters
    return input.slice(0, maxLength || 30) + '...';
};
