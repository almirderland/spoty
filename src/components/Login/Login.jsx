import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import loginPNG from './login.png';

async function loginUser(credentials) {
 return fetch('http://localhost:8080/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const naviage = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  const toMain = () => {
    naviage("/");
  }
  const toReg = () => {
    naviage("/reg");
  }

  return(
    <div className="login-wrapper">
              <img
                src={loginPNG}
                alt='logo'
                className="logo-item"
              /> 
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email address or username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
          <p>Forgot your password?</p>
        </label>
        <div className='btn-item'>
          <div>
            <input type="checkbox"  /> 
            <span>Remember me</span>
          </div>         
          <button onClick={toMain} type="submit">Log in</button>
        </div>
        <div className='bnt-reg'>
          <hr />
          <h3>Don't have an account?</h3>
          <button onClick={toReg} type="submit" >Sign up for Spotify</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};

export default Login;