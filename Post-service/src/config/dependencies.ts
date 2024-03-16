import { postRepository } from "../libs/app/repository";

import {
createPost_useCase,
findJobDetailsuseCase,
pending_post_count_usecase,
poststatus_change_usecase,
get_All_Posts_useCase,
recruiter_list_jobs
} from "../libs/usecase";

const useCase: any = {
createPost_useCase,
findJobDetailsuseCase,
pending_post_count_usecase,
poststatus_change_usecase,
get_All_Posts_useCase,
recruiter_list_jobs
};
const repository: any = {
  postRepository,
};

export default {
  useCase,
  repository,
};
