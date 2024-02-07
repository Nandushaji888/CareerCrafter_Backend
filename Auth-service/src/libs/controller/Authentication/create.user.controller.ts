  import { Response, Request } from "express";

export default (dependencies: any) => {
  const {
    useCase: { addUser_useCases },
  } = dependencies;


  
  const createUserController = async (req: Request, res: Response) => {
    const { userName, email, phone, password } =
      req.body
    

    const data = {
      name: userName,
      email: email,
      phone: phone,
      password: password,
    };
   

    const response = await addUser_useCases(dependencies).executeFunction(data);
    console.log(response);

    if (response.status) {
      res.json({
        status: true,
        user: response.user,
        message: "new user created",
      });
    } else if (response.status1) {
      res.json({ status1: true, message: response.message });
    } else {
      console.log(response.message);

      res.json({ status: false, message: response.message });
    }
  };
  return createUserController;
};
