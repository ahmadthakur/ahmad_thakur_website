import { defineCollection, z } from "astro:content";

const thoughts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});



export const collections = { thoughts };
