import React from 'react';
import { useForm } from '../../utils/FormValidation';
import './Login.css';
import logo from '../../images/logo.svg';

function Login(props) {
  const {
    handleChange,
    errors,
    handleSubmit,
    isLoginValid,
  } = useForm(props);
  return (
    <section className='login'>
      <div className='login-container'>
        <a href='/' className='logo-button'><img src={logo} alt='логотип' /></a>
        <h1 className='login__header'>Рады видеть!</h1>
        <form onSubmit={handleSubmit}>
          <div className='login__input-container'>
            <label className='login__secondary-text' htmlFor='email'>E-mail</label>
            <input
              onChange={handleChange}
              name='email'
              className='login__input-text'
              id='email'
              type='email'
              required
            />
            <span className='login__input-error'>{errors.email}</span>
            <label className='login__secondary-text' htmlFor='password'>Пароль</label>
            <input
              onChange={handleChange}
              name='password'
              className='login__input-text'
              id='password'
              type='password'
              required
            />
            <span className='login__input-error'>{errors.password}</span>
          </div>
          <div className='login__button-container login__text'>
            <span className='register__input-error'>{props.errorMessage}</span>
            <button
              disabled={!isLoginValid}
              className='login__submit-button'
              type='submit'
            >Войти</button>
            <p className='login__secondary-text login__text'>Ещ не зарегестрированы?<button className='login__enter-button login__text' type='button'>Регистрация</button></p>
          </div>
        </form>
      </div>
    </section>
  );
}
export default Login;
