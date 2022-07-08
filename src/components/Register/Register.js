import React from 'react';
import './Register.css';
import logo from '../../images/logo.svg'

function Register() {
  return (
    <section className='register'>
      <div className='register-container'>
        <img src={logo} />
        <h1 className='register__header'>Добро пожаловать!</h1>
        <form>
          <div className='register__input-container'>
            <label className='register__secondary-text' htmlFor='name'>Имя</label>
            <input className='register__input-text' id='name' type='text' />
            <span className='register__input-error'>Что-то пошло не так...</span>
            <label className='register__secondary-text' htmlFor='email'>E-mail</label>
            <input className='register__input-text' id='email' type='email' />
            <span className='register__input-error'>Что-то пошло не так...</span>
            <label className='register__secondary-text' htmlFor='password'>Пароль</label>
            <input className='register__input-text' id='password' type='password' />
            <span className='register__input-error'>Что-то пошло не так...</span>
          </div>
          <div className='register__button-container register__text'>
            <button className='register__submit-button' type='submit'>Зарегистрироваться</button>
            <p className='register__secondary-text register__text'>Уже зарегестрированы?<button className='register__enter-button register__text' type='button'>Войти</button></p>
          </div>
        </form>
      </div>
    </section>
  );
}
export default Register;