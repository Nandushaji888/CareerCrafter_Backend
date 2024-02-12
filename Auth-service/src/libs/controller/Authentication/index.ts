import create_user_controller from './create.user.controller'
import user_login_controler from './user.login.controller'
import verify_otp_controller from './verifyOTP.controller'

export default (dependencies:any)=>{
    return{
        createUserController:create_user_controller(dependencies),
        userLoginController:user_login_controler(dependencies),
        verifyOTPController:verify_otp_controller(dependencies)
    }
}