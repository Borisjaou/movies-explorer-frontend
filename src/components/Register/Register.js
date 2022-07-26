import React from 'react';
import { useForm } from '../../utils/FormValidation';
import './Register.css';
import logo from '../../images/logo.svg';

function Register(props) {
  const {
    handleChange,
    errors,
    handleSubmit,
    isValid,
  } = useForm(props);
  return (
    <section className='register'>
      <form onSubmit={handleSubmit}>
        <div>
          <a href='/' className='logo-button'><img src={logo} /></a>
          <h1 className='register__header'>Добро пожаловать!</h1>
        </div>
        <div className='register__input-container'>
          <label className='register__secondary-text' htmlFor='name'>Имя</label>
          <input
            onChange={handleChange}
            className='register__input-text'
            name='userName'
            type='text'
            required
          />
          <span className='register__input-error'>{errors.userName}</span>
          <label className='register__secondary-text' htmlFor='email'>E-mail</label>
          <input
            onChange={handleChange}
            name='email'
            className='register__input-text'
            id='email'
            type='email'
            required />
          <span className='register__input-error'>{errors.email}</span>
          <label className='register__secondary-text' htmlFor='password'>Пароль</label>
          <input
            onChange={handleChange}
            name='password'
            className='register__input-text'
            id='password'
            type='password'
            required />
          <span className='register__input-error'>{errors.password}</span>
        </div>
        <div className='register__button-container register__text'>
          <span className='register__input-error'>{props.errorMessage}</span>
          <button
            disabled={!isValid}
            className='register__submit-button'
            type='submit'
          >Зарегистрироваться</button>
          <p className='register__secondary-text register__text'>Уже зарегестрированы?<button className='register__enter-button register__text' type='button'>Войти</button></p>
        </div>
      </form>

    </section>
  );
}
export default Register;
