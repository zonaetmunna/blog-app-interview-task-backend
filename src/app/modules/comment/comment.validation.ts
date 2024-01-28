import { z } from 'zod'

export const createCommentValidationSchema = z.object({
  body: z.object({
    blogId: z.number({
      required_error: 'Blog Id is required',
    }),
    id: z.number({
      required_error: 'Id is required',
    }),
    name: z.string({
      required_error: 'Name is required',
    }),
    email: z.string({
      required_error: 'Email is required',
    }),
    body: z.string({
      required_error: 'Body is required',
    }),
  }),
})

export const updateCommentValidationSchema = z.object({
  body: z.object({
    blogId: z.number().optional(),
    id: z.number().optional(),
    name: z.string().optional(),
    email: z.string().optional(),
    body: z.string().optional(),
  }),
})

export const CommentValidationSchema = {
  createCommentValidationSchema,
  updateCommentValidationSchema,
}
