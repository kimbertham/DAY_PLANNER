import { IUser } from './auth'

export interface ITask {
  _id?: string;
  title: string;
  time: {
    date?: string;
    time?: string;
  };
  completed: {
    checked: boolean;
    date?: string;
    time?: string;
  };
  owner?: IUser;
  content?: string;
	tags?: string[];
}
