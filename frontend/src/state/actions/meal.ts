import axios from 'axios'
import { headers } from '../../lib/auth'
import { IMeal, IRecipe } from '../../types/meal'


export const meals = {
  getMeal: async (id: string) => {
    const res = await axios.post('/api/getMeal', id, headers)
    return res.data
  },
  getMealByDate: async (data:{startDate: string, endDate:string}) => {
    const res = await axios.post('/api/getMealByDate', data, headers)
    return res.data
  },
  newMeal: async (data : IMeal) => {
    const res = await axios.post('/api/newMeal', data, headers)   
    return res.data
  },
  delMeal: async (data: IMeal ) => {
    const res = await axios.post('/api/delMeal', data, headers)
    return res.data
  },
  updateMeal: async (data: IMeal) => {
    const res = await axios.post('/api/updateMeal', data, headers)
    return res.data
  },
  //------Recipes-----  
  newRecipe: async (data : IRecipe) => {
    const res = await axios.post('/api/newRecipe', data, headers)   
    return res.data
  },
  getRecipes: async () => {
    const res = await axios.get('/api/getRecipes', headers)
    return res.data
  }
}


