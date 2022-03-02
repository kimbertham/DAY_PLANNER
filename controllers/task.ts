import { Response, NextFunction } from 'express'
import { taskModel } from '../models/tasks'
import {ICustomReq} from '../lib/customReq'


async function getTask(req: ICustomReq, res: Response, next: NextFunction) {
	try {
		const tasks = req.params.id === 'all' ?
			await taskModel.find({ owner: req.currentUser}) 
			: await taskModel.findById(req.params.id)
		res.status(200).json(tasks)
	} catch (err) {
		next(err)
	}
}

async function getTaskByDate(req: ICustomReq, res: Response, next: NextFunction) {
	try {
		const tasks = await taskModel.find({	
			owner: req.currentUser, 
			'time.date': req.params.date 
		})
		res.status(200).json(tasks)
	} catch (err) {
		next(err)
	}
}

async function newTask(req: ICustomReq, res: Response, next: NextFunction) {
	try {
		req.body.owner = req.currentUser
		const newTodo = await taskModel.create(req.body)
		res.status(201).json(newTodo)
	} catch (err) {
		next(err)
	}
}

async function delTask(req: ICustomReq, res: Response, next: NextFunction) {
	try {
		req.params.taskId === 'all' ?
			await taskModel.deleteMany({owner: req.currentUser})
			:	await taskModel.findOneAndDelete(req.body.id)
		res.status(204).json()
	} catch (err) {
		next(err)
	}
}

async function updateTask(req: ICustomReq, res: Response, next: NextFunction) {
	try {
		const task = await taskModel.findOneAndUpdate(req.body.id, req.body.data)
		res.status(204).json(task)
	} catch (err) {
		next(err)
	}
}

module.exports = {
	getTask,
	getTaskByDate,
	newTask,
	delTask,
	updateTask
}
