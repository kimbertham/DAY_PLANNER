import * as mongoose from 'mongoose'
import { IUser } from '../frontend/src/types/auth'

interface IHabits {
  title: string,
  frequency: number,
  description: string,
  owner:IUser,
  units?:  IHabitUnits[]
}

interface IHabitUnits {
  notes: string,
  checked: boolean,
  completeTime: Date
}

const habitSchema = new mongoose.Schema({
	title:{type: String, required: true},
	frequency:{type: Number, required: true},
	description:{type: String, required: false},
	owner:{type:mongoose.Schema.Types.ObjectId, ref: 'User'},
  units: [{type:mongoose.Schema.Types.ObjectId, ref: 'HabitUnits', required:false}],
	
}, {
	timestamps: true,
})

const habitUnitSchema= new mongoose.Schema({
	habit:{type:mongoose.Schema.Types.ObjectId, ref: 'Habits'},
	date:{type: Date, required: true},
	checked:{type: Boolean, required: false, default:false},
	owner:{type:mongoose.Schema.Types.ObjectId,},
}, {
	timestamps: true,
})

export const habitModel = mongoose.model<mongoose.Document&IHabits>('Habits', habitSchema)
export const habitUnitModel =  mongoose.model<IHabitUnits>('HabitUnits', habitUnitSchema)
