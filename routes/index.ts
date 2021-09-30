const router = require('express').Router()

const auth = require('../controllers/auth')
const task = require('../controllers/task')
const secureRoute = require('../lib/auth').secureRoute

router.route('/login')
	.post(auth.login)

router.route('/register')
	.post(auth.register)

	//---------------------------

router.route('/getTask')
	.post(secureRoute, task.getTask)

router.route('/newTask')
	.post(secureRoute, task.newTask)

router.route('/delTask')
	.post(secureRoute, task.delTask)

router.route('/updateTask')
	.post(secureRoute, task.updateTask)

//-----------------------------

module.exports = router