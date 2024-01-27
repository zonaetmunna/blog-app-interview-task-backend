import { TComment } from './comment.interface'
import Comment from './comment.model'

// crate comment service
const createCommentIntoDB = async (payload: TComment) => {
  const comment = await Comment.create(payload)
  return comment
}

// gets comment service
const getsCommentFromDB = async (blogId: string) => {
  const comment = await Comment.find({ blogId: Number(blogId) })
  return comment
}

const updateCommentIntoDB = async (id: string, payload: TComment) => {
  const comment = await Comment.findByIdAndUpdate(id, payload, {
    new: true,
  })
  return comment
}

const deleteCommentFromDB = async (id: number) => {
  const comment = await Comment.findByIdAndDelete(id)
  return comment
}

export const CommentServices = {
  createCommentIntoDB,
  updateCommentIntoDB,
  deleteCommentFromDB,
  getsCommentFromDB,
}
