import { defineCollection, z } from 'astro:content';

const work = defineCollection({
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		url: z.string().optional(),
		tags: z.array(z.string()).optional(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image(),
	}),
});

const proyecto = defineCollection({
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		url: z.string().optional(),
		tags: z.array(z.string()).optional(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image(),
	}),
});

export const collections = { work, proyecto };
