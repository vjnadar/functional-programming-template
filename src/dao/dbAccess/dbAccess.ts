import { MongoClient, Db } from "mongodb";

async function getDbAccess(): Promise<Db> {
  const url: string = process.env.MONGODB_URL || "";
  const client = new MongoClient(url, { useUnifiedTopology: true });
  if (!client.isConnected()) {
    await client.connect();
    return client.db();
  }
  return client.db();
}
export default getDbAccess;
