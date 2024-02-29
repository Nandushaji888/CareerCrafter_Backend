import userRouter from './userRoutes/user.routes'
import postRouter from './postRoutes/post.router'

import express from 'express'
import adminRoutes from './adminRoutes.ts/adminRoutes'

export const routes = (dependencies:any)=> {
    const routes = express.Router()

    routes.use('/user',userRouter(dependencies))
    routes.use('/post',postRouter(dependencies))
    routes.use('/admin',adminRoutes(dependencies))

    return routes
}