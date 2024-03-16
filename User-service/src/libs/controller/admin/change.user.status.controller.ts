import { Response,Request} from 'express'
import {userStatusChangeProducer} from '../../../events/userStatusChangeProducer'

export default (dependencies:any)=> {
    const {useCase:{change_userStatus_useCase}}= dependencies

    const changeUserStatusController =async(req:Request,res:Response)=> {

        const {id,status} = req.body.formData
        const response = await change_userStatus_useCase(dependencies).executeFunction(id,status)
        // console.log('response in contr');
        // console.log(response);
        

        if(response?.status){
            await userStatusChangeProducer({id,status},'statusTopic','changeUserStatus')
            res.status(200).json({status:response?.status,users:response?.users,message:response?.message})
        }else{
            res.status(500).json({status:response?.status,message:response?.message})

        }
    }
    return changeUserStatusController
}