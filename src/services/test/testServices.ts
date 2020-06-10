import { createTestDao } from "../../dao/test/testDao";
import { InsertOneWriteOpResult } from "mongodb";
import { DbAccess, ErrorHolder, TestServices } from "../../types/";
import { errorTypes } from "../../enums/errorTypes/errorTypes";
import { errorHandlers } from "../../utilities/errorHandler/errorHandlers";

function testServices(dbAccess: DbAccess): TestServices {
  async function fetchTestMessageService(): Promise<any> {
    let { get:getTestMessage } = await createTestDao(dbAccess);
    let result = await getTestMessage();
    const errorHolder: ErrorHolder = {
      type: errorTypes.GENERAL_ERROR,
      message: "The record was not found",
      statusCode: 401,
    };
    errorHandlers.throwError(errorHolder, result);
    return result;
  }
  async function addTestMessageService(): Promise<InsertOneWriteOpResult<any>> {
    let { post:postTestMessage } = await createTestDao(dbAccess);
    let result = await postTestMessage();
    const errorHolder: ErrorHolder = {
      type: errorTypes.INSERT_ONE,
    };
    errorHandlers.throwError(errorHolder, result);
    return result;
  }
  return Object.freeze({
    fetchTestMessageService,
    addTestMessageService,
  });
}
export default testServices;
