import express from "express";



import { adminController,userController } from "../../libs/controller";

export default (dependencies: any) => {
  const router = express();
  const { getAllusersController } = adminController(dependencies);
  const{getuserDataController}=userController(dependencies)
  router.get('/get-all-users',getAllusersController)
  router.get('/user/:id',getuserDataController)



  return router
};
