import { Db } from "mongodb";
import { DbAccess } from "../../types";

export async function createGenericDao(
  dbAccess: DbAccess,
  collectionName: string
): Promise<any> {
  let db: Db = await dbAccess();
  async function get() {
    return await db
      .collection(collectionName)
      .findOne({ testMessage: "Test1" });
  }
  async function post() {
    return await db
      .collection(collectionName)
      .insertOne({ testMessage: "Test1" });
  }
  return Object.freeze({
    get,
    post,
  });
}
