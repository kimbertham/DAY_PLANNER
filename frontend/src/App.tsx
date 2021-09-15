import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './state/store/index'
import Login from './routes/auth/Login'
import Register from './routes/auth/Register'
import Home from './routes/dashboard/Home'


const App = () => {

  return ( 
    <Provider store={store}>

      <div className='flex'>
        <BrowserRouter>
          <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/Register' component={Register}/>
            <Route path='/Home' component={Home}/>
          </Switch>
        </BrowserRouter> 
      </div>
      
    </Provider>

    
  )
}

export default App
