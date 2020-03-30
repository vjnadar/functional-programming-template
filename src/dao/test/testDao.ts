const ObjectId = require("mongodb").ObjectID;
function createTestDao(dbAccess: any) {
  async function getTestMessage() {
    let db = await dbAccess();
    const _id = ObjectId("5e624119d79c174dccfe17bf");
    return await db.collection("test").findOne({ _id });
  }
  async function postTestMessage() {
    let db = await dbAccess();
    return await db.collection("test").insertOne({ testMessage: "Test1" });
  }
  return Object.freeze({
    getTestMessage,
    postTestMessage
  });
}
export default createTestDao;
