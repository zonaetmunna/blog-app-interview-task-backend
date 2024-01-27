import { Router } from 'express'
import { BlogRoute } from '../modules/Blog/blog.route'
import { CommentRoute } from '../modules/comment/comment.route'
const router = Router()

const moduleRoutes = [
  {
    path: '/blog',
    route: BlogRoute,
  },
  {
    path: '/comment',
    route: CommentRoute,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
