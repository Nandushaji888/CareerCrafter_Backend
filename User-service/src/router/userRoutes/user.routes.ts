import express from "express";



import { userController } from "../../libs/controller";
import upload from "../../utils/multer/multer";

export default (dependencies: any) => {
  const router = express();
  const { userUpdateController,getuserDataController } = userController(dependencies);
  router.get('/:id',getuserDataController)
  router.post('/update-user',upload.single("file"), userUpdateController)



  return router
};
