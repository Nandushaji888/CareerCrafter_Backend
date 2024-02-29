import { Request,Response } from "express";

export default (dependencies:any)=> {
    const {
        useCase:{get_All_Posts_useCase}
    }=dependencies
    const getAllPosts =async(req:Request,res:Response)=> {
        try {
            const response = await get_All_Posts_useCase(dependencies).executeFunction()
            // console.log('response');
            // console.log(response);
            
            if(response.status){
                res.status(200).json({status:response?.status,postDatas:response?.postDatas})
            }else{
                res.json({status:response?.status,message:response?.message})
            }
        } catch (error) {
            console.log(error);
            
        }
    }
    return getAllPosts
}