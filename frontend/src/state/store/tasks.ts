import { createSlice } from '@reduxjs/toolkit'
import { ITask } from '../../types/tasks'
import { delTasks, getTasks, getTasksByDate, newTask, updateTask } from '../thunks/tasks'

interface InitialTasks {
  tasks: ITask[],
}

const initialState : InitialTasks = { 
  tasks: []
} 

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
  }, 
  extraReducers: (builder) => {
    builder.addCase(getTasks.fulfilled , (state, action) => {
      state.tasks = [...action.payload]
    })
    builder.addCase(getTasksByDate.fulfilled , (state, action) => {
      state.tasks = [...action.payload]
    })
    builder.addCase(newTask.fulfilled , (state, action) => {
      // state.tasks = [...state.tasks, action.payload]
    })
    builder.addCase(delTasks.fulfilled , (state, action) => {
      state.tasks = state.tasks.filter(t => t._id !== action.meta.arg)
    })
    builder.addCase(updateTask.fulfilled , (state, action) => {
      const i = state.tasks.findIndex(t => t._id === action.meta.arg._id)
      state.tasks[i] = action.payload
    })
  }
})
