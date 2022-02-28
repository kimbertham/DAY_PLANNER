import axios from 'axios'
import { headers } from '../../lib/auth'
import { IHabitUnits, IHabits } from '../../types/habits'


export const habits = {
  getHabits: async  (id: string) => {
    const res = await axios.post('api/getHabit', { id: id }, headers)
    return res.data
  },
  newHabit: async (data: IHabits) => {
    const res = await axios.post('api/newHabit', data, headers)
    return res.data
  }
  ,
  delHabit: async (data: IHabits) => {
    const res = data._id !== 'all' ? 
      await axios.post('api/delHabit', data, headers) :
      await axios.post('api/delHabit', 'all', headers)
    return res.data
  },
  updateHabit: async (data: IHabits) => {
    const res = await axios.post('api/updateHabit', data, headers)
    return res.data
  },
  //----------------------------------------
  newHabitUnit: async (data: IHabitUnits) => {
    const res = await axios.post('api/newHabitUnit', data, headers)
    return res.data
  },
  getHabitUnitsByDate: async (data :{habit: string,start: string,end: string}) => {
    const habitUnits = await axios.post('api/getHabitByDate', 
      { habit: data.habit,
        start: data.start,
        end: data.end
      }, headers) 
    return habitUnits.data
  }
  , 
  updateHabitUnit: async (data:IHabitUnits) => {
    const res = await axios.post('api/updateHabitUnit', data, headers)
    return res.data
  },
  delHabitUnit: async (data: IHabitUnits) => {
    const res = await axios.post('api/delHabitUnit', data, headers)
    return res.data
  }
}

