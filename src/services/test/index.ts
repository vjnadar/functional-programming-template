import testService from './testServices';
import dbAccess from '../../dao/dbAccess/dbAccess'
import testServices from './testServices';

const {addTestMessage,fetchTestMessage}=testServices(dbAccess)

export {addTestMessage,fetchTestMessage};