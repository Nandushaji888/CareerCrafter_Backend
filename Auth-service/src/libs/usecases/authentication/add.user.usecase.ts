import { hashPassword } from "../../../helper";

interface userData {
  name: string;
  email: string;
  phone:String,
  password: string;
}

export const addUser_useCases = (dependencies: any) => {
  const {
    repository: { authenticationRepository },
  } = dependencies;

  
  const executeFunction = async (data: userData) => {
    try {
      console.log("hereee");

      const userExist = await authenticationRepository?.userEmailExist(
        data?.email
      );
      

      if (userExist) {
        return { status1: true, message: "user already exists" };
      }

      console.log('data',data);
      
      const hashedPassword =await hashPassword(data.password);
      const updatedData = { ...data, password: hashedPassword };
      const addUserData = await authenticationRepository?.createUser(
        updatedData
      );
      if (addUserData.status) {
        return { status: true, user: addUserData };
      } else {
        return { status: false, messag: "error while creating user" };
      }
    } catch (error) {
      return {
        status: false,
        message: "An error occurred during user creation",
      };
    }
  };
  return { executeFunction };
};
