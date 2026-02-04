import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
    }),
});

const posts = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.string(),
        category: z.string().optional(),
        description: z.string().optional(),
        tags: z.array(z.string()).optional(),
    }),
});

export const collections = {
    "pages": pages,
    "posts": posts,
};
