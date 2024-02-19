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

      if (response.status) {
        const { user, accessToken, refreshToken } = response;

        req.session.refreshToken = refreshToken;
        res.cookie("user-accessToken", accessToken, {
          maxAge: 300000,
          httpOnly: true,
          secure: true,
        });
        res.cookie("user-refreshToken", refreshToken, {
          maxAge: 3600000,
          httpOnly: true,
          secure: true,
          sameSite: "strict",
        });
        req.session.Otp = undefined;
        req.session.userData = undefined;

        res
          .status(201)
          .json({ status: true, accessToken: accessToken, user: user });
      } else {
        res.status(401).json({ status: false, message: response.message });
      }
    } else {
      res.status(401).json({ status: false, message: "Incorrect OTP Provided" });
    }
  };

  return verifyOTPcontroller;
};