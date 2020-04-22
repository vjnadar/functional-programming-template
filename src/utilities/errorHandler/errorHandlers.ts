import {
  ErrorHolder,
  ErrorCustom,
} from "../../types/errorHandlers/errorHandlers";
import { errorTypes } from "../../enums/errorTypes/errorTypes";
import { ResponseFromDb } from "../../types/errorHandlers/errorHandlers";

function throwError(errorHolder: ErrorHolder, response: ResponseFromDb): void {
  switch (errorHolder.type) {
    case errorTypes.GENERAL_ERROR: {
      if (!response) {
        let error: ErrorCustom = createError(
          errorHolder.message,
          errorHolder.statusCode
        );
        throw error;
      }
      break;
    }
    case errorTypes.GENERAL_ERROR_INVERSE: {
      if (response) {
        let error: ErrorCustom = createError(
          errorHolder.message,
          errorHolder.statusCode
        );
        error.statusCode = errorHolder.statusCode;
        throw error;
      }
      break;
    }
    case errorTypes.INSERT_ONE: {
      if (
        response.insertedCount !== undefined &&
        response.insertedCount !== 1
      ) {
        let error: ErrorCustom = createError(
          "The insertion operation failed.",
          500
        );
        // let error = new Error("The insertion operation failed.");
        throw error;
      } else if (response.name === "MongoError") {
        let error: ErrorCustom = createError(
          "MongoDb error. Check database",
          500
        );
        // let error = new Error("MongoDb error. Check database");
        throw error;
      }
      break;
    }
    case errorTypes.UPDATE_ONE: {
      if (
        response.modifiedCount !== undefined &&
        response.modifiedCount !== 1 &&
        response.matchedCount !== 1
      ) {
        let error: ErrorCustom = createError(
          "The update operation failed.",
          500
        );
        throw error;
      } else if (response.name === "MongoError") {
        let error: ErrorCustom = createError(
          "MongoDb error. Check database",
          500
        );
        throw error;
      }
      break;
    }
    case errorTypes.DELETE_ONE: {
      if (response.deletedCount !== undefined && response.deletedCount !== 1) {
        let error: ErrorCustom = createError(
          "The deletion operation failed.",
          500
        );
        throw error;
      } else if (response.name === "MongoError") {
        let error: ErrorCustom = createError(
          "MongoDb error. Check database",
          500
        );
        throw error;
      }
      break;
    }
    default: {
      return;
    }
  }
}
function createError(
  message: string | undefined,
  statusCode: number | undefined
): ErrorCustom {
  let error: ErrorCustom = new Error(message) as ErrorCustom;
  error.statusCode = statusCode;
  return error;
}

export const errorHandlers = Object.freeze({ throwError });
