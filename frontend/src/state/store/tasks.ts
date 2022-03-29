import { createSlice } from '@reduxjs/toolkit'
import { ITag, ITask } from '../../types/tasks'
import { delTag, delTasks, getTags, getTasks, getTasksByDate, newTag, newTask, updateTask } from '../thunks/tasks'

interface InitialTasks {
  tasks: ITask[],
  tags:ITag[]
}

const initialState : InitialTasks = { 
  tasks: [],
  tags: []
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
      state.tasks =  [...action.payload.sort((a: { time: { time: any } },b: { time: { time: any } }) =>
        Date.parse(`1970/01/01 ${a.time.time} `) - Date.parse(`1970/01/01 ${b.time.time} `)
      )]
    })
    builder.addCase(newTask.fulfilled , (state, action) => {
      // state.tasks = [...state.tasks, action.payload]
    })
    builder.addCase(delTasks.fulfilled , (state, action) => {
      state.tasks = state.tasks.filter(t => t._id !== action.meta.arg._id)
    })
    builder.addCase(updateTask.fulfilled , (state, action) => {
      const i = state.tasks.findIndex(t => t._id === action.meta.arg._id)
      state.tasks[i] = action.payload
    })

    //----------------------Tags----------------

    builder.addCase(getTags.fulfilled , (state, action) => {
      state.tags = action.payload
    })
    builder.addCase(newTag.fulfilled , (state, action) => {
      // state.tags = [...state.tags, action.payload]
    })
    builder.addCase(delTag.fulfilled , (state, action) => {
      state.tags = state.tags.filter(t => t._id !== action.meta.arg)
    })
  }
})
