import pening_post_count_controller from './pending.post.count.controller'
import post_status_change_controller from './postStatusChangeController'
export default (dependencies:any)=> {
    return {
        pendingPostCountController:pening_post_count_controller(dependencies),
        postStatusChangeController:post_status_change_controller(dependencies)
    }
}