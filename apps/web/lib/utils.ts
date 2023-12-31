import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  // return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
  return `http://localhost:8000${path}`;
}

export function sanitizeDescription(text: string) {
  return text.replace(/[^소개]*/s, '').replace('소개 ', '');
}
