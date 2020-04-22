import testService from './testServices';
import dbAccess from '../../dao/dbAccess/dbAccess'
import testServices from './testServices';

export const {addTestMessageService,fetchTestMessageService}=testServices(dbAccess)
