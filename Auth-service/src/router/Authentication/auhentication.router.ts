import express from "express";

import {profileController} from '../../libs/controller'
export default (dependencies: any) => {
  const router = express();
  const { createUserController,userLoginController,verifyOTPController,userLogoutController } = profileController(dependencies);
  router.post('/signup',createUserController)
  router.post('/login',userLoginController)
  router.post('/verify-otp',verifyOTPController)
  router.post('/logout',userLogoutController)


  return router
};
