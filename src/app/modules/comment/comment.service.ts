import { TComment } from './comment.interface'
import Comment from './comment.model'

// crate comment service
const createCommentIntoDB = async (payload: TComment) => {
  const comment = await Comment.create(payload)
  return comment
}

// gets comment service
const getsCommentFromDB = async () => {
  const comment = await Comment.find()
  return comment
}

const updateCommentIntoDB = async (id: number, payload: TComment) => {
  const comment = await Comment.findOneAndUpdate({ id: id }, payload, {
    new: true,
  })
  return comment
}

const deleteCommentFromDB = async (id: number) => {
  const comment = await Comment.findOneAndDelete({ id: id })
  return comment
}

export const CommentServices = {
  createCommentIntoDB,
  updateCommentIntoDB,
  deleteCommentFromDB,
  getsCommentFromDB,
}
