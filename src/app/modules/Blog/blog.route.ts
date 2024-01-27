import express from 'express'
import { BlogController } from './blog.controller'
const router = express.Router()

router.post('/', BlogController.createBlog)
router.get('/', BlogController.getAllBlogs)
router.get('/:id', BlogController.getSingleBlog)
router.patch('/:id', BlogController.updateBlog)
router.delete('/:id', BlogController.deleteBlog)
router.get('/:blogId/comments', BlogController.getsCommentForBlog)

export const BlogRoute = router
