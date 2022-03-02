import { Response, NextFunction } from 'express'
import { IJournal, journalModel } from '../models/journal'
import {ICustomReq} from '../lib/customReq'


async function getJournal(req: ICustomReq, res: Response, next: NextFunction) {
	try {
		let journal
		if (req.body.id === 'all') {
			journal = await journalModel.find({ owner: req.currentUser})
		} else if (req.body.id === 'favorite') {
			journal = await journalModel.find({ owner: req.currentUser, favorite: true}) 
		} else {
			journal = await journalModel.findById(req.params.id)
		}	
		console.log(journal)
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
  await journalModel.findOneAndDelete({_id:req.body._id})
		res.status(204).json(req.body.id)
	} catch (err) {
		next(err)
	}
}

async function updateJournal(req: ICustomReq, res: Response, next: NextFunction) {
	try {
		const journal = await journalModel.findOneAndUpdate(
			{_id:req.body._id}, 
			{
				favorite: req.body.favorite,
				title: req.body.title,
				content: req.body.content
			}, 
			{new: true})
		res.status(201).json(journal)
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
