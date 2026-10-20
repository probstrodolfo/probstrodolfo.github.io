import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const markdownCollection = (base: string) =>
  defineCollection({
    loader: glob({ base, pattern: "**/*.md" }),
  });

export const collections = {
  settings: markdownCollection("./src/content/settings"),
  pages: markdownCollection("./src/content/pages"),
  people: markdownCollection("./src/content/people"),
  research: markdownCollection("./src/content/research"),
  publications: markdownCollection("./src/content/publications"),
  manuscripts: markdownCollection("./src/content/manuscripts"),
  news: markdownCollection("./src/content/news"),
};
