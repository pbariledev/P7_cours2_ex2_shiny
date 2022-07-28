import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/index'
import Survey from './pages/Survey/index'
import Freelances from './pages/Freelances/index'
import Results from './pages/Results/index'

import Header from './compoments/Header'
import Error from './compoments/Error/index'
  
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
        <Routes>
          <Route exact path="" element={<Home />}/>
          <Route  path="survey/:questionNumber" element={<Survey />}/>
          <Route  path="Freelances" element={<Freelances />}/>
          <Route  path="Results" element={<Results />}/>
          <Route  path="*" element={<Error />}/>
        </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

