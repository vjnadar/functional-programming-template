import {Db} from "mongodb";

export interface DbAccess{
   ():Promise<Db>
}
