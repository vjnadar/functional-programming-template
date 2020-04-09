import { createTestDao } from "../../dao/test/testDao";
import { MongoClient, Db } from "mongodb";
import { DbAccess } from "../../types/dao/dbAccess";

function testServices(dbAccess: DbAccess) {
  async function fetchTestMessage() {
    let {getTestMessage} = await createTestDao(dbAccess);
    let result = await getTestMessage();
    return result;
  }
  async function addTestMessage() {
    let {postTestMessage} = await createTestDao(dbAccess);
    let result = await postTestMessage();
    return result;
  }
  return Object.freeze({
    fetchTestMessage,
    addTestMessage,
  });
}
export default testServices;
