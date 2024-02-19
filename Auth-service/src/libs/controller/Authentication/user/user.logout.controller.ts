import { Request, Response } from "express";
import { clearAccessTokenFromCookie } from "../../../../utils/jwt/jwt";

export default (dependencies: any) => {
  const userLogoutController = (req: Request, res: Response) => {
    console.log(req.cookies);
    try {
      clearAccessTokenFromCookie("user-accessToken", res);
      res.clearCookie("user-accessToken");
      res.json({ status: true, message: "Logout success" });
    } catch (err) {
      console.log(err, "errr");

      res.json(err);
    }
  };
  return userLogoutController;
}