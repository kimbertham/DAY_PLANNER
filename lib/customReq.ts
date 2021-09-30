import { IUser } from '../frontend/src/types/auth'

import { Request } from 'express'
export interface ICustomReq extends Request {
	currentUser: IUser;
}
