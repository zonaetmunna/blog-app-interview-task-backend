import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { BlogServices } from './blog.service'

// create blog
const createBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.createBlogIntoDB(req.body)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog created successfully',
    data: result,
  })
})

// gets blog
const getAllBlogs = catchAsync(async (req, res) => {
  console.log(req.query)
  const result = await BlogServices.getsBlogFromDB()
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog fetched successfully',
    data: result,
  })
})

// get single blog
const getSingleBlog = catchAsync(async (req, res) => {
  const id = req.params.id
  console.log(id)
  const result = await BlogServices.getSingleBlogFromDB(id)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog fetched successfully',
    data: result,
  })
})

// update blog
const updateBlog = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await BlogServices.updateBlogFromDB(Number(id), req.body)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog updated successfully',
    data: result,
  })
})

// delete blog
const deleteBlog = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await BlogServices.deleteBlogFromDB(Number(id))
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog deleted successfully',
    data: result,
  })
})

// gets comments for blog with blogId
const getsCommentForBlog = catchAsync(async (req, res) => {
  const blogId = req.params.blogId
  console.log('🚀 ~ getsCommentForBlog ~ blogId:', blogId)

  const result = await BlogServices.getsCommentForBlogFromDB(blogId as string)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Comment fetched successfully',
    data: result,
  })
})

export const BlogController = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
  getsCommentForBlog,
}
