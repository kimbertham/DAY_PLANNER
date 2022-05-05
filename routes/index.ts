const router = require('express').Router()
const secureRoute = require('../lib/auth').secureRoute

const auth = require('../controllers/auth')
const task = require('../controllers/task')
const habit =  require('../controllers/habits')
const journal = require('../controllers/journal')
const meal = require('../controllers/meal')



//------------auth------------------

router.route('/login')
	.post(auth.login)

router.route('/register')
	.post(auth.register)

	//------------tasks---------------


	router.route('/getTasksByDate/:date')
	.get(secureRoute, task.getTaskByDate)

router.route('/getTask/:id')
	.get(secureRoute, task.getTask)

router.route('/newTask')
	.post(secureRoute, task.newTask)

router.route('/delTask/:taskId')
	.delete(secureRoute, task.delTask)

router.route('/updateTask')
	.post(secureRoute, task.updateTask)

//------tags ----------------------

router.route('/getTags')
	.get(secureRoute, task.getTags)

router.route('/newTag')
	.post(secureRoute, task.newTag)

router.route('/delTag/:id')
	.delete(secureRoute, task.delTag)

//-------------habits---------------

router.route('/getHabit')
	.post(secureRoute, habit.getHabit)

router.route('/newHabit')
	.post(secureRoute, habit.newHabit)

router.route('/delHabit')
	.post(secureRoute, habit.delHabit)

router.route('/updateHabit')
	.post(secureRoute, habit.updateHabit)



//------------unit habits------------

router.route('/getHabitUnit')
	.post(secureRoute, habit.getHabitUnit)

router.route('/newHabitUnit')
	.post(secureRoute, habit.newHabitUnit)

router.route('/delHabitUnit')
	.post(secureRoute, habit.delHabitUnit)

router.route('/updateHabitUnit')
	.post(secureRoute, habit.updateHabitUnit)

	router.route('/getHabitByDate')
	.post(secureRoute, habit.getHabitUnitByDate)

	//------------Journal--------------

	router.route('/getJournal')
	.post(secureRoute, journal.getJournal)

router.route('/newJournal')
	.post(secureRoute, journal.newJournal)

router.route('/delJournal')
	.post(secureRoute, journal.delJournal)

router.route('/updateJournal')
	.post(secureRoute, journal.updateJournal)

	//--------------Meal---------------

	router.route('/getMeal')
	.post(secureRoute, meal.getMeal)

	router.route('/getMealByDate')
	.post(secureRoute, meal.getMealByDate)

router.route('/newMeal')
	.post(secureRoute, meal.newMeal)

router.route('/delMeal')
	.post(secureRoute, meal.delMeal)

router.route('/updateMeal')
	.post(secureRoute, meal.updateMeal)

	router.route('/getRecipes')
	.get(secureRoute, meal.getRecipes)

	//---------------------------------


module.exports = router