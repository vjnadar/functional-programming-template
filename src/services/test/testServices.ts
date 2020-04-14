import { createTestDao } from "../../dao/test/testDao";
import { MongoClient, Db } from "mongodb";
import { DbAccess } from "../../types/dao/dbAccess";
import { ErrorHolder } from "../../types/errorHandlers/errorHandlers";
import { errorTypes } from "../../enums/errorTypes/errorTypes";
import { errorHandlers } from "../../utilities/errorHandler/errorHandlers";

function testServices(dbAccess: DbAccess) {
  async function fetchTestMessage() {
    let { getTestMessage } = await createTestDao(dbAccess);
    let result = await getTestMessage();
    const errorHolder: ErrorHolder = {
      type: errorTypes.generalError,
      message: "The record was not found",
      statusCode: 401,
    };
    errorHandlers.throwError(errorHolder, result);
    return result;
  }
  
  async function addTestMessage() {
    let { postTestMessage } = await createTestDao(dbAccess);
    let result = await postTestMessage();
    const errorHolder: ErrorHolder = {
      type: errorTypes.insertOne,
    };
    errorHandlers.throwError(errorHolder, result);
    return result;
  }
  return Object.freeze({
    fetchTestMessage,
    addTestMessage,
  });
}
export default testServices;
