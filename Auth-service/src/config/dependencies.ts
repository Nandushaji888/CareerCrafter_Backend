import { authenticationRepository } from "../libs/app/repository";

import {
  addUser_useCases,
  userLogin_useCase,
  verifyOTP_useCase,
  addRecruiter_useCases,
  recruiterLogin_useCase,
  recruiter_verifyOTP_useCase,
  adminLogin_useCase,
  userForgotPassword_useCase,
  userNewPassword_useCase,
  userGoogleAuthuseCase,
  userStatusChangeUsecase,
  protect_route_useCase,
} from "../libs/usecases";

const useCase: any = {
  addUser_useCases,
  userLogin_useCase,
  verifyOTP_useCase,
  addRecruiter_useCases,
  recruiterLogin_useCase,
  recruiter_verifyOTP_useCase,
  adminLogin_useCase,
  userForgotPassword_useCase,
  userNewPassword_useCase,
  userGoogleAuthuseCase,
  protect_route_useCase,
};
const repository: any = {
  authenticationRepository,
};
const consumeUseCase: any = {
  userStatusChangeUsecase,
};

export default {
  useCase,
  repository,
  consumeUseCase,
};
