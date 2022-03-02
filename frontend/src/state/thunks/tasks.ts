import { createAsyncThunk } from '@reduxjs/toolkit'
import { ITask } from '../../types/tasks'
import { tasks } from '../actions/tasks'

export const getTasks = createAsyncThunk(
  'tasks/get', (id:string) => {
    return  tasks.getTasks(id)
  }
)

export const getTasksByDate = createAsyncThunk(
  'tasks/getByDate', (date:string) => {
    return  tasks.getTasksByDate(date)
  }
)

export const delTasks = createAsyncThunk(
  'tasks/del', (id:string) => {
    return  tasks.delTasks(id)
  }
)

export const newTask = createAsyncThunk(
  'tasks/new', (data: ITask) => {
    return  tasks.newTask(data)
  }
)

export const updateTask = createAsyncThunk(
  'tasks/update', (data: ITask) => {
    return  tasks.updateTask(data)
  }
)

