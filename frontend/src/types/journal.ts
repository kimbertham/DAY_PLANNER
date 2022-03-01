import { IUser } from './auth'
import moment from 'moment'


export interface IJournal {
  _id?: string;
  title: string;
  time: {
    date:string;
    time?: number;
  },
  favorite: Boolean;
  content: string;
  owner?: IUser;
}

export const clearJournal = 
{ title: 'Title',
  time: {
    date: moment().format('YYYY-MM-DD')
  },
  favorite: false,
  content: ''
}

