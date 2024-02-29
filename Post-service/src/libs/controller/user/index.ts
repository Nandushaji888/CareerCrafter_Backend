import find_job_controller from './find.job.details.controller'

export default (dependencies:any)=> {
    return {
        findJobDetailsController:find_job_controller(dependencies)
    }
}