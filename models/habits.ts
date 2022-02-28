import * as mongoose from 'mongoose'
import {IHabits, IHabitUnits} from '../frontend/src/types/habits'
import moment from 'moment'

const habitSchema = new mongoose.Schema({
	title:{type: String, required: true},
	weekDays:[{type:String, enum: moment.weekdays(), required:true}],
	description:{type: String, required: false},
	owner:{type:mongoose.Schema.Types.ObjectId, ref: 'User'},
  units: [{type:mongoose.Schema.Types.ObjectId, ref: 'HabitUnits', required:false}],
	startDate:{type:String, required:true},
	
}, {
	timestamps: true,
})

const habitUnitSchema= new mongoose.Schema({
	habit:{type:mongoose.Schema.Types.ObjectId, ref: 'Habits'},
	date:{type: String, required: true},
	checked:{type: Boolean, required: false, default:false},
	owner:{type:mongoose.Schema.Types.ObjectId,},
}, {
	timestamps: true,
})

export const habitModel = mongoose.model<mongoose.Document&IHabits>('Habits', habitSchema)
export const habitUnitModel =  mongoose.model<IHabitUnits>('HabitUnits', habitUnitSchema)
