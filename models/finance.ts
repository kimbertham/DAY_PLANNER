import * as mongoose from 'mongoose'
import { IUser } from '../frontend/src/types/auth'
import {EMeals} from '../frontend/src/types/meal'

export interface IFinance {
  title: string
  time: {
    date: Date
    time?: number
  },
  type: EMeals
  owner?: IUser
  recipe: string,
  ingredients: string
}

const taskSchema = new mongoose.Schema({
	title: { type: String, required: true },
	time: {
		date: { type: Date, required: true },
		time: { type: Number, required: false }
	},
	owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  recipe: { type: String, required: false},
  ingredients: { type: String, required: false},
  type: { type: String, enum:[EMeals]}
}, {
	timestamps: true,
	strict: false
})

export const mealModel = mongoose.model<IMeal>('Meal', taskSchema)
