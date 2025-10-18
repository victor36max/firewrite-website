import { defineQuery } from "next-sanity";

export const POSTS_QUERY = defineQuery(
  `*[_type == "post" && publishedAt < $publishedBefore]|order(publishedAt desc)[0...$limit]{
    _id,
    featuredImage,
    title,
    slug,
    publishedAt,
  }`
);

export const POST_QUERY = defineQuery(
  `*[_type == "post" && slug.current == $slug][0]`
);

export const SITE_MAP_QUERY = defineQuery(
  `*[_type == "post"] {
    slug,
    _updatedAt
  }`
);
