import express from "express";
import {userController} from '../../lib/controller'
export default (dependencies: any) => {

    const router = express()
    const {applicationSendController} = userController(dependencies)

    router.post('/create-application',applicationSendController)
    return router
};
