import { z, defineCollection } from 'astro:content';

const playbooksCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    platform: z.string().optional(),
    id: z.string().optional(),
    objective: z.string().optional(),
    status: z.string().optional(),
    last_updated: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'playbooks': playbooksCollection,
};
