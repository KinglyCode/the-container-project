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
import AllCategory from '../AllCategory/AllCategory';

export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      { user ? 
        <>
          <NavBar user={user} setUser={setUser} />
           <Routes>
            {/* <Route path="/home" element={<HomePage />} /> */}
            <Route path="/cart" element={<ShoppingCartPage />} />
            <Route path="/categories" element={<AllCategory />} />
            <Route path="/home" element={<HomePage />} />
           </Routes> 
        </>
        :
        <>
          <Routes>
            <Route path="/index" element={<IndexPage />} />
            <Route path="/login-form" element={<LogInPage setUser={setUser} /> } />
            <Route path="/signup-form" element={<SignUpPage setUser={setUser} /> } />
          </Routes>
        </>
      }
    </main>
  );
}


