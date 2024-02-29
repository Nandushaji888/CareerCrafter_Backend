import user_update_controller from './user.update.controller'
import get_userData_controller from './get.userData.controller'

export default(dependencies:any)=> {
    return {
        userUpdateController :user_update_controller(dependencies),
        getuserDataController: get_userData_controller(dependencies),

    }
}