import * as mongoose from 'mongoose'
import { IUser } from '../frontend/src/types/auth'

export interface IJournal {
  title: string
  time: {
    date: Date
    time?: number
  },
  favorite: Boolean
  content: string
  owner: IUser
}

const journalSchema = new mongoose.Schema({
	title: { type: String, required: true },
	time: {
		date: { type: Date, required: true },
		time: { type: Number, required: false }
	},
	owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	content: { type: String, required: true},
}, {
	timestamps: true,
	strict: false
})

export const journalModel = mongoose.model<IJournal>('Tasks',journalSchema)
