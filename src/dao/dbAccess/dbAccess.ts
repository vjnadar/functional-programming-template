import { MongoClient, Db } from "mongodb";
require("dotenv").config();
const url: string = process.env.MONGODB_URL || "";
const client = new MongoClient(url, { useUnifiedTopology: true });

async function getDbAccess(): Promise<Db> {
  if (!client.isConnected()) {
    await client.connect();
  }
  return client.db();
}
export default getDbAccess;
