import express from 'express'
import { CommentController } from './comment.controller'
import validateRequest from '../../middleware/validateRequest'
import { CommentValidationSchema } from './comment.validation'
const router = express.Router()

router.post(
  '/',
  validateRequest(CommentValidationSchema.createCommentValidationSchema),
  CommentController.createComment,
)

router.get('/', CommentController.getsComment)

router.patch(
  '/:id',
  validateRequest(CommentValidationSchema.updateCommentValidationSchema),
  CommentController.updateComment,
)

router.delete('/:id', CommentController.deleteComment)

export const CommentRoute = router
