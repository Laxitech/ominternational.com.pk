// Placeholder: Static robots.txt (force-static)
export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: '',
  };
}
