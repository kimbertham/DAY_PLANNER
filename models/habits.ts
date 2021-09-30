import * as mongoose from 'mongoose'

interface IHabits {
  title: string,
  frequency: number,
  description: string,
  owner: mongoose.ObjectId,
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
	owner:{type:mongoose.Schema.Types.ObjectId,},
	
}, {
	timestamps: true,
})

export const habitModel = mongoose.model('Habits', habitSchema)
