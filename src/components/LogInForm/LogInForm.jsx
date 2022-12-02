// LoginForm.jsx

import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import "./LoginForm.css"

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
        <div>
          <div className="container">
            <div className='row'>
              <div className="col-lg-3 col-md-2"></div>
                <div className="col-lg-6 col-md-8 login-box">
                <div className="col-lg-12 login-title">
                    Login
                </div>
            </div>
          </div>
            <div>
              <div className="col-lg-12 login-form">
                <div className="col-lg-12 login-form">
                  <form autoComplete="off" onSubmit={handleSubmit}>
                    <div className='form-group'>
                      <label className="form-control-label">Email: </label>
                      <input type="email" name="email"  className="form-control" value={credentials.email} onChange={handleChange} required />
                    </div>
                    <div className='form-group'>
                      <label className='form-control-label'>Password: </label>
                      <input type="password" name="password"  className="form-control" value={credentials.password} onChange={handleChange} required />
                      <button type="submit" className='login-bttn'>Login</button>
                      <p className="error-message">&nbsp;{error}</p>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-3 col-md-2"></div>
            </div>
          </div>
        </div>
  ) 
      
}
