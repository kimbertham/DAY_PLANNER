import { createSlice } from '@reduxjs/toolkit'
import { IHabits, IHabitUnits } from '../../types/habits'
import { getHabits, newHabit, getHabitUnitsByDate, newHabitUnit, updateHabitUnit, delHabit } from '../thunks/habits'

interface InitialHabits {
  habits: IHabits[],
  habitUnits: IHabitUnits[]
}

const initialState : InitialHabits = { 
  habits: [],
  habitUnits: []
} 

export const habitSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
  }, 
  extraReducers: (builder) => {
    builder.addCase(getHabits.fulfilled , (state, action) => {
      state.habits = action.payload
    })
    builder.addCase(newHabit.fulfilled , (state, action) => {
      state.habits = [...state.habits, action.payload]
    })
    builder.addCase(delHabit.fulfilled , (state, action) => {
      state.habits = [...state.habits.filter(h => action.payload !== h._id)]
    })
    builder.addCase(updateHabitUnit.fulfilled , (state, action) => {
      const removed = state.habitUnits.filter(habit => habit.id !== action.payload.id)
      state.habitUnits = [...removed , action.payload]
    })
    builder.addCase(newHabitUnit.fulfilled , (state, action) => {
      const index = state.habits.findIndex(h => h._id === action.payload.habit)
      state.habits[index].units?.push(action.payload)
      state.habits = [...state.habits]
    })
    builder.addCase(getHabitUnitsByDate.fulfilled , (state, action) => {
      state.habitUnits = action.payload
    })
  }
})
