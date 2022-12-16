import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Home from './Home';
import { Routes , Route } from 'react-router-dom';
import IdData  from "./IdData"

export default class App extends Component {
  render() {
    return (
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/IdData' element = {<IdData/>}/>
      </Routes>  
    )
  }
}
