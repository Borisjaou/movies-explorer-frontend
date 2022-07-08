import React from 'react';
import './Login.css';
import logo from '../../images/logo.svg'

function Login() {
  return (
    <section className='login'>
      <div className='login-container'>
        <a href='/' className='logo-button'><img src={logo} /></a>
        <h1 className='login__header'>Рады видеть!</h1>
        <form>
          <div className='login__input-container'>
            <label className='login__secondary-text' htmlFor='email'>E-mail</label>
            <input className='login__input-text' id='email' type='email' />
            <span className='login__input-error'>Что-то пошло не так...</span>
            <label className='login__secondary-text' htmlFor='password'>Пароль</label>
            <input className='login__input-text' id='password' type='password' />
            <span className='login__input-error'>Что-то пошло не так...</span>
          </div>
          <div className='login__button-container login__text'>
            <button className='login__submit-button' type='submit'>Войти</button>
            <p className='login__secondary-text login__text'>Ещ не зарегестрированы?<button className='login__enter-button login__text' type='button'>Регистрация</button></p>
          </div>
        </form>
      </div>
    </section>
  );
}
export default Login;