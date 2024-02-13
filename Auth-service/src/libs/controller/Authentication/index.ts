import create_user_controller from './create.user.controller'
import user_login_controler from './user.login.controller'
import verify_otp_controller from './verifyOTP.controller'
import create_recruiter_controller from './create.recruiter.controller'
import recruiter_login_controller from './recruiter.login.controller'
import verify_recruiter_otp_controller from './verifyOTP.recruiter.controller'
import user_logout_controller from './user.logout.controller'
import admin_login_controller from './admin.login.controller'
import admin_logout_controller from './admin.logout.controller'
import recruiter_logout_controller from './recruiter.logout.controller'

export default (dependencies:any)=>{
    return{
        createUserController:create_user_controller(dependencies),
        userLoginController:user_login_controler(dependencies),
        verifyOTPController:verify_otp_controller(dependencies),
        createRecruiterController:create_recruiter_controller(dependencies),
        recruiterLoginController:recruiter_login_controller(dependencies),
        verifyRecruiterOTPController:verify_recruiter_otp_controller(dependencies),
        userLogoutController:user_logout_controller(dependencies),
        adminLoginController:admin_login_controller(dependencies),
        adminLogoutController:admin_logout_controller(dependencies),
        recruiterLogoutController:recruiter_logout_controller(dependencies)
    }
}