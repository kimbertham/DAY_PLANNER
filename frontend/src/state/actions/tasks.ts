import axios from 'axios'
import { headers } from '../../lib/auth'
import { ITask, ITag } from '../../types/tasks'


export const tasks = {
  getTasks: async  (id: string) => {
    const res = await axios.get(`api/getTask/${id}`, headers)
    return res.data
  },
  getTasksByDate: async  (date: string) => {
    const res = await axios.get(`api/getTasksByDate/${date}`, headers)
    return res.data
  },
  delTasks: async  (data:ITask) => {
    const res = await axios.delete(`api/delTask/${data._id}`, headers)
    return res.data
  },
  newTask: async  (data:ITask) => {
    const res = await axios.post('api/newTask', data, headers)
    return res.data
  },
  updateTask: async (data:ITask) => {
    const res = await axios.post('api/updateTask', data,   headers)
    return res.data
  }
}

export const tags = {
  getTags: async  () => {
    const res = await axios.get('api/getTags', headers)
    return res.data
  },
  newTag: async  (data:ITag) => {
    const res = await axios.post('api/newTag', data, headers)
    return res.data
  },
  delTag: async  (id:string) => {
    const res = await axios.delete(`api/delTag/${id}`, headers)
    return res.data
  }
}


