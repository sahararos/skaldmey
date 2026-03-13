import { defineField, defineType } from "sanity";

export const genre = defineType({
  name: "genre",
  title: "Genre",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: [
          { title: "SciFi", value: "planet" },
          { title: "Fantasy", value: "sword" },
          { title: "Horror", value: "ghost" },
          { title: "Short stories", value: "coffee" },
          { title: "Thriller", value: "lightning" },
          { title: "Historical Fiction", value: "crown" },
          { title: "Romance", value: "heart" },
          { title: "Crime", value: "search" },
          { title: "Erotic", value: "heartlock" },
          { title: "Folklore", value: "runes" },
          { title: "Poetry", value: "quill" },
          { title: "Drama", value: "masks" },
          { title: "Young Adult", value: "mobile" },
          { title: "Non Fiction", value: "studentcap" },
          { title: "History", value: "hourglass" },
          { title: "Fiction", value: "books" },
          { title: "Children's", value: "bear" },
          { title: "Self help", value: "bullseye" },
          { title: "Biography", value: "user" },
          { title: "Classic Literature", value: "fountainpen" },
          { title: "Spiritual", value: "flower" },
          { title: "Sports", value: "ball" },
        ],
        layout: "dropdown",
      },
    }),
  ],
});