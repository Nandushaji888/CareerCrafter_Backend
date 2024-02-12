import { Request, Response } from "express";

export default (dependencies: any) => {
  const {
    useCase: { verifyOTP_useCase },
  } = dependencies;

  const verifyOTPcontroller = async (req: Request, res: Response) => {
    const { otp } = req.body;

    if (otp === req.session.Otp) {
      const data = req.session.userData;
      const response = await verifyOTP_useCase(dependencies).executeFunction(
        data
      );
      console.log(response);

      if (response.status) {
        const { user, accessToken, refreshToken } = response;
        req.session.refreshToken = refreshToken;
        const expirationDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
        res.cookie("accessToken", accessToken, {
          expires: expirationDate,
          httpOnly: true,
          secure: true,
        });
        res.status(201).json({status:true,accessToken:accessToken,user:user})

      } else {
        res.status(400).json({ status: false, message: response.message });
      }
    } else {
      res.status(400).json({ status: false, message: "Incorrect otp" });
    }
  };
  return verifyOTPcontroller;
};
