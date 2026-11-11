import type { APIRoute } from "astro"
import config from "@data/config.json"

/** Mapa del sitio para buscadores. Se genera con la URL de `data/config.json`. */
export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10)
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${config.site.url}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } })
}
