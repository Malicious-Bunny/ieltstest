export const dynamic = "force-static";

export async function GET() {
  const robots = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://your-domain.com/sitemap.xml

# Crawl delay (optional)
Crawl-delay: 1

# Block specific paths if needed
# Disallow: /private/
# Disallow: /admin/

# Allow major search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
