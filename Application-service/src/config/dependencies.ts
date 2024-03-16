import { applicationRespository } from "../lib/app/repository";
import {application_send_usecase,
  get_job_applications_usecase,
  get_application_details_usecase,
  change_application_status
} from '../lib/usecase'

const useCase:any ={
    application_send_usecase,
    get_job_applications_usecase,
    get_application_details_usecase,
    change_application_status
} 

const repository:any = {
  applicationRespository,
};
export default {
  repository,
  useCase
};
