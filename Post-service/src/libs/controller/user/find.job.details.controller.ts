import {Request,Response} from 'express'

export default(dependencies:any)=> {
    const {
        useCase:{findJobDetailsuseCase}
    }=dependencies

    const findJobDetailsController = async(req:Request,res:Response)=> {
        const id = req.params.id
        const data = await findJobDetailsuseCase(dependencies).executeFunction(id)

        if(data?.status){
            console.log(data.jobData);
            
            res.status(200).json({status:data?.status,jobData:data?.jobData})
        }else{
            res.status(404).json({status:data?.status,message:data?.message})

        }
        
    }
    return findJobDetailsController
}