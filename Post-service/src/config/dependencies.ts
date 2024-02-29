import { postRepository } from "../libs/app/repository";

import {
createPost_useCase,
findJobDetailsuseCase,
pending_post_count_usecase
} from "../libs/usecase";

const useCase: any = {
createPost_useCase,
findJobDetailsuseCase,
pending_post_count_usecase
};
const repository: any = {
  postRepository,
};

export default {
  useCase,
  repository,
};
