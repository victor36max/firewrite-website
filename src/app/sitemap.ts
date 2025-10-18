import { client } from "@/sanity/lib/client";
import { SITE_MAP_QUERY } from "@/sanity/lib/queries";
import { SITE_MAP_QUERYResult } from "@/sanity/types";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let posts: SITE_MAP_QUERYResult = [];

  try {
    posts = await client.fetch(
      SITE_MAP_QUERY,
      {},
      {
        cache: "force-cache",
        next: {
          revalidate: 60 * 60 * 24, // 24 hours
        },
      }
    );
  } catch (error) {
    console.error(error);
    posts = [];
  }

  console.log(`disable ${posts.length} posts sitemap for now until live`);

  return [
    {
      url: "https://firewrite.app",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // ...posts.map((post) => ({
    //   url: `https://firewrite.app/blog/${post.slug.current}`,
    //   lastModified: new Date(post._updatedAt),
    //   changeFrequency: "monthly" as const,
    //   priority: 1,
    // })),
  ];
}
