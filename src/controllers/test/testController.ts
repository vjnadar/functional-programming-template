import controller from "../controllerFactory";
import { Request } from "express";
import { addTestMessage, fetchTestMessage } from "../../services/test";

function testController() {
  function get() {
    async function handler(req: Request) {
      let fromDb = await fetchTestMessage();
      const response = {
        status: 200,
        message: "Test successful",
        fromDb
      };
      return response;
    }
    return controller(handler);
  }
  function post() {
    async function handler(req: Request) {
      let fromDb = await addTestMessage();
      const response = {
        status: 200,
        message: "Test successful",
        fromDb
      };
      return response;
    }
    return controller(handler);
  }
  return Object.freeze({
    get,
    post
  });
}
export default testController;
