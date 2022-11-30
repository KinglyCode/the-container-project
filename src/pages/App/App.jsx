import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import './App.css';
import NewOrderPage from '../NewOrderPage/NewOrderPage'
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage'
import NavBar from '../../components/NavBar/NavBar'
import IndexPage from '../IndexPage/IndexPage';
import LogInPage from '../LoginPage/LoginPage';
import SignUpPage from '../SignUpPage/SignUpPage';
import HomePage from '../HomePage/HomePage';

export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      { user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <HomePage />
          {/* <Routes>
            {/* <Route path="/home" element={<HomePage />} /> */}
            {/* <Route path="/orders" element={<OrderHistoryPage />} /> */}
          {/* </Routes> */}
        </>
        :
        <>
          <IndexPage />
          <Routes>
            <Route path="/login-form" element={<LogInPage setUser={setUser} /> } />
            <Route path="/signup-form" element={<SignUpPage setUser={setUser} /> } />
          </Routes>
        </>
      }
    </main>
  );
}


