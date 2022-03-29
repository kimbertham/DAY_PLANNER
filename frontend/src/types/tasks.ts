/* eslint-disable @typescript-eslint/no-use-before-define */
import { IUser } from './auth'

export interface ITask {
  _id?: string;
  title: string;
  time: {
    date?: string;
    timeStart?: string;
    timeEnd?: string;
  };
  completed: {
    checked: boolean;
    date?: string;
    time?: string;
    
  };
  owner?: IUser;
  content?: string;
	tags: ITag[];
}

export interface ITag {
  _id?: string;
  title: string; 
  tasks?: ITask;
	color: string;
}
