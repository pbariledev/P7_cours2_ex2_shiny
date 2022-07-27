import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home/index'
import Survey from './pages/Survey'
  
ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Route path="/">
              <Home />
          </Route>
          <Route path="/survey">
              <Survey />
          </Route>
      </Router>
  </React.StrictMode>,
document.getElementById('root')
)

