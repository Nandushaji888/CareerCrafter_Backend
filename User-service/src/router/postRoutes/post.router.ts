import express from "express";
import { postController } from "../../libs/controller";


export default (dependencies: any) => {
  const router = express();
  const { getAllPosts } = postController(dependencies);
  router.get('/list-jobs',getAllPosts)
return router
};
