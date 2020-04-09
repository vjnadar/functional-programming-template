import { Request, Response, NextFunction, RequestHandler } from "express";
import {
  ControllerFactoryHandler,
  ResponseFromService,
} from "../types/controllers/controllersFactory";
import { ErrorHolder } from "../types/errorHandlers/errorHandlers";
import { errorHandlers } from "../utilities/errorHandler/errorHandlers";

function controllerFactory(
  handler: ControllerFactoryHandler,
  errorHolder: ErrorHolder
): RequestHandler {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      let response: ResponseFromService = await handler(req);
      errorHandlers.throwError(errorHolder, response.fromDb);
      res.status(response.status).json(response);
    } catch (error) {
      next(error);
    }
  };
}
export default controllerFactory;
