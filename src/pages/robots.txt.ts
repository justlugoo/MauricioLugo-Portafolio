import type { APIRoute } from "astro"
import config from "@data/config.json"

/** Indica a los rastreadores que pueden leer todo el sitio y dónde está el mapa. */
export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /

Sitemap: ${config.site.url}/sitemap.xml
`
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } })
}
