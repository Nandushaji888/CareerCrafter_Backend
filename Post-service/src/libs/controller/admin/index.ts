import pening_post_count_controller from './pending.post.count.controller'
export default (dependencies:any)=> {
    return {
        pendingPostCountController:pening_post_count_controller(dependencies)
    }
}