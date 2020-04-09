import { Request, RequestHandler } from "express";
export interface ResponseFromService {
  status: number;
  message: string;
  fromDb: Object;
}
export interface ControllerFactoryHandler {
  (req: Request): Promise<ResponseFromService>;
}
