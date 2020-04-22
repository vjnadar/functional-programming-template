import {InsertOneWriteOpResult} from 'mongodb';

export interface TestDao {
    readonly getTestMessage: () => Promise<any>;
    readonly postTestMessage: () => Promise<InsertOneWriteOpResult<any>>;
}