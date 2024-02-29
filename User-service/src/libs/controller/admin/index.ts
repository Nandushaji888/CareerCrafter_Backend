import get_all_users_controller from '../admin/get.all.users.controller'
export default(dependencies:any)=> {
    return {

        getAllusersController:get_all_users_controller(dependencies)

    }
}