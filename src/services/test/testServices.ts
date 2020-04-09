import { createTestDao } from "../../dao/test/testDao";
import { MongoClient, Db } from "mongodb";
import { DbAccess } from "../../types/dao/dbAccess";

function testServices(dbAccess: DbAccess) {
  async function fetchTestMessage() {
    let testDao = await createTestDao(dbAccess);
    let result = await testDao.getTestMessage();
    return result;
  }
  async function addTestMessage() {
    let testDao = await createTestDao(dbAccess);
    let result = await testDao.postTestMessage();
    return result;
  }
  return Object.freeze({
    fetchTestMessage,
    addTestMessage,
  });
}
export default testServices;
