import {Request,Response} from 'express'

export default (dependencies:any)=> {
const{useCase:{get_messaged_users_usecase}} = dependencies

const get_messaged_users_controller= async(req:Request,res:Response)=> {
    try {
        
        const userId = req.params.id
        const response = await get_messaged_users_usecase(dependencies).executeFunction(userId)

        if(response?.status) {
  
            
            
            res.status(200).json({messagedUsers:response?.messagedUser})
        }else{
            res.status(response?.code).json({message:response?.message})
        }
    } catch (error) {
        
    }
}
return get_messaged_users_controller
}