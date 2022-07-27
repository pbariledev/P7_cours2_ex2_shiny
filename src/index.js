import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home/index'
import Survey from './pages/Survey'
  
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Router path="/">
                <Home />
            </Router>
            <Router path="/survey">
                <Survey />
            </Router>
        </Router>
    </React.StrictMode>,
  document.getElementById('root')
)

