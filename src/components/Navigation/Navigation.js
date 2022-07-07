import React from 'react';
import './Navigation.css';
import account from '../../images/icon__COLOR_icon-main.svg'

function Navigation() {
  return (
    <section className='navigation'>
      <input type='checkbox' id='menu' />
      <label htmlFor='menu' className='checkbox-button'>
        <span className='line line-main' />
        <span className='line line-split' />
      </label>
      <nav className='navigation-menu'>
        <div className='menu__link'>
          <a href='/' className='navigation-menu-list'>Главная</a>
          <a href='/movies' className='navigation-menu-list'>Фильмы</a>
          <a href='/saved-movies' className='navigation-menu-list'>Сохранённые</a>
        </div>
        <div className='menu__account-container'>
          <a href='/profile' className='menu__account-link'>Аккаунт</a>
          <a href='/profile'><div className='account-image'><img src={account} alt='иконка аккаунта' /></div></a>
        </div>
      </nav>

      <div className='navigation-widescreen'>
        <div className='navigation__link'>
          <a href='/movies' className='navigation__list'>Фильмы</a>
          <a href='/saved-movies' className='navigation__list'>Сохранённые</a>
        </div>
        <div className='menu__account-container'>
          <a href='/profile' className='menu__account-link'>Аккаунт</a>
          <a href='/profile'><div className='account-image'><img src={account} alt='иконка аккаунта' /></div></a>
        </div>

      </div>

    </section>
  );
}

export default Navigation;