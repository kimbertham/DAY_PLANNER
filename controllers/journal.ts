import { Response, NextFunction } from 'express'
import { journalModel } from '../models/journal'
import {ICustomReq} from '../lib/customReq'


async function getJournal(req: ICustomReq, res: Response, next: NextFunction) {
	try {
		const journal = req.body.id === 'all' ?
			await journalModel.find({ owner: req.currentUser}) 
			: await journalModel.findById(req.params.id)
		res.status(200).json(journal)
	} catch (err) {
		next(err)
	}
}

async function newJournal(req: ICustomReq, res: Response, next: NextFunction) {
	try {
		req.body.owner = req.currentUser
		const newJournal= await journalModel.create(req.body)
		res.status(201).json(newJournal)
	} catch (err) {
		next(err)
	}
}

async function delJournal(req: ICustomReq, res: Response, next: NextFunction) {
	try {
  await journalModel.findOneAndDelete(req.body.id)
		res.status(204).json()
	} catch (err) {
		next(err)
	}
}

async function updateJournal(req: ICustomReq, res: Response, next: NextFunction) {
	try {
		const journal = await journalModel.findOneAndUpdate(req.body.id, req.body.data)
		res.status(204).json(journal)
	} catch (err) {
		next(err)
	}
}

module.exports = {
	getJournal,
	newJournal,
	delJournal,
	updateJournal
}
