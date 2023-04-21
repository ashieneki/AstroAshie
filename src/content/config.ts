import { z, defineCollection } from 'astro:content'

const pageCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    showMenu: z.boolean().optional(),
    menuIcon: z.string().optional(),
    menuOrder: z.number().optional()
  })
})

const postCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    createdAt: z.date(),
    updatedAt: z.date().optional(),
    authorName: z.string().default('AN-P')
  })
})

export const collections = {
  'pages': pageCollection,
  'posts': postCollection
}
