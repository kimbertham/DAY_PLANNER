import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './routes/auth/Login'
import Register from './routes/auth/Register'
import Home from './routes/dashboard/Home'

import Sidenav from './components/nav/Sidenav'
import Topnav from './components/nav/Topnav'


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
            </Switch>
          </div>
        </div>
      </BrowserRouter> 
    </div>
  )
}

export default App
