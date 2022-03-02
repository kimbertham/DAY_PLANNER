import axios from 'axios'
import { headers } from '../../lib/auth'
import { ITask } from '../../types/tasks'


export const tasks = {
  getTasks: async  (id: string) => {
    const res = await axios.get(`api/getTask/${id}`, headers)
    return res.data
  },
  getTasksByDate: async  (date: string) => {
    const res = await axios.get(`api/getTasksByDate/${date}`, headers)
    return res.data
  },
  delTasks: async  (id:string) => {
    const res = await axios.delete(`api/delTask/${id}`, headers)
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



