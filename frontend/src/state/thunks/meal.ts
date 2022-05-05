import { createAsyncThunk } from '@reduxjs/toolkit'
import { IMeal, IRecipe } from '../../types/meal'
import { meals } from '../actions/meal'



export const getMeal = createAsyncThunk(
  'meals/get', (id:string) => {
    return  meals.getMeal(id)
  }
)

export const getMealByDate = createAsyncThunk(
  'meals/getByDate', (data:{startDate: string, endDate:string}) => {
    return  meals.getMealByDate(data)
  }
)

export const newMeal = createAsyncThunk(
  'meals/new', (data:IMeal) => {
    return  meals.newMeal(data)
  }
)

export const delMeal = createAsyncThunk(
  'meals/del', (data:IMeal) => {
    return  meals.delMeal(data)
  }
)

export const updateMeal = createAsyncThunk(
  'meals/update', (data:IMeal) => {
    return  meals.updateMeal(data)
  }
)

//-------Recipes------

export const newRecipe = createAsyncThunk(
  'recipes/new', (data:IRecipe) => {
    return  meals.newRecipe(data)
  }
)

export const getRecipes = createAsyncThunk(
  'recipes/get', () => {
    return  meals.getRecipes()
  }
)