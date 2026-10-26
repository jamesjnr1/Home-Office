import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PAGE_META, SITE_URL } from '@/data/seo.mjs';

function setTag(selector: string, create: () => HTMLElement, attr: string, value: string) {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

const meta = (key: string, name: string) => () => {
  const el = document.createElement('meta');
  el.setAttribute(key, name);
  return el;
};

// Keeps the title, description, canonical URL and link-preview tags in
// step with the current route (the same values scripts/prerender.mjs
// writes into each page's HTML at build time).
export function usePageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.replace(/\/+$/, '') || '/';
    const page = PAGE_META[path];
    if (!page) return;
    const url = `${SITE_URL}${path === '/' ? '/' : path}`;
    document.title = page.title;
    setTag('meta[name="description"]', meta('name', 'description'), 'content', page.description);
    setTag('link[rel="canonical"]', () => Object.assign(document.createElement('link'), { rel: 'canonical' }), 'href', url);
    setTag('meta[property="og:title"]', meta('property', 'og:title'), 'content', page.title);
    setTag('meta[property="og:description"]', meta('property', 'og:description'), 'content', page.description);
    setTag('meta[property="og:url"]', meta('property', 'og:url'), 'content', url);
  }, [pathname]);
}
