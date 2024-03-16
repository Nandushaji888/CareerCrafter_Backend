import { Response, Request } from "express";

export default (dependencies: any) => {
  const {
    useCase: { application_send_usecase },
  } = dependencies;

  const applicationSendController = async (req: Request, res: Response) => {
    
    const data  = req.body
    // console.log('dataaaaaaaaaaaaa');
    // console.log(data);
    
    const response = await application_send_usecase(
      dependencies
    ).executeFunction(data);

    if (response?.status) {
      res
        .status(201)
        .json({
          status: response?.status,
          applicationData: response?.applicationData,
          message: response?.message,
        });
    }else{
        res.json({status:response?.status,message:response?.message})
    }
  };
  return applicationSendController
};
