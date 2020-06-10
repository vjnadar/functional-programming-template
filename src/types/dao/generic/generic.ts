import { InsertOneWriteOpResult, UpdateWriteOpResult, ObjectID } from "mongodb";
export interface GenericDao {
  readonly get: () => Promise<any>;
  readonly post: () => Promise<InsertOneWriteOpResult<any>>;
}
