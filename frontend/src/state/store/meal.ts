import { createSlice } from '@reduxjs/toolkit'
import { IMeal } from '../../types/meal'
import { newMeal,getMealByDate } from '../thunks/meal'

interface InitialMeals {
  meals: IMeal[],
  groupedMeals: {[key: string]: IMeal[]}

}

const initialState : InitialMeals = { 
  meals: [],
  groupedMeals: {}
} 

export const mealSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
  }, 
  extraReducers: (builder) => {
    builder.addCase(newMeal.fulfilled , (state, action) => {
      state.meals = [...state.meals, action.payload]
    })
    builder.addCase(getMealByDate.fulfilled , (state, action) => {
      state.groupedMeals = action.payload
    })
  }
})
