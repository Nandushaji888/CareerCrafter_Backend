import recruiterPostRouter from './post.routes/recruiter.post.router'

import express from 'express'

export const routes = (dependencies:any)=> {
    const routes = express.Router()

    routes.use('/post/recruiter',recruiterPostRouter(dependencies))
  
    return routes
}