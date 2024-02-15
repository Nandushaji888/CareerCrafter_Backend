import create_post_controller from './post.job.controller'
export default (dependencies:any)=> {
    return {
        createJobPostController:create_post_controller(dependencies)
    }
}