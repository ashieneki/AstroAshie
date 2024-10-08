import { z, defineCollection } from "astro:content";

const postCollection = defineCollection({
  schema: z.object({
    draft: z.boolean().optional(),
    title: z.string(),
    createdAt: z.date()
  })
})

const pageCollection = defineCollection({
  schema: z.object({
    draft: z.boolean().optional(),
    title: z.string(),
    showMenu: z.boolean().optional(),
    menuTitle: z.string().optional(),
    menuOrder: z.number().optional()
  })
})

const demoCollection = defineCollection({
  schema: z.object({
    draft: z.boolean().optional(),
    title: z.string(),
    artist: z.string(),
    videoId: z.string(),
    order: z.number(),
    type: z.enum(['utau-tandoku', 'mycoeiroink'])
  })
})

export const collections = {
  "posts": postCollection,
  "pages": pageCollection,
  "demos": demoCollection
}
