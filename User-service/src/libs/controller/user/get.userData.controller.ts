import {Response,Request} from 'express'

export default(dependencies:any)=> {
    const {useCase:{get_userData_useCase}}=dependencies

    const getUserDataController = async(req:Request,res:Response)=> {
        try {
            const id = req.params.id
            // console.log('reached hereee');
            // console.log(id);
            
            
            const response = await get_userData_useCase(dependencies).executeFunction(id)
            // console.log('response');
            // console.log(response);
            if(response.status){
                res.status(200).json({status:response?.status,user:response?.user})
            }else{
                res.status(404).json({status:response?.status,message:response?.message})
            }

            
        } catch (error) {
            console.log('error in getUserDataController',error);
            
        }
    }
    return getUserDataController
}
