import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import store from './store'
import { Provider } from 'react-redux'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store} >
      <BrowserRouter>
      <Routes>
      <App />
      </Routes>
      <Route path='/*'>{<App />}</Route>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
