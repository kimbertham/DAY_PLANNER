import { Response, NextFunction } from 'express'
import {ICustomReq} from '../lib/customReq'
import {habitModel, habitUnitModel} from '../models/habits'


async function getHabit(req: ICustomReq, res: Response, next: NextFunction) {
	try {
		const habits = req.body.id === 'all' ?
			await habitModel.find({ owner: req.currentUser}) 
			: await habitModel.findById(req.params.id)
		res.status(200).json(habits)
	} catch (err) {
		next(err)
	}
}

async function getHabitUnit(req: ICustomReq, res: Response, next: NextFunction) {
	try {
		const habits = await habitUnitModel.find({ owner: req.currentUser, habit: req.body.habit})
		res.status(200).json(habits)
	} catch (err) {
		next(err)
	}
}

async function newHabit(req: ICustomReq, res: Response, next: NextFunction) {
	try {
		req.body.owner = req.currentUser
		const newHabit = await habitModel.create(req.body)
		res.status(201).json(newHabit)
	} catch (err) {
		next(err)
	}
}

async function newHabitUnit(req: ICustomReq, res: Response, next: NextFunction) {
	try {
		req.body.owner = req.currentUser
		const newHabit = await habitUnitModel.create(req.body)
		const habit = habitModel.findOne(req.body.habit)
		await habitModel.findOneAndUpdate(req.body.habit, { $push: { units: newHabit }})
		res.status(201).json(newHabit)
	} catch (err) {
		next(err)
	}
}

async function delHabit(req: ICustomReq, res: Response, next: NextFunction) {
	try {
		await habitModel.findOneAndDelete(req.body.id)
		res.status(204).json()
	} catch (err) {
		next(err)
	}
}

async function delHabitUnit(req: ICustomReq, res: Response, next: NextFunction) {
	try {
		await habitUnitModel.findOneAndDelete(req.body.id)
		res.status(204).json()
	} catch (err) {
		next(err)
	}
}

async function updateHabit(req: ICustomReq, res: Response, next: NextFunction) {
	try {
		const task = await habitModel.findOneAndUpdate(req.body.id, req.body.data)
		res.status(204).json(task)
	} catch (err) {
		next(err)
	}
}

async function updateHabitUnit(req: ICustomReq, res: Response, next: NextFunction) {
	try {
		const habit = await habitUnitModel.findOneAndUpdate(req.body.id, req.body.data)
		res.status(204).json(habit)
	} catch (err) {
		next(err)
	}
}

module.exports = {
	getHabit,
	getHabitUnit,
	newHabit,
	newHabitUnit,
	delHabit,
	delHabitUnit,
	updateHabit,
	updateHabitUnit
}
