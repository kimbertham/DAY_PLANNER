import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../types/auth'
import { loginUser } from '../thunks/auth'

interface InitialAuth {
  user?: IUser
}

const initialState : InitialAuth = { 
  user: undefined
} 

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  }, 
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled , (state, action) => {
      const { user } = action.payload
      state.user = user
    })
  
  
  }
})
