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
    time: string;
  };
  type?: EMeals;
  owner?: IUser;
  recipe?: IRecipe;

}

export interface IRecipe {
  id?:string;
  title?: string;
  method?: string;
  ingredients: string[];
  calories?: number;
  image?: string
}