
import express from "express";

import {recruiterPostController} from '../../libs/controller'
export default (dependencies: any) => {
  const router = express();
  const { createJobPostController } = recruiterPostController(dependencies);
  router.post('/create-job-post',createJobPostController)



  return router
};
