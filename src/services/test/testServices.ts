import createTestDao from "../../dao/test/testDao";

function testServices(dbAccess: any) {
  async function fetchTestMessage() {
    let testDao = createTestDao(dbAccess);
    let result = await testDao.getTestMessage();
    return result;
  }
  async function addTestMessage() {
    let testDao = createTestDao(dbAccess);
    let result = await testDao.postTestMessage();
    return result;
  }
  return Object.freeze({
      fetchTestMessage,
      addTestMessage
  })
}
export default testServices;
