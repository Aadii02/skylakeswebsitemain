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
    path: '/mission',
    outFile: 'mission.html',
    title: 'Our Mission — SkyLakes Aerospace',
    description:
      "Building India's first reusable small-lift rocket. Why SkyLakes exists, how we build — propulsion, avionics, simulation — the SKYLX-S/M/H family, and the roadmap to sub-₹40Cr LEO access.",
  },
  {
    path: '/vehicles',
    outFile: 'vehicles.html',
    title: 'SKYLX Launch Vehicles — SkyLakes Aerospace',
    description:
      'A family of three fully reusable launch vehicles — SKYLX-S, SKYLX-M and SKYLX-H — serving the complete commercial launch market.',
  },
  {
    path: '/products',
    outFile: 'products.html',
    title: 'Trainer-1 Model Rocket Kit — SkyLakes Aerospace',
    description:
      'Trainer-1: a 30 cm, six-part model rocket kit on an 18 mm motor mount, about 310 m on a C6. Full parts manifest, specification, build sequence, and components and spares.',
  },
  {
    path: '/tools',
    outFile: 'tools.html',
    title: 'Engineering Tools — SkyLakes Aerospace',
    description:
      'Interactive engineering tools built inside SkyLakes to design our launch vehicles — propulsion, trajectory, structures and thermal analysis, open for anyone to explore.',
  },
  {
    path: '/about',
    outFile: 'about.html',
    title: 'About Us — SkyLakes Aerospace',
    description:
      'SkyLakes Aerospace is a pre-seed Indian launch vehicle company building dedicated small-satellite access to orbit for under ₹40 crore — meet the founders and the story behind SKYLX.',
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
