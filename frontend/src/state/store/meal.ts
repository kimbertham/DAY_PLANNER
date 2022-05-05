import { createSlice } from '@reduxjs/toolkit'
import { IMeal, IRecipe } from '../../types/meal'
import { sortByTime } from '../../lib/common'
import { newMeal,getMealByDate, getRecipes, newRecipe } from '../thunks/meal'

interface InitialMeals {
  meals:   IMeal[],
  recipes: IRecipe[]

}

const initialState : InitialMeals = { 
  meals: [],
  recipes: []
} 

export const mealSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
  }, 
  extraReducers: (builder) => {
    builder.addCase(newMeal.fulfilled , (state, action) => {
      state.meals = sortByTime([...state.meals, action.payload])
    })
    builder.addCase(getMealByDate.fulfilled , (state, action) => {
      state.meals = sortByTime(action.payload)
    })
    builder.addCase(getRecipes.fulfilled , (state, action) => {
      state.recipes = action.payload
    })
    builder.addCase(newRecipe.fulfilled , (state, action) => {
      state.recipes = [...state.recipes, action.payload]
    })
  }
})
