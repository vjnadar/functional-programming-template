import { Request, Response, NextFunction } from "express";

function controllerFactory(handler: Function) {
  return async function(req: Request, res: Response, next: NextFunction) {
    try {
      let response=await handler(req);
      if(!response.fromDb) throw Error("Operation failed");
      res.status(response.status).json(response);
    } catch (error) {
      next(error);
    }
  };
}
export default controllerFactory;
