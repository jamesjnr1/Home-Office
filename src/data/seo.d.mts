export const SITE_URL: string;
export const PAGE_META: Record<string, { title: string; description: string }>;
export const PAGE_CONTENT: Record<string, string>;
export function staticPageHtml(path: string): string;
