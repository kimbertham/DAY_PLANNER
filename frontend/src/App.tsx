import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './routes/auth/Login'
import Register from './routes/auth/Register'
import Home from './routes/dashboard/Home'

import Sidenav from './components/nav/Sidenav'
import Topnav from './components/nav/Topnav'
import Habits from './routes/habits/Habits'
import HabitDetail from './routes/habits/HabitDetail'
import Journal from './routes/journal/Journal'
import Tasks from './routes/tasks/Tasks'
import Diet from './routes/diet/Diet'
import MealPage from './routes/diet/meals/MealPage'
import Recipes from './routes/diet/recipes/Recipes'
import Calories from './routes/diet/calories/Calories'

const App = () => {

  return ( 
    <div className='flex'>
      <BrowserRouter>
        <Sidenav/>
        <div className='right'>
          <Topnav/>
          <div className='content'>
            <Switch>
              <Route path='/login' component={Login}/>
              <Route path='/register' component={Register}/>
              <Route path='/home' component={Home}/>
              <Route path='/habit/:id' component={HabitDetail}/>
              <Route path='/habits' component={Habits}/>
              <Route path='/journal' component={Journal}/>
              <Route path='/tasks' component={Tasks}/>
              <Route path='/diet/:date' component={MealPage}/>
              <Route path='/diet' component={Diet}/>
              <Route path='/recipes' component={Recipes}/>
              <Route path='/calories' component={Calories}/>
            </Switch>
          </div>
        </div>    
      </BrowserRouter> 
    </div>
  )
}

export default App
