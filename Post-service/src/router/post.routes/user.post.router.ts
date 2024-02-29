
import express from "express";
import {userPostController} from '../../libs/controller'
export default (dependencies: any) => {
  const router = express();
  const {findJobDetailsController}= userPostController(dependencies)

  router.get('/job-details/:id',findJobDetailsController)



  return router
};
