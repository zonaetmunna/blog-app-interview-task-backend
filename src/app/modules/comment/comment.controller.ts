import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { CommentServices } from './comment.service'

// create Comment
const createComment = catchAsync(async (req, res) => {
  const result = await CommentServices.createCommentIntoDB(req.body)
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Comment created successfully',
    data: result,
  })
})

// gets comment with blogId
const getsComment = catchAsync(async (req, res) => {
  const result = await CommentServices.getsCommentFromDB()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Comment fetched successfully',
    data: result,
  })
})

// update Comment
const updateComment = catchAsync(async (req, res) => {
  const { id } = req.params
  console.log('🚀 ~ updateComment ~ id:', id)
  const result = await CommentServices.updateCommentIntoDB(Number(id), req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Comment updated successfully',
    data: result,
  })
})

// delete comment
const deleteComment = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await CommentServices.deleteCommentFromDB(Number(id))
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Comment deleted successfully',
    data: result,
  })
})

export const CommentController = {
  createComment,
  updateComment,
  deleteComment,
  getsComment,
}
