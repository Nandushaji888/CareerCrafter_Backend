import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { IUser } from '../interfaces/interface'

// Extend Request interface to include user property
declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
  }
}

export const verifyUser = (req: Request, res: Response, next: NextFunction) => {
  const user_accessToken = req.cookies.user_accessToken;




  
  if (!user_accessToken) {
    return res.status(401).json({ status: false, message: 'Unauthorized - No token Provided"' });
  } else {
    jwt.verify(user_accessToken, process.env.ACCESS_SECRET_KEY || "", (err: jwt.VerifyErrors | null, decoded: any) => {
      if (err) {
        return res.json({ status: false, message: 'Invalid Token' });
      } else {
        const decodedUser = decoded.user as IUser;
        req.user = decodedUser;
        console.log('req.user');
        console.log(req.user);
        
        next();
      }
    });
  }
};
