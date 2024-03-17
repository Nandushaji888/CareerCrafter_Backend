import get_message_controller from './get.message.controller'

export default (dependencies:any)=> {
return {
    getMessageController : get_message_controller(dependencies)
}
}