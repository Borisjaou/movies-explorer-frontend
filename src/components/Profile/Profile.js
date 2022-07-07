import React from 'react';
import './Profile.css';
import { Link, Route, Switch } from 'react-router-dom';

function Profile() {
  return (

    <section className='profile'>
      <h1 className='profile__header'>Привет, СvcxvgsdfgdfgdsfgdfюdsfsdfsdfдаПропс!</h1>
      <form className='profile__form'>
        <label>Имя<input className='profile__input'></input></label>
        <label>E-mail<input className='profile__input'></input></label>

      </form>
      <div>
        <button>Редактировать</button>
        <button>Выйти из аккаунта</button>
      </div>
    </section>
  );
}
export default Profile;