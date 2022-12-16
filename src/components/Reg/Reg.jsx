import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './reg.css';
import { useNavigate } from 'react-router-dom';
import loginPNG from '../Login/login.png'

async function regUser(credentials) {
 return fetch('http://localhost:8080/reg', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

function Reg({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const naviage = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await regUser({
      username,
      password
    });
    setToken(token);
  }

  const toLogin = () => {
    naviage("/login");
  }

  const toMain = () => {
    naviage("/");
  }
  return(
    <div className="reg-wrapper">
              <img
                src={loginPNG}
                alt='logo'
                className="logo-item"
              /> 
      <form onSubmit={handleSubmit}>
        <label>
          <p>Ваш адрес электронной почты</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Подтвердите адрес электронной почты</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Придумайте пароль</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Ваше имя</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
          <p>Оно появится в вашем профиле.</p>
        </label>
        <div className='btn-itemS'>
          <div>
            <p>
              День
            </p>
            <input type="text"/>
          </div>
          <div>
            <p>
              Месяц
            </p>
            <input type="text"/>
          </div>
          <div>
            <p>
              Год
            </p>
            <input type="text"/>
          </div>
        </div>
        <div className='bnt-log'>
          <button onClick={toMain}> Зарегистрироваться </button>
          <div>
              <span>Уже есть аккаунт? </span>
              <a href="" onClick={toLogin}>Войти</a>
          </div>
        </div>
      </form>
    </div>
  )
}

Reg.propTypes = {
  setToken: PropTypes.func.isRequired
};

export default Reg;