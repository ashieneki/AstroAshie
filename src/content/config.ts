import { z, defineCollection } from "astro:content";

const postCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    publishedAt: z.date()
  })
})

const pageCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    showMenu: z.boolean().optional(),
    menuTitle: z.string().optional(),
    menuOrder: z.number().optional()
  })
})

const songCollection = defineCollection({
  schema: z.object({
    draft: z.boolean().optional(),
    title: z.string(),
    artist: z.string(),
    videoId: z.string(),
    order: z.number()
  })
})

export const collections = {
  "posts": postCollection,
  "pages": pageCollection,
  "songs": songCollection
}
