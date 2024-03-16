import express from "express";



import { userController } from "../../libs/controller";
import upload from "../../utils/multer/multer";
import { verifyUser } from "../../utils/jwt/verifyToken";

export default (dependencies: any) => {
  const router = express();
  const { userUpdateController,getuserDataController } = userController(dependencies);
  router.get('/:id',verifyUser,getuserDataController)
  router.post('/update-user',verifyUser,upload.single("file"), userUpdateController)
  




  return router
};
