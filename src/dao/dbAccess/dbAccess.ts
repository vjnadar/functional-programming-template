import { MongoClient } from "mongodb";

async function getDbAccess() {
  const url: string = process.env.MONGODB_URL || "";
  const client = new MongoClient(url, { useUnifiedTopology: true });
  let dbAcesss;
  if (!client.isConnected()) {
    await client.connect();
    dbAcesss = client.db();
    return dbAcesss;
  }
  return dbAcesss;
}
export default getDbAccess;
