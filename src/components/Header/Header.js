import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header>
      <Switch>
        <Route exact path='/'>
          <div className='header header-main'>
            <a href='/' className='header__logo-button'><img src={logo} alt='Логотип' /></a>
            <div className='header__button'>
              <Link className='header__reg-button' to='/signup'>Регистрация</Link>
              <Link className='header__login-button' to='/signin'>
                <div className='header__button_container'>Войти</div>
              </Link>
            </div>
          </div>
        </Route>
        <Route path='/movies'>
          <div className='header'>
            <a href='/' className='header__logo-button'><img src={logo} alt='Логотип' /></a>
            <Navigation />
          </div>
        </Route>
        <Route path='/profile'>
          <div className='header'>
            <a href='/' className='header__logo-button'><img src={logo} alt='Логотип' /></a>
            <Navigation />
          </div>
        </Route>
        <Route path='/saved-movies'>
          <div className='header'>
            <a href='/' className='header__logo-button'><img src={logo} alt='Логотип' /></a>
            <Navigation />
          </div>
        </Route>
      </Switch>
    </header>

  );
}
export default Header;
