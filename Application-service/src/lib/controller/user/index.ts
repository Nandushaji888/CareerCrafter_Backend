import application_send_controller from './application.send.conroller'

export default(dependencies:any)=> {
    return {
        applicationSendController :application_send_controller(dependencies)
    }
} 