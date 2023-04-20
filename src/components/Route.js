import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Home'
import App from '../App'
import Contact from './Contact'

export default class Routee extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<HomePage/>}/>
            <Route exact path='/quotes' element={<App/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

