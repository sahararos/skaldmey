import { defineField, defineType } from "sanity";

export const book = defineType({
  name: "book",
  title: "Book",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
    }),
     defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "spineColor",
      title: "Spine Color",
      type: "string",
      description: "Hex color used for the book spine (extracted from cover)",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "pages",
      title: "Pages",
      type: "number",
    }),
    defineField({
      name: "pubdate",
      title: "Publication Year",
      type: "number",
    }),
    defineField({
      name: "genre",
      title: "Genre",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Book Description",
      type: "text",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
  ],
});