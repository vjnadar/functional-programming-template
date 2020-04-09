import controller from "../controllerFactory";
import { Request } from "express";
import { addTestMessage, fetchTestMessage } from "../../services/test";
import { ResponseFromService } from "../../types/controllers/controllersFactory";
import { ErrorHolder } from "../../types/errorHandlers/errorHandlers";
import { errorTypes } from "../../enums/errorTypes/errorTypes";

function testController() {
  function get() {
    async function handler(req: Request) {
      let fromDb = await fetchTestMessage();
      const response: ResponseFromService = {
        status: 200,
        message: "Test successful",
        fromDb,
      };
      return response;
    }
    const errorHolder: ErrorHolder = {
      type: errorTypes.generalError,
      message: "The record was not found",
      statusCode: 401,
    };
    return controller(handler, errorHolder);
  }

  function post() {
    async function handler(req: Request) {
      let fromDb = await addTestMessage();
      const response: ResponseFromService = {
        status: 201,
        message: "Test successful",
        fromDb: { insertedId: fromDb.insertedId },
      };
      return response;
    }
    const errorHolder: ErrorHolder = {
      type: errorTypes.insertOne,
    };
    return controller(handler, errorHolder);
  }
  return Object.freeze({
    get,
    post,
  });
}

export default testController;
