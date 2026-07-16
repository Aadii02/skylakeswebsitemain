import blogPosts from './blogPosts.js';

export const SITE_URL = 'https://skylakes.space';
export const SITE_NAME = 'SkyLakes Aerospace';
export const DEFAULT_OG_IMAGE = '/og.jpg';

const staticRoutes = [
  {
    path: '/',
    outFile: 'index.html',
    title: 'SkyLakes Aerospace — Reusable Launch Vehicles | SKYLX',
    description:
      "Revolutionizing India's space industry with reusable rockets, cost-effective launches, and cutting-edge aerospace innovation.",
  },
  {
    path: '/vehicles',
    outFile: 'vehicles.html',
    title: 'SKYLX Launch Vehicles — SkyLakes Aerospace',
    description:
      'A family of three fully reusable launch vehicles — SKYLX-S, SKYLX-M and SKYLX-H — serving the complete commercial launch market.',
  },
  {
    path: '/tools',
    outFile: 'tools.html',
    title: 'Engineering Tools — SkyLakes Aerospace',
    description:
      'Interactive engineering tools built inside SkyLakes to design our launch vehicles — propulsion, trajectory, structures and thermal analysis, open for anyone to explore.',
  },
  {
    path: '/blog',
    outFile: 'blog.html',
    title: 'Blog — SkyLakes Aerospace',
    description:
      'Engineering notes from SkyLakes Aerospace on reusable launch vehicles and the economics of access to orbit.',
  },
];

const blogRoutes = blogPosts.map((post) => ({
  path: `/blog/${post.slug}`,
  outFile: `blog/${post.slug}.html`,
  title: `${post.title} — SkyLakes Aerospace`,
  description: post.excerpt,
  lastmod: post.date,
}));

export const routes = [...staticRoutes, ...blogRoutes];

export function getRouteMeta(pathname) {
  const clean = pathname.replace(/\/+$/, '') || '/';
  return routes.find((route) => route.path === clean) || null;
}
