import {Request, Response} from 'express'
import {IUser, userModel } from '../models/user'

const jwt = require('jsonwebtoken') 
const secret = 'secret'

interface CustomRequest extends Request {
  currentUser: IUser;
}

export const secureRoute = async (req:CustomRequest, res:Response, next: (arg0?: unknown) => void) => {
  try {
    if (!req.headers.authorization) throw new Error('Unauthorized')
    const token = req.headers.authorization.replace('Bearer ', '')
    const payload = await jwt.verify(token, secret)
    const user = await userModel.findById(payload.sub)
    if (!user) {
      throw new Error('Unauthorized')
    } else {
      req.currentUser = user
      next() 
    }
  } catch (err) {
    next(err)
  }
}



