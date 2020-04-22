const ObjectId = require("mongodb").ObjectID;
import { DbAccess, TestDao } from "../../types";

export async function createTestDao(dbAccess: DbAccess): Promise<TestDao> {
  let db = await dbAccess();
  async function getTestMessage() {
    return await db.collection("test").findOne({ testMessage: "Test1" });
  }
  async function postTestMessage() {
    return await db.collection("test").insertOne({ testMessage: "Test1" });
  }
  return Object.freeze({
    getTestMessage,
    postTestMessage,
  });
}
