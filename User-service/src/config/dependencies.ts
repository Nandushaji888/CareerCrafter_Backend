import { postRepository, userRepository } from "../libs/app/repository";
import {
  updateUser_useCase,
  createPostUseCase,
  createUserUsecase,
  get_All_Posts_useCase,
  get_userData_useCase,
  get_all_users_usecase
} from "../libs/usecase";

const useCase: any = {
  updateUser_useCase,
  get_All_Posts_useCase,
  get_userData_useCase,
  get_all_users_usecase
};

const repository: any = {
  userRepository,
  postRepository,
};

const consumeUsecase: any = {
  createUserUsecase,
  createPostUseCase,
};

export default {
  repository,
  useCase,
  consumeUsecase,
};
