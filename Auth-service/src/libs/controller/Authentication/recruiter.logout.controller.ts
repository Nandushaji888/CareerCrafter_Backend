import { Request, Response } from "express";
import { clearAccessTokenFromCookie } from "../../../utils/jwt/jwt";

export default (dependencies: any) => {
  const recruiterLogoutController = (req: Request, res: Response) => {
    console.log(req.cookies);
    try {
      clearAccessTokenFromCookie("recruiter-accessToken", res);
      res.clearCookie("recruiter-accessToken");
      res.json({ status: true, message: "Logout success" });
    } catch (err) {
      console.log(err, "errr");

      res.json(err);
    }
  };
  return recruiterLogoutController;
}