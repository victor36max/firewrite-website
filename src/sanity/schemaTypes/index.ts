import { defineField, defineType, type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Category
    defineType({
      name: "category",
      title: "Category",
      type: "document",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "slug",
          title: "Slug",
          type: "slug",
          options: {
            source: "title",
          },
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    // Author
    defineType({
      name: "author",
      title: "Author",
      type: "document",
      fields: [
        defineField({
          name: "name",
          title: "Name",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "slug",
          title: "Slug",
          type: "slug",
          options: {
            source: "name",
          },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "image",
          title: "Image",
          type: "image",
        }),
        defineField({
          name: "bio",
          title: "Bio",
          type: "text",
        }),
      ],
    }),
    // Post
    defineType({
      name: "post",
      title: "Post",
      type: "document",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "slug",
          title: "Slug",
          type: "slug",
          options: {
            source: "title",
          },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "featuredImage",
          title: "Featured Image",
          type: "image",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "content",
          title: "Content",
          type: "array",
          of: [{ type: "block" }, { type: "image" }],
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "author",
          title: "Author",
          type: "reference",
          to: [{ type: "author" }],
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "tags",
          title: "Tags",
          type: "array",
          of: [{ type: "string" }],
        }),
        defineField({
          name: "categories",
          title: "Categories",
          type: "array",
          of: [{ type: "reference", to: [{ type: "category" }] }],
        }),
        defineField({
          name: "publishedAt",
          type: "datetime",
          initialValue: () => new Date().toISOString(),
          validation: (rule) => rule.required(),
        }),
      ],
    }),
  ],
};
