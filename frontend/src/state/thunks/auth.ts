import { createAsyncThunk } from '@reduxjs/toolkit'
import { ILogin } from '../../types/auth'
import { auth } from '../actions/auth'

export const loginUser = createAsyncThunk(
  'auth/login',
  async (data: ILogin) => {
    const response = await auth.login(data)
    return response
  }
)