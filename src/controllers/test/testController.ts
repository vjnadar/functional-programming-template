import controller from "../controllerFactory";
import { Request } from "express";
import {
  addTestMessageService,
  fetchTestMessageService,
} from "../../services/test";
import { ResponseFromService } from "../../types/controllers/controllersFactory";

function testController() {
  function get() {
    async function handler(req: Request) {
      let fromDb = await fetchTestMessageService();
      const response: ResponseFromService = {
        status: 200,
        message: "Test fetch successful",
        fromDb,
      };
      return response;
    }
    return controller(handler);
  }
  function post() {
    async function handler(req: Request) {
      let fromDb = await addTestMessageService();
      const response: ResponseFromService = {
        status: 201,
        message: "Test post inserted successfully",
        fromDb: { insertedId: fromDb.insertedId },
      };
      return response;
    }
    return controller(handler);
  }
  return Object.freeze({
    get,
    post,
  });
}

export default testController;
