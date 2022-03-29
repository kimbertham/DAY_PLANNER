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
import Meal from './routes/meals/meal'
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
              <Route path='/meal' component={Meal}/>
            </Switch>
          </div>
        </div>    
      </BrowserRouter> 
    </div>
  )
}

export default App
