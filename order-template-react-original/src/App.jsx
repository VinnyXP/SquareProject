import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OrderForm from './components/OrderForm'
import LoginPage from './components/LoginPage'

function App() {

  return (
    <>
      <LoginPage />
      <OrderForm />
      <div className="card">

      </div>
    </>
  )
}

export default App
