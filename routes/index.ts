const router = require('express').Router()
const secureRoute = require('../lib/auth').secureRoute

const auth = require('../controllers/auth')
const task = require('../controllers/task')
const habit =  require('../controllers/habits')
const journal = require('../controllers/journal')


//------------auth------------------

router.route('/login')
	.post(auth.login)

router.route('/register')
	.post(auth.register)

	//------------tasks---------------

router.route('/getTask')
	.post(secureRoute, task.getTask)

router.route('/newTask')
	.post(secureRoute, task.newTask)

router.route('/delTask')
	.post(secureRoute, task.delTask)

router.route('/updateTask')
	.post(secureRoute, task.updateTask)

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

	//------------Journal--------------

	router.route('/getJournal')
	.post(secureRoute, journal.getJournal)

router.route('/newJournal')
	.post(secureRoute, journal.newJournal)

router.route('/delJournal')
	.post(secureRoute, journal.delJournal)

router.route('/updateJournal')
	.post(secureRoute, journal.updateJournal)

	//---------------------------------


module.exports = router