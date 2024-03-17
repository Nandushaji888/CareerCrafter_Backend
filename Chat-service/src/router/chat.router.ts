import express from "express";
import { verifyUser } from "../utils/verifyToken";
import {chatController} from '../libs/controller'



export default (dependencies:any)=> {
    const router = express.Router();

    const {getMessageController} = chatController(dependencies)
    // router.get("/:id",verifyUser, getMessage);
    router.post("/send/:id",verifyUser, getMessageController);
    
    return router
}
