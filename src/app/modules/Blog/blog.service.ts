import Comment from '../comment/comment.model'
import { TBlog } from './blog.interface'
import Blog from './blog.model'

// crate blog
const createBlogIntoDB = async (data: TBlog) => {
  const blog = await Blog.create(data)
  return blog
}

const getsBlogFromDB = async () => {
  const blog = await Blog.find()
  return blog
}

const getSingleBlogFromDB = async (id: string) => {
  const blog = await Blog.findOne({ id: Number(id) })
  return blog
}

const updateBlogFromDB = async (id: number, data: TBlog) => {
  const blog = await Blog.findByIdAndUpdate(id, data, { new: true })
  return blog
}

const deleteBlogFromDB = async (id: number) => {
  const blog = await Blog.findByIdAndDelete(id)
  return blog
}

const getsCommentForBlogFromDB = async (blogId: string) => {
  const comment = await Comment.find({ blogId: blogId }).exec()
  return comment
}

export const BlogServices = {
  createBlogIntoDB,
  getsBlogFromDB,
  getSingleBlogFromDB,
  updateBlogFromDB,
  deleteBlogFromDB,
  getsCommentForBlogFromDB,
}
