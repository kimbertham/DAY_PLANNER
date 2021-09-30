import * as mongoose from 'mongoose'
import { IUser } from '../frontend/src/types/auth'

export interface ITask {
  title: string
  time: {
    date: Date
    time?: number
  },
  completed?: {
    checked: boolean
    date: Date
    time: number
  },
  owner?: IUser
  content: string
}

const taskSchema = new mongoose.Schema({
	title: { type: String, required: true },
	time: {
		date: { type: Date, required: true },
		time: { type: Number, required: false }
	},
	completed: {
		checked: { type: Boolean, default: false },
		date: { type: Date },
		time: { type: Number}
	},
	owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	content: { type: String, required: true},
}, {
	timestamps: true,
	strict: false
})

export const taskModel = mongoose.model<ITask>('Tasks', taskSchema)
