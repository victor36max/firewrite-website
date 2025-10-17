import { Container } from "@/components/container";
import { Typography } from "@/components/typography";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { POST_QUERY } from "@/sanity/lib/queries";
import { Post } from "@/sanity/types";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await client.fetch<Post>(POST_QUERY, { slug: params.slug });
  if (!post) {
    return notFound();
  }

  return (
    <Container className="py-10 md:py-20 space-y-10 md:max-w-screen-md">
      <img
        src={urlFor(post.featuredImage).url()}
        alt={post.title}
        className="w-full aspect-video rounded-md object-cover"
      />
      <Typography size="heading3" className="font-medium" as="h1">
        {post.title}
      </Typography>
      <div className="prose">
        <PortableText value={post.content} />
      </div>
    </Container>
  );
}
