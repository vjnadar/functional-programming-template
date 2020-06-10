import { DbAccess, TestDao } from "../../types";
import { createGenericDao } from "../generic/generic";
export async function createTestDao(dbAccess: DbAccess): Promise<TestDao> {
  const { get, post } = await createGenericDao(dbAccess, "test");
  return Object.freeze({
    get,
    post,
  });
}
