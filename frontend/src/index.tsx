import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './state/store/index'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

import App from './App'
import  './main.scss'

const persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  , document.getElementById('root'))