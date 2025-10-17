import Link from "next/link";

import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { Container } from "@/components/container";
import { Typography } from "@/components/typography";
import { urlFor } from "@/sanity/lib/image";

export default async function BlogPage({
  searchParams: { publishedBefore },
}: {
  searchParams: { publishedBefore?: string };
}) {
  const posts = await client.fetch(
    POSTS_QUERY,
    {
      publishedBefore: publishedBefore || new Date().toISOString(),
      limit: 12,
    },
    {
      cache: "force-cache",
      next: {
        revalidate: 60 * 5, // 5 minutes
      },
    }
  );

  return (
    <Container className="py-10 md:py-20 space-y-10">
      <Typography size="heading2" className="font-medium text-center" as="h1">
        Blog
      </Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6">
        {posts.map((post) => (
          <Link
            href={`/blog/${post.slug.current}`}
            key={post._id}
            className="space-y-4"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={urlFor(post.featuredImage).url()}
              alt={post.title}
              className="w-full aspect-square rounded-md object-cover"
            />
            <div className="flex flex-col gap-y-2">
              <Typography size="heading5" className="font-medium">
                {post.title}
              </Typography>
              <Typography size="bodyMedium" className="text-muted-foreground">
                {new Date(post.publishedAt).toLocaleDateString()}
              </Typography>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
