import express, {
  Request,
  Response,
  NextFunction,
} from "express";
import "./routes";
import MainRouter from "./routes/RouterSingleton";
const server = express();
require("dotenv").config();

server.use(express.json());
server.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Orgin", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS,GET,POST,PUT,PATCH");
  next();
});
server.use("", MainRouter.getRouter());
server.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.log("Main Error Control");
  new Error();
  console.log(error);
  const statusCode = error.statusCode || 500;
  const message = error.message || "Server error";
  const data = error.data || error;
  res.status(statusCode).json({ message, data });
});
server.listen(8080);
