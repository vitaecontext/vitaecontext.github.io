import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const playbooksCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/playbooks" }),
  schema: z.object({
    title: z.string(),
    platform: z.string().optional(),
    id: z.string().optional(),
    objective: z.string().optional(),
    status: z.string().optional(),
    published: z.string().optional(),
    last_updated: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  playbooks: playbooksCollection,
};
