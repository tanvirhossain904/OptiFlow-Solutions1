// app/api/sitemap/route.ts
import { NextResponse } from "next/server";

// ✅ Base URL
const BASE_URL = "https://easy-soft-drab.vercel.app";

type Product = {
  name: string;
  path: string;
  soon: boolean;
};

const PRODUCTS: Product[] = [
  { name: "EasyAnaly AI", path: "https://p1.easy-soft.co/", soon: false },
  { name: "EasyClinic", path: "https://p2.easy-soft.co/", soon: false },
  { name: "EasyManager", path: "https://p3.easy-soft.co/", soon: false },
  { name: "EasyPOS", path: "https://p4.easy-soft.co/", soon: false },
  { name: "EasyHRM", path: "https://p5.easy-soft.co/", soon: false },
  { name: "EasyLedger", path: "/easylead", soon: true },
  { name: "EasyAccounts", path: "/easyaccounts", soon: true },
  { name: "EasyInventory", path: "/easyinventory", soon: true },
  { name: "EasyResturant", path: "/easyresturant", soon: true },
  { name: "EasyLMS", path: "/easylms", soon: true },
];

type Page = {
  url: string;
  lastmod: string;
};

// Static pages
const staticPages: Page[] = [
  { url: "/", lastmod: "2026-03-16" },
  { url: "/products", lastmod: "2026-03-16" },
  { url: "/services", lastmod: "2026-03-16" },
  { url: "/about", lastmod: "2026-03-16" },
];

export async function GET() {
  const today = new Date().toISOString();

  // Static pages XML
  const staticXml = staticPages
    .map(
      (page) => `
<url>
  <loc>${BASE_URL}${page.url}</loc>
  <lastmod>${page.lastmod}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>${page.url === "/" ? 1.0 : 0.8}</priority>
</url>`
    )
    .join("");

  // Products XML
  const productsXml = PRODUCTS.map((product) => {
    const loc = product.path.startsWith("http")
      ? product.path
      : `${BASE_URL}${product.path}`;

    return `
<url>
  <loc>${loc}</loc>
  <lastmod>${today}</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>`;
  }).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticXml}
${productsXml}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}