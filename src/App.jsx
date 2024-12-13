import { useState } from 'react'
import './app.css'
import Countries from './Countries'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <main>
      <ToastContainer position='top-center' />
      <Countries />
    </main>
  )
}

export default App
