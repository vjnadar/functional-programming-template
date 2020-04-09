const ObjectId = require("mongodb").ObjectID;
import { MongoClient, Db } from "mongodb";
import { DbAccess } from "../../types/dao/dbAccess";

export async function createTestDao(dbAccess: DbAccess) {
  let db = await dbAccess();
  async function getTestMessage() {
    const _id = ObjectId("5e623edad270ff238c6bf731");
    return await db.collection("test").findOne({ _id });
  }
  async function postTestMessage() {
    return await db.collection("test").insertOne({ testMessage: "Test1" });
  }
  return Object.freeze({
    getTestMessage,
    postTestMessage,
  });
}
