import { Response, NextFunction } from 'express'
import { IMeal, mealModel, recipeModel } from '../models/meals'
import {ICustomReq} from '../lib/customReq'
import { group, time } from 'console'


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

async function getMealByDate(req: ICustomReq, res: Response, next: NextFunction) {
	try {
		const meals = await mealModel.find({
			owner: req.currentUser,
			'time.date': {$gte: req.body.startDate, $lte: req.body.endDate}
			})
		res.status(200).json(meals)
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


//-----------Recipes --------------


async function getRecipes(req: ICustomReq, res: Response, next: NextFunction) {
	try {
		const recipes = await recipeModel.find({ owner: req.currentUser}) 
		res.status(200).json(recipes)
	} catch (err) {
		next(err)
	}
}

async function newRecipe(req: ICustomReq, res: Response, next: NextFunction) {
	try {
		req.body.owner = req.currentUser
		const newRecipe= await recipeModel.create(req.body)
		res.status(201).json(newRecipe)
	} catch (err) {
		next(err)
	}
}


async function delRecipe(req: ICustomReq, res: Response, next: NextFunction) {
	try {
  await recipeModel.findOneAndDelete(req.body.id)
		res.status(204).json()
	} catch (err) {
		next(err)
	}
}

async function updateRecipe(req: ICustomReq, res: Response, next: NextFunction) {
	try {
		const recipe = await recipeModel.findOneAndUpdate(req.body.id, req.body.data)
		res.status(204).json(recipe)
	} catch (err) {
		next(err)
	}
}


module.exports = {
	getMeal,
	newMeal,
	delMeal,
	updateMeal,
	getMealByDate,

	getRecipes,
	newRecipe,
	delRecipe,
	updateRecipe,
}
