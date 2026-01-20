import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Dashboard></Dashboard>
    </>
  )
}

export default App
