import { InsertOneWriteOpResult } from "mongodb";
export interface TestServices {
  readonly fetchTestMessageService: () => Promise<any>;
  readonly addTestMessageService: () => Promise<InsertOneWriteOpResult<any>>;
}
