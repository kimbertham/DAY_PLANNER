import { createAsyncThunk } from '@reduxjs/toolkit'
import { habits } from '../actions/habits'
import { IHabits, IHabitUnits } from '../../types/habits'



export const getHabits = createAsyncThunk(
  'habits/getAll', (id: string) => {
    return  habits.getHabits(id)
  }
)
export const newHabit = createAsyncThunk(
  'habits/newHabit', (data: IHabits) => {
    return  habits.newHabit(data)
  }
)
export const delHabit =  createAsyncThunk(
  'habits/delHabit', (data:{id: string}) => {
    return  habits.delHabit(data)
  }
)
export const updateHabit = createAsyncThunk(
  'habits/updateHabit', (data: IHabits) => {
    return  habits.updateHabit(data)
  }
)

//------------------------------------


export const newHabitUnit = createAsyncThunk(
  'habits/newHabitUnit', (data:IHabitUnits) => {
    return  habits.newHabitUnit(data)
  }
)
export const getHabitUnitsByDate = createAsyncThunk(
  'habits/ updateHabit', (data: {habit: string,start: string,end: string}) => {
    return  habits.getHabitUnitsByDate(data)
  }
)
export const updateHabitUnit = createAsyncThunk(
  'updateHabitUnit', (data: IHabitUnits) => {
    return  habits.updateHabitUnit(data)
  }
)
export const delHabitUnit = createAsyncThunk(
  'habits/delHabitUnit', (data:IHabitUnits) => {
    return  habits.delHabitUnit(data)
  }
)




