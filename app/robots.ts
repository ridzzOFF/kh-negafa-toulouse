import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://kh-negafa-toulouse-2.vercel.app/sitemap.xml',
  };
}
