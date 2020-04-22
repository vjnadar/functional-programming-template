import { Request, Response, NextFunction, RequestHandler } from "express";
import { ControllerFactoryHandler, ResponseFromService } from "../types";

function controllerFactory(handler: ControllerFactoryHandler): RequestHandler {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      let response: ResponseFromService = await handler(req);
      res.status(response.status).json(response);
    } catch (error) {
      next(error);
    }
  };
}
export default controllerFactory;
