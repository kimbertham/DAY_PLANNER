import { createAsyncThunk } from '@reduxjs/toolkit'
import { ITask, ITag } from '../../types/tasks'
import { tasks , tags } from '../actions/tasks'

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
  'tasks/del', (data:ITask) => {
    return  tasks.delTasks(data)
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

export const newTag = createAsyncThunk(
  'tags/new',(data: ITag) => {
    return  tags.newTag(data)
  }
)
export const getTags = createAsyncThunk(
  'tags/get',() => {
    return  tags.getTags()
  }
)
export const delTag = createAsyncThunk(
  'tags/del',(id:string) => {
    return  tags.delTag(id)
  }
)
