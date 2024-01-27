import { Schema, model } from 'mongoose'
import { TComment } from './comment.interface'

const commentSchema = new Schema<TComment>({
  blogId: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
})

const Comment = model<TComment>('Comment', commentSchema)

export default Comment
