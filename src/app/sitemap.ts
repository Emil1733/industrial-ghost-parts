import { MetadataRoute } from 'next';
import { PARTS_DATABASE } from '@/lib/parts';
import { CATEGORIES } from '@/lib/categories';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://hiddenspares.com';

  const categoryRoutes = Object.keys(CATEGORIES).map((id) => ({
    url: `${baseUrl}/category/${id}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  const partRoutes = Object.keys(PARTS_DATABASE).map((slug) => ({
    url: `${baseUrl}/audit/${slug}`, // Do not encode; slashes should be preserved for catch-all routes
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...categoryRoutes,
    ...partRoutes,
  ];
}
