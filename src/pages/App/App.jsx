import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import './App.css';
import NavBar from '../../components/NavBar/NavBar'
import IndexPage from '../IndexPage/IndexPage';
import LogInPage from '../LoginPage/LoginPage';
import SignUpPage from '../SignUpPage/SignUpPage';
import HomePage from '../HomePage/HomePage';
import ShoppingCartPage from '../ShoppingCartPage/ShoppingCartPage';

export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      { user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <HomePage />
           <Routes>
            {/* <Route path="/home" element={<HomePage />} /> */}
            <Route path="/cart" element={<ShoppingCartPage />} />
           </Routes> 
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


