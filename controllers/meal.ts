import { Response, NextFunction } from 'express'
import { mealModel } from '../models/meals'
import {ICustomReq} from '../lib/customReq'


async function getMeal(req: ICustomReq, res: Response, next: NextFunction) {
	try {
		const journal = req.body.id === 'all' ?
			await mealModel.find({ owner: req.currentUser}) 
			: await mealModel.findById(req.params.id)
		res.status(200).json(journal)
	} catch (err) {
		next(err)
	}
}

async function newMeal(req: ICustomReq, res: Response, next: NextFunction) {
	try {
		req.body.owner = req.currentUser
		const newJournal= await mealModel.create(req.body)
		res.status(201).json(newJournal)
	} catch (err) {
		next(err)
	}
}

async function delMeal(req: ICustomReq, res: Response, next: NextFunction) {
	try {
  await mealModel.findOneAndDelete(req.body.id)
		res.status(204).json()
	} catch (err) {
		next(err)
	}
}

async function updateMeal(req: ICustomReq, res: Response, next: NextFunction) {
	try {
		const journal = await mealModel.findOneAndUpdate(req.body.id, req.body.data)
		res.status(204).json(journal)
	} catch (err) {
		next(err)
	}
}

module.exports = {
	getMeal,
	newMeal,
	delMeal,
	updateMeal
}
