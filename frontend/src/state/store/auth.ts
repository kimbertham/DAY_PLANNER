import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../types/auth'

interface InitialAuth {
  user?: IUser
}

const initialState : InitialAuth = {  } 

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  }, 
  extraReducers: {

  }
})
