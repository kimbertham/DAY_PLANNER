import * as mongoose from 'mongoose'
import { IUser } from '../frontend/src/types/auth'

export interface ITask {
  title: string
  time: {
    date: string
    time?: string
  },
  completed?: {
    checked: boolean
    date: string
    time: string
  },
  owner?: IUser
  content: string,
	tags: string[]
}

const taskSchema = new mongoose.Schema({
	title: { type: String, required: true },
	time: {
		date: { type: String, required: true },
		time: { type: String, required: false }
	},
	completed: {
		checked: { type: Boolean, default: false },
		date: { type: String },
		time: { type: String}
	},
	owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	content: { type: String, required: true},
	tags: {type: [String], required:false}
}, {
	timestamps: true,
	strict: false
})

export const taskModel = mongoose.model<ITask>('Tasks', taskSchema)
