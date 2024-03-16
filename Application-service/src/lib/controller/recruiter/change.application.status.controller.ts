import { Request, Response } from "express";

export default (dependencies: any) => {
  const {
    useCase: { change_application_status },
  } = dependencies;

  const getApplicationDetailsController = async (
    req: Request,
    res: Response
  ) => {
    const { id, status } = req.body;

    console.log('req.bodyyyyyyyyyyyyyyy');
    console.log(req.body);
    

    const response = await change_application_status(
      dependencies
    ).executeFunction(id, status);

    if (response?.status) {
      res
        .status(200)
        .json({
          status: response?.status,
          application: response?.application,
          message: response?.message,
        });
    } else {
      res
        .status(400)
        .json({ status: response?.status, message: response?.message });
    }
  };
  return getApplicationDetailsController;
};
