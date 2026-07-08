import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getRouteMeta, SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '../data/routeMeta.js';

function setNamedMeta(name, content) {
  let el = document.head.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setPropertyMeta(property, content) {
  let el = document.head.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

// Keeps the document head in sync with the active route during client-side
// navigation; crawlers get the same tags baked in by scripts/prerender.mjs.
export default function useDocumentMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = getRouteMeta(pathname);
    if (!meta) return;

    const url = SITE_URL + (meta.path === '/' ? '/' : meta.path);
    const image = SITE_URL + DEFAULT_OG_IMAGE;

    document.title = meta.title;
    setNamedMeta('description', meta.description);
    setCanonical(url);
    setPropertyMeta('og:title', meta.title);
    setPropertyMeta('og:description', meta.description);
    setPropertyMeta('og:url', url);
    setPropertyMeta('og:image', image);
    setPropertyMeta('og:type', meta.path.startsWith('/blog/') ? 'article' : 'website');
    setPropertyMeta('og:site_name', SITE_NAME);
    setNamedMeta('twitter:card', 'summary_large_image');
    setNamedMeta('twitter:title', meta.title);
    setNamedMeta('twitter:description', meta.description);
    setNamedMeta('twitter:image', image);
  }, [pathname]);
}
