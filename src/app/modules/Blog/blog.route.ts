import express from 'express'
import { BlogController } from './blog.controller'
import validateRequest from '../../middleware/validateRequest'
import { BlogValidationSchema } from './blog.validation'
const router = express.Router()

router.post(
  '/',
  validateRequest(BlogValidationSchema.createBlogValidationSchema),
  BlogController.createBlog,
)

router.get('/', BlogController.getAllBlogs)

router.get('/:id', BlogController.getSingleBlog)

router.patch(
  '/:id',
  validateRequest(BlogValidationSchema.updateBlogValidationSchema),
  BlogController.updateBlog,
)

router.delete('/:id', BlogController.deleteBlog)

router.get('/:blogId/comments', BlogController.getsCommentForBlog)

export const BlogRoute = router
