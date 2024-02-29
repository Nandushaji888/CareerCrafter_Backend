
import express from "express";
import {adminPostController, userPostController} from '../../libs/controller'
export default (dependencies: any) => {
  const router = express();
  const {pendingPostCountController}= adminPostController(dependencies)
  const {findJobDetailsController}= userPostController(dependencies)
  
  router.get('/pending-post-count',pendingPostCountController)

  router.get('/job-details/:id',findJobDetailsController)



  return router
};
