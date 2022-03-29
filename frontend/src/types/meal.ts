import { IUser } from './auth'

export enum EMeals{
  BREAKFAST = 'breakfast',
  LUNCH = 'lunch',
  DINNER = 'dinner',
  SNACK = 'snack',
}


export interface IMeal {
  id?:string;
  title: string;
  time: {
    date: string;
    time?: string;
  };
  type?: EMeals;
  owner?: IUser;
  recipe?: string;
  ingredients: string[];
  calories?: string;
}