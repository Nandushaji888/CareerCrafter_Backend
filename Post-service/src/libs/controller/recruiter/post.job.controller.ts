
import { Response, Request } from "express";

export default (dependencies: any) => {
  const {
    useCase: { createPost_useCase },
  } = dependencies;

  const createUserController = async (req: Request, res: Response) => {
    const {  } = req.body;

    // console.log(req.body);

    const data = {...req.body.formData}
    console.log(data);
    
    //   name: name,
    //   email: email,
    //   phone: phone,
    //   password: password,
    // };
    // console.log("data", data);

    const response = await createPost_useCase(dependencies).executeFunction(data);
    // console.log(response);

    if (response?.status) {
        res.status(201).json({status:response?.status,message:response?.message})

    } else {
        res.status(400).json({ status: false, message: response?.message });

    }
  };
  return createUserController;
};
