import authenticationRouter from './Authentication/auhentication.router'

import express from 'express'

export const routes = (dependencies:any)=> {
    const routes = express.Router()

    routes.use('/auth/user',authenticationRouter(dependencies))
    return routes
}