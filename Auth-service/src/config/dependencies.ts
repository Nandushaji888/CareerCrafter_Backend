import { authenticationRepository } from "../libs/app/repository";

import {
  addUser_useCases,
  userLogin_useCase,
  verifyOTP_useCase,
  addRecruiter_useCases,
  recruiterLogin_useCase,
  recruiter_verifyOTP_useCase,
  adminLogin_useCase
} from "../libs/usecases";

const useCase: any = {
  addUser_useCases,
  userLogin_useCase,
  verifyOTP_useCase,
  addRecruiter_useCases,
  recruiterLogin_useCase,
  recruiter_verifyOTP_useCase,
  adminLogin_useCase
};
const repository: any = {
  authenticationRepository,
};

export default {
  useCase,
  repository,
};
