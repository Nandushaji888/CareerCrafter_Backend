
import { Response, Request } from "express";
import { postProducer } from "../../../events/postProducer";

export default (dependencies: any) => {
  const {
    useCase: { createPost_useCase },
  } = dependencies;

  const createUserController = async (req: Request, res: Response) => {


    const data = {...req.body.data}
    // console.log('data.questions');
    // console.log(data.questions);
    
    console.log('data in controller');
    console.log(data);
   

    const response = await createPost_useCase(dependencies).executeFunction(data);
    
    if (response?.status) {
      // console.log(response?.user);
      const postData = response?.user
        res.status(201).json({status:response?.status,message:response?.message})

    } else {
        res.status(400).json({ status: false, message: response?.message });

    }
  };
  return createUserController;
};
