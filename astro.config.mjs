import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * The production domain has not been selected yet.
 *
 * Everything that needs an absolute URL — canonical link, Open Graph, sitemap —
 * stays switched off until PUBLIC_SITE_URL is provided. Nothing is guessed from
 * the company name or the contact email. Set it in `.env` (see `.env.example`)
 * or as a build-time environment variable in Cloudflare Pages.
 */
const rawSite = process.env.PUBLIC_SITE_URL?.trim();
const site = rawSite ? rawSite.replace(/\/+$/, '') : undefined;

if (rawSite && !/^https?:\/\//.test(rawSite)) {
  throw new Error(
    `PUBLIC_SITE_URL must be an absolute URL including the protocol, e.g. https://example.com — received "${rawSite}"`
  );
}

export default defineConfig({
  site,
  outDir: './dist',
  // The sitemap integration requires `site`; it is only added once a domain exists.
  integrations: site ? [sitemap()] : [],
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
