export interface ErrorCustom extends Error {
  statusCode?: number;
}
export interface ErrorHolder {
  type: string;
  message?: string;
  statusCode?: number;
}
export interface ResponseFromDb {
  insertedCount?: number | undefined;
  modifiedCount?: number | undefined;
  matchedCount?: number | undefined;
  deletedCount?: number | undefined;
  name?: string;
  insertedId?: string;
}
export interface ThrowError {
  (errorHolder: ErrorHolder, response: Object): void;
}
