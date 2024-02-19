import { Request, Response } from "express";

export default (dependencies: any) => {
  const {
    useCase: { recruiter_verifyOTP_useCase },
  } = dependencies;

  const recruiterVerifyOTPcontroller = async (req: Request, res: Response) => {
    const { otp } = req.body;

    if (otp === req.session.rOtp) {
      const data = req.session.recruiterData;
      const response = await recruiter_verifyOTP_useCase(dependencies).executeFunction(
        data
      );
      console.log(response);

      if (response.status) {
        const { recruiter, accessToken, refreshToken } = response;
        req.session.refreshToken = refreshToken;
        const expirationDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
        res.cookie("accessToken", accessToken, {
          expires: expirationDate,
          httpOnly: true,
          secure: true,
        });
        req.session.rOtp = undefined;
        req.session.recruiterData=undefined
        res.status(201).json({status:true,accessToken:accessToken,recruiter:recruiter})

      } else {
        res.status(400).json({ status: false, message: response.message });
      }
    } else {
      res.status(400).json({ status: false, message: "Incorrect otp" });
    }
  };
  return recruiterVerifyOTPcontroller;
};
