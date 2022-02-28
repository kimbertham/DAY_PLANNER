import { createAsyncThunk } from '@reduxjs/toolkit'
import { ILogin, IRegister } from '../../types/auth'
import { auth } from '../actions/auth'

export const loginUser = createAsyncThunk(
  'auth/login',
  async (data: ILogin) => {
    const response = await auth.login(data)
    return response
  }
)

export const register = createAsyncThunk(
  'auth/register',
  async (data: IRegister) => {
    const response = await auth.register(data)
    return response
  }
)