// app/sitemap.ts
import { MetadataRoute } from "next";

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

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: "2026-03-16",
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: "2026-03-16",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: "2026-03-16",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: "2026-03-16",
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const productPages: MetadataRoute.Sitemap = PRODUCTS.map((product) => ({
    url: product.path.startsWith("http")
      ? product.path
      : `${BASE_URL}${product.path}`,
    lastModified: today,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...productPages];
}