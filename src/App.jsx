import React from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import SimpleInterestView from './views/SimpleInterestView'
import NotFound from './views/NotFound/NotFound'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/simple-interest' element={<SimpleInterestView/>} />
      </Routes>
    </Router>
  )
}
