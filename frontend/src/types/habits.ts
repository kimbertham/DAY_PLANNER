import { IUser } from './auth'






export interface IHabitUnits {
  id?: string;
  notes?: string,
  checked: boolean,
  date?: string;
  habit?: IHabits
}


export interface IHabits {
  _id?: string,
  title: string,
  weekDays: string[],
  description: string,
  owner?:IUser,
  units?:  IHabitUnits[],
  startDate: string
}
