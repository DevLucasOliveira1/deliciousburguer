import React from 'react'
import './App.css'

import { Outlet } from 'react-router-dom'

import Header from './components/header/Header'
import Submenu from './components/submenu/Submenu'

function App() {

  return (
    <>

    <Header/>
    <Submenu/>
    <Outlet/>

    </>
  )
}

export default App
