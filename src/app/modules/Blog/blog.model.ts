import { Schema, model } from 'mongoose'
import { TBlog } from './blog.interface'

const blogSchema = new Schema<TBlog>({
  userId: {
    type: Number,
    required: true,
  },
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
})

const Blog = model<TBlog>('Blog', blogSchema)

export default Blog
