import {userModel} from '../models/user'
import {Request, Response} from 'express'

const jwt = require('jsonwebtoken')
const secret = 'secret'


const login = async (req : Request,res:Response) => {
  // console.log('SCIMMM')
  console.log(req.body)
  try {
    const user = await userModel.findOne({ email: req.body.email })
    console.log(user)
    if (!user || !user.validatePassword(req.body.password)) {
      throw new Error('Unauthorized')
    }
    const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '7 days' })
    res.status(202).json({
      message: `Welcome back ${user.firstName}`, token})
  } catch (err) {
    console.log(err)
    res.status(401).json({ message: 'Invalid Credentials' })
  }
}

const register = async (req : Request,res:Response) => {
  try {
    const user = await new userModel(req.body)
    user.save()
    res.status(201).json({ message: `Welcome ${user.firstName}` })
  } catch (err) {
    res.status(401).json( err )
    } 
  }



module.exports = {
  login,
  register
}