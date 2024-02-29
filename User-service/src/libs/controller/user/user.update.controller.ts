import { Request, Response } from "express";

export default (dependencies: any) => {
  const {
    useCase: { updateUser_useCase },
  } = dependencies;

  const updateUserController = async (req: Request, res: Response) => {
    const {
      name,
      email,
      phone,
      aboutYou,
      dateOfBirth,
      qualification,
      skills,
      profilePic,
    } = req?.body?.formData;
    const data = {
      name: name,
      email: email,
      phone: phone,
      aboutYou: aboutYou,
      dateOfBirth: dateOfBirth,
      qualification: qualification,
      skills: skills,
      profilePic: profilePic,
      resume: req?.file?.filename,
    };
    console.log("data");
    console.log(data);

    const response = await updateUser_useCase(dependencies)(data);

    console.log(response);
    if(response.status){
        res.status(200).json({status:response?.status, user:response?.user,message:response?.message})
    }else{
        res.json({status:response?.status,message:response?.message})
    }
    
  };
  return updateUserController;
};
