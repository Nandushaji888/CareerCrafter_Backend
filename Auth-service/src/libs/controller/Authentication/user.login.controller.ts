import { Request, Response } from "express";

export default (dependencies: any) => {
    const {
        useCase: { userLogin_useCase },
      } = dependencies;

   
      
  const loginUserController = async (req: Request, res: Response) => {
    const { email, password } = req.body
  
    
    const response = await userLogin_useCase(dependencies).executeFunction(
      email,
      password
    );


    if (!response?.status) {
      res.json({status:false,message:response.message});
    }else{
      console.log(response.user);
      
      res.json({status:true,user:response.user})
    }
  };
  return loginUserController;
};
