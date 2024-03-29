import express from "express";

import {profileController} from '../../libs/controller'
export default (dependencies: any) => {
  const router = express();
  const {adminLoginController,adminLogoutController} = profileController(dependencies);
  router.post('/login',adminLoginController)
  router.post('/logout',adminLogoutController)



  return router
};

