import { comparePassword } from "../../../helper/hashPassword";

export const userLogin_useCase = (dependencies: any) => {
  const {
    repository: { authenticationRepository },
  } = dependencies;

  const executeFunction = async (email: string, password: string) => {
    const response = await authenticationRepository.findUser(email);

    if (!response.status) {
      return { status: false, message: "Email or Password is incorrect" };
    } else {
      const { user } = response;
    //   console.log(user);
      const validPass = await comparePassword(password, user.password);

      if (validPass) {
        return { status: true, user: user };
      } else {
        return { status: false, message: "Email or Password is incorrect" };
      }
    }
  };
  return { executeFunction };
};
