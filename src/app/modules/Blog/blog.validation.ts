import { z } from 'zod'

const createBlogValidationSchema = z.object({
  body: z.object({
    userId: z.number({
      required_error: 'User Id is required',
    }),
    id: z.number({
      required_error: 'Id is required',
    }),
    title: z.string({
      required_error: 'Title is required',
    }),
    body: z.string({
      required_error: 'Body is required',
    }),
  }),
})

const updateBlogValidationSchema = z.object({
  body: z.object({
    userId: z.number().optional(),
    id: z.number().optional(),
    title: z.string().optional(),
    body: z.string().optional(),
  }),
})

export const BlogValidationSchema = {
  createBlogValidationSchema,
  updateBlogValidationSchema,
}
