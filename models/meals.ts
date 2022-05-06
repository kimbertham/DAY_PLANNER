import * as mongoose from 'mongoose'
import { IUser } from '../frontend/src/types/auth'
import {EMeals} from '../frontend/src/types/meal'

export interface IMeal {
  title: string
  time: {
    date: string
    time: string
  },
  type: EMeals
  owner?: IUser
  recipe: string,
  ingredients: string;
  calories: string;
}

const taskSchema = new mongoose.Schema({
	title: { type: String, required: true },
	time: {
		date: { type: String, required: true },
		time: { type: String, required: true }
	},
	owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  type: { type: String, enum:[EMeals]},
}, {
	strict: false
})

const recipeSchema = new mongoose.Schema({
	title: { type: String, required: true },
	owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  method: { type: String, required: false},
  ingredients: [{ type: String, required: false}],
  calories: {type: Number, required: false},
  image: { type: String, required: false},
	meal: { type: mongoose.Schema.Types.ObjectId, ref: 'Meal', required: false}
}, {
	timestamps: true,
	strict: false
})

export const mealModel = mongoose.model<IMeal>('Meal', taskSchema)
export const recipeModel = mongoose.model('Recipe', recipeSchema)
