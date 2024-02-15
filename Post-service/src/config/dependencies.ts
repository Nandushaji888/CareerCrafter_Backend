import { postRepository } from "../libs/app/repository";

import {
createPost_useCase
} from "../libs/usecase";

const useCase: any = {
createPost_useCase
};
const repository: any = {
  postRepository,
};

export default {
  useCase,
  repository,
};
