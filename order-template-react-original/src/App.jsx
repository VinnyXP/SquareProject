import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OrderForm from './components/OrderForm'
import LoginPage from './components/LoginPage'
import CreateAccount from './components/CreateAccount'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import RestaurantDashboard from './components/RestaurantDashboard'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handleLogOut = () => {
    setIsLoggedIn(false);
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/Dashboard" /> : <Navigate to="/LoginPage" />}
        />
        <Route
          path="/LoginPage"
          element={<LoginPage onLogin={handleLogin} />}
        />
        <Route
          path="/Dashboard"
          element={<Dashboard userRole={userRole} />}
        />
        <Route
          path="/OrderForm"
          element={!isLoggedIn ? <OrderForm /> : <Navigate to="/LoginPage" />}
        />
        <Route
          path="/CreateAccount"
          element={<CreateAccount />}
        />
      </Routes>
    </Router>
  );
}

export default App
