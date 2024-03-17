import { ObjectId } from "mongoose"


export const get_message_usecase = (dependencies:any)=> {

    const {repository:{chatRepository}} = dependencies

    const executeFunction = async(message:string,receiverId:ObjectId,senderId:ObjectId)=> {
        const response = await chatRepository?.getMessage(senderId,receiverId,message)

        if(response?.status){
            return {status:response?.status,newMessage:response?.newMessage}
        }else{
            return {status:response?.status,message:response?.message}

        }
    }
    return {executeFunction}
}