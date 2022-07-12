import React from 'react';
import './Profile.css';

function Profile() {
  return (

    <section className='profile'>
      <h1 className='profile__header'>Привет, Очень длинное имя для проверки Потом тут будет пропс!</h1>
      <form>
        <div className='profile__form'>
          <div className='profile__form-field '>
            <label htmlFor='name'>Имя</label>
            <input className='profile__input' type='text' id='name' />
            {/* <span ></span> */}
          </div>
          <span className='form-undeline' />
          <div className='profile__form-field'>
            <label htmlFor='email'>E-mail</label>
            <input className='profile__input' type='email' id='email' />
            {/*  <span /> */}
          </div>
        </div>
        <div className='profile__button-container'>
          <button className='profile__button profile__edit-button' type='submit'>Редактировать</button>
          <button className='profile__button profile__quit-button' type='button'>Выйти из аккаунта</button>
        </div>
      </form>
    </section>
  );
}
export default Profile;
